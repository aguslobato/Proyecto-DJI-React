import Home from './pages/Home'
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import {Routes, Route} from "react-router-dom";
import './App.css'
import Footer from './components/layaout/Footer';
import Products from './pages/Products';
import Navbar from './components/layaout/Navbar';

function App() {

  return (

    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/producto/:categorySlug/:slug" element={<ProductDetail />} />
        <Route path="/products" element={<Products/>}/>
      </Routes>
      <Footer/>
    </>

  );
}

export default App;