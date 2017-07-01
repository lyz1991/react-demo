import * as types from '../reducerTypes'
let App = (state = {
  header: {
    state: false,
    text: {
      __html: ''
    }
  },
  tip: {
    state: false,
    text: {
      __html: ''
    }
  },
  loading: false,
  dialog: {
    text: {
      __html: ''
    },
    state: false,
    btns: []
  },
  footers: {
    state: false,
    items: [
      {text: '首页', path: '/home', active: true},
      {text: '社保定点', path: '/detail', active: false},
      {text: '社保升级', path: '/topic', active: false},
      {text: '我的', path: '/personal', active: false}]
  }}, action) => {
  switch (action.type) {
    case types.SHOW_NAV:
      return Object.assign({}, state, {footers: {state: action.text, items: state.footers.items}})
    case types.ENTER_NAV:
      return Object.assign({}, state, {footers: {state: state.footers.state, items: toggleNav(state, action.text)}})
    case types.SET_DIALOG:
      return Object.assign({}, state, {dialog: action.text})
    case types.HIDE_DIALOG:
      Object.assign(state.dialog, {state: false})
      return Object.assign({}, state, state.dialog)
    case types.SHOW_TIP:
      return Object.assign({}, state, {tip: {state: true, text: action.text.text}})
    case types.SHOW_HEAD:
      return Object.assign({}, state, {header: {state: true, text: action.text}})
    case types.HIDE_HEAD:
      return Object.assign({}, state, {header: {state: false, text: action.text}})
    case types.HIDE_TIP:
      return Object.assign({}, state, {tip: {state: false}})
    case types.SET_LOADING:
      return Object.assign({}, state, {loading: action.text})
    default:
      return state
  }
}
const toggleNav = ({footers}, index) => {
  return footers.items.map((el, i) => {
    return Object.assign({}, el, {active: i == index})
  })
}
export default App
