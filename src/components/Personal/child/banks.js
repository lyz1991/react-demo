import React from 'react'
import withdraw from '../less/withdraw'
import tool from 'plugins/tool'
import {bank} from 'plugins/validate'
import { showTip } from 'store/actions'
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx'
let channel = localStorage.getItem('channel')
@observer export default class Banks extends React.Component {
  @observable state = {
    state: false,
    banks: []
  }
  @observable hasbank = false
  @observable nobank = false
  render () {
    return (
      <div className={withdraw.bank}>
        {this.nobank && <Nobank click={() => { this.add() }}/>}
        {this.hasbank && <Hasbank bank={this.state.banks}/>}
        <Addbank state={this.state.state} close={() => {
          this.state.state = false
        }} {...this.props}/>
      </div>
    )
  }
  add () {
    this.state.state = true
  }
  componentDidMount () {
    window.zhuge.track(`${channel}|绑卡页面|展示`)
    pull.post(`${preA}/bankcard/getCustomer/banklist`, {customerId: this.props.customerId}).then(({data}) => {
      if (data.customerBankInfos.length > 0) {
        this.hasbank = true
        this.banks = data.customerBankInfos
        this.props.callback(this.state.banks[0].cardNo)
      } else {
        this.nobank = true
        this.setState({
          banks: data.customerBankInfos
        })
      }
    })
  }
}
class Addbank extends React.Component {
  @observable state = {
    state: true,
    customerId: this.props.customerId,
    bankCardNo: '',
    bankCode: '',
    bankName: '',
    phone: '',
    flag: true
  }
  render () {
    return (
      <div className='mordal' style={{'display': this.props.state ? 'block' : 'none'}}>
        <div className="diacontainer">
          <img src="static/images/close.png" className="close" onClick={() => { this.props.close() }}/>
          <div className={withdraw.bankitem}>
            <label className={withdraw.label}>银行卡号:</label>
            <input type="tel" placeholder="请输入您的银行卡号" maxLength="20"
                   className={!bank.bankcard.valid && bank.bankcard.state ? 'invalid' : ''}
                   onBlur={({target}) => {
                     window.zhuge.track(`${channel}|银行卡号|失焦`)
                     tool.test(bank.bankcard, target.value)
                     this.state.bankCardNo = target.value
                     this.getbank(target)
                   }}
                   onFocus={({target}) => {
                     this.state.bankCardNo = tool.reset(bank.bankcard, target)
                   }}/>
          </div>
          <div className={withdraw.bankitem}>
            <label className={withdraw.label}>所在银行:</label>
            <span className={withdraw.input}>{this.state.bankName}</span>
          </div>
          <div className={withdraw.bankitem}>
            <label className={withdraw.label}>预留手机:</label>
            <input type="text"placeholder="请输入您的银行预留手机号" maxLength="11"
                   className={!bank.phone.valid && bank.phone.state ? 'invalid' : ''}
                   onBlur={({target}) => {
                     window.zhuge.track(`${channel}|银行卡手机号|失焦`)
                     tool.test(bank.phone, target.value)
                     this.state.phone = target.value
                   }}
                   onFocus={({target}) => {
                     this.state.phone = tool.reset(bank.phone, target)
                   }}/>
          </div>
          <button className={withdraw.btn} onClick={() => {
            window.zhuge.track(`${channel}|绑卡确认|点击`)
            if (this.state.flag) {
              this.sub()
            }
          }}>绑定完成</button>
        </div>
      </div>
    )
  }
  sub () {
    this.state.flag = false
    tool.checkform(bank) && pull.post(`${preA}/bankcard/add`, this.state).then((data) => {
      this.state.flag = true
      if (data.errCode == 0) {
        window.zhuge.track(`${channel}|绑卡成功`)
        window.location.reload()
      } else {
        showTip({text: {__html: data.errMsg}})
      }
    })
  }
  getbank (e) {
    pull.post(`${preA}/bankcard/getBankInfo`, {bankCardNo: this.state.bankCardNo}, true).then(({data}) => {
      if (!data.code) {
        showTip({text: {__html: '银行卡号错误'}})
        e.value = ''
      }
      this.state.bankName = data.name
      this.state.bankCode = data.code
    })
  }
}
const Nobank = props => (
  <div className={`${withdraw.item}`} onClick={() => {
    window.zhuge.track(`${channel}|添加银行|点击`)
    props.click()
  }}>
    <p><span>+</span>添加银行卡</p>
    <i className={`icon i-right ${withdraw.icon}`}></i>
  </div>
)
const Hasbank = ({bank, click}) => (
  <div className={withdraw.item}>
    <p>{bank[0].bankName}&nbsp;&nbsp;({bank[0].cardNo.substr(-4)})</p>
    <i className={`icon i-right ${withdraw.icon}`}></i>
  </div>
)
