import { useContext, useState, useEffect } from "react";
import { Context } from "../../context/Context";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addProduct } = useContext(Context);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return products.map((product) => {
    return (
      <div className="card" key={product.id}>
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <h4>${product.price}</h4>
        <p>{product.desc}</p>
        <button onClick={() => addProduct(product)}>Comprar</button>
      </div>
    );
  });
};

export default Products;
