import { Email, GitHub, LinkedIn, Twitter } from '@mui/icons-material'
import { Box, Button, Paper, Typography } from '@mui/material'
import { FC } from 'react'

const ConnectSection: FC = () => {

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 6, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom color="primary.main">
        Let's Connect
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 700, mx: "auto", mb: 4 }}>
        I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
        want to say hi, feel free to reach out!
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
        {[
          { icon: <Email />, label: "Email", path: "mailto:tim.smans@outlook.com" },
          { icon: <LinkedIn />, label: "LinkedIn", path: "https://www.linkedin.com/in/tim-smans/" },
          { icon: <GitHub />, label: "GitHub", path: "https://github.com/Tim-Smans" },
        ].map((social, index) => (
          <Button key={index} variant="outlined" startIcon={social.icon} sx={{ minWidth: 140 } } onClick={() => window.open(social.path, "_blank")}>
            {social.label}
          </Button>
        ))}
      </Box>
    </Paper>
  )
}

export default ConnectSection