import { GET_EXPRESS_DATA } from './actions'

export default function (state={}, action ) {
  switch(action.type){
  case GET_EXPRESS_DATA:
    return action.payload.data
  default:
    return state
  }
}
