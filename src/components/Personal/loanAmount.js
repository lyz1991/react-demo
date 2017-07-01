import React from 'react'
import loan from './less/loanAmount'
let channel = localStorage.getItem('channel')
window.zhuge.track(`${channel}|借款页面|展示`)
export class Loan extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      repayDays: '',
      loanAmount: '',
      rate: '',
      state: false
    }
  }
  render () {
    return (
      <div className={loan.loan}>
        <p>loan</p>
      </div>
    )
  }
}
/* const mapStateToProps = ({user}) => {
  return {
    cusid: user.user.customerId || JSON.parse(localStorage.getItem('user') || '{}').customerId
  }
}
export default connect(mapStateToProps)(Loan) */
export default Loan
