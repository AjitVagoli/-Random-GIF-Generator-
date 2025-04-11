import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner';

const Meme = () => {
    
    const [gif, setgif]=useState();
    const apiKey = "eSILGxhnKTaeqe2QIXZAhACGv0Iosx9S"; 
    const [loader,setloader]=useState(false)

    async function data(){
        setloader(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=g`;         
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
    <div className='meme'>
      <div className='hd'>A RANDOM GIF</div>

      <div>
      {
      loader? (<Spinner/>):(<img src={gif}></img> )
      } 
      </div>
      
      <button onClick={clickhandler}>Generate</button>
    </div>
  )
}

export default Meme
