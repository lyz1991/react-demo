import * as types from '../reducerTypes'
export default {
  hideTip (text) {
    return {
      type: types.HIDE_TIP,
      text
    }
  },
  showTip (text) {
    return {
      type: types.SHOW_TIP,
      text,
      callback: null
    }
  },
  hideHead (text) {
    return {
      type: types.HIDE_HEAD,
      text
    }
  },
  hideNav (text) {
    return {
      type: types.HIDE_NAV,
      text
    }
  },
  enterNav (text) {
    return {
      type: types.ENTER_NAV,
      text
    }
  },
  showNav (text) {
    return {
      type: types.SHOW_NAV,
      text
    }
  },
  showHead (text) {
    return {
      type: types.SHOW_HEAD,
      text
    }
  },
  setDialog (text) {
    return {
      type: types.SET_DIALOG,
      text
    }
  },
  hideDialog (text) {
    return {
      type: types.HIDE_DIALOG,
      text
    }
  },
  setLoading (text) {
    return {
      type: types.SET_LOADING,
      text
    }
  }
}
