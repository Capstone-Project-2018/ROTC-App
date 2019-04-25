import React, { Component } from 'react';
import firebase from 'firebase';

class Events extends React.Component{
    
    constructor(props) {
        super(props);
    
        this.state = {
          username: "",
          password: ""
        };
        this.returnEvents();

      }
    returnEvents(){
        window.alert("testing");
    }

    render(){
        return(
            <div>
            <p id="event" > </p>

            </div>
        );
    }

}