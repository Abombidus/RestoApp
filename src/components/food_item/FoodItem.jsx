import { useState } from "react"
import { assets } from "../../assets/frontend_assets/assets"
import { TiPlus } from "react-icons/ti"
import { FaCirclePlus } from "react-icons/fa6"
import { FaCircleMinus } from "react-icons/fa6"
import "./foodItem.css"

const FoodItem = ({ id, name, price, description, image }) => {
    const [itemCount, setItemCount] = useState(0)

    return (
        <div className="food-item">
            <div className="food-item-image-container">
                <img className="food-item-image" src={image} alt="" />

                {
                    !itemCount ?
                        <img className="btn-add" onClick={() => { setItemCount(prev => prev + 1) }} src={assets.add_icon_white} /> :
                        <div className="food-item-counter">
                            <img onClick={() => { setItemCount(itemCount - 1) }} src={assets.remove_icon_red} />
                            {/* <FaCircleMinus onClick={() => { setItemCount(itemCount - 1) }} className="facircleMinus" /> */}
                            {/* <button onClick={() => { setItemCount(itemCount - 1) }} className="facircleMinus">-</button> */}
                            <p>{itemCount}</p>
                            {/* <button onClick={() => { setItemCount(itemCount + 1) }} className="facirclePlus">+</button> */}
                            {/* <FaCirclePlus onClick={() => { setItemCount(prev => prev + 1) }} className="facirclePlus" /> */}
                            <img onClick={() => { setItemCount(itemCount + 1) }} src={assets.add_icon_green} />
                        </div>
                }

            </div>

            {/* Info */}
            <div className="food-item-info">
                <div className="food-item-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>

                <p className="food-item-description">{description}</p>
                <p className="food-item-price">{price} FCFA</p>
            </div>
        </div>
    )
}

export default FoodItem
