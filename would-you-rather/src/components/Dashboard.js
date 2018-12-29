import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { BrowserRouter as Router, Route } from "react-router-dom";

import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import Polls from './polls'
import PrivateRoute from "../PrivateRoute";
import Home from "./Home";
import Login from "./Login/";
import SignUp from "./SignUp/";
import Logout from "./Logout";


class Dashboard extends Component {
  render() {
    return (
      <div>

      <header className="App-header">
        <h1 className="App-title">Would You Rather!</h1>
      </header>
        <h3 className='center'></h3>
        <ul className='dashboard-list'>
        </ul>
              <SignUp/>
              <Login/>
              <br/>
      </div>
    )
  }
}

function mapStateToProps () {
  return {

  }
}

export default connect(mapStateToProps)(Dashboard)
