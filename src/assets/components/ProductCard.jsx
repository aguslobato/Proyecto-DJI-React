import { Link }
from "react-router-dom";

function ProductCard({
  product
}) {

  return (

    <div className="col-12 col-md-4">
        <div className="card-product card border rounded-xl py-4 px-0 shadow h-100">
            <img src={product.image} alt={product.name} className="img-fluid h-100"/>
            <div className="px-4">
                <h2 className="text-xl font-bold mt-3"> {product.name}</h2>
                <p>${product.price}</p>
                <Link to={`/product/${product.id}`}>
                    <button className="bg-black text-white px-4 py-2 mt-3 rounded">Ver producto</button>
                </Link>                      
            </div>
        </div>
    </div>

  );
}

export default ProductCard;