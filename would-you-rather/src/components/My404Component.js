
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

class My404Component extends Component {

render() {

  if(this.props.authedUser === ""){
    this.props.history.push("/");
  }

  return (
      <div>

      <div>
      <br/>
      PAGE NOT FOUND
      <br/>
      <br/>
      Please <NavLink to='/'>
      Sign Up or Log In</NavLink> to continue.
      </div>
      
      </div>
    )

    } // render
  } // ViewPolls class


  function mapStateToProps ({authedUser, polls, users, views}) {
    return {

    }
  }

export default withRouter(connect(mapStateToProps)(My404Component))
