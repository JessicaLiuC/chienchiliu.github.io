import CardCover from "@mui/joy/CardCover";
import Card from '@mui/joy/Card';
import Chip from "@mui/material/Chip";
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import CardOverflow from '@mui/joy/CardOverflow';
import AspectRatio from '@mui/joy/AspectRatio';


const Project = ({path, background, title, tags, img2}) => {
  const navigate = useNavigate();
  return (
  <Button onClick={() => navigate(`${path}`)} >
  <Card 
    orientation= "horizontal"
    sx={{
      width: 1500, 
      margin: "1.5%", 
      mb: 3, //when more project, change width to 600
      height: {
        xs: 300, 
        sm: 300,
        md: 700, //when more project, change to 550
      },
      backgroundColor: {background},
  }}>
    {/* <CardOverflow>
    <AspectRatio ratio="1" sx={{
      width: {
        xs: "100%",
        sm: "40%",
        md: "40%"
      }, 
      height: "auto",
      }}>

      <img
        src={img}
        loading="lazy"
      />

    </AspectRatio>
    </CardOverflow> */}
  
    <CardCover sx={{
      width: {
        xs: "100%",
        sm: "60%",
        md: "60%"
      }, 
      height: {
        xs: "85%",
        sm: "auto",
        md: "auto"
      },
      ml: {
        xs: "0%",
        sm: "40%",
        md: "40%"
      },
      mt: {
        xs: "25%",
        sm: "auto",
        md: "auto"
      }
      }}>

      <img
        src={img2}
        loading="lazy"
      />

    </CardCover>
  
    {/* <CardCover
      sx={{
        background:
          'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
      }}
    /> */}
    <CardContent sx={{ justifyContent: { xs:'start', sm:'center', md:'center'}, display: "flex"}}>
      <Grid container columns={{ xs: 1, sm: 2, md: 2}}>
        <Grid item xs={4.5} md={8} >
          <Typography 
            sx={{
              width: {
                xs:"100%",
                sm:"40%",
                md:"40%"},
              fontSize:{
                xs:"1rem",
                sm:"3rem",
                md:"3rem"
              },
              p:1,
              textAlign:{
                xs:"center",
                sm:"left",
                md:"left"
              },
              mb:{
                xs:"1%",
                sm:"auto",
                md:"auto"
              }
              }}
            textColor="#5B554B"  >
            {title}
          </Typography>

          <Typography 
              sx={{
                width: "40%", 
                height: "auto",
                display: {
                  xs:"none",
                  sm:"flex",
                  md:"flex"
                }, 
                justifyContent: "left", 
                flexWrap: "wrap", 
                gap: "1rem", 
                mb:2,
              }}
            >
              {
                tags.map((tag) => (
                  <Chip label={tag} key={tag} variant="outlined" 
                  sx={{
                    color: "#5B554B",
                    borderColor: "#5B554B"
                  }}/>
                ))
              }
          </Typography>
          </Grid>
        </Grid>
      </CardContent>
  </Card>
  </Button>
  );
};

export default Project;
