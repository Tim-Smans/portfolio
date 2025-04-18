import { Box, Chip, Divider, Paper, Typography } from '@mui/material'
import { Skill } from '@prisma/client'
import { FC, useState } from 'react'
import SkillPopup from './skillPopup'

interface Props {
  skills: Skill[]
}

const SkillsSection: FC<Props> = ({ skills }) => {
  const [open, setOpen] = useState(false);
  const [currentSkill, setCurrentSkill] = useState<Skill | undefined>(undefined);


  return (
    <>
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Skills <span style={{ fontSize: "0.7em", fontStyle: "italic" }}>(Click one for more details)</span>
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {skills.map((skill) => (
            <Chip 
              key={skill.id} 
              label={skill.title} 
              color="primary" 
              variant="outlined" 
              sx={{ m: 0.5 }} 
              onClick={() => {
                setCurrentSkill(skill)
                setOpen(true)
              }}
            />
          ))}
        </Box>
      </Paper>
      <SkillPopup
        open={open}
        onClose={() => setOpen(false)}
        title={currentSkill?.title || "No skill"}
        description={currentSkill?.description || "No skill"}
      />
    </>
  )

}

export default SkillsSection