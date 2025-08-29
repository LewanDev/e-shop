import Navbar from "../NavBar/Navbar"
import CartElements from "./CartElements"
import CartTotal from "./CartTotal"

const CartContent = () => {
  return (
    <>
      <Navbar />
      <CartElements />
      <CartTotal />
    </>
  )
}

export default CartContent