import React, { Component } from 'react';
import firebase from '../firebase';
import './Documents.css';

export default class Documents extends Component {

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
                    fileDescript: doc.data()['fileDescript']
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
          <h2 className="file-name">{item.fileName}</h2>
          <h3 className="file-descript">{item.fileDescript}</h3>
          <a className="pdf" href={item.fileUrl} rel="noopener noreferrer" target="_blank">view PDF</a>
        </div>
  );
        return(
            <div className="documents">
                <h1 className="docs-header">Cadet Documents</h1>
                <div className="files">
                {files}
                </div>
            </div>
        );
    }
}