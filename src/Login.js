import React , { Component } from "react";
import fire from "./config/fire";
import  './Login.css';

class Login extends Component{
       
    

    

       /** @param {Record<string, any>} props */

    constructor(props)
{
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state={
        email : "",
        password : ""
    }
}

login(event){
    event.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
signup(event){
    event.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
handleChange(event){
    this.setState({
        [event.target.name] : event.target.value
    })
}
render()
{
    return(
        <React.Fragment >
        <p id = "text"> THE WELCOME PAGE!</p>
        <div id="front">
            <form>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="enter email address"
                onChange={this.handleChange}
                value={this.state.email}
                />
                <input
                name="password"
                type= "password"
                onChange={this.handleChange}
                id="password"
                placeholder="enter password"
                value={this.state.password}
                />
                <button onClick={ this.login } >Login</button> 
                <button onClick={this.signup}>Signup</button>
            </form>

        </div>
        </React.Fragment>
    )
}
}
export default Login;