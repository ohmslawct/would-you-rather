import React, { Component } from "react";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleLogoutUser } from "../actions/users";
import { NavLink } from 'react-router-dom'

class LogoutNow extends Component {

render() {


const { dispatch } = this.props;
dispatch(handleLogoutUser());

return (<div>Logged Out.  Please <NavLink to='/'>
Sign Up or Log In</NavLink> to continue.</div>);
  }
}

export default withRouter(connect()(LogoutNow))
