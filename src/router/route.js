import * as route from './router_name'
import Constract from 'bundle-loader?lazy&name=[name]!../pages/Home/constract'
import Home from 'bundle-loader?lazy&name=[name]!../pages/Home/Index'
import Login from 'bundle-loader?lazy&name=[name]!../pages/Home/login'
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
          __html: '<i class="icon i-v"></i>卡'
        }
      }
    },
    name: route.Index,
    components: ({history}) => (
      <Bundle load={Home}>
        {(Home) => <Home history={history}/>}
      </Bundle>
    )
  },
  { path: '/Personal',
    meta: {
      auth: false,
      header: {
        require: true,
        text: {
          __html: '<i class="icon i-v"></i>卡'
        }
      }
    },
    name: route.Login,
    components: ({history}) => (
      <Bundle load={Login}>
        {(Login) => <Login history={history}/>}
      </Bundle>
    )
  }
]