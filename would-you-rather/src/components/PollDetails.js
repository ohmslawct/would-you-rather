
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import RenderPoll from './RenderPoll'
import RenderPollDetails from './RenderPollDetails'


class PollDetails extends Component {

render() {

return (

    <div>
    <RenderPollDetails/>
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

export default withRouter(connect(mapStateToProps)(PollDetails))
