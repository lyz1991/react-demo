import React from 'react'
import Code from './index_code'
import Proto from './index_proto'
import Check from 'Common/Input'
import tool from 'plugins/tool'
import index from '../less/index'
import { register } from 'plugins/validate'
import {
  Link
} from 'react-router-dom'
import { showTip, setUser, delUser } from 'store/actions/index'
let channel = localStorage.getItem('channel')
export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      validate: '',
      exist: false,
      proto: false,
      register: {
        name: '',
        idCard: '',
        phone: tool.getsearch(props.history.location.search).phone
      }
    }
  }
  componentWillMount () {
    this.setState({
      validate: tool.init(register, this.state.register)
    })
  }
  render () {
    return (
      <div className={index.formcontainer}>
        <div className={index.inputcontainer}>
          <p className={index.label}>姓名</p>
          <input type="text"
                 placeholder="请输入您的姓名"
                 className={!register.name.valid && register.name.state ? 'invalid' : ''}
                 maxLength="10"
                 value={this.state.register.name}
                 onChange={({ target }) => {
                   this.setState({register: Object.assign({}, this.state.register, {name: target.value})})
                 }}
                 onBlur={({ target }) => {
                   window.zhuge.track(`${channel}|姓名输入框|失焦`)
                   tool.test(register.name, target.value)
                   this.setState({register: Object.assign({}, this.state.register, {name: target.value})})
                 }}
                 onFocus={({target}) => {
                   this.setState({register: {...this.state.register, name: tool.reset(register.name, target)}})
                 }}/>
          <p className={index.label}>身份证号</p>
          <input type="text"
                 placeholder="请输入您的身份证号码"
                 className={!register.idCard.valid && register.idCard.state ? 'invalid' : ''}
                 maxLength="18"
                 value={this.state.register.idCard}
                 onChange={({ target }) => {
                   this.setState({register: Object.assign({}, this.state.register, {idCard: target.value})})
                 }}
                 onBlur={({ target }) => {
                   window.zhuge.track(`${channel}|身份证输入框|失焦`)
                   tool.test(register.idCard, target.value)
                   this.setState({register: Object.assign({}, this.state.register, {idCard: target.value})})
                 }}
                 onFocus={({target}) => {
                   this.setState({register: {...this.state.register, idCard: tool.reset(register.idCard, target)}})
                 }}/>
          <p className={index.label}>手机号</p>
          <input type="tel" placeholder="请输入您的手机号"
                 className={!register.phone.valid && register.phone.state ? 'invalid' : ''}
                 maxLength="11"
                 defaultValue={this.state.register.phone}
                 value={this.state.register.phone}
                 onChange={({ target }) => {
                   this.setState({register: Object.assign({}, this.state.register, {phone: target.value})})
                 }}
                 onBlur={({ target }) => {
                   window.zhuge.track(`${channel}|手机输入框|失焦`)
                   tool.test(register.phone, target.value)
                   this.setState({register: Object.assign({}, this.state.register, {phone: target.value})})
                 }}
                 onFocus={({target}) => {
                   this.setState({register: {...this.state.register, phone: tool.reset(register.phone, target)}})
                 }}/>
          <div className={index.tip}>
            <Check type="checkbox" shape="square" state={true} ref="check" className={index.check}/>
            <span>我已经阅读并同意
              <span className={index.link} onClick={() => {
                this.setState({
                  proto: true
                })
              }}>《个人征信信息授权协议》</span></span>
          </div>
        </div>
        <p className={index.login}><Link to="login">已有账号,立即登录>></Link></p>
        <button className={index.btn} onClick={() => {
          // this.sub(this.refs.check.state, this.props.history)
        }}>授权芝麻信用</button>
        {this.state.exist && <Code {...this.state.register} history={this.props.history} close={() => {
          this.setState({exist: false})
        }}/>}
        {this.state.proto && <Proto close={() => {
          this.setState({proto: false})
        }}/>}
      </div>
    )
  }
  sub ({state}) {
    if (!state) {
      showTip({text: {__html: '请阅读并同意《个人征信信息授权协议》'}})
      return
    }
    (tool.checkform(register)) && this.setState({...this.state, exist: true})
  }
  check (status) {
    switch (status) {
      case 'success':
        this.setState({...this.state, exist: true})
        break
      case 'is_wecash_user':
        showTip({text: {__html: '<p>您已注册闪银，请前往闪银查看额度</p>'}})
        this.setState({...this.state, register: {name: '', idCard: '', phone: ''}}, () => {
        })
        break
      case 'error':
        showTip({text: {__html: '系统异常'}})
        break
      case 'info_error':
        showTip({text: {__html: '<p>您输入信息不匹配</p>'}})
        break
      case 'idCard_exists':
        showTip({text: {__html: '<p>您已经注册闪银V卡，非本人操作请咨询客服。</p>'}})
        break
    }
  }
}
