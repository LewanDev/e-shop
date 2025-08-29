import { useContext } from "react";
import { Context } from "../../context/Context";

const CartTotal = () => {
  const { cart, clearCart } = useContext(Context);

  const total = cart.reduce(
    (acc, element) => acc + element.price * element.quanty,
    0
  );
  return (
    <div className="cart-total">
      <span>Total a pagar: ${total}</span>
      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
};

export default CartTotal;
