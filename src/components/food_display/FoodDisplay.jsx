import "./foodDisplay.css"
import { StoreContext } from "../../context/StoreContext"
import { food_list } from './../../assets/frontend_assets/assets';
import { useContext } from "react";
import FoodItem from "../food_item/FoodItem";

const FoodDisplay = () => {

  const { food_list } = useContext(StoreContext)
  return (
    <div className="food-display">
      <h2>Top dishes near you</h2>

      <div className="food-display-list">
        {food_list.map(({ _id, name, image, price, description, category }, index) => {
          return (
            <FoodItem key={index} id={_id} name={name} image={image} description={description} price={price} />
          )
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
