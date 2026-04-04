import { menu_list } from "../../assets/frontend_assets/assets"
import "./exploreMenu.css"

const ExploreMenu = () => {
    return (
        <div className="explore-menu" id="explore-menu">
            <h1>Explore our menu</h1>
            <p className="explore-menu-text">Choose from diverse menu featuring a delectable array of dishes.Our mission is to satisfy your cravings and elevate your dining experience one delicieuse meal at the time.</p>

            <div className="explore-menu-list">
                {menu_list.map(({ menu_image, menu_name }, index) => {
                    return (
                        <div className="explore-menu-list-item" key={index}>
                            <img src={menu_image} alt={menu_name} />
                            <h3>{menu_name}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ExploreMenu
