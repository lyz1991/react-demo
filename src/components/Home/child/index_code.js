import index from '../less/index'
import React from 'react'
import { code } from 'plugins/validate'
import tool from 'plugins/tool'
import { showTip, setUser } from 'store/actions/index'
let channel = localStorage.getItem('channel')
export default class Code extends React.Component {
  constructor () {
    super()
    this.state = {
      state: true,
      timer: 60,
      validCode: ''
    }
    this.time = null
  }
  render () {
    return (
      <div className='mordal'>
        <div className={index.diacontainer}>
          <img src="static/images/close.png" className={index.close} onClick={() => {
            this.props.close()
          }}/>
          <p className={index.tipone}>我们已发送<span>短信验证码</span>到手机号码:</p>
          <p className={index.phone}>{(this.props.phone + '').substr(0, 3) + '*'.repeat(4) + (this.props.phone + '').substr(-4)}</p>
          <div>
            <input type="tel"
                   ref="code"
                   className={!code.code.valid && code.code.state ? 'invalid' : ''}
                   maxLength="6"
                   placeholder="请填写验证码:"
                   onBlur={({ target }) => {
                     window.zhuge.track(`${channel}|验证码输入框|失焦`)
                     tool.test(code.code, target.value)
                     this.setState({
                       validCode: target.value
                     })
                   }}
                   onFocus={({target}) => {
                     this.setState({validCode: tool.reset(code.code, target)})
                   }}/>
            <div className={index.timer} onClick={() => { this.check() }}>
              {this.state.timer ? `${this.state.timer}s` : `重新获取`}
            </div>
          </div>
          <button className={index.btn} onClick={() => { this.subCode(this.props.history) }}>确定</button>
        </div>
      </div>
    )
  }
  componentDidMount () {
    this.getCode()
  }
  getCode () {
    if (this.time) return
    this.setState({
      timer: 60
    })
    window.zhuge.track(`${channel}|发送短信|展示`)
    pull.post(`${preA}/customer/sendValidCode`, {phone: this.props.phone}).then((res) => {
    })
    this.time = setInterval(() => {
      if (this.state.timer > 0) {
        this.setState({
          timer: --this.state.timer
        })
      } else {
        clearInterval(this.time)
        this.time = null
      }
    }, 1000)
  }
  check () {
    !this.time && this.getCode()
  }
  subCode (history) {
    tool.checkform(code) && this.checkForm(history) && this.callback('code')
  }
  checkForm (history) {
    let params = {
      name: this.props.name,
      phone: this.props.phone,
      idCard: this.props.idCard,
      validCode: this.state.validCode
    }
    pull.post(`${preA}/customer/login`, params, true).then(({data}) => {
      switch (data.status) {
        case 'valid_code_error':
          showTip({text: {__html: '验证码错误'}})
          break
        case 'not_support_register':
          showTip({text: {__html: '闪妹已经为您登记为VIP用户，请一周后来领取专属您的闪银V卡~'}})
          break
        case 'is_wecash_user':
          this.props.close() // 验证码这个框消失
          showTip({text: {__html: '<p>您已注册闪银，请前往闪银查看额度</p>'}})
          setTimeout(() => {
            window.location.href = 'http://m.wecash.net/wep/index.html?version=general'
          }, 2000)
          break
        case 'info_error':
          this.props.close() // 验证码这个框消失
          showTip({text: {__html: '<p>您输入信息不匹配</p>'}})
          break
        case 'success':
          this.props.close() // 验证码这个框消失
          setUser(data.customerInfo)
          tool.checkstatus(data.customerInfo, history)
          break
      }
      console.log('suc')
      return true
    })
  }
  callback (ref) {
    this.refs[ref].value = ''
    this.setState({
      validCode: ''
    })
  }
  componentWillUnmount () {
    clearInterval(this.time)
    this.time = null
  }
}
