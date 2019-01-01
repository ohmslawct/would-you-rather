
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import RenderPoll from './RenderPoll'
import { changeView } from '../actions/views'

class ViewPolls extends Component {


handleClick = (e) => {
  const { dispatch } = this.props;
  let view = e.target.name
  dispatch(changeView(view));
}

  render() {

if(this.props.authedUser === ""){
  this.props.history.push("/login");
}


return (

    <div>
    <h1>
    <button name="all" onClick={ this.handleClick }>All</button>&nbsp;•&nbsp;
    <button name="new" onClick={this.handleClick}> New</button>&nbsp;•&nbsp;
    <button name="answered" onClick={this.handleClick}>Answered</button></h1>

    <RenderPoll/>

    </div>
  )

  } // render
} // ViewPolls class


function mapStateToProps ({authedUser, polls, users, views}) {
  return {
    authedUser : authedUser,
    polls : Object.keys(polls),
    users : Object.keys(users),
    views : Object.keys(views),
  }
}

export default withRouter(connect(mapStateToProps)(ViewPolls))
