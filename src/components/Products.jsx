import { useState, useEffect } from "react";

import { getAllProducts } from "../services/ProductService";

import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);

  const writeAllProducts = () => {
    getAllProducts()
      .then((response) =>
        setProducts(response.data.sort((a, b) => a.productId - b.productId))
      )
      .catch((error) => console.error(error));
  };

  const handleUpdate = (product) => {
    setActiveProduct(product);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    writeAllProducts();
  }, []);

  return (
    <div
      className="products-all-page"
      style={{
        display: "flex",
        minHeight: "calc(100vh - 64px - 64px)",
        marginTop: "64px",
        backgroundColor: "#d5e2ef",
      }}
    >
      <ProductForm
        activeProduct={activeProduct}
        setActiveProduct={setActiveProduct}
        writeAllProducts={writeAllProducts}
      />

      <ProductList writeAllProducts={writeAllProducts}>
        {products.map((product) => (
          <Product
            key={product.productId}
            product={product}
            handleUpdate={handleUpdate}
            writeAllProducts={writeAllProducts}
          />
        ))}
      </ProductList>
    </div>
  );
};

export default Products;
