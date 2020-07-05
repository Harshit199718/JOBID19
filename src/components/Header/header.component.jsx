import React,{useState} from 'react'
import './header.styles.scss'

function Header() {

    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className='header'>
            <div className="logo_container">
                <h2 className='logo'>ABC.com</h2>
            </div>
            <i className="fa fa-bars" onClick={() => setMenuOpen(!menuOpen)}></i>
            <nav className='nav'>
                <ul className={menuOpen?'height-auto':''}>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Sign Up</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
