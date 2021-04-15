import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { ProductsContext } from "../../contexts/ProductsContext";

const ProductsGrid = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <div>
        {products.title.map((product) => (
          <ProductItem key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
