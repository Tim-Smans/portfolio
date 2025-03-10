import { Brush, Code, Hiking, LocalCafe, MusicNote } from '@mui/icons-material'
import { Avatar, Box, Divider, Grid, Paper, Typography } from '@mui/material'
import { FC } from 'react'

const InterestsSection: FC = () => {
  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Interests
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Grid container spacing={2}>
        {[
          { icon: <Code />, label: "Coding" },
          { icon: <Brush />, label: "Design" },
          { icon: <MusicNote />, label: "Music" },
          { icon: <LocalCafe />, label: "Coffee" },
          { icon: <Hiking />, label: "Hiking" },
        ].map((interest, index) => (
          <Grid item xs={6} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                p: 1,
              }}
            >
              <Avatar sx={{ bgcolor: "primary.light", mb: 1 }}>{interest.icon}</Avatar>
              <Typography variant="body2">{interest.label}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  )
}

export default InterestsSection