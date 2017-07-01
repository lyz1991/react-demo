import React from 'react'
import personal from './less/personal'
let channel = localStorage.getItem('channel')
window.zhuge.track(`${channel}|还款页面|展示`)
const Personal = (props) => (
  <div className={personal.personal}>
    <p>个人</p>
  </div>
)
/* const mapStateToProps = ({user}) => {
  return {
    customerId: user.user.customerId || JSON.parse(localStorage.getItem('user') || '{}').customerId
  }
}
export default connect(mapStateToProps)(Personal) */
export default Personal
