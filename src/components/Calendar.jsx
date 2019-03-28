import React from "react";
import dateFns from "date-fns";
import './Calendar.css';
import firebase from '../firebase';

class Calendar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date(),
      events: [],
    };
  }

  renderHeader() {
    
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col-8 col-start">
        <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col-2 col-center">
          <div className="icon" onClick={this.prevMonth}>chevron_left</div>
        </div>
        <div className="col-2 col-end">
          <div className="icon" onClick={this.nextMonth}>chevron_right</div>
        </div>
      </div>
    );

  }

  renderDays() {

    const dateFormat = "ddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push (
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {

    const { currentMonth, selectedDate } = this.state;

    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {

      for (let i = 0; i < 7; i++) {

        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        
        days.push (
          <div
            className={`col cell ${!dateFns.isSameMonth(day, monthStart) ? "disabled" : dateFns.isSameDay(day, selectedDate) ? "selected" : ""}`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
          </div>
        );

        day = dateFns.addDays(day, 1);
      }

      rows.push (
        <div className="row" key={day}>{days}</div>
      );

      days = [];
    }

    return <div className="body">{rows}</div>;
  }

  renderEvents = (day) => {
    var db = firebase.firestore();
    var events = [];
    db.collection("events")
    .where("eventStart", "==", day)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach(function(doc) {
        events.push(doc.data()['eventName'])
      });
      this.setState({
        events: events
      })
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  renderToday = () => {
    var events = [];
    var db = firebase.firestore();
    
    db.collection("events")
    .where("eventStart", ">=", dateFns.startOfToday()).where("eventStart", "<=", dateFns.endOfToday())
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach(function(doc) {
        var event = {
          eventName: doc.data()['eventName'].toString(),
          eventStart: doc.data()['eventStart'].toDate().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
          eventEnd: doc.data()['eventEnd'].toDate().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
          eventDescription: doc.data()['eventDescription'].toString(),
          eventLocation: doc.data()['eventLocation'].toString(),
        };
        console.log(event)
        events.push(event)
      });
      this.setState({
        events: events
      })
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  onDateClick = day => {
    this.renderEvents(day)
    this.setState ({
      selectedDate: day
    });
  };

  nextMonth = () => {
    this.setState ({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState ({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  componentDidMount() {
    this.renderToday()
  }

  render() {
    const events = this.state.events.map((item, i) => 
      <div className="events" key={i}>
        <h1 className="event">{item.eventName}</h1>
        <p>{item.eventStart + "-" + item.eventEnd}</p>
        <p>{item.eventLocation}</p>
      </div>
    );

    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
        {events}
      </div>
    );
  }
}

export default Calendar;
