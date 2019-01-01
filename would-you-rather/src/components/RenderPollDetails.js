import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { logVote } from '../actions/users'
import { handleAddVote } from '../actions/polls'
import { NavLink } from 'react-router-dom'
import { formatDate } from '../utils/api'


class RenderPollDetails extends Component {

getAvatar = (author) => {

  let avatarURL = this.props.users.map( (user) => {

      if(user.id === author){
        console.log(user.Id);
        console.log(author);
        console.log(user.avatarURL)
        return user.avatarURL
      } else return
    }
    );

//avatarURL = avatarURL[0]

avatarURL = avatarURL.join()
avatarURL = avatarURL.replace(",","");
avatarURL = avatarURL.replace(",","");
avatarURL = avatarURL.replace(",","");
console.log(avatarURL)
return avatarURL;


  }


render() {

    let pollDetailsId =  window.location.pathname;
        pollDetailsId = pollDetailsId.replace('\/poll\/','');
          if (pollDetailsId === null) {
              return <p>This Poll doesn't existd</p>
           }

    let { polls, authedUser } = this.props
          if (authedUser == null) {
            authedUser = "Loading...";
          }



    return (
      <div className='poll-info' key={pollDetailsId}>
      <h2>
      Would You Rather</h2>

      {this.props.polls.map( (poll) => {

        if(poll.id === pollDetailsId){
          let avatarURL = this.getAvatar(poll.author);

          return(
            <div key={poll.id}>
            <div>
            Question 1: {poll.optionOne.text}<br/>
            Votes: {poll.optionOne.votes.length}<br/>
            <br/>
            Question 2: {poll.optionTwo.text}<br/>
            Votes: {poll.optionTwo.votes.length}<br/>
            <br/>
            Created:  {formatDate(poll.timestamp)}<br/>
            ID: {poll.id}<br/>
            Author: {poll.author}<br/>
            <img src={avatarURL} height="50" width="50" alt="avatar"/>
            </div>
            </div>
          )
        } else{
          return;
        }
      })
      }

      </div>
    ) // return
  } // render
} // component


function mapStateToProps({ authedUser,users,polls,views}, id, pollId, myPoll) {
  return {
    id: Object.keys(polls),
    polls: Object.values(polls),
    authedUser: authedUser,
    users: Object.values(users),
    views,
  }
}

export default withRouter(connect(mapStateToProps)(RenderPollDetails))
