"use client"

import type React from "react"
import { useState } from "react"
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
  Link as MuiLink,
  List,
  ListItem,
  ListItemText,
  Snackbar,
  Alert,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { Twitter, LinkedIn, GitHub, Instagram, Email, Phone, LocationOn, KeyboardArrowUp } from "@mui/icons-material"
import Link from "next/link"
import { useTheme as useThemeContext } from '@/context/themeContext'

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribeSnackbar, setSubscribeSnackbar] = useState(false)
  const theme = useTheme()
  const { theme : themeContext} = useThemeContext()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const isTablet = useMediaQuery(theme.breakpoints.down("md"))

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && /^\S+@\S+\.\S+$/.test(email)) {
      console.log("Subscribed with:", email)
      setSubscribeSnackbar(true)
      setEmail("")
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  const color = themeContext === 'light' ? '#f5f5f5' : '#1F1F1F';

  const currentYear = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: color,
        color: "inherit",
        pt: 8,
        pb: 4,
        position: "relative",
      }}
    >
      {/* Scroll to top button */}
      <Box
        sx={{
          position: "absolute",
          top: -25,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <IconButton
          onClick={scrollToTop}
          sx={{
            bgcolor: "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: "primary.dark",
            },
            width: 50,
            height: 50,
            boxShadow: 3,
          }}
          aria-label="scroll to top"
        >
          <KeyboardArrowUp />
        </IconButton>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h4" component="div" gutterBottom>
                Tim Smans
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
              Student Developer | Backend & AI Engineer
              </Typography>

            </Box>

            {/* Social Media Icons */}
            <Box sx={{ display: "flex", gap: 1, mt: 3 }}>
              <IconButton
                sx={{
                  color: "inherit",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                sx={{
                  color: "inherit",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
                aria-label="GitHub"
              >
                <GitHub />
              </IconButton>
              <IconButton
                sx={{
                  color: "inherit",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
                aria-label="Twitter"
              >
                <Twitter />
              </IconButton>
              <IconButton
                sx={{
                  color: "inherit",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
                aria-label="Instagram"
              >
                <Instagram />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <List disablePadding>
              {["Home", "Projects", "About", "Contact"].map((item) => (
                <ListItem key={item} disablePadding sx={{ pb: 0.5 }}>
                  <ListItemText
                    primary={
                      <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} passHref>
                        <MuiLink
                          sx={{
                            color: "primary.dark",
                            textDecoration: "none",
                            "&:hover": {
                              textDecoration: "underline",
                            },
                          }}
                        >
                          {item}
                        </MuiLink>
                      </Link>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <List disablePadding>
              <ListItem disablePadding sx={{ pb: 1 }}>
                <Email fontSize="small" sx={{ mr: 1 }} />
                <ListItemText
                  primary={
                    <MuiLink
                      href="mailto:tim.smans@outlook.com"
                      sx={{
                        color: "primary.dark",
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      tim.smans@outlook.com
                    </MuiLink>
                  }
                />
              </ListItem>
            
              <ListItem disablePadding>
                <LocationOn fontSize="small" sx={{ mr: 1 }} />
                <ListItemText primary="Belgium, Turnhout" />
              </ListItem>
            </List>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Subscribe to receive updates on new projects and articles.
            </Typography>
            <form onSubmit={handleSubscribe}>
              <Box sx={{ display: "flex" }}>
                <TextField
                  variant="outlined"
                  placeholder="Your email"
                  size="small"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                 
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    ml: 1,
                    bgcolor: "white",
                    color: "primary.main",
                    "&:hover": {
                      bgcolor: "rgba(255, 255, 255, 0.9)",
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.2)" }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", sm: "flex-start" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography variant="body2" sx={{ mb: { xs: 2, sm: 0 } }}>
            © {currentYear} Tim Smans. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <MuiLink
              href="/privacy-policy"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                textDecoration: "none",
                "&:hover": {
                  color: "white",
                  textDecoration: "underline",
                },
              }}
            >
              Privacy Policy
            </MuiLink>
            <MuiLink
              href="/terms-of-service"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                textDecoration: "none",
                "&:hover": {
                  color: "white",
                  textDecoration: "underline",
                },
              }}
            >
              Terms of Service
            </MuiLink>
          </Box>
        </Box>
      </Container>

      <Snackbar
        open={subscribeSnackbar}
        autoHideDuration={6000}
        onClose={() => setSubscribeSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setSubscribeSnackbar(false)} severity="success" variant="filled" sx={{ width: "100%" }}>
          Thanks for subscribing to the newsletter!
        </Alert>
      </Snackbar>
    </Box>
  )
}

