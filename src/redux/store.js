import { combineReducers, createStore } from 'redux'
import App from './reducer/App'
import user from './reducer/user'
const Store = combineReducers({
  App,
  user
})
let appstore = createStore(Store)
export default appstore
