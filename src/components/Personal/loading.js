import React from 'react'
import loan from './less/loanAmount'
let channel = localStorage.getItem('channel')
window.zhuge.track(`${channel}|借款审核页面|展示`)
const Loading = () => (
  <div className={loan.wait}>
  <div className={loan.bg}>
  </div>
    <p className={loan.tip}>您的提款申请已提交</p>
    <p>2小时内即可到账，请耐心等待</p>
  </div>
)
export default Loading
