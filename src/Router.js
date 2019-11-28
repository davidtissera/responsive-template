import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../src/level-0/Home';

class Router extends Component {
  render() {

    return (
      <div>
        <Redirect
          from='/'
          to='/place1'
        />
        <Switch>
          <Route
            path='/place1'
            component={Home}/>
          <Route
            path='/place2'
            component={Home}/>
          <Route
            path='/place3'
            component={Home}/>
          <Route
            path='/place4'
            component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default Router