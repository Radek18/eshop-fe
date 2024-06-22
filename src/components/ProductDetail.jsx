import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getProduct } from "../services/ProductService";

import { Paper, Typography } from "@mui/material";

const ProductDetail = () => {
  const [partNo, setPartNo] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [forSale, setForSale] = useState("");
  const [price, setPrice] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getProduct(id)
      .then((response) => {
        setPartNo(response.data.partNo);
        setName(response.data.name);
        setDescription(response.data.description);
        setForSale(response.data.forSale);
        setPrice(response.data.price);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div
      className="product-detail-all-page"
      style={{
        minHeight: "calc(100vh - 64px - 64px)",
        display: "flex",
        marginTop: "64px",
      }}
    >
      <Paper
        className="product-detail"
        elevation={3}
        align="center"
        sx={{ flex: 1, m: "15px", p: "15px", backgroundColor: "#c2daf2" }}
      >
        <Typography
          className="product-detail-part-no"
          variant="subtitle1"
          align="left"
        >
          Kód {partNo}
        </Typography>

        <Typography
          className="product-detail-name"
          variant="h3"
          marginBottom="50px"
          fontWeight="bold"
        >
          {name}
        </Typography>

        <Typography
          className="product-detail-description"
          variant="subtitle1"
          marginBottom="50px"
        >
          {description}
        </Typography>

        <Typography
          className="product-detail-price"
          variant="h6"
          marginBottom="50px"
          fontWeight="bold"
        >
          {Math.round(price).toLocaleString("cs-CZ")} Kč
        </Typography>

        <Typography
          className="product-detail-for-sale"
          variant="h6"
          color={forSale ? "green" : "red"}
        >
          Skladem: {forSale ? "ANO" : "NE"}
        </Typography>
      </Paper>
    </div>
  );
};

export default ProductDetail;
