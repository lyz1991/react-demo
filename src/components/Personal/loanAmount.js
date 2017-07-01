import React from 'react'
import loan from './less/loanAmount'
import { observable } from 'mobx'
import Explaindiv from './child/explain'
import Banner from '../Common/Banner'
import Ads from '../Common/Ads'
import { showTip } from '../../store/actions'
import { inject, observer } from 'mobx-react'
let channel = localStorage.getItem('channel')
window.zhuge.track(`${channel}|借款页面|展示`)
@observer export class Loan extends React.Component {
  @observable state = {
    repayDays: '',
    loanAmount: '',
    rate: '',
    state: false
  }
  render () {
    return (
      <div className={loan.loan}>
        <Explaindiv
          state={this.state.state}
          close={() => { this.state.state = false }}
        />
        <Banner state="true" {...this.props}/>
        <Ads/>
        <div className={loan.form}>
          <div className={`${loan.item}`}>
            <p>借款期限</p>
            <p className={loan.day}>{this.state.repayDays}天</p>
          </div>
          <div className={loan.item}>
            <span>到账金额</span>
            <p className={loan.right}>{this.state.loanAmount}元</p>
          </div>
          <div className={loan.item}>
            <p>利&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;息</p>
            <p className={loan.right}>{this.state.interest}元</p>
          </div>
          <div className={loan.explain} onClick={() => { this.toggleExplain() }}>
            <i className="icon i-ques"></i><span>利率说明</span>
          </div>
        </div>
        <p className={loan.tip}>2小时到账!</p>
        <button className={loan.btn} onClick={() => {
          showTip({text: {__html: '今日借款额度已经被抢完!'}})
          // this.props.history.push(`withdraw?loanAmount=${this.state.loanAmount}`)
        }}>马上提钱</button>
      </div>
    )
  }
}
export default inject(({user}) => ({
  cusid: user.user.customerId || JSON.parse(localStorage.getItem('user') || '{}').customerId
}))(Loan)
