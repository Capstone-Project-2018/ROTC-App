import React, { Component } from 'react';
import logo from './af_insignia.png';
import gallery from './thunderhawgsontherun.jpg';
import Calendar from './components/Calendar'; 
import Login from './Login/Login';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state =  { calendarDisplay: false,
                    loginDisplay: false,
                    menuDisplay: true
                  };
    this.showCalendar = this.showCalendar.bind(this);
    this.showLogin = this.showLogin.bind(this);
    this.showMenu = this.showMenu.bind(this);
  }

  showCalendar() {
    this.setState(prevState => 
        ({calendarDisplay: !prevState.calendarDisplay})
      );
  }

  showLogin() {
    this.setState(prevState => 
        ({loginDisplay: !prevState.loginDisplay})
      );
  }

  showMenu() {
    this.setState(prevState => 
        ({menuDisplay: !prevState.menuDisplay})
      );
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
              <h2 className="sub-head">ROTC of Arkansas</h2>
            </div>
          </header>
          
          <button className="calendar-btn" onClick={this.showCalendar}>CALENDAR</button>

          <div className="calendar-icon" onClick={this.showCalendar}>event</div>
          <div className="menu-icon" onClick={this.showMenu}>reorder</div>

          <div id="nav" style={{display: this.state.menuDisplay ? 'block' : 'none'}}>
            <a className="nav-item" href="">AF ROTC PROGRAM</a>
            <a className="nav-item" href="">DOCUMENTS</a>
            <a className="nav-item" href="">RECRUITMENT</a>
            <a className="nav-item" onClick={this.showLogin}>LOG IN</a>
          </div>
        </div>

        <div className="row">

          <div className="content">
            <div className="gallery">
              <img src={gallery}  alt="gallery"/>
            </div>
            
            <div id="text-content">
              <h1 className="text-head">Core Values</h1>
              <p className="text-body">Whoever you are and wherever you fit on the Air Force team, the Core Values are what you will live by and learn to cherish. The Core Values are much more than minimum standards. They remind us what it takes to get the mission done. They inspire us to do our very best at all times. They are the common bond among all comrades in arms, and they are the glue that unifies the Force and ties us to the great warriors and public servants of the past.</p>
            </div>
          </div>
        </div>

        <div className="calendar-div" style={{display: this.state.calendarDisplay ? 'block' : 'none'}}>
          <Calendar />
        </div>

        <div className="login-popup" style={{display: this.state.loginDisplay ? 'block' : 'none'}}>
        <div className="login-clear" onClick={this.showLogin}>clear</div>
          <Login />
        </div>

        <footer>
        </footer>

      </div>
    );
  }
}

export default App;
