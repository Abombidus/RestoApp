import React from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import PlaceOrder from './pages/placeOrder/PlaceOrder';



const App = () => {
  return (

    <div className="app">
      < NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>

  )
}

export default App