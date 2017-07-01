import React from 'react'
import withdraw from '../less/withdraw'
export default class Explaindiv extends React.Component {
  render () {
    return (
      <div className='mordal' style={{'display': this.props.state ? 'block' : 'none'}}>
        <div className="diacontainer">
          <img src="static/images/close.png" className="close" onClick={() => { this.props.close() }}/>
          <ul>
            <li>1、按日计息，日利率0.08%;</li>
            <li>2、逾期日利率0.16%。</li>
          </ul>
        </div>
      </div>
    )
  }
}
