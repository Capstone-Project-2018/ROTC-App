import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

class AddEventPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eventName: "",
      eventLocation: "",
      eventDescription: "",
      startDate: "",
      endDate: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  startDateOnChange = startDate => this.setState({ startDate })
  endDateOnChange = endDate => this.setState({endDate})

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const config = {
      apiKey: " AIzaSyB9F82jQRgbyl5-Mq6lXFERUFy1SiUcNzw ",
      authDomain: "air-force-rotc-app.firebaseapp.com",
      projectId: "air-force-rotc-app",
    };
    firebase.initializeApp(config); 
    var db = firebase.firestore();
    db.collection("events").add({
      eventName: this.state.eventName,
      eventLocation: this.state.eventLocation,
      eventDescription: this.state.eventDescription,
      eventStart: this.state.startDate,
      eventEnd: this.state.endDate,
    }).then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="eventName">Event Name</label>
            <input type="text" className="form-control" name="eventName" placeholder="Name" value={this.state.eventName} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="eventLocation">Event Location</label>
            <input type="text" className="form-control" name="eventLocation" placeholder="Location" value={this.state.eventLocation} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="eventDescription">Event Description</label>
            <textarea name="eventDescription" className="form-control" placeholder="Description" value={this.state.eventDescription} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="eventStartDateTime">Event Start Date</label>
            <DateTimePicker
              onChange={this.startDateOnChange}
              value={this.state.startDate}
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventEndDateTime">Event End Date</label>
            <DateTimePicker
              onChange={this.endDateOnChange}
              value={this.state.endDate}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
