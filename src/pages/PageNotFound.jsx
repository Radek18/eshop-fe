import { Typography } from "@mui/material";

const PageNotFound = () => {
  return (
    <div
      className="page-not-found-all-page"
      style={{
        minHeight: "calc(100vh - 64px - 64px)",
        display: "flex",
        marginTop: "64px",
      }}
    >
      <Typography className="page-not-found" variant="h6" margin="20px">
        Page not found!
      </Typography>
    </div>
  );
};

export default PageNotFound;
