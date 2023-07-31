import { Box, Typography, Button, styled } from "@mui/material";
import React from "react";
import { projects } from "../../constants/project";
import Project from "../Project";


const Experience = () => {
  const CustomButton = styled(Button)(({ theme }) => ({
    border: "3px solid transparent",
    backgroundColor: "#00C7FF",
    color: "white",
    width: "20%",
    borderRadius: "25px",
    "&:hover": {
      border: "3px solid white",
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      width: "35%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "56%",
    },
  }));

  const CustomTitle = styled(Typography)(({ theme }) => ({
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.5rem",
    },
  }));

  const CustomTopic = styled(Typography)(({ theme }) => ({
    color: "#E0C9A7",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  }));

  const Emoji = props => (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  )

  return (
  <Box
    sx={{mt: "15%", mb: "10%", p: 2, maxWidth: "1500px", mx: "auto"}}
    id="home"
  >
      <Typography
        sx={{ color: "#7B7365", textAlign: "center", mb: 2, fontWeight:"bold" }}
        variant="h5"
      >
        Hi there <Emoji symbol="👋"/> I'm Chien-Chi!
      </Typography>
      <CustomTopic variant="h1" sx={{fontWeight:"bold"}}>
        <span style={{ color: "#7B7365" }}>I enjoy</span>{" "} developing
        <span style={{ color: "#7B7365" }}> and</span> designing  <span style={{ color: "#7B7365" }}>stylish products.</span>
      </CustomTopic>
  
  
  <Box sx={{maxWidth: "1800px", mx: "auto", my: "20%", p:3}} id="experience">
    <Box 
      sx={{
        display: "flex", 
        justifyContent: "center", 
        flexWrap: "wrap",
        width: "100%"
      }}
    >
      {
        projects.map((project) => (
          <Project 
            path={project.path}
            key={project.id}
            title={project.title}
            tags={project.tags} 
            img2={project.image2}
            background={project.background}
          />
        ))
      }
    </Box>
  </Box>
  </Box>
  );
};

export default Experience;
