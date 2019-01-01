import { savePoll } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import firebaseApp from "../firebaseApp";

export const ADD_POLL = 'ADD_POLL'
export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const VOTE = 'VOTE'


function addPoll(poll) {
  return {
    type: ADD_POLL,
    poll,
  }
}

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  }
}

export function addVote(polls){
 return {
   type: VOTE,
   polls : polls,
   pid : polls.pid,
   voteFor : polls.questionNumber,
   authedUser : polls.authedUser,
 }
}


/// POLL ACTION CREATOR
export function handleAddVote(vote) {
  return (dispatch, getState) => {
    dispatch(showLoading())

    return saveVote({
        vote,
        })
        .then((poll) => dispatch(addVote(vote)))
        .then(() => dispatch(hideLoading()))
  }
}


// ???
function saveVote(vote) {
  console.log("Saving Vote Here....");
  return new Promise( (res, rej) => {
      setTimeout( () => {
        res(vote)
      }, 1000)  // setTimeout
    })
}


export function handleAddPoll (poll) {
  return (dispatch, getState) => {
    
      dispatch(showLoading())

    return savePoll({
      poll,
      author: firebaseApp.auth().currentUser.email
    })
      .then((poll) => dispatch(addPoll(poll)))
      .then(() => dispatch(hideLoading()))
  }
}
