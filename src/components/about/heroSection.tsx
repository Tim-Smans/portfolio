"use client"
import React from 'react';
import { FC } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Button,
} from "@mui/material"
import { Download } from '@mui/icons-material';
import { useTheme } from '@/context/themeContext';
import Link from 'next/link';



const Hero: FC = () => {
  const { theme } = useTheme();
  const color = theme === 'light' ? '#f5f5f5' : '#1F1F1F';


  return (
     <Box
     sx={{
       bgcolor: color,
       py: 8,
       mb: 6,
     }}
   >
     <Container>
       <Grid container spacing={4} alignItems="center">
         <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "right" } }}>
           <Avatar
             src="profile.png"
             alt="Tim Smans Profile Picture"
             sx={{
               width: { xs: 200, md: 250 },
               height: { xs: 200, md: 250 },
               mx: { xs: "auto", md: 0 },
               boxShadow: 6,
               border: "4px solid white",
             }}
           />
         </Grid>
         <Grid item xs={12} md={8}>
           <Typography variant="h2" component="h1" gutterBottom>
             Tim Smans
           </Typography>
           <Typography variant="h5" gutterBottom>
             Student  Developer | Backend & AI Engineer
           </Typography>
           <Typography variant="body1" paragraph sx={{ maxWidth: 600 }}>
           Mainly focusing on <i>Software Development</i> and <i>Artificial Intelligence</i>, I specialize in building scalable applications and AI-driven solutions.
           I have experience with <b>backend development</b>, <b>cloud infrastructure</b> and <b>automation</b>, I focus on creating efficient and reliable systems.
             <br/>
             During my internship in Finland, I worked on developing AI models, machine learning workflows, and scalable backend architectures. Skilled in JavaScript, C#, Python and cloud-native technologies, I love creating meaningful solutions. 
           </Typography>
           <Box
             sx={{
               mt: 3,
               display: "flex",
               gap: 2,
               flexWrap: "wrap",
               justifyContent: { xs: "center", md: "flex-start" },
             }}
           >
             <Button variant="contained" color="secondary" startIcon={<Download />}>
               Download Resume
             </Button>
             <Link href={"/contact"}>
              <Button variant="outlined" sx={{ color: "gray", borderColor: "gray" }}>
                Contact Me
              </Button>
             </Link>
           </Box>
         </Grid>
       </Grid>
     </Container>
   </Box>
    )
}

export default Hero