import React, { Component } from 'react';
import classes from './App.css'
import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';
import Profile from './container/Profile/Profile';

class App extends Component {
  render() {
    return (
      <div className={classes.Wrapper}>
        <Header />
        <Nav />
        <Profile />
      </div>
    );
  }
}

export default App;
