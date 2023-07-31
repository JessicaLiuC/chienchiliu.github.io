import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box>
    <Box
      sx={{
        maxWidth: "1500px",
        borderTop: "1px solid #7B7365",
        mx: "auto",
        padding: 3,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
        <Typography
          variant="body1"
          sx={{ color: "rgb(106,106,105)", fontWeight: "bold", fontSize: {xs:18, sm: 20, md:26 }}}
        >
          Let's get in touch :{")"}
        </Typography>
        
    </Box>
    <Box
      sx={{
        maxWidth: "1500px",
        mx: "auto",
        display: "flex",
      }}
    >
    <Grid container spacing={{xs:0.5, sm:3, md:3}} columns={{xs:4, sm:3, md:3}} sx={{justifyContent: "center"}}>
      <Grid item>
        <Button href="https://github.com/JessicaLiuC" target="_blank">
          <GitHubIcon sx={{color: "rgb(106,106,105)", fontSize: 40}}/>  
        </Button>
      </Grid>
      <Grid item>
        <Button href="mailto:jessica.tinex@gmail.com" target="_blank">
          <EmailIcon sx={{color: "rgb(106,106,105)", fontSize: 40}}/>
        </Button>
      </Grid>
      <Grid item >
        <Button href="https://www.linkedin.com/in/chienchi/" target="_blank">
          <LinkedInIcon sx={{color: "rgb(106,106,105)", fontSize: 40}}/>
        </Button>
      </Grid>
    </Grid>
    </Box>
    <Box
      sx={{
        maxWidth: "1500px",
        mx: "auto",
        padding: 3,
        display: "flex",
        justifyContent: "space-around",
      }}
    >
    <Typography
      sx={{ color: "black", fontSize: 15, justifyContent: "center"}}
    >
      © Chien-Chi Liu 2023
    </Typography>
    </Box>
    </Box>
  );
};

export default Footer;
