import React from 'react'
import Ads from '../Common/ads'
import index from './less/index'
let channel = localStorage.getItem('channel')
const Home = ({history, phone, customerId}) => (
  <div className ={index.header}>
    <Ads/>
      <p>11</p>
  </div>
)
export default Home
