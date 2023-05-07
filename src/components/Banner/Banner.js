import React,{useEffect, useState} from 'react'
import './Banner.css'
import axios from '../../axios'
import { Trending } from '../../urls/Urls'


function Banner() {
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const [image,setImage] = useState("")
    useEffect(()=>{
        axios.get(Trending).then((res)=>{
            const random = Math.floor(Math.random() * res.data.results.length)
            setImage(res.data.results[random].backdrop_path)
            setTitle(res.data.results[random].title)
            setDesc(res.data.results[random].overview)
        })
    },[])

    

  return (
    <div style={
        {backgroundImage:`url(https://image.tmdb.org/t/p/original${image ? image : 'url("https://cdn.flickeringmyth.com/wp-content/uploads/2021/03/Mortal-Kombat-banner.jpg")'})`}
    } className='banner'>
        <div className="top_fade"></div>
        <div className="content">
            <h1 className="title">{title ? title : "Movie Name"}</h1>
            <div className="banner-buttons">
                <button>play</button>
                <button>my list</button>
            </div>
            <div className="description">
                {desc ? desc : "Overview"}
            </div>
        </div>
        <div className="bottom-fade">
        </div>
    </div>
  )
}

export default Banner