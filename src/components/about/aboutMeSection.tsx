import { Block } from '@mui/icons-material'
import { Box, Divider, Paper, Typography } from '@mui/material'
import { FC } from 'react'


const AboutMeSection: FC = () => {
  return (
    <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        About Me
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body1" paragraph>
        Hello! I'm <Box component='span' color='primary.main'>Tim</Box>, a developer based in Belgium. I completed a two-year associate degree in Programming at Thomas More Campus Turnhout, and did my workplace learning (internship) in Helsinki Finland at the Metropolia University of Applied Sciences. I have a background in construction giving me a unique perspective to problem solving and strong working ethic.
      </Typography>
      <Typography variant="body1" paragraph>
        When I'm not coding, you can find me hiking, traveling to new countries, playing games (both board and online) or exploring new technologies.
        I'm always seeking for new challenges and opportunities to learn and
        grow.
      </Typography>
      <Typography variant="body1" paragraph>
        Currently I am working at ChipSoft Belgium as a Cloud Software Developer, focusing on building secure and scalable cloud-based healthcare solutions.
      </Typography>
    </Paper>
  )
}

export default AboutMeSection