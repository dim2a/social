import React, { Component } from 'react';
import classes from './App.css'
import Header from './components/Header/Header';
import Nav from './components/Navigation/Nav';
import Profile from './container/Profile/Profile';
import Dialogs from './container/Dialogs/Dialogs';
import News from './container/News/News';
import Music from './container/Music/Music';
import Settings from './container/Settings/Settings';
import Layout from './hoc/Layout/Layout';
import {Route, Redirect, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className={classes.Wrapper}>
        <Header />
        <Nav />
        <Layout>
          <Switch>
            <Route path='/dialogs' component={Dialogs} />
            <Route path='/profile' component={Profile} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />      
            <Route path='/settings' component={Settings} />      
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
