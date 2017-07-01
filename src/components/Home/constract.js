import React from 'react'
import link from './less/constract'
import {constract} from 'plugins/validate'
import { observable } from 'mobx'
import { inject, observer } from 'mobx-react'
import tool from 'plugins/tool'
import { showTip } from '../../store/actions'
let channel = localStorage.getItem('channel')
window.zhuge.track(`${channel}|填写联系人页面|展示`)
const Constract = ({history, cusid}) => (
  <div className={link.constract}>
    <img src="static/images/linkman.png"/>
    <p className={link.describe}>请填写一位紧急联系人的手机号码</p>
    <p className={link.describe}>即可<span>获取借贷额度</span></p>
    <Form cusid={cusid} history={history}/>
  </div>
)
@observer class Form extends React.Component {
  @observable state = {
    customerId: this.props.cusid,
    relation: '',
    name: '',
    gender: '',
    phone: ''
  }
  render () {
    return (
      <div className={link.formcontainer}>
        <div className={link.inputcontainer}>
          <div className={link.item}>
            <p className={link.label}>姓名:</p>
            <input type="text"
                   placeholder="姓名"
                   maxLength="10"
                   className={!constract.name.valid && constract.name.state ? 'invalid' : ''}
                   onBlur={({target}) => {
                     window.zhuge.track(`${channel}|联系人姓名输入框|失焦`)
                     tool.test(constract.name, target.value)
                     this.state.name = target.value
                   }}
                   onFocus={ ({target}) => {
                     this.state.name = tool.reset(constract.name, target)
                   }}
            />
          </div>
          <div className={link.item}>
            <p className={link.label}>性别:</p>
            <select onChange={({target}) => { this.state.gender = target.value }}>
              <option value=""></option>
              <option value="MALE">男</option>
              <option value="FEMALE">女</option>
            </select>
          </div>
          <p className={link.label}>和您的关系:</p>
          <select onChange={({target}) => { this.state.relation = target.value }}>
            <option value=""></option>
            <option value="PARENT">父母</option>
            <option value="MATE">配偶</option>
            <option value="FRIEND">朋友</option>
            <option value="COLLEAGUE">同事</option>
          </select>
          <p className={link.label}>手机号:</p>
          <input type="tel"
                 maxLength="11"
                 placeholder="请输入您的紧急联系人手机号"
                 className={!constract.phone.valid && constract.phone.state ? 'invalid' : ''}
                 onBlur={({target}) => {
                   window.zhuge.track(`${channel}|联系人紧急联系手机号|失焦`)
                   tool.test(constract.phone, target.value)
                   this.state.phone = target.value
                 }}
                 onFocus={({target}) => {
                   this.state.phone = tool.reset(constract.phone, target)
                 }}
          />
        </div>
        <button className={link.btn} onClick={() => {
          window.zhuge.track(`${channel}|确认填写联系人|点击`)
          tool.checkform(constract) && this.sub()
        }}>获取额度</button>
      </div>
    )
  }
  sub () {
    if (!this.state.gender) {
      showTip({text: {__html: '请选择性别'}})
      return
    }
    if (!this.state.relation) {
      showTip({text: {__html: '请选择关系'}})
      return
    }
    pull.post(`${preA}/contact/getLimit`, this.state, true).then(({res}) => {
      this.props.history.push('loan')
    })
  }
}

export default inject(({user}) => ({
  cusid: user.user.customerId || JSON.parse(localStorage.getItem('user') || '{}').customerId
}))(Constract)
