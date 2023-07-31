import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import Pdf from "/Users/jessicaliu/Desktop/portfolio/src/resume_JessicaL (2).pdf";

const Navbar = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    color: "#7B7365",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
    },
  }));

  const CustomToolbar = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  }));

  const navigate = useNavigate();

  
  return (
    <Box sx={{ flexGrow: 1, px: 5, py: 2, maxWidth: "1500px", mx: "auto" }}>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <CustomToolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#7B7365"}}>
              <Button onClick={() => navigate("/")} sx={{ flexGrow: 1, color: "#7B7365", fontSize: 23}}>
                ᑕᕼIEᑎ ᑕᕼI
              </Button>
            </Typography>
          </Box>


          <CustomBox>
            <Button style={{textTransform: 'none'}} onClick={() => navigate("/")} sx={{ flexGrow: 1, color: "#7B7365", fontSize: 18}}>
              Projects
            </Button>
            <Button style={{textTransform: 'none'}} onClick={() => navigate("/about")} sx={{ flexGrow: 1, color: "#7B7365", fontSize: 18}}>
              About
            </Button>
            <Button style={{textTransform: 'none'}} href={Pdf} target="resume_JessicaL.pdf" sx={{ flexGrow: 1, color: "#7B7365", fontSize: 18}}>
              Resume
            </Button>
          </CustomBox>

        </CustomToolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;