import React from 'react'
import withdraw from './less/withdraw'
let channel = localStorage.getItem('channel')
window.zhuge.track(`${channel}|借款确认页面|展示`)
class Withdraw extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      customerId: props.customerId,
      loanAmount: '',
      repayAmount: '',
      bankCardNo: '',
      proto: false
    }
  }
  render () {
    return (
      <div className={withdraw.withdraw}>
        <p>个人</p>
      </div>
    )
  }
}
/* const mapStateToProps = ({user}) => {
  return {
    customerId: user.user.customerId || JSON.parse(localStorage.getItem('user') || '{}').customerId
  }
}
export default connect(mapStateToProps)(Withdraw) */
export default Withdraw
