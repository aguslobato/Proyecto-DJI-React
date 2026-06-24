import {useParams} from "react-router-dom";
import {products} from "../data/products";
import {useContext} from "react";
import {CartContext} from "../context/CartContext";
  
function ProductDetail() {

  const { id } =
    useParams();

  const {
    addToCart
  } =
    useContext(CartContext);

  const product =
    products.find(
      p =>
      p.id === Number(id)
    );

  return (

    <div className="p-10">
        <img src={product.image} className="img-fluid"/>
        <h1 className="text-4xl font-bold mt-5">{product.name}</h1>
        <p className="text-2xl mt-3">${product.price}</p>
        <button onClick={() => addToCart(product)} className="bg-green-600 text-white px-5 py-3 rounded mt-5">Agregar al carrito</button>
    </div>

  );
}

export default ProductDetail;