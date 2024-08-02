import { useState, useEffect } from "react";

import { getAllProducts } from "../services/ProductService";

import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import Product from "../components/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllProducts = async () => {
    setIsLoading(true);

    try {
      const response = await getAllProducts();
      setProducts(response.data.sort((a, b) => a.productId - b.productId));
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = (product) => {
    setActiveProduct(product);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    fetchAllProducts();
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
        fetchAllProducts={fetchAllProducts}
        setIsLoading={setIsLoading}
      />

      <ProductList
        fetchAllProducts={fetchAllProducts}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      >
        {products.map((product) => (
          <Product
            key={product.productId}
            product={product}
            handleUpdate={handleUpdate}
            fetchAllProducts={fetchAllProducts}
            setIsLoading={setIsLoading}
          />
        ))}
      </ProductList>
    </div>
  );
};

export default Products;
