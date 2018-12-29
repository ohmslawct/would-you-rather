
import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import RenderPoll from './RenderPoll'
import { handleLikeToggle } from '../actions/polls'


class ViewPolls extends Component {

state = {
  pollView : "all"
}

handleClick = (e) => {
  let text = e.target.name
  this.setState( () => ({
    pollView : text
  }))
}

  render() {

if(this.props.authedUser === ""){
  this.props.history.push("/");
}

    let thePolls = this.props.polls;

  return (

    <div>
    <h1>
    <button name="all" onClick={ this.handleClick }>All</button> •
    <button name="new" onClick={this.handleClick}>New</button> •
    <button name="answered" onClick={this.handleClick}>Answered</button></h1>

    {console.log(this.state.pollView)}

      <RenderPoll pollId={thePolls[0]} view={this.state.pollView}/>
    </div>
  )

  } // render
} // ViewPolls class


function mapStateToProps ({authedUser, polls, users}) {
  return {
    authedUser : authedUser,
    polls : Object.keys(polls),
    users : Object.keys(users)
  }
}

export default withRouter(connect(mapStateToProps)(ViewPolls))
