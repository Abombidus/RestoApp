import { menu_list } from "../../assets/frontend_assets/assets"
import "./exploreMenu.css"

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className="explore-menu" id="explore-menu">
            <h1>Explore our menu</h1>
            <p className="explore-menu-text">Choose from diverse menu featuring a delectable array of dishes.Our mission is to satisfy your cravings and elevate your dining experience one delicieuse meal at the time.</p>

            <div className="explore-menu-list">
                {menu_list.map(({ menu_image, menu_name }, index) => {
                    return (
                        <div onClick={() => { setCategory(prev => prev === menu_name ? "all" : menu_name) }} className="explore-menu-list-item" key={index}>
                            <img className={category === menu_name ? "active" : ""} src={menu_image} alt={menu_name} />
                            <p>{menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu
