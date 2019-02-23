import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import firebase from '../firebase.js';
import "./Login.css";

export default class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        username: "",
        password: ""
      };
    }

    validateForm() {
      return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value
      });
      //console.log(this.state.username); // 0
    }
  
    handleSubmit = event => {
      event.preventDefault();
    }

    signUpSubmit = event => {
      firebase.auth().signInWithEmailAndPassword(this.username, this.password).catch(function(error) {
        // Handle Errors here.
        console.log("working");
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    }

    render() {
      return (
        <div className="Login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="username" bsSize="large">
              <ControlLabel>Username</ControlLabel>
              <FormControl
                autoFocus
                type="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              className="loginButton"
              bsSize="large"
              onClick={this.handleChange}
              //disabled={!this.validateForm()}
            >
              Login
            </Button>
          </form>

          <div className="loggedIn">
            <h3>Welcome User.</h3>
            <p>You are currently logged in</p>
            <Button>Logout</Button>
          </div>

          <div className="signUp">
              <h3>Don't have an account yet?</h3>
              <p>Sign up here</p>
              <FormGroup controlId="username" bsSize="large">
              <ControlLabel>Username</ControlLabel>
              <FormControl
                autoFocus
                type="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              className="signUpButton"
              bsSize="large"
              onClick={this.signUpSubmit}

              //disabled={!this.validateForm()}
            >
              Sign Up
            </Button>
          </div>

          <div className="recoverPassword">
            <p>Click on this to recover password</p>
          </div>

        </div>

      );
    }
  }