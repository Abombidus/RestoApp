import "./navBar.css"
import { assets } from "../../assets/frontend_assets/assets"
import { useState } from "react"

function NavBar() {

    const [focus, setFocus] = useState("Home")
    return (
        <>
            <div className="navbar">
                <img src={assets.logo} alt="logo" className="logo" />

                {/* Navbar LIst Menu */}
                <ul className="navbar-menu">
                    <li className={focus === "Home" ? "active" : ""} onClick={() => setFocus("Home")}>Home</li>
                    <li className={focus === "Menu" ? "active" : ""} onClick={() => setFocus("Menu")}>Menu</li>
                    <li className={focus === "Mobile-App" ? "active" : ""} onClick={() => setFocus("Mobile-App")}>Mobile-App</li>
                    <li className={focus === "Contact Us" ? "active" : ""} onClick={() => setFocus("Contact Us")}>Contact Us</li>
                </ul>

                {/* Navbar Right Section */}
                <div className="navbar-right">
                    <img src={assets.search_icon} alt="search" />
                    <div className="navbar-search-icon">
                        <img src={assets.basket_icon} alt="search" />
                        <div className="dot"></div>
                    </div>
                    <button>Sign In</button>
                </div>
            </div>
        </>
    )
}

export default NavBar
