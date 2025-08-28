import { useContext } from "react";
import { Context } from "../../context/Context";
import './CartContent.css'

const CartElements = () => {
  const { cart } = useContext(Context);

  return cart.map((product) => {
    return <>
    <div className="product-card-container" key={product.id}>
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <h4>${product.price}</h4>
    </div>
    </>;
  });
};

export default CartElements;
