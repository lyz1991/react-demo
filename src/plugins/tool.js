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
  }
}
