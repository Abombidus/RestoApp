import "./home.css"
import Header from './../../components/header/Header';
import ExploreMenu from './../../components/explore_menu/ExploreMenu';
import { useState } from "react";
import FoodDisplay from './../../components/food_display/FoodDisplay';

const Home = () => {
    const [category, setCategory] = useState("all")
    return (
        <div className="home">
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} setCategory={setCategory} />
        </div>
    )
}

export default Home
