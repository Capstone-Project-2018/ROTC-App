import React, { Component } from 'react';
import logo from './af_insignia.png';
import gallery from './thunderhawgsontherun.jpg';
import Calendar from './components/Calendar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="container-fluid" class="App">
        <title>Home</title>
        <div class="row">
          <div class="left-side-content col-md-8 col-sm-12">
            <header>
              <img src={logo} class="AF-insignia" alt="Air Force Insignia" height="85px" width="105px" style={{float: 'left'}}/>
            
              <div style={{float: 'left'}}>
                <h1 class="head">Air Force</h1>
                <h2 class="head">ROTC</h2>
              </div>

              <p class="recruitment">RECRUITMENT</p>
            </header>

            <div class="nav col-12">
              <a class="nav-item" href="">HOME</a>
              <a class="nav-item" href="">ABOUT</a>
              <a class="nav-item" href="">WHY JOIN?</a>
              <a class="nav-item" href="">AF ROTC PROGRAM</a>
              <a class="nav-item" href="">DOCUMENTS</a>
            </div>

            <body class="page-content col-12">
              <div class="gallery">
                <img src={gallery}  alt="gallery" style={{width: '100%'}}/>
              </div>

              <h1 class="article-header">Core Values</h1>
              <p class="article-body">Whoever you are and wherever you fit on the Air Force team, the Core Values are what you will live by and learn to cherish. The Core Values are much more than minimum standards. They remind us what it takes to get the mission done. They inspire us to do our very best at all times. They are the common bond among all comrades in arms, and they are the glue that unifies the Force and ties us to the great warriors and public servants of the past.</p>
            </body>
          </div>

          <div class="calendar col-4">
            <header>
              <div id="calendar">
                <span><b>Calendar of Events</b></span>
              </div>
            </header>
            <main class="calendar">
              <Calendar />
            </main>
          </div>
        </div>

      </div>
    );
  }
}

export default App;

