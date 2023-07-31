import React from "react";
import { Box, Typography, styled, Card, CardContent, Grid } from "@mui/material";


const SavingsT = () => {
    return (
        <Box>
            <Card
                sx={{
                    width: "100%",
                    height: {
                        xs:400,
                        sm:500,
                        md:900},
                    mb: "3%",
                    backgroundColor: '#ffd2c5'
                }}>
                <Grid item sx={{
                    maxWidth:{
                        xs:"400px",
                        sm:"500px",
                        md:"1000px"
                    }, 
                    mx:"auto"}}>
                    <Typography
                    sx={{ color: "#724D51", textAlign: "center", fontWeight:"bold", mt:"6%", 
                    fontSize:{
                        xs:"1.5rem",
                        sm:"2rem",
                        md:"3.5rem"} }} 
                    >
                    Savings Tracker
                    </Typography>
                    <Typography
                    sx={{ color: "#724D51", textAlign: "center", mt:"1.5%", 
                    fontSize:{
                        xs:"1rem",
                        sm:"1rem",
                        md:"2rem"} }}   
                    >
                    Redesigning and developing a tool for internal employees to track the company’s 
                    savings contribution to customers.
                    </Typography>
                    <Grid sx={{ 
                        maxWidth: {
                            xs:"300px",
                            sm:"500px",
                            md:"750px"}, 
                        mx:"auto"
                        }}>
                        <Typography
                        component="img"
                        sx={{ width: "100%", alignItems: "center", mt:"6%" }}
                        src={require("/Users/jessicaliu/Desktop/portfolio/src/tracker.png")}
                        />
                    </Grid>
                </Grid>
            </Card>

            <Grid container spacing={15}
            sx={{
                maxWidth: "1250px",
                mx:{xs:"left", md:"auto"},
                p:{xs:"1rem"},
                textAlign:"left",
                flexDirection: {xs:"column", sm:"row", md:"row"},
                
            }}>
                <Grid item md={7}>
                    <Typography sx={{fontSize:"1.5rem", fontWeight:"bold", color:"#402C2E"}}>
                        Overview
                    </Typography>
                    <Typography sx={{fontSize:"1.3rem", color:"#402C2E", mt:"5%", lineHeight:1.8}}>
                        Savings Tracker is a web tool for internal employees at KCF Technologies to track their 
                        contributions on customer savings periodically. During my internship, I worked as a 
                        software engineer and redesign this web tool for optimizing the user experience.
                    </Typography>
                </Grid>
                <Grid item md={5}>
                    <Typography sx={{fontSize:"1.5rem", fontWeight:"bold", color:"#402C2E"}}>
                        Roles
                    </Typography>
                    <Typography sx={{fontSize:"1.3rem", color:"#402C2E", mt:"1%"}}>
                        Software Engineer
                    </Typography>
                    <Typography sx={{fontSize:"1.3rem", color:"#402C2E", mt:"1%"}}>
                        UI Designer
                    </Typography>
                    <Typography sx={{fontSize:"1.3rem", color:"#402C2E", mt:"1%"}}>
                        Tester
                    </Typography>

                    <Typography sx={{fontSize:"1.5rem", fontWeight:"bold", color:"#402C2E", mt:"7%"}}>
                        Teammates
                    </Typography>
                    <Typography sx={{fontSize:"1.3rem", color:"#402C2E", mt:"1%"}}>
                        Gregary Glatzer
                    </Typography>

                    <Typography sx={{fontSize:"1.5rem", fontWeight:"bold", color:"#402C2E", mt:"7%"}}>
                        Time Frames
                    </Typography>
                    <Typography sx={{fontSize:"1.3rem", color:"#402C2E", mt:"1%", mb:"1%"}}>
                        June-August 2022
                    </Typography>
                </Grid>
            </Grid>

            <Grid container
            sx={{
                maxWidth: "980px",
                mx:{xs:"left", md:"auto"},
                p:{xs:"1rem"},
                textAlign:"left",
                flexDirection: {xs:"column", sm:"row", md:"row"},
                mb:"2%",
            }}>
                <Grid item>
                    <Typography sx={{fontSize:"1.5rem", fontWeight:"bold", color:"#402C2E", mt:"5%"}}>
                        Problem
                    </Typography>
                    <Typography sx={{fontSize:"1.3rem", color:"#402C2E", mt:"3%", lineHeight:1.8}}>
                        While the company is contributing customer's savings, it is also important to track the
                        amount of saving numbers in order to optimize the solutions. The Product Management Team 
                        noticed some impactful issues on the current savings tracker tool:
                    </Typography>
                    <Typography sx={{fontSize:"1.3rem", color:"#402C2E", mt:"3%", lineHeight:1.8}}>
                        1. Hard to handle - Current Savings Tracker uses Excel sheet to do recording works, which
                        may cause huge issues in accidentally delete/edit the data
                    </Typography>
                    <Typography sx={{fontSize:"1.3rem", color:"#402C2E", mt:"3%", lineHeight:1.8}}>
                        2. Lack of privacy - All employees using the sheet could see the whole data
                    </Typography>
                    <Typography sx={{fontSize:"1.3rem", color:"#402C2E", mt:"3%", lineHeight:1.8}}>
                        3. Easy to break - As the data increasing, Excel sheet could not afford the data, and cause the
                        data to lost/break/hard to track
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography sx={{fontSize:"1.5rem", fontWeight:"bold", color:"#402C2E", mt:"5%"}}>
                        Solution
                    </Typography>
                    <Typography sx={{fontSize:"1.3rem", color:"#402C2E", mt:"3%", lineHeight:1.8}}>
                    Redesign and develop a web tool for employees to enter their data - increasing a page 
                    for employee log in/ log out, a form for entering new savings data, a table displaying 
                    the particular employee’s savings data with their prefer filter choices, and a powerBI 
                    embedded page for employees to show to customers on their periodically savings contributions.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={2}
                    sx={{
                        maxWidth: "1100px",
                        mx:{xs:"left", md:"auto"},
                        p:{xs:"1rem"},
                        textAlign:"left",
                        flexDirection: {xs:"column", sm:"row", md:"row"},
                        
                    }}>
                <Grid item md={6}>
                    <Typography
                        component="img"
                        sx={{ width: "100%", alignItems: "center", mt:"6%" }}
                        src={require("/Users/jessicaliu/Desktop/portfolio/src/old_version.png")}
                    />
                </Grid>
                <Grid item md={6}>
                    <Typography
                        component="img"
                        sx={{ width: "97%", alignItems: "center", mt:"6%" }}
                        src={require("/Users/jessicaliu/Desktop/portfolio/src/Screenshot 2023-07-26 at 5.29.08 PM.png")}
                    />
                </Grid>
            </Grid>
            <Grid item
                sx={{
                    maxWidth: "800px",
                    mx:{xs:"left", md:"auto"},
                    p:{xs:"1rem"},
                    textAlign:"center",
                    flexDirection: {xs:"column", sm:"row", md:"row"},
                    
                }}>
                    <Typography sx={{fontSize:"1.2rem", color:"#402C2E", lineHeight:1.5, fontStyle:"italic"}}>
                    An example of showing how old and new Savings Tracker web tool look like 
                    (Fig in the left is the old version, and fig in the right is the new version)
                    </Typography>
            </Grid>
            <Grid container
                sx={{
                    maxWidth: "980px",
                    mx:{xs:"left", md:"auto"},
                    p:{xs:"1rem"},
                    textAlign:"left",
                    flexDirection: {xs:"column", sm:"row", md:"row"},
                    mb:"2%",
            }}>
                <Grid item>
                    <Typography sx={{fontSize:"1.5rem", fontWeight:"bold", color:"#402C2E", mt:"6%"}}>
                        Understanding the audience
                    </Typography>
                    <Typography sx={{fontSize:"1.3rem", color:"#402C2E", mt:"3%", lineHeight:1.8}}>
                    The primary audience of Savings Tracker web tool is the internal employees of the company.
                     The way we approach to the audience is to conduct a meeting, receiving feedbacks, and 
                     reviewing the pros and cons of user experiences on current web. 
                    </Typography>
                    <Typography sx={{fontSize:"1.3rem", color:"#402C2E", mt:"3%", lineHeight:1.8}}>
                    After collecting the data, we concluded pain points and goals to improve the user 
                    experience:
                    </Typography>
                    <Grid item>
                        <Typography
                            component="img"
                            sx={{ width: "100%", alignItems: "center", mt:"6%" }}
                            src={require("/Users/jessicaliu/Desktop/portfolio/src/Screenshot 2023-07-28 at 5.26.29 PM.png")}
                        />
                    </Grid>
                    <Grid item>
                        <Typography
                            component="img"
                            sx={{ width: "100%", alignItems: "center", mt:"6%" }}
                            src={require("/Users/jessicaliu/Desktop/portfolio/src/Screenshot 2023-07-28 at 5.30.02 PM.png")}
                        />
                    </Grid>
                    <Grid item>
                        <Typography sx={{fontSize:"1.5rem", fontWeight:"bold", color:"#402C2E", mt:"5%"}}>
                            Ideation
                        </Typography>
                        <Typography sx={{fontSize:"1.3rem", color:"#402C2E", mt:"3%", lineHeight:1.8}}>
                        Following pain points and goals, our group brainstormed how the integration and improvement 
                        that Savings Tracker could be. We began with proposing ideas on the big frame. After discussions,
                        we concluded with developing several sub-pages instead of one single page in order to maintain 
                        each function without breaking them accidentally.
                        </Typography>
                        <Typography sx={{fontSize:"1.3rem", color:"#402C2E", mt:"3%", lineHeight:1.8}}>
                        For the detail of each page, we took material ui as an example. Since we only have approximately 
                        5 weeks to finish this capstone project, we inherited template from material ui, an online open
                        source for developing web application, as our initial concept, and we added details with making 
                        changes to maintain the stability and consistency. 
                        </Typography>
                        <Typography sx={{fontSize:"1.3rem", color:"#402C2E", mt:"3%", lineHeight:1.8}}>
                        Below are some of the templates we inherited:
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={0}
                    sx={{
                        maxWidth: "1100px",
                        mx:{xs:"left", md:"auto"},
                        p:{xs:"1rem"},
                        textAlign:"left",
                        flexDirection: {xs:"column", sm:"row", md:"row"},
                        
                    }}>
                <Grid item md={6}>
                    <Typography
                        component="img"
                        sx={{ width: "95%", alignItems: "center", mt:"6%" }}
                        src={require("/Users/jessicaliu/Desktop/portfolio/src/Screenshot 2023-07-28 at 5.41.25 PM.png")}
                    />
                </Grid>
                <Grid item md={6}>
                    <Typography
                        component="img"
                        sx={{ width: "105%", alignItems: "center", mt:"6%" }}
                        src={require("/Users/jessicaliu/Desktop/portfolio/src/Screenshot 2023-07-28 at 5.42.58 PM.png")}
                    />
                </Grid>
            </Grid>
            <Grid container
                sx={{
                    maxWidth: "980px",
                    mx:{xs:"left", md:"auto"},
                    p:{xs:"1rem"},
                    textAlign:"left",
                    flexDirection: {xs:"column", sm:"row", md:"row"},
                    mb:"2%",
            }}>
                <Grid item>
                    <Typography sx={{fontSize:"1.5rem", fontWeight:"bold", color:"#402C2E", mt:"5%"}}>
                        Final Product
                    </Typography>
                    <Typography sx={{fontSize:"1.3rem", color:"#402C2E", mt:"3%", lineHeight:1.8}}>
                    For the final design, I added filtering functions including selecting columns, filters, 
                    density, and export on the table page that employees could browse their savings to the 
                    customers more conveniently. Normally, when the employee is showing the data to customer, 
                    he/she has to open the separate PowerBI page. Considering the situation, I also added 
                    another page that embedded the PowerBI into our subpage for increasing efficiency.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={5}
                    sx={{
                        maxWidth: "1070px",
                        mx:{xs:"left", md:"auto"},
                        p:{xs:"1rem"},
                        textAlign:"left",
                        flexDirection: {xs:"column", sm:"row", md:"row"},
                        
                    }}>
                <Grid item md={6}>
                    <Typography sx={{fontSize:"1.5rem", fontWeight:"bold", color:"#402C2E", mt:"25%"}}>
                        Sign in Page
                    </Typography>
                    <Typography sx={{fontSize:"1.3rem", color:"#402C2E", mt:"3%", lineHeight:1.8}}>
                        Sign in page provides privacy for employees to protect their data from being seen by others.
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography
                        component="img"
                        sx={{ width: "105%", alignItems: "center", mt:"6%" }}
                        src={require("/Users/jessicaliu/Desktop/portfolio/src/Screenshot 2023-07-26 at 5.28.45 PM.png")}
                    />
                </Grid>
                <Grid item md={6}>
                    <Typography sx={{fontSize:"1.5rem", fontWeight:"bold", color:"#402C2E", mt:"25%"}}>
                        Add Savings Page
                    </Typography>
                    <Typography sx={{fontSize:"1.3rem", color:"#402C2E", mt:"3%", lineHeight:1.8}}>
                        Add savings page provides a clear guide for employees to enter the correct data, 
                        without accidentally skip the important information.
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography
                        component="img"
                        sx={{ width: "105%", alignItems: "center", mt:"6%" }}
                        src={require("/Users/jessicaliu/Desktop/portfolio/src/Screenshot 2023-07-26 at 5.28.57 PM.png")}
                    />
                </Grid>
                <Grid item md={6}>
                    <Typography sx={{fontSize:"1.5rem", fontWeight:"bold", color:"#402C2E", mt:"25%"}}>
                        Savings Table Page
                    </Typography>
                    <Typography sx={{fontSize:"1.3rem", color:"#402C2E", mt:"3%", lineHeight:1.8}}>
                        Savings table page provides a clear vision of each data, with edit/delete function 
                        next to each row. Besides, filtering function provides employee to locate the right 
                        data in an efficient time.
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography
                        component="img"
                        sx={{ width: "105%", alignItems: "center", mt:"6%" }}
                        src={require("/Users/jessicaliu/Desktop/portfolio/src/Screenshot 2023-07-26 at 5.29.08 PM.png")}
                    />
                </Grid>
                <Grid item md={6}>
                    <Typography sx={{fontSize:"1.5rem", fontWeight:"bold", color:"#402C2E", mt:"25%"}}>
                        Power BI Page
                    </Typography>
                    <Typography sx={{fontSize:"1.3rem", color:"#402C2E", mt:"3%", lineHeight:1.8}}>
                        PowerBI Page provides essential data that customer desire to see, the embedded page 
                        provides convenience for employees to retrieve data and chart.
                    </Typography>
                </Grid>
                <Grid item md={6}>
                    <Typography
                        component="img"
                        sx={{ width: "105%", alignItems: "center", mt:"6%" }}
                        src={require("/Users/jessicaliu/Desktop/portfolio/src/Screenshot 2023-07-26 at 5.29.18 PM.png")}
                    />
                </Grid>
            </Grid>
            <Grid container
                sx={{
                    maxWidth: "980px",
                    mx:{xs:"left", md:"auto"},
                    p:{xs:"1rem"},
                    textAlign:"left",
                    flexDirection: {xs:"column", sm:"row", md:"row"},
                    mb:"2%",
            }}>
                <Grid item>
                    <Typography sx={{fontSize:"1.5rem", fontWeight:"bold", color:"#402C2E", mt:"5%"}}>
                        Next Step
                    </Typography>
                    <Typography sx={{fontSize:"1.3rem", color:"#402C2E", mt:"3%", lineHeight:1.8}}>
                        Based on the feedbacks from stakeholders and employees, a software team is currently 
                        developing the project based on our capstone. The project will take several months to 
                        develop, and propose to the whole company’s internal web tool system.
                    </Typography>
                </Grid>
            </Grid>
        

        </Box>
        
    )
};

export default SavingsT;