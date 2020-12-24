 import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './Unsplashapi.css';
import { Link } from 'react-router-dom';

export default function Api(){

    const [photo, setPhoto] = useState("");
    const [clientid, setClientId] = useState("r4lki26ndzhomrWqTAW8vgwxR_f1CoLt1LXJ-xQ3U_w");

    const [result, setResult] = useState([]);

    function handleChange (event) {
       setPhoto(event.target.value);
    }

    function handleSubmit (event) {
       console.log(photo);
       const url = "https://api.unsplash.com/search/photos/?client_id=r4lki26ndzhomrWqTAW8vgwxR_f1CoLt1LXJ-xQ3U_w&query="+photo;

       axios.get(url)
       .then((response) =>{
          setResult(response.data.results);
       } );
    }

    return (
        <React.Fragment>
        <Link className="link" to="/" exact > Take Me Home</Link>
        <div className = "Api" >
       <h1> Unsplash photo search </h1>
       <input onChange={handleChange} type="text" name="photo" placeholder ="Search for photos.." />
       <button id=" search" onClick={handleSubmit} type="submit" >Search </button>
       { result.map((photo) => (
           <img src= {photo.urls.small} alt="Girl in a jacket" />
    ))}
        </div>
        </React.Fragment>
    )
}  