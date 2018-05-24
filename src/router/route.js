import * as route from './router_name'
import Constract from 'bundle-loader?lazy&name=[name]!../components/Home/constract'
import Home from 'bundle-loader?lazy&name=[name]!../components/Home/Index'
import Login from 'bundle-loader?lazy&name=[name]!../components/Home/login'
import Bundle from '../components/Common/Bundle'
import { showHead } from '../store/actions'
import tool from 'plugins/tool'
import React from 'react'
export const routes = [
  { path: '/index',
    meta: {
      auth: false,
      header: {
        require: true,
        text: {
          __html:'<i class="icon i-v"></i>卡'
        }
      }
    },
    name: route.Index,
    components: ({history}) => (
      <Bundle load={Home}>
        {(Home) => <Home history={history}/>}
      </Bundle>
    )
  }
]
export const config = (text, { customerId }, history) => {
  let hash
  if (text.hash.indexOf('?') != -1) {
    hash = text.hash.substring(2, text.hash.indexOf('?'))
  } else {
    hash = text.hash.substr(2)
  }
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].name == hash) {
      if (routes[i].meta.auth && !customerId) {
        history.push('index')
      }
    }
  }
}
