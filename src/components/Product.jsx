import { Link } from "react-router-dom";

import { deleteProduct } from "../services/ProductService";

import { Button, Paper, Stack, Typography } from "@mui/material";

const Product = ({ product, handleUpdate, fetchAllProducts, setIsLoading }) => {
  const removeProduct = async (productId) => {
    setIsLoading(true);

    try {
      await deleteProduct(productId);
      fetchAllProducts();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Paper
      className="one-product"
      key={product.productId}
      direction="column"
      elevation={3}
      sx={{
        width: "290px",
        p: "10px",
        backgroundColor: "#d5e2ef",
      }}
    >
      <Typography
        className="one-product-part-no"
        variant="subtitle2"
        align="left"
      >
        Kód {product.partNo}
      </Typography>

      <Typography
        className="one-product-name"
        variant="h5"
        m="10px"
        fontWeight="bold"
      >
        <Link
          to={`/product-detail/${product.productId}`}
          style={{ color: "black" }}
        >
          {product.name}
        </Link>
      </Typography>

      <Typography className="one-product-price" variant="h6" fontWeight="bold">
        {Math.round(product.price).toLocaleString("cs-CZ")} Kč
      </Typography>

      <Typography
        className="one-product-for-sale"
        variant="h6"
        color={product.forSale ? "green" : "red"}
      >
        Skladem: {product.forSale ? "ANO" : "NE"}
      </Typography>

      <Stack
        className="one-product-buttons"
        spacing={2}
        direction="row"
        justifyContent="center"
        m="20px"
      >
        <Button
          className="one-product-update-product-button"
          onClick={() => handleUpdate(product)}
          variant="contained"
          color="primary"
        >
          Aktualizovat
        </Button>

        <Button
          className="one-product-delete-product-button"
          onClick={() => removeProduct(product.productId)}
          variant="contained"
          color="primary"
        >
          Odstranit
        </Button>
      </Stack>
    </Paper>
  );
};

export default Product;
