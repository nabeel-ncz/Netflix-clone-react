import React from 'react'
import './Header.css'
function Header() {
    return (
        <div className='header'>
            <div className="logo">
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            </div>
            <div className="links">
                <span>Home</span>
                <span>Movies</span>
                <span>Tv Shows</span>
                <span>Recently Added</span>
            </div>
            <div className="right">
                <i className='bx bx-search-alt-2'></i>
                <i className='bx bx-bell' ></i>
                <i className='bx bx-user-circle' ></i>
            </div>
        </div>
    )
}

export default Header