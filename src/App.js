import React, { Component } from 'react';
import logoVertical from './ROTCverticalLogo.svg';
import logoHorizontal from './ROTChorizontalLogo.svg';
import Calendar from './Calendar/Calendar.jsx'; 
import Login from './Login/Login';
import AddEvent from './AddEvent/AddEvent.jsx';
import DragDrop from './DragDrop/DragDrop';
import Documents from './Documents/Documents';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state =  { navigation: 'none',
                    documents: 'block',
                    calendar: 'block',
                    login: 'none',
                    addDocument: 'none',
                    addEvent: 'none',
                    admin: false,
                  };
  }

  showNavigation = () => {
    this.setState ( 
      {navigation: 'block'}
    );
  };
  hideNavigation = () => {
    this.setState (
      {navigation: 'none'}
    );
  };

  showDocuments = () => {
    this.setState ( 
      { documents: 'block',
        navigation: 'none'
      }
    );
  };
  hideDocuments = () => {
    this.setState (
      {documents: 'none'}
    );
  };

  showCalendar = () => {
    this.setState ( 
      { calendar: 'block',
        navigation: 'none'
      }
    );
  };
  hideCalendar = () => {
    this.setState (
      {calendar: 'none'}
    );
  };

  showLogin = () => {
    this.setState ( 
      { login: 'block',
        navigation: 'none'
      }
    );
  };
  hideLogin = () => {
    this.setState (
      {login: 'none'}
    );
  };

  showAddDocument = () => {
    this.setState ( 
      { addDocument: 'block',
        navigation: 'none'
      }
    );
  };
  hideAddDocument = () => {
    this.setState (
      {addDocument: 'none'}
    );
  };

  showAddEvent = () => {
    this.setState ( 
      { addEvent: 'block',
        navigation: 'none' 
      }
    );
  };
  hideAddEvent = () => {
    this.setState (
      {addEvent: 'none'}
    );
  };
  loginAdmin = () => {
    this.setState (
      {admin: true}
    );
  };

  render() {
    console.log(this.state);
    if (this.state.admin === true) {
      return (
        <div className="container-fluid App">
          <title>University of Arkansas Airforce ROTC Home</title>
            <div className="nav">
              <header className="header">
                <img src={logoVertical} className="logo-vertical" alt="ROTC Air Force Insignia"></img>
                <img src={logoHorizontal} className="logo-horizontal" alt="ROTC Air Force Insignia"></img>
              </header>

              <div className="nav-open" onClick={this.showNavigation}>reorder</div>

              <ul className="desktop-nav">
                <li><a href="#documents" className="nav-item" onClick={this.showDocuments}>DOCUMENTS</a></li>
                <li><a href="#calendar" className="nav-item" onClick={this.showCalendar}>CALENDAR</a></li>
                <li><a className="nav-item" onClick={this.showLogin}>LOG IN</a></li>
                <li><a className="nav-item" onClick={this.showAddDocument}>NEW DOCUMENT</a></li>
                <li><a className="nav-item" onClick={this.showAddEvent}>NEW EVENT</a></li>
              </ul>

              <ul className="nav-list" style={{display: this.state.navigation}}>
                <div className="nav-close" onClick={this.hideNavigation}>reorder</div>
                <li><a href="#documents" className="nav-item" onClick={this.showDocuments}>DOCUMENTS</a></li>
                <li><a href="#calendar" className="nav-item" onClick={this.showCalendar}>CALENDAR</a></li>
                <li><a className="nav-item" onClick={this.showLogin}>LOG IN</a></li>
                <li><a className="nav-item" onClick={this.showAddDocument}>NEW DOCUMENT</a></li>
                <li><a className="nav-item" onClick={this.showAddEvent}>NEW EVENT</a></li>
              </ul>
            </div>

            <div className="page-content">
              <div id="calendar" className="content" style={{display: this.state.calendar}}>
                <span className="content-header">CALENDAR</span>
                <Calendar />
              </div>

              <div id="documents" className="content" style={{display: this.state.documents}}>
                <span className="content-header">DOCUMENTS</span>
                <Documents />
              </div>

              <div className="popup" style={{display: this.state.login}}>
                <div className="exit-popup">
                  <p className="clear" onClick={this.hideLogin}>clear</p>
                </div>
                <Login hide={this.hideLogin} admin={this.loginAdmin}/>
              </div>
              <div className="transparent-background" style={{display: this.state.login}}></div>
              
              <div className="popup" style={{display: this.state.addDocument}}>
                <div className="exit-popup">
                  <p className="clear" onClick={this.hideAddDocument}>clear</p>
                </div>
                <DragDrop />
              </div>
              <div className="transparent-background" style={{display: this.state.addDocument}}></div>
              
              <div className="popup" style={{display: this.state.addEvent}}>
                <div className="exit-popup">
                  <p className="clear" onClick={this.hideAddEvent}>clear</p>
                </div>
                <AddEvent />
              </div>
              <div className="transparent-background" style={{display: this.state.addEvent}}></div>

            </div>
        </div>
      );
    } else {
      return (
        <div className="container-fluid App">
          <title>University of Arkansas Airforce ROTC Home</title>
            <div className="nav">
              <header className="header">
                <img src={logoVertical} className="logo-vertical" alt="ROTC Air Force Insignia"></img>
                <img src={logoHorizontal} className="logo-horizontal" alt="ROTC Air Force Insignia"></img>
              </header>

              <div className="nav-open" onClick={this.showNavigation}>reorder</div>

              <ul className="desktop-nav">
                <li><a href="#documents" className="nav-item" onClick={this.showDocuments}>DOCUMENTS</a></li>
                <li><a href="#calendar" className="nav-item" onClick={this.showCalendar}>CALENDAR</a></li>
                <li><a className="nav-item" onClick={this.showLogin}>LOG IN</a></li>
              </ul>

              <ul className="nav-list" style={{display: this.state.navigation}}>
                <div className="nav-close" onClick={this.hideNavigation}>reorder</div>
                <li><a href="#documents" className="nav-item" onClick={this.showDocuments}>DOCUMENTS</a></li>
                <li><a href="#calendar" className="nav-item" onClick={this.showCalendar}>CALENDAR</a></li>
                <li><a className="nav-item" onClick={this.showLogin}>LOG IN</a></li>
              </ul>
            </div>

            <div className="page-content">
              <div id="calendar" className="content" style={{display: this.state.calendar}}>
                <span className="content-header">CALENDAR</span>
                <Calendar />
              </div>

              <div id="documents" className="content" style={{display: this.state.documents}}>
                <span className="content-header">DOCUMENTS</span>
                <Documents />
              </div>

              <div className="popup" style={{display: this.state.login}}>
                <div className="exit-popup">
                  <p className="clear" onClick={this.hideLogin}>clear</p>
                </div>
                <Login hide={this.hideLogin} admin={this.loginAdmin}/>
              </div>
              <div className="transparent-background" style={{display: this.state.login}}></div>
              
              <div className="popup" style={{display: this.state.addDocument}}>
                <div className="exit-popup">
                  <p className="clear" onClick={this.hideAddDocument}>clear</p>
                </div>
                <DragDrop />
              </div>
              <div className="transparent-background" style={{display: this.state.addDocument}}></div>
              
              <div className="popup" style={{display: this.state.addEvent}}>
                <div className="exit-popup">
                  <p className="clear" onClick={this.hideAddEvent}>clear</p>
                </div>
                <AddEvent />
              </div>
              <div className="transparent-background" style={{display: this.state.addEvent}}></div>

            </div>
        </div>
      );
    }
  }
}

export default App;
