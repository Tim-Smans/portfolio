"use client"

import { Email, GitHub, Instagram, LinkedIn, LocationOn, Phone, Send, Twitter } from '@mui/icons-material';
import { Alert, Box, Button, Container, Divider, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Snackbar, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { FC, useState } from 'react';

const ContactLayout: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === "",
      email: !/^\S+@\S+\.\S+$/.test(formData.email),
      message: formData.message.trim() === "",
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setSnackbar({
        open: true,
        message: "Please fix the errors in the form.",
        severity: "error",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSnackbar({
          open: true,
          message: "Your message has been sent! I'll get back to you soon.",
          severity: "success",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSnackbar({
          open: true,
          message: "Failed to send message.",
          severity: "error",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSnackbar({
        open: true,
        message: "An error occurred while sending the message.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };


  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: 8 }}>
    <Container>
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Get In Touch
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        paragraph
        sx={{ maxWidth: 700, mx: "auto", mb: 6 }}
      >
        Have a project in mind or want to discuss potential opportunities? I'd love to hear from you. Fill out the
        form below or reach out directly through any of the provided contact methods.
      </Typography>

      <Grid container spacing={4}>
      <Grid item xs={12} md={7}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
              <Typography variant="h4" gutterBottom>
                Send Me a Message
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      helperText={errors.name ? "Name is required" : ""}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      helperText={errors.email ? "Please enter a valid email" : ""}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      error={errors.message}
                      helperText={errors.message ? "Message is required" : ""}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" size="large" endIcon={<Send />} sx={{ px: 4 }}>
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2, mb: 4 }}>
              <Typography variant="h4" gutterBottom>
                Contact Information
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <List disablePadding>
                <ListItem disableGutters sx={{ pb: 2 }}>
                  <ListItemIcon>
                    <Email color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Email"
                    secondary="tim.smans@outlook.com"
                    secondaryTypographyProps={{
                      component: "a",
                      href: "mailto:tim.smans@outlook.com",
                      sx: { textDecoration: "none" },
                    }}
                  />
                </ListItem>
                <ListItem disableGutters sx={{ pb: 2 }}>
                  <ListItemIcon>
                    <Phone color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Phone"
                    secondary="Given via email"
                    secondaryTypographyProps={{
                      component: "a",
                      href: "mailto:tim.smans@outlook.com",
                      sx: { textDecoration: "none" },
                    }}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <LocationOn color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Location" secondary="Belgium, Turnhout" />
                </ListItem>
              </List>
            </Paper>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
              <Typography variant="h4" gutterBottom>
                Connect With Me
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <Typography variant="body1" paragraph>
                Follow me on social media to see my latest projects and updates.
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "space-around", mt: 3 }}>
                <Link href="https://www.linkedin.com/in/timsmans/" target='_blank' >
                  <IconButton color="primary" size="large" aria-label="LinkedIn">
                    <LinkedIn fontSize="large" />
                  </IconButton>
                </Link>
                <Link href="https://github.com/Tim-Smans" target='_blank' >
                <IconButton color="primary" size="large" aria-label="GitHub">
                  <GitHub fontSize="large" />
                </IconButton>
                </Link>
              </Box>
            </Paper>
        </Grid>
      </Grid>

      {/* Map Section */}
      <Paper elevation={3} sx={{ mt: 6, p: 0, borderRadius: 2, overflow: "hidden", height: 400 }}>
        <Box
          component="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12932.557405084455!2d4.928289385183678!3d51.32784420672482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6b1870f095deb%3A0x40099ab2f4d5dc0!2s2300%20Turnhout%2C%20Belgium!5e0!3m2!1sen!2sfi!4v1741600433054!5m2!1sen!2sfi"
          width="100%"
          height="100%"
          sx={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        />
      </Paper>
    </Container>

    <Snackbar
      open={snackbar.open}
      autoHideDuration={6000}
      onClose={handleCloseSnackbar}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} variant="filled" sx={{ width: "100%" }}>
        {snackbar.message}
      </Alert>
    </Snackbar>
  </Box>
  )
}

export default ContactLayout