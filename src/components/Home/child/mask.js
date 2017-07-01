import mask1 from '../less/mask.less'
import React from 'react'
export default class Proto extends React.Component {
  render () {
    return (
      <div className={mask1.wrapper}>
        <div className={mask1.topwrapper}>
          <img src='/static/images/mask/top.png' className={mask1.top}/>
        </div>
        <div className={mask1.centerwrapper}>
          <img src='/static/images/mask/huojian.png' className={mask1.center}/>
        </div>
        <div className={mask1.bottomwrapper}>
          <img src='/static/images/mask/bottom.png' className={mask1.bottom}/>
        </div>
      </div>
    )
  }
}
