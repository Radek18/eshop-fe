import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "64px",
        backgroundColor: "#1976d2",
        color: "white",
      }}
    >
      <Typography className="footer-text" variant="h6">
        &copy; 2024 Radek
      </Typography>
    </div>
  );
};

export default Footer;
