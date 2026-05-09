import './navbar.css'
import { assets } from './../../assets/frontend_assets/assets';
import { useState } from 'react';

function Navbar() {

    const [active, setActive] = useState("home")
    return (
        <div className='navbar'>
            <img src={assets.logo} alt="logo" className='logo' />
            <ul className="navbar-menu">
                <li className={active === "home" ? 'active' : ""} onClick={() => { setActive("home") }}>Home</li>
                <li className={active === "menu" ? 'active' : ""} onClick={() => { setActive("menu") }}>Menu</li>
                <li className={active === "mobile-app" ? 'active' : ""} onClick={() => { setActive("mobile-app") }}>Mobile-app</li>
                <li className={active === "contact-us" ? 'active' : ""} onClick={() => { setActive("contact-us") }}>Contact-us</li>
            </ul>

            <div className='navbar-right'>
                <img src={assets.search_icon} alt="search-icon" />

                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="basket-icon" />

                    <div className="dot"></div>
                </div>
                <button>Sign in</button>
            </div>

        </div>
    )
}

export default Navbar
