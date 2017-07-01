import * as types from '../reducerTypes'
export default {
  setPhone (text) {
    return {
      type: types.SET_PHONE,
      text
    }
  },
  setName (text) {
    return {
      type: types.SET_NAME,
      text
    }
  },
  setLimit (text) {
    return {
      type: types.SET_LIMIT,
      text
    }
  },
  setcusid (text) {
    return {
      type: types.SET_CUSID,
      text
    }
  },
  setUser (text) {
    return {
      type: types.SET_USER,
      text
    }
  },
  delUser (text) {
    return {
      type: types.DEL_USER,
      text
    }
  }
}
