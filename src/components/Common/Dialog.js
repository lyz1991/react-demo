import React from 'react'
import { inject } from 'mobx-react'
import dialog from './less/dialog.less'
import { hideDialog } from '../../redux/actions/index'
const Dialog = ({state, text, btns, history}, ...rest) => (
  <div className={dialog.container} style={{'display': state ? 'block' : 'none'}}>
  <div className={dialog.dialog}>
    <div dangerouslySetInnerHTML={text}/>
    <div className={dialog.btncontainer}>
      {btns.map((el, index) => {
        return <button key={index} className={dialog.btn} onClick={() => {
          el.callback && el.callback()
          hideDialog()
        }}>{el.text}</button>
      })}
    </div>
  </div>
  </div>
)
const mapStateToProps = ({App}) => {
  return {
    state: App.dialog.state,
    text: App.dialog.text,
    btns: App.dialog.btns
  }
}
export default connect(mapStateToProps)(Dialog)
