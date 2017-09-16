import { observable, action, runInAction } from 'mobx'
const toggleNav = (footers, index) => {
  return footers.items.map((el, i) => {
    return Object.assign({}, el, {active: i == index})
  })
}
class App {
  @observable header
  @observable tip
  @observable loading
  @observable dialog
  @observable footers
  constructor () {
    this.header = {
      state: false,
      text: {
        __html: ''
      }
    }
    this.tip = {
      state: false,
      text: {
        __html: ''
      }
    }
    this.loading = false
    this.dialog = {
      text: {
        __html: ''
      },
      state: false,
      btns: []
    }
    this.footers = {
      state: false,
      items: [
        {text: ' ', path: '/home', active: true},
        {text: ' ', path: '/detail', active: false},
        {text: '', path: '/topic', active: false},
        {text: '', path: '/personal', active: false}
      ]
    }
  }
  @action.bound
  showNav (state) {
    this.footers = {
      state: state,
      items: [
        {text: ' ', path: '/home', active: true},
        {text: ' ', path: '/detail', active: false},
        {text: ' ', path: '/topic', active: false},
        {text: ' ', path: '/personal', active: false}
      ]
    }
  }
  @action.bound
  showHead (text) {
    this.header = {
      state: true,
      text
    }
  }
  @action.bound
  showTip (text, time = 1000) {
    this.tip = {
      state: true,
      text
    }
    setTimeout(() => { this.hideTip() }, time)
  }
  @action.bound
  hideTip () {
    this.tip = {
      state: false,
      text: {
        __html: ''
      }
    }
  }
  @action.bound
  enterNav (index) {
    this.footers = {
      state: false,
      items: toggleNav(this.footers, index)
    }
  }
  @action.bound
  showDialog (dia) {
    this.dialog = dia
  }
  @action.bound
  hideDialog () {
    this.dialog.state = false
  }
}
const app = new App()
export default app
