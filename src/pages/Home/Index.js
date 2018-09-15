import React from 'react'
import Ads from '../../components/Common/ads'
import index from './less/index'
let channel = localStorage.getItem('channel')
import {
  Link,
} from 'react-router-dom'
const Home = ({history, phone, customerId}) => (
  <div className ={index.header}>
    <Ads/>
      <img src="../../static/images/mask/huojian.png"/>
      <Link to="/personal">去个人页</Link>
  </div>
)
export default Home
