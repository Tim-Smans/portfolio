import { Box, Chip, Divider, Paper, Typography } from '@mui/material'
import { Skill } from '@prisma/client'
import { FC } from 'react'

interface Props {
  skills: Skill[]
}

const SkillsSection: FC<Props> = ({skills}) => {
  return (
    <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
    <Typography variant="h5" gutterBottom>
      Skills <span style={{ fontSize: "0.7em",  fontStyle: "italic"}}>(Click one for more details)</span>
    </Typography>
    <Divider sx={{ mb: 2 }} />
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
      {skills.map((skill) => (
        <Chip key={skill.id} label={skill.title} color="primary" variant="outlined" sx={{ m: 0.5 }} />
      ))}
    </Box>
  </Paper>
  )

}

export default SkillsSection