import React from 'react'
import ads from './less/ads'
import tool from 'plugins/tool'
export default class Ads extends React.Component {
  constructor () {
    super()
    this.state = {
      ads: [{value: '1'}, {value: '2'}, {value: '3'}]
    }
    this.transform = null
    this.transition = null
    this.index = 1
    this.animate = true
    this.time = null
  }
  render () {
    return (
      <div className={ads.ads}>
      <i className={`icon i-boardcast ${ads.icon}`}></i>
        <div className={ads.container}>
          <div className={ads.wrapper} ref="ads">
            <p>{this.state.ads[this.state.ads.length - 1].value}</p>
           {this.state.ads.map((el, index) => (
              <p key={index}>{el.value}</p>
            ))}
            <p>{this.state.ads[0].value}</p>
          </div>
        </div>
      </div>)
  }
  componentDidMount () {
    this.transform = tool.prefix(this.refs.ads, 'transform')
    this.transition = tool.prefix(this.refs.ads, 'transition')
    this.refs.ads.addEventListener('webkitTransitionEnd', e => this.end(e, true))
  }
  init (time) {
    this.time = setInterval(() => {
      this.scroll()
    }, time)
  }
  scroll () {
    this.animate && this.go(400, ++this.index)
    if (this.index >= this.state.ads.length) {
      this.index = 0
    }
  }
  go (time, index) {
    this.index = index
    if (index === this.state.ads.length + 1) {
      this.animate = false
      this.time = setTimeout(() => {
        this.animate = true
      }, 100)
    }
    this.refs.ads.style[this.transition] = `all ${time}ms ease`
    this.refs.ads.style[this.transform] = `translate(0, ${-0.4 * index}rem)`
  }
  end (x, state) {
    this.animate = true
    this.refs.ads.removeEventListener('webkitTransitionEnd', this.end)
    state && this.go(0, this.index)
  }
  componentWillUnmount () {
    clearInterval(this.time)
    this.time = null
  }
}
