import React, { useState, useEffect } from 'react'
import Ads from '../../components/Common/ads'
import index from './less/index'
import {
  Link,
} from 'react-router-dom'
import Text from './name.txt'
console.log(Text)
function Home() {
    const [url = '', setUrl] = useState({age: 22});
    useEffect(() => {
      console.log(2221)
    })
   const send = (type) => {
      const xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function(e) {
          if (this.readyState === 4 && this.status == 200) {
              // 打印arraybuffer
               if (type === 'blob') {
                 let a = new FileReader();
                 a.readAsDataURL(this.response)
                 a.onload = function (e){
                  setUrl(e.target.result)
                };
               } else {
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
      xhr.responseType = type;
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
