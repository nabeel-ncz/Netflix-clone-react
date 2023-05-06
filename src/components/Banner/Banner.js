import React from 'react'
import './Banner.css'

function Banner() {

  return (
    <div className='banner'>
        <div className="content">
            <h1 className="title">Mortal Kombat</h1>
            <div className="banner-buttons">
                <button>play</button>
                <button>my list</button>
            </div>
            <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eaque eum laborum nesciunt 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eaque eum laborum nesciunt
            </div>
        </div>
        <div className="bottom-fade">
        </div>
    </div>
  )
}

export default Banner