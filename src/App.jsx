import Navbar from "./assets/components/Navbar";
import Home from "./assets/pages/Home";
import Cart from "./assets/pages/Cart";
import ProductDetail from "./assets/pages/ProductDetail";
import {Routes, Route} from "react-router-dom";
import './App.css'

function App() {

  return (

    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/product/:id" element={<ProductDetail />}/>
      </Routes>
    </>

  );
}

export default App;