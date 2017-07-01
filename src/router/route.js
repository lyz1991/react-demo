import * as route from './router_name'
import Constract from 'bundle-loader?lazy&name=[name]!../components/Home/constract'
import Home from 'bundle-loader?lazy&name=[name]!../components/Home/Index'
import Login from 'bundle-loader?lazy&name=[name]!../components/Home/login'
import Personal from 'bundle-loader?lazy&name=[name]!../components/Personal/personal'
import Loan from 'bundle-loader?lazy&name=[name]!../components/Personal/loanAmount'
import Withdraw from 'bundle-loader?lazy&name=[name]!../components/Personal/withdraw'
import Loading from 'bundle-loader?lazy&name=[name]!../components/Personal/loading'
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
          __html: '闪银<i class="icon i-v"></i>卡'
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
  {
    path: '/login',
    name: route.Login,
    meta: {
      auth: false,
      header: {
        require: true,
        text: {
          __html: '闪银<i class="icon i-v"></i>卡'
        }
      }
    },
    components: ({history}) => (
      <Bundle load={Login}>
        {(Login) => <Login history={history}/>}
      </Bundle>
    )
  },
  {
    path: '/loan',
    name: route.Loan,
    meta: {
      auth: true,
      header: {
        require: true,
        text: {
          __html: '闪银<i class="icon i-v"></i>卡'
        }
      }
    },
    components: ({history}) => (
      <Bundle load={Loan}>
        {(Loan) => <Loan history={history}/>}
      </Bundle>
    )
  },
  { path: '/constract',
    name: route.Constract,
    meta: {
      auth: true,
      zhuge: '填写联系人',
      header: {
        require: true,
        text: {
          __html: '闪银<i class="icon i-v"></i>卡'
        }
      }
    },
    components: ({history}) => (
      <Bundle load={Constract}>
        {(Constract) => <Constract history={history}/>}
      </Bundle>
    )
  },
  { path: '/personal',
    name: route.Personal,
    meta: {
      auth: true,
      header: {
        require: true,
        text: {
          __html: '闪银<i class="icon i-v"></i>卡'
        }
      }
    },
    components: ({history}) => (
      <Bundle load={Personal}>
        {(Personal) => <Personal history={history}/>}
      </Bundle>
    )
  },
  { path: '/withdraw',
    name: route.Withdraw,
    meta: {
      auth: true,
      header: {
        require: true,
        text: {
          __html: '闪银<i class="icon i-v"></i>卡'
        }
      }
    },
    components: ({history}) => (
      <Bundle load={Withdraw}>
        {(Withdraw) => <Withdraw history={history}/>}
      </Bundle>
    )
  },
  { path: '/loading',
    name: route.Loading,
    meta: {
      auth: true,
      header: {
        require: true,
        text: {
          __html: '闪银<i class="icon i-v"></i>卡'
        }
      }
    },
    components: ({history}) => (
      <Bundle load={Loading}>
        {(Loading) => <Loading history={history}/>}
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
    if (routes[i].meta.header.require) {
      !tool.IsWX() && showHead(routes[i].meta.header.text)
    }
  }
}
