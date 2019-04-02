import React, { Component } from 'react';
import firebase from './firebase';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import logo from './pdf-file.png';

class Documents extends Component {

    constructor() {
        super();
        this.state = {
            files: [],
        };
        this.getFiles();
    }

    getFiles = () => {
        var files = [];
        var db = firebase.firestore();
        db.collection("files")
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(function(doc) {
                var file = {
                    fileName: doc.data()['fileName'],
                    fileUrl: doc.data()['fileUrl'],
                };
                console.log(file);
                files.push(file);
            })
            this.setState({
                files: files,
            }) 
            
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    render() {
        const files = this.state.files.map((item, i) => 
        <div key={i}>
          <img src={logo} alt="PDF"/>
          <a href={item.fileUrl} rel="noopener noreferrer" target="_blank">{item.fileName}</a>
        </div>
  );
        return(
            <div>
                {files}
            </div>
        );
    }
}