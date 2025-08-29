import { useContext } from "react";
import { Context } from "../../context/Context";
import CartItemCounter from "./CartItemCounter";
import "./CartContent.css";

const CartElements = () => {
  const { cart, setCart } = useContext(Context);

  const deleteProduct = (_id) => {
    const findId = cart.find((element) => element.id === _id);
    const newCart = cart.filter((element) => {
      return element !== findId;
    });
    setCart(newCart);
  };

  return cart.map((product) => {
    return (
      <>
        <div className="cart-card-container" key={product.id}>
          <img src={product.img} alt={product.name} />
          <div className="cart-card-detail">
            <h3>{product.name}</h3>
            <h4>${product.price}</h4>
            <CartItemCounter />
          </div>
          <h3
            className="cart-btn-delete"
            onClick={() => deleteProduct(product.id)}
          >
            ❌
          </h3>
        </div>
      </>
    );
  });
};

export default CartElements;
