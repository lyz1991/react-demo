import proto from '../less/proto'
import React from 'react'
export default class Proto extends React.Component {
  render () {
    return (
      <div className='mordal'>
        <div className={proto.diacontainerwithdraw}>
          <img src="static/images/close.png" className={proto.close} onClick={() => {
            this.props.close()
          }}/>
          <div>
          <img src='static/images/withdrawproto.jpg' className={proto.photo}/>
          </div>
        </div>
      </div>
    )
  }
}
