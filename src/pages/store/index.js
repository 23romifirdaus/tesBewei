import React from "react";
import Layout from "../../components/Layout";

import ProductsGrid from "./ProductsGrid";

const Store = () => {
  return (
    <Layout title="Bewei" description="Romi Firdaus Lazuardi">
      <div>
        <div className="text-center mt-5">
          <h1>Bewei</h1>
          <p>Romi Firdaus Lazuardi</p>
        </div>
        <ProductsGrid />
      </div>
    </Layout>
  );
};

export default Store;
