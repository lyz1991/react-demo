import React from 'react'
import personal from './less/personal'
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx'
import Banner from '../Common/Banner'
import tool from 'plugins/tool'
let channel = localStorage.getItem('channel')
window.zhuge.track(`${channel}|还款页面|展示`)
const Personal = (props) => (
  <div className={personal.personal}>
    <Banner state="true" {...props}/>
    <Form {...props}/>
    <p>本服务由闪银V卡提供</p>
  </div>
)
@observer class Form extends React.Component {
  @observable state = {
    loanRecordNo: 0,
    billNo: '',
    hasLoanRecord: '',
    thePeriod: '',
    moneySum: '',
    payCardNo: '',
    repayOverTime: '',
    differenceDay: '',
    payPlatform: 0,
    bankName: ''
  }
  render () {
    return (
      <div>
        <div className={`${personal.container}`} style={{'display': this.state.hasLoanRecord > 0 ? 'block' : 'none'}}>
          <div className={`${personal.item}`}>
            <span>自动扣款日期</span>
            <div className={personal.right}>
              <p>
                {tool.strtoDate(this.state.repayOverTime)}
                <span>(还有{this.state.differenceDay}天)
              </span>
              </p>
              <p className={personal.auto}>
                还款日11点系统自动扣款
              </p>
            </div>
          </div>
          <div className={personal.item}>
            <span>还款金额</span>
            <p className={personal.right}>{this.state.moneySum}元</p>
          </div>
          <div className={personal.item}>
            <span>还款银行卡</span>
            <p className={personal.right}>{this.state.bankName}({this.state.payCardNo && this.state.payCardNo.substr(-4)})</p>
          </div>
        </div>
        <button className={personal.btn} onClick={() => { this.sub() }}>主动还款</button>
      </div>
    )
  }
  componentDidMount () {
    pull.post(`${preA}/pay/getMoneySum`, {customerId: this.props.customerId}).then(({data}) => {
      this.state = data
    })
  }
  sub () {
    window.zhuge.track(`${channel}|还款按钮|展示`)
    pull.post(`${preA}/pay/repayment`, {...this.state, customerId: this.props.customerId}).then((data) => {
      if (!data.errCode) {
        window.location.href = `http:${data.data.payUrl}`
      }
    })
  }
}
export default inject(({user}) => ({
  customerId: user.user.customerId || JSON.parse(localStorage.getItem('user') || '{}').customerId
}))(Personal)
