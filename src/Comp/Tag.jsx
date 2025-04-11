import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner';

const Tag = () => {
    
    const [gif, setgif]=useState();
    const apiKey = "eSILGxhnKTaeqe2QIXZAhACGv0Iosx9S"; 
    const [loader,setloader]=useState(false);
    const [tag,settag]=useState('');

    async function data(){
      
        setloader(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}`;         
        const udata=await axios(url);
        // console.log(udata.data.data.images.downsized_large.url)
        setgif(udata.data.data.images.downsized_large.url);
        setloader(false);

     }

     useEffect(()=>{
         data()
     },[])

    function clickhandler(){
        data();
    }
  return (
    <div className='meme2'>
      <div className='hd'>RANDOM {tag} GIF</div>

      <div>
      {
      loader? (<Spinner/>):(<img src={gif}></img> )
      } 
      </div>
      
      <input
        className='inp'
        onChange={(event)=>(settag(event.target.value))}
        value={tag}
      />
      <button onClick={clickhandler}>Generate</button>
    </div>
  )
}

export default Tag
