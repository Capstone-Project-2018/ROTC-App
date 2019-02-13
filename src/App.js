import React, { Component } from 'react';
import logo from './af_insignia.png';
import gallery from './thunderhawgsontherun.jpg';
import Calendar from './components/Calendar'; 
import firebase from './firebase';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <body class="container-fluid App">
        <title>Home</title>

        <div class="row top">
          <header id="header">
            <img src={logo} class="AF-insignia" alt="Air Force Insignia" />
            
            <div style={{float: 'left'}}>
              <h1 class="head">Air Force</h1>
              <h2 class="sub-head">ROTC</h2>
            </div>

            <div id="buttons">
              <a class="calendar-btn" href="">CALENDAR</a>
              <a class="recruitment-btn" href="">RECRUITMENT</a>
              <div className="menu-icon-btn">reorder</div>
              <div className="calendar-icon-btn">event</div>
            </div>
          </header>

          <div id="nav">
            <a class="nav-item" href="">HOME</a>
            <a class="nav-item" href="">ABOUT</a>
            <a class="nav-item" href="">WHY JOIN?</a>
            <a class="nav-item" href="">AF ROTC PROGRAM</a>
            <a class="nav-item" href="">DOCUMENTS</a>
            <a class="nav-item recruitment" href="">RECRUITMENT</a>
          </div>
        </div>

        <div class="row">
          <div class="content col-lg-8 col-md-12">
            <div class="gallery">
              <img src={gallery}  alt="gallery"/>
            </div>
            
            <div id="text-content">
              <h1 class="text-head">Core Values</h1>
              <p class="text-body">Whoever you are and wherever you fit on the Air Force team, the Core Values are what you will live by and learn to cherish. The Core Values are much more than minimum standards. They remind us what it takes to get the mission done. They inspire us to do our very best at all times. They are the common bond among all comrades in arms, and they are the glue that unifies the Force and ties us to the great warriors and public servants of the past.</p>
            </div>

          </div>

          <div class="calendar-div col-lg-4">
            <main class="calendar-main">
              <Calendar />
            </main>
          </div>

        </div>

      </body>
    );
  }
}

export default App;
