import React from 'react'
import Tip from './Common/Tip'
import Loading from './Common/Loading'
import Header from './Common/Header'
import {
  Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import history from '../router/history'
import {routes, config} from '../router/route'
require('../global/less/cash.less')
class App extends React.Component {
  render () {
    return (
      <Router history={history}>
        <div className="container">
          <div className='blank'></div>
          <Header/>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={true}
              component={route.components} onEnter={() => {
                config(location, this.props, history)
              }}
            />
          ))}
          <Tip/>
          <Loading/>
        </div>
      </Router>
    )
  }
  componentWillMount () {
    config(location, this.props, history)
    history.listen((text) => {
      config(text, this.props, history)
    })
  }
  componentDidMount () {
  }
}
export default App
