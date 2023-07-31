import { Box, Typography, styled, Card, CardContent, Grid } from "@mui/material";
import React from "react";





const About = () => {

  const CustomContent = styled(Typography)(({ theme }) => ({
    color: "#7B7365",
    textAligh: "left",
    [theme.breakpoints.down("md")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  }));

  return (
    <Box
      sx={{
        mt: 8,
        mb: 12,
        p: 2,
        maxWidth: "1500px",
        mx: "auto",
      }}
      id="home"
    >

      <CardContent>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{display: "flex", flexDirection: "row",flexWrap: "wrap"}}>
          <Grid item sx={{maxWidth:"1450px", mx:"auto"}}>
            <Typography
              sx={{ color: "#7B7365", textAlign: "center", mb: "20%", fontWeight:"bold" }}
              variant="h2"
            >
              Hi! This is me 😊
            </Typography>
          </Grid>
          <Grid item sx={{  mx:"auto", maxWidth:"1300px", height:"auto" }}>
            <Typography
              component="img"
              sx={{ width: "100%" }}
              src={require("/Users/jessicaliu/Desktop/portfolio/src/IMG_0236.JPG")}
            >
            </Typography>
          </Grid>
          <Grid item sx={{mx: "auto", maxWidth:"1300px"}}>
            <Typography
              sx={{fontSize:"2rem", color:"#7B7365", mx:"auto", textAlign:"left", mt:"5%"}}
            >
              I'm Chien-Chi, currently a graduate student majoring in Human-Computer Interaction in University of Maryland.
              With my undergraduate degree of computer science and math minor in Pennsylvania State University, I'm passionate 
              in UI/UX design, and delivering them into the world through my professional skills.
            </Typography>
            <Typography
              sx={{fontSize:"2rem", color:"#7B7365", mx:"auto", textAlign:"left"}}
            >
              Previously, as a software engineer intern, I designed and developed an application for internal employees in KCF 
              Technologies. Now, I am going to my next stage of life! With my graduate education, I aim to utilize knowledges in 
              Huamn-Computer Interaction along with my software skills and apply them into the industry.
            </Typography>
          </Grid>
          <Grid item sx={{maxWidth:"1500px", mx:"auto"}}>
            <Typography
              sx={{ color: "#7B7365", textAlign: "center", mb: "5%", fontWeight:"bold", mt: "20%" }}
              variant="h3"
            >
              Here is my journey!
            </Typography>
            </Grid>
          <Grid item sx={{mx: "auto", maxWidth:"1300px"}}>
            <Typography
              sx={{fontSize:"2rem", color:"#7B7365", mx:"auto", textAlign:"left", fontWeight: "bold", mt:"5%"}}
            >
              👉STARTING POINT👈
            </Typography>
            <Typography
              sx={{fontSize:"2rem", color:"#7B7365", mx:"auto", textAlign:"left", mt: "2%"}}
            >
              During 2019-2021, I was introduced to computer science field. I explored different fields 
              including data science, artificial intelligence, machine learning, security, cybersecurity, 
              human-computer interaction, database systems, systems and networking, theory of computation...etc.
            </Typography>
            <Typography
              sx={{fontSize:"2rem", color:"#7B7365", mx:"auto", textAlign:"left", fontWeight: "bold", mt:"5%"}}
            >
              👉EXPLORE👈
            </Typography>
            <Typography
              sx={{fontSize:"2rem", color:"#7B7365", mx:"auto", textAlign:"left", mt: "2%"}}
            >
              During 2021 to 2022, after some time exploring different fields, I decided to narrow my interests 
              of computer science fields down to human-computer interaction. I started to 
              do some researches and to be familiarized with necessary skills including HTML, CSS, React, PHP, C, OS, 
              Algorithms and data structure, and database management...etc.
            </Typography>
            <Typography
              sx={{fontSize:"2rem", color:"#7B7365", mx:"auto", textAlign:"left", fontWeight: "bold", mt:"5%"}}
            >
              👉PRACTICE👈
            </Typography>
            <Typography
              sx={{fontSize:"2rem", color:"#7B7365", mx:"auto", textAlign:"left", mt: "2%"}}
            >
              In Summer 2022, in addition to my internship, I utilized my skills and created personal projects including my portfolio, a room scheduler website, stock profit comparison simulation, and a simple e-commerce website.
              With the skills acquired, I also started to develop and design apps on IOS system. 
            </Typography>
            <Typography
              sx={{fontSize:"2rem", color:"#7B7365", mx:"auto", textAlign:"left", fontWeight: "bold", mt:"5%"}}
            >
              👉FUTURE PLANS👈
            </Typography>
            <Typography
              sx={{fontSize:"2rem", color:"#7B7365", mx:"auto", textAlign:"left", mt: "2%"}}
            >
              Having the experience, I decided to look for in depth concepts and knowledge in human-computer interaction field. 
              As a result, I went to Dr. Kenneth Huang and joined his CrowdAI Lab in Pennsylvania State University as a undergraduate researcher.
              Furthermore, I explored advanced online courses, and I am going to University of Maryland for graduate studies concentrating in human-computer interaction.
            </Typography>
          </Grid>
          <Grid item sx={{maxWidth:"1500px", mx:"auto"}}>
            <Typography
              sx={{ fontSize:"3rem", color: "#7B7365", textAlign: "center", mb: "5%", fontWeight:"bold", mt: "20%" }}
            >
              ....What's next? We'll see!
            </Typography>
            </Grid>
        </Grid>
      </CardContent>
      

    </Box>
    
  )
};

export default About;
