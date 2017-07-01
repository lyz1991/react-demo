import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import mystore from './store'
import App from './components/App'
require('./pull')
require('./global/less/reset.less')
require('./global/less/transition.less')
render(
  <Provider {...mystore}>
  <App/>
  </Provider>,
  document.getElementById('app')
)
if (module.hot) {
  module.hot.accept()
}
