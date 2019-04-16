import React, { Component } from 'react';
import logo from './af_insignia.png';
import Calendar from './components/Calendar'; 
import Login from './Login/Login';
import AddEvent from './AddEvent/AddEvent';
import DragDrop from './DragDrop/DragDrop';
import Documents from './Documents/Documents';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state =  { calendarDisplay: true,
                    docsDisplay: false,
                    loginDisplay: false,
                    menuDisplay: true,
                    addDocDisplay: false,
                    addEventDisplay: false
                  };
  }

  showCalendar = () => {
    this.setState (prevState => 
        ({calendarDisplay: !prevState.calendarDisplay}),
        () => {this.setState ({docsDisplay: false})}
    );
  };

  showDocs = () => {
    this.setState (prevState => 
        ({docsDisplay: !prevState.docsDisplay}),
        () => {this.setState ({calendarDisplay: false})}
    );
  };

  showLogin = () => {
    this.setState (prevState => 
      ({loginDisplay: !prevState.loginDisplay})
  ,() => {
  this.setState ({
    addDocDisplay: false,
    addEventDisplay: false,
  })
  }
  );
  }

  showMenu = () => {
    this.setState (prevState => 
      ({menuDisplay: !prevState.menuDisplay})
    );
  }

  showAddDoc = () => {
    this.setState (prevState => 
      ({addDocDisplay: !prevState.addDocDisplay})
  ,() => {
  this.setState ({
    loginDisplay: false,
    addEventDisplay: false,
  })
  }
  );
  }

  showAddEvent = () => {
    this.setState (prevState => 
      ({addEventDisplay: !prevState.addEventDisplay})
  ,() => {
  this.setState ({
    loginDisplay: false,
    addDocDisplay: false,
  })
  }
  );
  }

  render() {
    return (
      <div className="container-fluid App">
        <title>University of Arkansas Airforce ROTC Home</title>
        <div className="row">
          <div className="left-content">
            <header className="left-header">
              <div className="logo-div">
                <img src={logo} className="col-12 AF-insignia" alt="Air Force Insignia" />
              </div>
            </header>

            <div className="menu-icon" onClick={this.showMenu}>reorder</div>

            <ul className="col-12 nav" style={{display: this.state.menuDisplay ? 'block' : 'none'}}>
              <li><a className="nav-item" onClick={this.showDocs}>DOCUMENTS</a></li>
              <li><a className="nav-item" onClick={this.showCalendar}>CALENDAR</a></li>
              <li><a className="nav-item" onClick={this.showLogin}>LOG IN</a></li>
              <li><a className="nav-item" onClick={this.showAddDoc}>NEW DOCUMENT</a></li>
              <li><a className="nav-item" onClick={this.showAddEvent}>NEW EVENT</a></li>
            </ul>
          </div>

          <div nameClass="right-content">
            <div className="right-header">
              <h1 className="col-12 head">Air Force ROTC</h1>
              <h2 className="col-12 sub-head">University of Arkansas</h2>
            </div>

            <div className="main-content" style={{display: this.state.docsDisplay ? 'block' : 'none'}}>
              <Documents />
            </div>

            <div className="main-content" style={{display: this.state.calendarDisplay ? 'block' : 'none'}}>
              <Calendar />
            </div>

            <div className="popup" style={{display: this.state.loginDisplay ? 'block' : 'none'}}>
              <div className="clear" onClick={this.showLogin}>clear</div>
              <Login />
            </div>

            <div className="popup" style={{display: this.state.addDocDisplay ? 'block' : 'none'}}>
              <div className="clear" onClick={this.showAddDoc}>clear</div>
              <DragDrop />
            </div>

            <div className="popup" style={{display: this.state.addEventDisplay ? 'block' : 'none'}}>
              <div className="clear" onClick={this.showAddEvent}>clear</div>
              <AddEvent />
            </div>
          </div>
        </div>

        <footer>
        </footer>

      </div>
    );
  }
}

export default App;
