import React from 'react'
import Ads from '../Common/ads'
import Banner from '../Common/Banner'
import Form from './child/index_form'
import index from './less/index'
let channel = localStorage.getItem('channel')
window.zhuge.track(`${channel}|注册页面|展示`)
const Home = ({history, phone, customerId}) => (
  <div className ={index.header}>
    <Banner history={history}/>
    <Ads/>
    <Form history={history} customerId={customerId}/>
  </div>
)
export default Home
