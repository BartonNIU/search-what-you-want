import React from 'react'
import './Header.scss'
import { Link, useLocation } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

function Header() {
    const location = useLocation()
    return (
        <div className={location.pathname === "/" ? "header-container homepage-header" : "header-container"}>
            <div><Link to="/" className="header-container-logo">SEARCH</Link></div>
            {/* <div><SearchBar /></div> */}
            {/* <div className="header-container-menu"> */}
            <ul className="menu-container">
                <li><Link to="/" className="menu-item">Home</Link></li>
                <li><Link to="/shop" className="menu-item">Shop</Link></li>
            </ul>
            {/* </div> */}
        </div >
    )
}

export default Header
