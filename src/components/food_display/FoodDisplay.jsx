import './foodDisplay.css'
import { food_list } from './../../assets/frontend_assets/assets';
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../food_item/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext)

    return (
        <div className="food-display" id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    return (
                        <FoodItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} />
                    )
                })}
            </div>
        </div>
    )
}

export default FoodDisplay
