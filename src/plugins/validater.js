export let idcard = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/
export let email = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
export let name = /^[\u4e00-\u9fa5]{1,15}·?[\u4e00-\u9fa5]+$/
export let bankcard = /^\d{15,20}$/
export let tel = /^0?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/
export let vcode = /^\d{6}/
