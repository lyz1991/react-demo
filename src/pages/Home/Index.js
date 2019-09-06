import React, { useState, useEffect } from 'react'
import Ads from '../../components/Common/ads'
import index from './less/index'
import Demo from './demo.html';
console.log('dedddddddd', Demo)
import {
  Link,
} from 'react-router-dom'
import Image from '../../../static/images/mask/huojian.png'
function Home() {
    const [url = '', setUrl] = useState({age: 22});
    useEffect(() => {
      console.log(221222)
    })
   const send = (type) => {
      console.log(Demo)
      const xhr = new XMLHttpRequest()
     xhr.responseType = type;
      xhr.onreadystatechange = function(e) {
        console.log(e)
          if (this.readyState === 4 && this.status == 200) {
            const url = URL.createObjectURL(new Blob(['\uFEFF' +this.response],
              { type: 'application/csv;charset=utf-8' }));
                setUrl(url)
               if (type === 'blob') {
                 let a = new FileReader();
                 a.readAsDataURL(this.response)
                 a.onload = function (e){
                  setUrl(e.target.result)
                };
               } else {
                 console.log('res', this.response)
                  let bytes = new Uint8Array(this.response);
                  console.log('b', bytes)
                  let data = "";
                  let len = bytes.byteLength;
                  for (let i = 0; i < len; i++) {
                  　　data += String.fromCharCode(bytes[i]);
                  }
                  setUrl("data:image/png;base64," + window.btoa(data));
               }
          }
      };
      xhr.open('get', `/${type}`, true);
      // 设置了种类
      xhr.send();

   }
    return (
     <div className ={index.header}>
      <Ads/>
       <img src={url}/>
        <button onClick={() => send('arraybuffer')}>buffer</button>
        <button onClick={ () => send('blob')}>blob</button>
        <Link to="/personal">去个人页</Link>
    </div>
    );
}
export default Home
