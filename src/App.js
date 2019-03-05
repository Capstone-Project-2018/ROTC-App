import React, { Component } from 'react';
import logo from './af_insignia.png';
import gallery from './thunderhawgsontherun.jpg';
import Calendar from './components/Calendar'; 
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state =  { display: true,
                  };
    //var btnToggle = 'show';
    this.showCalendar = this.showCalendar.bind(this);
  }

  showCalendar() {
    if (window.innerWidth < 992) {
      this.setState(prevState => 
        ({display: !prevState.display})
      );
    }
    else {
      this.setState(
        {display: true}
      );
    }
  }

  render() {
    return (
      <div className="container-fluid App">
        <title>Home</title>

        <div className="row top">
          <header id="header">
            <img src={logo} className="AF-insignia" alt="Air Force Insignia" />
            
            <div style={{float: 'left'}}>
              <h1 className="head">Air Force</h1>
              <h2 className="sub-head">ROTC</h2>
            </div>

            <div id="buttons">
              <button className="calendar-btn" onClick={this.showCalendar}><i>{this.btnToggle}</i>  CALENDAR</button>
              <div className="menu-icon-btn">reorder</div>
              <div className="calendar-icon-btn" onClick={this.showCalendar}>event</div>
            </div>
          </header>

          <div id="nav">
            <a className="nav-item" href="https://air-force-rotc-app.firebaseapp.com/">HOME</a>
            <a className="nav-item" href="https://air-force-rotc-app.firebaseapp.com/join">WHY JOIN?</a>
            <a className="nav-item" href="https://air-force-rotc-app.firebaseapp.com/program">AF ROTC PROGRAM</a>
            <a className="nav-item" href="https://air-force-rotc-app.firebaseapp.com/documents">DOCUMENTS</a>
            <a className="nav-item" href="https://air-force-rotc-app.firebaseapp.com/recruitment">RECRUITMENT</a>
          </div>
        </div>

        <div className="row">

          <div className="content col-lg-8 col-md-12">
            <div className="gallery">
              <img src={gallery}  alt="gallery"/>
            </div>
            
            <div id="text-content">
              <h1 className="text-head">Core Values</h1>
              <p className="text-body">Whoever you are and wherever you fit on the Air Force team, the Core Values are what you will live by and learn to cherish. The Core Values are much more than minimum standards. They remind us what it takes to get the mission done. They inspire us to do our very best at all times. They are the common bond among all comrades in arms, and they are the glue that unifies the Force and ties us to the great warriors and public servants of the past.</p>
            </div>
          </div>

          <div className="calendar-div col-lg-4" style={{display: this.state.display ? 'block' : 'none'}}>
            <main className="calendar-main">
              <Calendar />
            </main>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
