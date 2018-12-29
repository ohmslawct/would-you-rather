import { RECEIVE_USERS } from '../actions/users'
import { LOGOUT_USER } from '../actions/users'
import { LOGIN_USER } from '../actions/users'

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

      default :
        return state
  }
}
