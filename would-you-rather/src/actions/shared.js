import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receivePolls } from '../actions/polls'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

export const MONITOR_USERS = 'MONITOR_USERS'
const AUTHED_ID = ''


export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
    .then(({users, polls}) => {
      dispatch(receiveUsers(users))
      dispatch(receivePolls(polls))
      dispatch(setAuthedUser(AUTHED_ID))
      dispatch(hideLoading())
    })

  }
}

export function userStateChangeMonitor(){
    return (dispatch) => {
    dispatch(monitorUsers())
  }
  }


export function monitorUsers(userStatus) {
    return {
      type: MONITOR_USERS,
      userStatus
    }
}


export function addNewUser(user) {
  return (dispatch) => {
    dispatch(receiveUsers(user))
  }
}
