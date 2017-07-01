import * as types from '../reducerTypes'
let user = (state = {
  user: {
    customerId: '',
    phone: '',
    name: ''
  }
}, action) => {
  switch (action.type) {
    case types.SET_USER:
      return Object.assign({}, state, {...state, user: action.text})
    case types.DEL_USER:
      return Object.assign({}, state, {...state, user: {}})
    default:
      return state
  }
}
export default user
