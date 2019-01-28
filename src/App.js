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
import Frends from './container/Frends/Frends';

class App extends Component { 

   profile = () => <Profile postData={this.props.state.profilePage.postData}/>
   dialogs = () => <Dialogs data={this.props.state.messagesPage} />
   frends = () => <Frends frends={this.props.state.sidebar} />
  render() {
    return (
      <div className={classes.Wrapper}>
        <Header />
        <Nav frends={this.props.state.sidebar}/>
        <Layout>
          <Switch>
            <Route path='/dialogs' component={this.dialogs} />
            <Route path='/profile' component={this.profile} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />      
            <Route path='/settings' component={Settings} />
            <Route path='/frends' component={this.frends} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
