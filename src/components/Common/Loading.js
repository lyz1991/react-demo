import React from 'react'
import loading from './less/loading.less'
import { inject } from 'mobx-react'
const Loading = ({state}) => (
  <div id={loading.loading} style={{'display': state ? 'block' : 'none'}}>
    <div id={loading.loading_center}>
      <div id={loading.loading_center_absolute}>
        <div className={loading.object} id={loading.object_one}></div>
        <div className={loading.object} id={loading.object_two}></div>
        <div className={loading.object} id={loading.object_three}></div>
        <div className={loading.object} id={loading.object_four}></div>
      </div>
    </div>
  </div>
)
export default inject(
({App}) => ({
  state: App.Loading}
))(Loading)
