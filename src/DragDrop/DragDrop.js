import { FilePond } from "react-filepond";
import 'filepond/dist/filepond.min.css';
import React, { Component } from "react";

export default class Login extends Component  {
    constructor(props) {
      super(props);
  
      this.state = {
        username: "",
        password: ""
      };
    }

    render() {
      return (
        <div className= "DragDrop">
            <FilePond/>
        </div>

      );
    }
}
