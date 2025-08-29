const CartItemCounter = () => {
  return (
    <div className="cart-itemcounter">
      <span className="cart-itemcounter-title">Cantidad</span>
      <div className="cart-addremove">
        <p className="btn">➖</p>
        <p className="quanty">01</p>
        <p className="btn">➕</p>
      </div>
    </div>
  );
};

export default CartItemCounter;
