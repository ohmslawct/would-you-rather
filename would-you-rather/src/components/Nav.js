
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class Nav extends Component {
// function Nav () {
render(){

  let currentUser;

  if (this.props.authedUser === ""){
    currentUser = ""
  } else {
    currentUser = this.props.users.map( (user) => {
        if (user.id === this.props.authedUser){
        return user.name;
    }
    })
  }

  return (
    <nav className='nav'>

          <br/>

          <NavLink to='/'>
            Home • <span> </span>
          </NavLink>


          <NavLink to='/newpoll'>
            New Poll • <span> </span>
          </NavLink>

          <NavLink to='/viewpolls'>
            View Polls • <span> </span>
          </NavLink>

          <NavLink to='/profile'>
            Account
          </NavLink>

          <br/>
          <span class="currentUser">{currentUser}</span>

    </nav>
  )
}

}

function mapStateToProps ({authedUser, users}) {
  return {
    authedUser,
    users : Object.values(users)
  }
}

export default withRouter(connect(mapStateToProps)(Nav))
