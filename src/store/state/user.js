import { observable, action } from 'mobx'
class User {
  @observable user
  constructor () {
    this.user = {
      customerId: '',
      phone: '',
      name: 'lyz'
    }
  }
  @action.bound
  setUser = user => { this.user = user }
  @action.bound
  delUser = user => { this.user = {} }
}
const user = new User()
export default user
