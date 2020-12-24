import React , { Component } from "react";
import fire from "./config/fire";
import { BrowserRouter,Route } from "react-router-dom";
import Homee from "./components/Homee";
import './Home.css' ;
import NasaPhoto from "./components/NasaPhoto";
import UnsplashApi from './Unsplashapi';
import Posts from './Posts';
import Home1 from './Home1';
import Albums from './Album';
import Home2 from './Home2';
import Home3 from './Home3';




class Home extends Component{
     
       /** @param {Record<string, any>} props */
    constructor(props)
    {
        super (props)
        this.state={
          
        }
    }

logout(){
    fire.auth().signOut();
}

render()
{
    return(
        <BrowserRouter >
        <div  id="home">
        <Route component={Homee} path="/" exact /> 
        <Route component={NasaPhoto} path="/nasaphoto/" /> 
        <Route component={Home3} path="/" exact />
        <Route component={UnsplashApi} path ="/unsplash/" />
        <Route component={Home1} path="/" exact /> 
        <Route component={Posts} path ="/posts" /> 
        <Route component={Home2} path="/" exact /> 
        <Route component={Albums} path ="/albums" /> 
       
        <button onClick={this.logout}>Logout</button>
        </div>
        </BrowserRouter>
    );
}

}


export default Home;