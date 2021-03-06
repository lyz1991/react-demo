import React from 'react'
import Tip from './Common/Tip'
import Loading from './Common/Loading'
import Header from './Common/Header'
import {
  BrowserRouter,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import {routes} from '../router/route'
require('../global/less/cash.less')
class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className="container">
          <div className='blank'></div>
          <Header/>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={true}
              component={route.components} onEnter={() => {
              }}
            />
          ))}
          <Tip/>
          <Loading/>
        </div>
      </BrowserRouter>
    )
  }
  componentWillMount () {
  }
  componentDidMount () {
  }
}
export default App
