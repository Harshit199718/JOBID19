import React from 'react'
import './header.styles.scss'

function Header() {
    return (
        <div className='header'>
            <div className="logo_container">
                <h2 className='logo'>ABC.com</h2>
            </div>
            <nav className='nav'>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
