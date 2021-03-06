import { RECEIVE_POLLS } from '../actions/polls'
import { ADD_POLL } from '../actions/polls'
import { VOTE } from '../actions/polls'




export default function polls (state = {}, action) {
  switch(action.type) {

    case RECEIVE_POLLS :
      return {
        ...state,
        ...action.polls
      }

      case ADD_POLL :
        return {
          ...state,
          [action.poll.id]: action.poll,
        }

      case VOTE :
        return {
          ...state,
          [action.pid] : {
            ...state[action.pid],
            [action.voteFor] : {
              ...state[action.pid][action.voteFor],
                votes : state[action.pid][action.voteFor].votes.concat(action.authedUser)
            }
          }
      }

    


// state[action.pid][action.voteFor].votes.concat("Hi")
      default :
      return state
  }
}
