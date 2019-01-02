import { RECEIVE_USERS } from '../actions/users'
import { LOGOUT_USER } from '../actions/users'
import { LOGIN_USER } from '../actions/users'
import { LOG_VOTE } from '../actions/users'
import { TRACK_POLL } from '../actions/users'

export default function users (state = {}, action) {

  switch(action.type){
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }  // return a merged object

      case LOGOUT_USER :
      console.log(action.user);

        return {
          ...state,
          ...action.user
        }

        case LOGIN_USER :
          return {
            ...state,
            ...action.userEmail
          }

        case LOG_VOTE :
        return {
          ...state,
          [action.name] : {
            ...state[action.name],
            answers : state[action.name].answers.concat(action.authedUser)
            }
          }

        case TRACK_POLL :
            return {
              ...state,
              [action.name] : {
                ...state[action.name],
                questions : state[action.name].questions.concat(action.authedUser)
              }
            }



      default :
        return state
  }
}
