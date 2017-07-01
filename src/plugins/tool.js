import user from '../store/state/user'
import app from '../store/state/App'
export default {
  test (opt, value) {
    return !opt.reg.test(value) ? this.wrong(opt, value) : this.right(opt)
  },
  wrong (opt, value) {
    value && app.showTip({__html: `请填写正确的${opt.msg}`})
    return Object.assign(opt, {valid: false, state: !!value})
  },
  right (opt) {
    return Object.assign(opt, {valid: true, state: false})
  },
  reset (opt, target) {
    Object.assign(opt, {state: false})
    if (!opt.reg.test(target.value)) {
      target.value = ''
    }
    return target.value
  },
  checkform (form) {
    for (let i in form) {
      if (!form[i].valid) {
        app.showTip({__html: `请填写正确的${form[i].msg}`})
        return false
      }
    }
    return true
  },
  init (opt, value = {}) {
    let keys = Object.keys(opt)
    for (let i = 0, len = keys.length; i < len; i++) {
      if (value) {
        opt[keys[i]].valid = opt[keys[i]].reg.test(value[keys[i]])
      } else {
        opt[keys[i]].valid = false
      }
    }
    return opt
  },
  getsearch (str) {
    let arr = str.slice(1).split('&')
    let obj = {}
    arr.forEach(el => {
      let idx = el.indexOf('=')
      obj[el.slice(0, idx)] = el.slice(idx + 1)
    })
    return obj
  },
  transfer (time, level) {
    time = time.replace(/-/g, '/')
    let check = num => num < 10 ? `0${num}` : num
    let date = new Date(time)
    let y = date.getFullYear()
    let m = check(date.getMonth() + 1)
    let d = check(date.getDate())
    return [`${y}年${m}月${d}日`, `${m}月${d}日`][level]
  },
  strtoDate (time) {
    if (!time) return
    let strs = time.replace(/-/g, ' ').split(' ')
    return `${strs[1]}月${strs[2]}日`
  },
  prefix (el, cla) {
    let pre = ['', '-webkit-', '-moz-', '-ms-', '-o-']
    for (let i = 0, t = pre.length; i < t; i++) {
      let vender = pre[i] + cla
      if (vender in el.style) {
        return vender
      }
    }
  },
  toDate (time) {
    return time / (1000 * 60 * 60 * 24) | 0
  },
  login (arg, history, phone = '') {
    return pull.post(`${preA}/customer/login`, arg, true).then(({data}) => {
      switch (data.status) {
        case 'user_not_exists':
          history.push(`index?phone=${phone}`)
          break
        case 'not_support_register':
          app.showTip({__html: '<p>闪妹已经为您登记为VIP用户，请一周后来领取专属您的闪银V卡~</p>'})
          break
        case 'success':
          user.setUser(data.customerInfo)
          this.checkstatus(data.customerInfo, history)
          break
        case 'is_wecash_user':
          app.showTip({__html: '<p>您已经申请过闪银的额度</p><p>暂时不能使用现金卡</p>'})
          break
        case 'info_error':
          app.showTip({__html: '<p>您输入信息不匹配</p>'})
          break
        case 'valid_code_error':
          app.showTip({__html: '验证码错误'}
          )
          return true
      }
    })
  },
  checkstatus (customerInfo, history = {}) {
    switch (customerInfo.customerNextStep) {
      case 'ZM_AUTH':
        window.location.href = `https://open.wecash.net/auth/genui/index.html#login/sesame_credit_auth/100343/${customerInfo.customerId}?extract=true&name=${customerInfo.name}&id_card=${customerInfo.idCard}&d=1?returnUrl=${location.host}/#/constract`
        break
      case 'CONTACT_INFO':
        window.location.hash = 'constract'
        break
      case 'LIMIT_DISPLAY':
        window.location.hash = 'loan'
        break
      case 'LOANING':
        window.location.hash = 'loading'
        break
      case 'REPAYMENT':
        window.location.hash = 'personal'
        break
    }
  },
  getbaseInfo (customerId, history) {
    pull.post(`${preA}/customer/baseInfo`, {customerId: customerId}).then(({data}) => {
      this.checkstatus(data, history)
    })
  },
  IsWX () {
    let ua = window.navigator.userAgent.toLowerCase()
    return ua.match(/MicroMessenger/i)
  }
}
