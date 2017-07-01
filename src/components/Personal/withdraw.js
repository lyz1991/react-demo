import React from 'react'
import withdraw from './less/withdraw'
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx'
import Bank from './child/banks'
import Form from './child/withdraw_form'
import Check from 'Common/Input'
import Proto from './child/withdraw_proto'
let channel = localStorage.getItem('channel')
window.zhuge.track(`${channel}|借款确认页面|展示`)
@observer class Withdraw extends React.Component {
  @observable state = {
    customerId: this.props.customerId,
    loanAmount: '',
    repayAmount: '',
    bankCardNo: '',
    proto: false
  }
  render () {
    return (
      <div className={withdraw.withdraw}>
        <Banner state="true" {...this.props}/>
        <Form {...this.props} callback={(obj) => { this.state = obj }}/>
        <p className={withdraw.banktip}>收款银行卡<span>到期后自动扣款</span></p>
        <Bank customerId={this.props.customerId}
              callback={(obj) => {
                this.state.bankCardNo = obj
              }}
              ref='bank'/>
        <div className={withdraw.tip}>
          <Check type="checkbox" shape="square" state={true} ref="check" className={withdraw.check}/>
          <span>我已经阅读并同意 <span className={withdraw.linK}
                               onClick={() => {
                                 this.state.proto = true
                               }}>《用户借款协议》</span></span>
        </div>
        <p className={withdraw.bomtip}>2小时到账</p>
        <button disabled="disabled" className={withdraw.surebtn} onClick={() => { window.zhuge.track(`${channel}|确认提钱|点击`) }}>确认提钱</button>
        {this.state.proto && <Proto close={() => {
          this.state.proto = false
        }}/>}
      </div>
    )
  }
}
export default inject(({user}) => ({
  customerId: user.user.customerId || JSON.parse(localStorage.getItem('user') || '{}').customerId
}))(Withdraw)
