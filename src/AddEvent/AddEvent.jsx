import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import firebase from '../firebase.js';
import './AddEvent.css';

export default class AddEvent extends Component {
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

  handleSubmit = (event) => {
    var db = firebase.firestore();
    db.collection("events").add({
      eventName: this.state.eventName,
      eventLocation: this.state.eventLocation,
      eventDescription: this.state.eventDescription,
      eventStart: this.state.startDate,
      eventEnd: this.state.endDate,
    }).then(() => {
      this.setState({
        eventName: "",
        eventLocation: "",
        eventDescription: "",
        startDate: "",
        endDate: "",
      })
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    })
    event.preventDefault();

  }

  render() {
    return (
      <div className="AddEvent">
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
            <label htmlFor="eventStartDateTime">Event Start</label>
            <DateTimePicker
              className="react-datetime-picker react-datetime-picker_wrapper"
              onChange={this.startDateOnChange}
              value={this.state.startDate}
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventEndDateTime">Event End</label>
            <DateTimePicker
              className="react-datetime-picker"
              onChange={this.endDateOnChange}
              value={this.state.endDate}
            />
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}
