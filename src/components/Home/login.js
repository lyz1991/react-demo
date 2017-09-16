import React from 'react'
import index from './less/login'
import { login } from 'plugins/validate'
import Banner from '../Common/Banner'
import tool from 'plugins/tool'
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx'
import { showTip } from '../../store/actions'
let channel = localStorage.getItem('channel')
window.zhuge.track(`${channel}|登录页面|展示`)

const Login = ({history, customerId}) => (
  <div className={index.header}>
    <Banner/>
    <Form history={history}/>
  </div>
)
class Dialog extends React.Component {
  render () {
    return (
      <div className="mordal" style={{'display': this.props.state ? 'block' : 'none'}} onClick={() => {
        this.props.close()
      }}>

      </div>
    )
  }
}
@observer class Form extends React.Component {
  @observable show = false
  @observable timer = ''
  @observable data = {
    phone: '',
    validCode: ''
  }
  @observable time = null
  @observable validate = ''
  componentWillMount () {
    tool.init(login)
  }
  render () {
    return (
      <div className={index.login}>
        <div className={index.inputcontainer}>
          <div>
            <input type="text"
                   className={!login.phone.valid && login.phone.state ? 'invalid' : ''}
                   maxLength="11"
                   placeholder="手机号:"
                   onBlur={({ target }) => {
                     tool.test(login.phone, target.value)
                     this.data.phone = target.value
                   }}
                   onFocus={({target}) => {
                     this.data.phone = tool.reset(login.phone, target)
                   }}/>
            <span className={index.code}
                  onClick={() => {
                    this.getcode(this.props.history)
                  }}>{`${this.timer}` || '获取验证码'}</span>
          </div>
          <input type="tel"
                 ref="code"
                 placeholder="验证码:"
                 maxLength="6"
                 className={!login.code.valid && login.code.state ? 'invalid' : ''}
                 onBlur={({ target }) => {
                   tool.test(login.code, target.value)
                   this.data.validCode = target.value
                 }}
                 onFocus={({target}) => {
                   this.data.validCode = tool.reset(login.code, target)
                 }}
          />
        </div>
        <Dialog state={this.show} close={() => {
          this.show = false
        }}/>
        <button className={`${index.btn} ${index.loginbtn}`} onClick={() => {
          this.sub(this.props.history)
        }}>立即登录</button>
      </div>
    )
  }
  getcode () {
    if (this.time) return
    if (login.phone.valid) {
      window.zhuge.track(`${channel}|登录页验证码|点击`)

      this.timer = 60
      this.time = setInterval(() => {
        if (this.timer > 0) {
          this.timer--
        } else {
          clearInterval(this.time)
          this.timer = ''
          this.time = null
        }
      }, 1000)
    } else {
      showTip({__html: '请输入正确手机号'})
    }
  }
  sub (history) {
    tool.checkform(login) && tool.login(this.data, history, this.data.phone) && this.callback('code')
  }
  callback (ref) {
    this.refs[ref].value = ''
  }
}
export default Login
