import React from 'react'
import header from './less/header.less'
import { inject } from 'mobx-react'
const Header = ({state, text}) => (
  <header style={{'display': state ? 'block' : 'none'}} className={header.header} dangerouslySetInnerHTML={text}/>
)
export default inject(({App}) => ({
  state: App.header.state,
  text: App.header.text
}))(Header)
