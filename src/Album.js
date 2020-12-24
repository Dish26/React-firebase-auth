import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Posts extends Component {
    state = {
        albums: []
      }

      componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then((data) => {
          this.setState({ albums: data })
          console.log(this.state.albums)
        })
        .catch(console.log)
      }

  render() {
    return (
        <React.Fragment>
        <Link className="link" to="/" exact > Take Me Home</Link>
    <div className="container">
    <div className="col-xs-12">
    <h1>My Albums List</h1>
    {this.state.albums.map((album) => (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{album.userId}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{ album.title} </h6>
        </div>
      </div>
    ))}
    </div>
   </div>
   </React.Fragment>
    );
  }
}
export default Posts;