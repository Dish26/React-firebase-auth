import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Posts extends Component {
    state = {
        posts: []
      }

      componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then((data) => {
          this.setState({ posts: data })
          console.log(this.state.posts)
        })
        .catch(console.log)
      }

  render() {
    return (
        <React.Fragment>
        <div id=" post" >
        <Link className="link" to="/" exact > Take Me Home</Link>
        </div>
    <div className="container">
    <div className="col-xs-12">
    <h1>My Posts List</h1>
    {this.state.posts.map((post) => (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{ post.body} </h6>
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