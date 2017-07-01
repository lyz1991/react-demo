import React from 'react'
import ban from './less/banner'
import tool from 'plugins/tool'
import { observable } from 'mobx'
import { inject, observer } from 'mobx-react'
@observer export default class Banner extends React.Component {
  @observable state = {
    display: '',
    value: '',
    showLimit: '',
    bankCardNo: ''
  }
  render () {
    return (
      <div className={ban.banner}>
        <img src="static/images/banner.png"/>
        <div className={ban.ed}>
          <p >额度<span className={ban.yuan}>(元)</span></p>
          <p>{this.props.state ? this.state.showLimit : '500 -- 2000'}</p>
        </div>
        <p style={{'display': this.props.state ? 'none' : 'flex'}}
           className={ban.bankcard}><span>* * * *</span><span>* * * *</span><span>* * * *</span><span>0000</span></p>
        <p
          style={{'display': this.props.state ? 'flex' : 'none'}}
          className={ban.bankcard}>
          <span>* * * *</span><span>* * * *</span><span>* * * *</span><span>{this.state.bankCardNo.substr(-4)}</span></p>
        <p className={ban.name} style={{'display': this.props.state ? 'block' : 'none'}}>{this.props.name}</p>
      </div>)
  }
  componentDidMount () {
    pull.post(`${preA}/display/propagateInfo`, {customerId: this.props.customerId || ''}).then(({data}) => {
      this.state = data
    })
    if (this.props.state) {
      pull.post(`${preA}/customer/baseInfo`, {customerId: this.props.customerId}).then(({data}) => {
        this.state = data
      })
    }
  }
}
inject(({user}) => ({
  name: user.user.name || JSON.parse(localStorage.getItem('user') || '{}').name,
  customerId: user.user.customerId || JSON.parse(localStorage.getItem('user') || '{}').customerId
}))(Banner)
