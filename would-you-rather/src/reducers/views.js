import { CHANGE_VIEW } from '../actions/views'

export default function views (state = {}, action) {

  switch(action.type){

        case CHANGE_VIEW :
            return {
              ...state,
              pollView: action.pollView,
            }

      default :
        return state
  }
}
