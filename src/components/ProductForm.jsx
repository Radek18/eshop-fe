import { useEffect, useState } from "react";

import { createProduct, updateProduct } from "../services/ProductService";

import {
  Box,
  Button,
  FormControlLabel,
  Checkbox,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const ProductForm = ({
  activeProduct,
  setActiveProduct,
  fetchAllProducts,
  setIsLoading,
}) => {
  const [productId, setProductId] = useState(null);
  const [partNo, setPartNo] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [forSale, setForSale] = useState(true);
  const [price, setPrice] = useState("");

  const saveProduct = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    const product = { partNo, name, description, forSale, price };

    try {
      await createProduct(product);
      fetchAllProducts();
      setPartNo("");
      setName("");
      setDescription("");
      setForSale(true);
      setPrice("");
    } catch (error) {
      console.error(error.message);
    }
  };

  const modifyProduct = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    const product = { productId, partNo, name, description, forSale, price };

    try {
      await updateProduct(productId, product);
      fetchAllProducts();
      setActiveProduct(null);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    setProductId(activeProduct ? activeProduct.productId : null);
    setPartNo(activeProduct ? activeProduct.partNo : "");
    setName(activeProduct ? activeProduct.name : "");
    setDescription(activeProduct ? activeProduct.description : "");
    setForSale(activeProduct ? activeProduct.forSale : true);
    setPrice(activeProduct ? activeProduct.price : "");
  }, [activeProduct]);

  return (
    <Paper
      className="product-form"
      elevation={3}
      sx={{ p: "15px", backgroundColor: "#c2daf2" }}
    >
      <Typography
        className="product-form-header"
        variant="h4"
        align="center"
        marginBottom="20px"
        fontWeight="bold"
      >
        {activeProduct ? "Aktualizovat produkt" : "Přidat nový produkt"}
      </Typography>

      <Box
        className="product-form-inputs"
        sx={{
          "& > :not(style)": { m: "8px" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          className="product-form-part-no"
          label="Kód"
          value={partNo}
          onChange={(event) => setPartNo(event.target.value)}
          variant="outlined"
          sx={{ borderRadius: "5px", backgroundColor: "#d5e2ef" }}
        />

        <TextField
          className="product-form-name"
          label="Název produktu"
          value={name}
          onChange={(event) => setName(event.target.value)}
          variant="outlined"
          multiline
          sx={{ borderRadius: "5px", backgroundColor: "#d5e2ef" }}
        />

        <TextField
          className="product-form-description"
          label="Popis produktu"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          variant="outlined"
          multiline
          sx={{ borderRadius: "5px", backgroundColor: "#d5e2ef" }}
        />

        <TextField
          className="product-form-price"
          label="Cena"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          variant="outlined"
          sx={{ borderRadius: "5px", backgroundColor: "#d5e2ef" }}
        />

        <FormControlLabel
          className="product-form-for-sale"
          label="Skladem"
          control={
            <Checkbox
              checked={forSale}
              onChange={(event) =>
                event.target.checked ? setForSale(true) : setForSale(false)
              }
            />
          }
        />

        <Button
          className="product-form-submit-button"
          onClick={activeProduct ? modifyProduct : saveProduct}
          variant="contained"
          color="primary"
          sx={{ width: "290px", height: "50px", alignSelf: "center" }}
        >
          {activeProduct ? "Aktualizovat" : "Přidat"}
        </Button>
      </Box>
    </Paper>
  );
};

export default ProductForm;
