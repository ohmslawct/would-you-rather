import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatPoll, formatDate } from '../utils/api'
import handleLikeToggle from '../actions/polls'
import { handleAddVote } from '../actions/polls'
import firebaseApp from "../firebaseApp"

class Poll extends Component {

handleClick = (e) => {
    e.preventDefault()
    let questionNumber = e.target.name;
    let pollId = e.target.id;

    // get dispatch and id from props which is handled by connnect
    const { dispatch, id } = this.props

    dispatch(handleAddVote({
      pid : pollId,
      questionNumber : questionNumber,
      authedUser : this.props.authedUser,
    }))
  } // handleclick


pollsDisplay = (poll) => {

  poll.optionOne.votes.length

}


render() {
   let { polls, users, authedUser} = this.props

   if(authedUser==null){
     authedUser = "Loading...";
   }

   let myPoll = this.props.pollId;


return(

<div className='poll-info'>

{polls.map( poll => (
  <div>
  <button
    name="optionOne"
    id={poll.id}
    onClick={this.handleClick}
    >
    {poll.optionOne.votes.length}</button>   {poll.optionOne.text} <br/>

  <button
    name="optionTwo"
    id={poll.id}
    onClick={this.handleClick}
    >
    {poll.optionTwo.votes.length}</button>   {poll.optionTwo.text}  <br/>
    <div className="author">{poll.author}</div>
    <br/>
  </div>
))}


</div>
  ) // return
  } // render
} // component

function mapStateToProps ({authedUser, users, polls},  id , pollId, myPoll) {

  return {
    authedUser,
    id : Object.keys(polls),
    polls : Object.values(polls),
    authedUser : authedUser,
    users : Object.values(users)
  }
}

export default withRouter(connect(mapStateToProps)(Poll))
