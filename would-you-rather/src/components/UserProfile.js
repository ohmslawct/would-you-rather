import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updateUserProfile } from '../actions/users'
import Logout from "./Logout";


class UserProfile extends Component {
  state = {
    text: '',
    userName : '',
    email : '',
    toHome: false,

    userProfile :
    {
      userName : '',
      email : ''
    }
  }

  handleChange = (e) => {
    const text = e.target.value


    this.setState( () => ({
      fieldName : text
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    // get dispatch and id from props which is handled by connnect
    const { dispatch, id } = this.props

    dispatch(updateUserProfile(id))

    this.setState(() => ({
      text: ''
    }))

  } // handleSubmit

  render() {

    const { authedUser} = this.props;

    if(this.props.authedUser === ""){
      this.props.history.push("/login");
    }

    return (
      <div>
        <h2 className='center'>User Profile</h2>
        <form className='new-poll' onSubmit={this.handleSubmit}>

        {authedUser}<br/>
          <span className="label-text">
         User ID
         </span>
          <br/><br/>



        </form>
        <br/>
        <Logout/>


      </div>
    )
  }
}



function mapStateToProps ({authedUser, users}) {
  return {
    authedUser : authedUser,
    users : Object.keys(users)
  }
}

export default withRouter(connect(mapStateToProps)(UserProfile))
