import {useContext} from "react";
import {CartContext} from "../context/CartContext";

function Cart() {

  const { cart } =
    useContext(CartContext);

  const total =
    cart.reduce(

      (acc, item) =>
        acc + item.price,
      0

    );

  return (

    <div className="p-5">
        <h1 className="text-3xl font-bold mb-5">Carrito</h1>
        
        {
            cart.map(item => (
            <div key={Math.random()} className="flex justify-between border-b py-3">
                <p>{item.name}</p>
                <p>${item.price}</p>
            </div>
            ))
        }
        <h2 className="text-2xl mt-5">Total: ${total}</h2>
    </div>

  );
}

export default Cart;