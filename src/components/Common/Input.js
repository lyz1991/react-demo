import React from 'react'
import input from './less/input.less'
class Check extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      state: props.state
    }
  }
  render () {
    return (
      <div className={this.props.className}>
        {this.props.type == 'radio'
          ? <MyRadio {...this.props} change={
            () => {
              this.change()
            }
          }/>
          : <MyCheck {...this.props} change={
            () => {
              this.change()
            }
          }/>}
      </div>
    )
  }
  change () {
    this.setState({
      state: !this.state.state
    })
  }
}
const MyRadio = ({shape, change, state}) => (
  <input type="radio" className={shape} defaultChecked = {state} onChange={() => {
    change()
  }}/>
)
const MyCheck = ({shape, change, state}) => (
  <input type="checkbox" className={shape} defaultChecked = {state} onChange={() => {
    change()
  }} />
)
export default Check
