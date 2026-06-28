import Home from './pages/Home'
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import {Routes, Route} from "react-router-dom";
import './App.css'
import Footer from './components/layaout/Footer';
import Navbar from './components/layaout/Navbar';

function App() {

  return (

    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/product/:id" element={<ProductDetail />}/>
      </Routes>
      <Footer/>
    </>

  );
}

export default App;