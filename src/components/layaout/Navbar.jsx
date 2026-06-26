import { Link }from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../../context/CartContext";
import '../components.css'
import logo from '../../media/logo.png'

function Navbar() {

  const { cart } =
    useContext(CartContext);

  return (

    <nav className="navbar py-2">
       <div className="container">
            <ul className="p-0">
                <Link className="nav-item" to="/"><img src={logo} className="img-fluid logo" alt="" /></Link>
                <Link className="nav-item" to="/">Camera Drones</Link>
                <Link className="nav-item" to="/">Handheld</Link>
                <Link className="nav-item" to="/">Lifestyle Tech</Link>
                <Link className="nav-item" to="/">Specialized</Link>
                <Link className="nav-item" to="/">Explore</Link>
                <Link className="nav-item" to="/">Support</Link>
                <Link className="nav-item" to="/">Where to Buy</Link>
            </ul>
            <div>
                <Link className="nav-item btn d-flex" to="/cart"><span><i class="bi bi-cart3 me-1"></i></span><p className="cantidad-carrito">({cart.length})</p></Link>                
            </div>
        </div>
    </nav>

  );
}

export default Navbar;