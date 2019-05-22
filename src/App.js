import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import GroupList from './components/groups/GroupList';
import GroupDetails from './components/groups/GroupDetails'
import AddMember from './components/groups/AddMember'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" >
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/' component = {GroupList} />
            <Route exact path='/group/:id' component = {GroupDetails} />
            <Route path='/group/:id/add' component = {AddMember} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;