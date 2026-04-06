import { createContext, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets.js";

export const StoreContext = createContext()

const StoreContextProvider = (props) => {

    const [itemBox, setItemBox] = useState({})


    const addItemInBox = (itemId) => {
        if (!itemCard[itemId]) {
            setItemCard((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setItemCard((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeItemFromBox = () => {

    }

    const contextValue = {
        food_list
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider