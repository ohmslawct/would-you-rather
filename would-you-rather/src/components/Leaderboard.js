
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import RenderLeaderboard from './RenderLeaderboard'
import { changeView } from '../actions/views'


class Leaderboard extends Component {

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
        <RenderLeaderboard/>
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

export default withRouter(connect(mapStateToProps)(Leaderboard))
