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
             src="/placeholder.svg?height=300&width=300"
             alt="John Doe"
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
             John Doe
           </Typography>
           <Typography variant="h5" gutterBottom>
             Creative Developer & Designer
           </Typography>
           <Typography variant="body1" paragraph sx={{ maxWidth: 600 }}>
             I'm a passionate developer with 5+ years of experience creating beautiful, functional, and user-centered
             digital experiences. I combine technical expertise with creative problem-solving to build innovative
             solutions.
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
             <Button variant="outlined" sx={{ color: "white", borderColor: "white" }}>
               Contact Me
             </Button>
           </Box>
         </Grid>
       </Grid>
     </Container>
   </Box>
    )
}

export default Hero