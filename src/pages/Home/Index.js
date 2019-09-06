import React, { useState, useEffect } from 'react'
import Ads from '../../components/Common/ads'
import index from './less/index'
import {
  Link,
} from 'react-router-dom'
function Home() {
    const [count, setCount] = useState({age: 22});
    useEffect(() => {
      console.log(21)
    })
    setTimeout(() => {
      setCount({age: 35})
    }, 3000)
    return (
     <div className ={index.header}>
      <Ads/>
       <p onClick={() => {
         setCount({age: count.age + 1})
       }}>次数{ count.age }</p>
        <img src="../../static/images/mask/huojian.png"/>
        <Link to="/personal">去个人页</Link>
    </div>
    );
}
export default Home
