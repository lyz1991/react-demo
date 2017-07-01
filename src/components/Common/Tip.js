import React from 'react'
import { inject } from 'mobx-react'
require('./less/tip.less')
const Tip = ({tip}) => (
  <div className="global_tip" style={{display: tip.state ? 'block' : 'none'}} dangerouslySetInnerHTML={tip.text}/>
)
export default inject(
  ({App}) => ({
    tip: App.tip
  })
)(Tip)
