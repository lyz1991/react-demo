import actions from './actions'
import store from '../store'
import { bindActionCreators } from 'redux'
export const hideHead = (text) => {
  bindActionCreators(actions.hideHead, store.dispatch)(text)
}
export const showHead = (text) => {
  bindActionCreators(actions.showHead, store.dispatch)(text)
}
export const hideTip = (text) => {
  bindActionCreators(actions.hideTip, store.dispatch)(text)
}
export const showTip = (text, time = 2000) => {
  bindActionCreators(actions.showTip, store.dispatch)(text)
  setTimeout(hideTip, time)
}
export const setcusid = (text) => {
  localStorage.setItem('cusid', text)
  bindActionCreators(actions.setcusid, store.dispatch)(text)
}
export const showNav = (text) => {
  bindActionCreators(actions.showNav, store.dispatch)(text)
}
export const enterNav = (text) => {
  bindActionCreators(actions.enterNav, store.dispatch)(text)
}
export const setDialog = (text) => {
  bindActionCreators(actions.setDialog, store.dispatch)(text)
}
export const hideDialog = (text) => {
  bindActionCreators(actions.hideDialog, store.dispatch)(text)
}
export const setLoading = (text = false) => {
  bindActionCreators(actions.setLoading, store.dispatch)(text)
}
export const setPhone = (text = false) => {
  localStorage.setItem('phone', text)
  bindActionCreators(actions.setPhone, store.dispatch)(text)
}
export const setName = (text = false) => {
  localStorage.setItem('name', text)
  bindActionCreators(actions.setName, store.dispatch)(text)
}
export const setUser = (text) => {
  console.log(JSON.stringify(text))
  localStorage.setItem('user', JSON.stringify(text))
  bindActionCreators(actions.setUser, store.dispatch)(text)
}
export const delUser = (text) => {
  localStorage.removeItem('user')
  bindActionCreators(actions.delUser, store.dispatch)(text)
}
