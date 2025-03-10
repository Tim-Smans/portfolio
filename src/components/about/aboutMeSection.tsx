import { Divider, Paper, Typography } from '@mui/material'
import { FC } from 'react'


const AboutMeSection: FC = () => {
  return (
    <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        About Me
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body1" paragraph>
        Hello! I'm John, a creative developer based in San Francisco. I have a passion for building digital
        experiences that are both beautiful and functional. With a background in both design and development, I
        bring a unique perspective to every project I work on.
      </Typography>
      <Typography variant="body1" paragraph>
        I believe that great design is about more than just aesthetics – it's about creating intuitive,
        accessible, and enjoyable experiences for users. My approach combines technical expertise with creative
        problem-solving to build solutions that meet both user needs and business goals.
      </Typography>
      <Typography variant="body1">
        When I'm not coding or designing, you can find me hiking in the mountains, experimenting with new coffee
        brewing methods, or playing guitar. I'm always looking for new challenges and opportunities to learn and
        grow.
      </Typography>
    </Paper>
  )
}

export default AboutMeSection