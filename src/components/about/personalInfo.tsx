import { Email, LocationOn } from '@mui/icons-material'
import { Divider, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import { FC } from 'react'

const PersonalInfo: FC = () => {
  
  return(
    <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
    <Typography variant="h5" gutterBottom>
      Personal Info
    </Typography>
    <Divider sx={{ mb: 2 }} />
    <List disablePadding>
      <ListItem disableGutters>
        <ListItemIcon sx={{ minWidth: 40 }}>
          <Email color="primary" />
        </ListItemIcon>
        <ListItemText primary="Email" secondary="tim.smans@outlook.com" />
      </ListItem>
      <ListItem disableGutters>
        <ListItemIcon sx={{ minWidth: 40 }}>
          <LocationOn color="primary" />
        </ListItemIcon>
        <ListItemText primary="Location" secondary="Belgium, Turnhout" />
      </ListItem>
    </List>
  </Paper>
  )
}

export default PersonalInfo