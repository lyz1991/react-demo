import { showTip } from 'store/actions'
import tool from '../../../plugins/tool'
import React from 'react'
import withdraw from '../less/withdraw'
export default class Form extends React.Component {
  constructor () {
    super()
    this.state = {
      loanAmount: '',
      repayDate: ''
    }
  }
  render () {
    return (
      <div className={withdraw.form}>
        <div className={withdraw.item}>
          <p>借款金额</p>
          <p>{this.state.loanAmount}元</p>
        </div>
        <div className={withdraw.item}>
          <span>还款日期</span>
          <p>{tool.strtoDate(this.state.repayDate, 1)}</p>
        </div>
        <div className={withdraw.item}>
          <p>到期应还</p>
          <p>{this.state.repayAmount}元</p>
        </div>
        <p className={withdraw.tip} style={{'display': this.state.interest ? 'none' : 'block'}}>首次提现利率为0</p>
      </div>
    )
  }
  componentDidMount () {
    pull.get(`${preA}/loan/build/loanInfo`, {customerId: this.props.customerId, loanAmount: tool.getsearch(this.props.history.location.search).loanAmount}).then(({ data }) => {
      !data.errCode && this.setState({
        ...data
      }, () => {
        this.props.callback(this.state)
      })
      data.errCode && showTip({text: {__html: data.errMsg}})
    })
  }
}
