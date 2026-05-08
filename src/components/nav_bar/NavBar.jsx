import './navBar.css'
import { assets } from '../../assets/frontend_assets/assets';
import { useState } from 'react';

const NavBar = () => {
    const [menu, setMenu] = useState("home")
    return (
        <div className='navBar'>
            <img src={assets.logo} alt="Home Logo" className="logo" />

            <ul className="navBar-menu">
                <li className={menu === 'home' ? "active" : ""} onClick={() => { setMenu("home") }}>Home</li>
                <li className={menu === 'menu' ? "active" : ""} onClick={() => { setMenu("menu") }}>Menu</li>
                <li className={menu === 'mobile-app' ? "active" : ""} onClick={() => { setMenu("mobile-app") }}>Mobile-app</li>
                <li className={menu === 'contact-us' ? "active" : ""} onClick={() => { setMenu("contact-us") }}>Contact-us</li>
            </ul>

            <div className="navBar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navBar-search-icon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button>Sign in</button>
            </div>
        </div>
    )
}

export default NavBar
