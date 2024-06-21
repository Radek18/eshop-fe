import { useNavigate } from "react-router-dom";

import { AppBar, Toolbar, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const Header = () => {
  const navigator = useNavigate();

  const navigateHome = () => {
    navigator("");
  };

  return (
    <AppBar>
      <Toolbar className="header" sx={{ height: "64px" }}>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          eshop
        </Typography>

        <HomeIcon
          className="home-icon"
          fontSize="large"
          onClick={navigateHome}
          cursor="pointer"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
