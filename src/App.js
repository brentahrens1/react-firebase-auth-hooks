import React, { useState, useEffect } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import { ProvideAuth, useAuth } from "./components/Firebase/Firebase";

import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import Nav from './components/Nav/Nav'
import Account from './components/Account/Account'
import Home from './components/Home/Home'

function App(props) {

  return (
    <ProvideAuth>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/sign-in" exact component={SignIn} />
          <Route path="/forgot-password" exact component={ForgotPassword} />
          <Route path="/account" exact component={Account} /> : null
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </ProvideAuth>
  );
}

export default App;
