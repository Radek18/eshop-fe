import { deleteProductsNotForSale } from "../services/ProductService";

import {
  Button,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

const ProductList = ({
  children,
  writeAllProducts,
  isLoading,
  setIsLoading,
}) => {
  const removeProductsNotForSale = () => {
    setIsLoading(true);
    deleteProductsNotForSale()
      .then(() => writeAllProducts())
      .catch((error) => console.error(error));
  };

  return (
    <Paper
      className="product-list"
      elevation={3}
      align="center"
      sx={{
        margin: "15px",
        padding: "15px",
        flex: "1",
        backgroundColor: "#c2daf2",
      }}
    >
      <Typography
        className="product-list-header"
        variant="h4"
        marginBottom="20px"
        fontWeight="bold"
      >
        Seznam produktů
      </Typography>

      <Button
        className="delete-not-for-sale-products-button"
        onClick={() => removeProductsNotForSale()}
        variant="contained"
        color="primary"
        sx={{ width: "290px", marginBottom: "20px" }}
      >
        Odstranit produkty, které nejsou skladem
      </Button>

      {isLoading ? (
        <div>
          <CircularProgress sx={{ m: "50px" }} />
        </div>
      ) : (
        <Grid
          className="product-list-grid"
          container
          justifyContent="center"
          sx={{ gap: "20px" }}
        >
          {children}
        </Grid>
      )}
    </Paper>
  );
};

export default ProductList;
