import { tel, vcode, name, idcard, bankcard } from 'plugins/validater'
export let login = {
  phone: {
    valid: false,
    state: false,
    msg: '手机号',
    reg: tel
  },
  code: {
    valid: false,
    state: false,
    msg: '验证码',
    reg: vcode
  }
}
export let register = {
  name: {
    valid: false,
    state: false,
    msg: '姓名',
    reg: name
  },
  idCard: {
    valid: false,
    state: false,
    msg: '身份证号',
    reg: idcard
  },
  phone: {
    valid: false,
    state: false,
    msg: '手机号',
    reg: tel
  }
}
export let code = {
  code: {
    valid: false,
    state: false,
    msg: '验证码',
    reg: vcode
  }
}
export let bank = {
  bankcard: {
    valid: false,
    state: false,
    msg: '银行卡号',
    reg: bankcard
  },
  phone: {
    valid: false,
    state: false,
    msg: '手机号',
    reg: tel
  }
}
export let constract = {
  name: {
    valid: false,
    state: false,
    msg: '姓名',
    reg: name
  },
  phone: {
    valid: false,
    state: false,
    msg: '手机号',
    reg: tel
  }
}
