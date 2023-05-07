import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import movieTrailer from 'movie-trailer'
import Youtube from 'react-youtube'

function RowPost(props) {
    const [cards, setCards] = useState([])
    const { title, url } = props
    // const [displayStyle,setDisplayStyle] = useState(false)
    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setCards(res.data.results)
            }).catch((err) => console.log(err));
    }, [url])

    // const [key, setKey] = useState("")
    const [trailer, setTrailer] = useState("")
    const handleTrailer = (data) => {
        if(trailer){
            setTrailer("")
        }else{
            movieTrailer(data ? data.title : "").then((url)=>{              
                const urlParms = new URLSearchParams(new URL(url).search)
                const key = urlParms.get("v");
                setTrailer(key);     
            })
        }
    }
    const opts = {
        width: '1000px',
        height:'300px',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    // const handleHover = ()=>{
    //     setDisplayStyle(true)
    // }

    return (
        <div className='row'>
            <h1 className="title">
                {title}
            </h1>
            <div className="cards">
                {cards.map((items, indx) => {
                    return (
                        <div style={
                            { backgroundImage: items ? `url("https://image.tmdb.org/t/p/original${props.poster ? items.poster_path : items.backdrop_path}")` : null }
                        }  key={indx} onClick={() => { handleTrailer(items) }} className={props.class}  >

                            
                            {  props.showDetails ? <div className="card-content">
                                {/* <span style={displayStyle ?{display:'flex'} : {display:'none'}}>Click To Play</span> */}
                                <div>
                                    <h1>{items.title}</h1>
                                    <p>{items.overview}</p>
                                </div>
                                
                            </div> : null }

                        </div>
                    );
                })}
            </div>
                <div className="video-container">
                    { trailer && <Youtube videoId={trailer} opts={opts} />}
                </div>
        </div>
    )
}

export default RowPost