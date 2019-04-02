import { FilePond } from "react-filepond";
import 'filepond/dist/filepond.min.css';
import React, { Component } from "react";

export default class Login extends Component  {

    render() {
      return (
        <div className= "DragDrop">
            <FilePond/>
        </div>
      );
    }
}
