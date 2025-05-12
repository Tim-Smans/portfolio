import { Box, Chip, Divider, Menu, MenuItem, Paper, Typography } from '@mui/material'
import { Skill } from '@prisma/client'
import { FC, useCallback, useState } from 'react'
import SkillPopup from './skillPopup'
import DevIcon from '../shared/devIcon'
import Actions from '@actions'
import Link from 'next/link'

interface Props {
  skills: Skill[]
  isAdmin: boolean
}

const SkillsSection: FC<Props> = ({ skills, isAdmin }) => {
  const [open, setOpen] = useState(false);
  const [currentSkill, setCurrentSkill] = useState<Skill | undefined>(undefined);
  const [contextMenu, setContextMenu] = useState<{ mouseX: number; mouseY: number; id?: string } | null>(null);

  const handleContextMenu = useCallback((event: React.MouseEvent, id: string) => {
    if (!isAdmin) {
      return;
    }
    event.preventDefault();
    setContextMenu({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
      id,
    });
  }, []);

  const handleCloseMenu = useCallback(() => {
    setContextMenu(null);
  }, []);

  const handleDeleteSkill = useCallback(() => {
    if (contextMenu?.id) {
      console.log(`Deleting skill: ${contextMenu.id}`);
      Actions.deleteSkill(contextMenu.id);
    }
    handleCloseMenu();
  }, [contextMenu, handleCloseMenu]);


  return (
    <>
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          <Box component={'span'} color={'main.primary'}>Skills</Box> <span style={{ fontSize: "0.7em", fontStyle: "italic" }}>(Click one for more details)</span>
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {skills.map((skill) => (
            <Chip
              key={skill.id}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <DevIcon iconName={skill.iconName ?? ''} color='white' size={20} />
                  <Typography variant="body2" color="inherit" sx={{ fontSize: 18 }}>{skill.title}</Typography>
                </Box>
              }
              onContextMenu={(e) => handleContextMenu(e, skill.id)}
              color="primary"
              variant="outlined"
              sx={{ m: 0.5 }}
              onClick={() => {
                setCurrentSkill(skill);
                setOpen(true);
              }}
            />
          ))}
          <Menu
            open={!!contextMenu}
            onClose={handleCloseMenu}
            anchorReference="anchorPosition"
            anchorPosition={
              contextMenu
                ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                : undefined
            }
          >
            <MenuItem onClick={handleDeleteSkill}>Delete Skill</MenuItem>
            <Link href={`/admin/skill/${contextMenu?.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <MenuItem>Update Skill</MenuItem>
            </Link>
          </Menu>
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