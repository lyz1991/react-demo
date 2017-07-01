import React from 'react'
import { inject } from 'mobx-react'
import { enterNav } from '../../redux/actions/index'
import {
  Link
} from 'react-router-dom'
import footer from './less/footer.less'
const Footer = ({footers, state}) => (
  <footer style={{'display': state ? 'flex' : 'none'}}>
    {(footers).map((el, index)=> (
      <div className={`${footer.item} ${el.active ? `${footer.active}` : ''}`} key={index} onClick={() => {enterNav(index)}}>
        <Link to={el.path} replace>{el.text}</Link></div>)
    )}
  </footer>
)
export default inject(({App}) => ({
  state: App.footers.state,
  footers: App.footers.items
}))(Footer)