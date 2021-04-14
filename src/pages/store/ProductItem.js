import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const ProductItem = ({ product }) => {
  const { addProduct, cartItems, increase } = useContext(CartContext);

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <div className="card card-body">
      <p>{product.name}</p>
      <div className="text-right">
        {isInCart(product) && (
          <button
            onClick={() => increase(product)}
            className="btn btn-outline-primary btn-sm"
          >
            Add more
          </button>
        )}

        {!isInCart(product) && (
          <button
            onClick={() => addProduct(product)}
            className="btn btn-primary btn-sm"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
