import './home.css'
import Header from '../../components/header/Header'
import ExploreMenu from "../../components/explore_Menu/ExploreMenu"
import { useState } from 'react'
import FoodDisplay from './../../components/food_display/FoodDisplay';

const Home = () => {
    const [category, setCategory] = useState("all");
    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
        </div>
    )
}

export default Home
