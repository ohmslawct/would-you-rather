import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddPoll } from '../actions/polls'
import { Redirect } from 'react-router-dom'
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
    const fieldName = e.target.name

    this.setState( () => ({
      fieldName : text
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { text, userName } = this.state

    // get dispatch and id from props which is handled by connnect
    const { dispatch, id } = this.props


    dispatch(updateUserProfile(id))

    this.setState(() => ({
      text: ''
    }))

  } // handleSubmit

  render() {

    const { text } = this.state

    if(this.props.authedUser === ""){
      this.props.history.push("/");
    }

    return (
      <div>
        <h2 className='center'>User Profile</h2>
        <form className='new-poll' onSubmit={this.handleSubmit}>

          <input type="text"
            name="userName"
            placeholder="{}"
            value={this.authedUser}
            onChange={this.handleChange}
            className=''
            maxLength={50}
          /> Name
          <br/><br/>
          <input type="text"
            name="email"
            placeholder="{}"
            value={this.authedUser}
            onChange={this.handleChange}
            className=''
            maxLength={50}
          /> Email



          <br/>
          <br/>
          <button
            className='btn'
            type='submit'
            disabled={text === ''}>
            Update
          </button>


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
