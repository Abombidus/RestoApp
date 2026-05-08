import NavBar from "./components/nav_bar/NavBar"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import { Routes, Route } from 'react-router-dom'
import PlaceOrder from './pages/place_order/PlaceOrder';
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