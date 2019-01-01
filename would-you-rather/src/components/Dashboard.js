import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from "./Login/";
import SignUp from "./SignUp/";

class Dashboard extends Component {
  render() {
    return (
      <div className="">

      <header className="App-header">
        <h1 className="App-title">Would You Rather!</h1>
      </header>
        Please Log In or Sign Up. <br/><br/><span className="notes">Reviewers can sign up or use demo account: <br/>U: demo@rainmakerco.com  <br/>P: WonderfulYou</span>
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
