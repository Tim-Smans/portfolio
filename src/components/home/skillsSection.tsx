'use client';
import { Box, Button, Card, CardContent, Container, Menu, MenuItem, Typography } from '@mui/material';
import { Skill } from '@prisma/client';
import Link from 'next/link';
import React, { FC, useCallback, useState } from 'react';
import Actions from '@actions';

interface Props{
  isAdmin: boolean
  skills: Skill[]
}

const SkillsSection: FC<Props> = ({isAdmin, skills}) => {
  const [contextMenu, setContextMenu] = useState<{ mouseX: number; mouseY: number; id?: string } | null>(null);

  const handleContextMenu = useCallback((event: React.MouseEvent, id: string) => {
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
    <Container sx={{ mb: 15 }}>
      <Typography variant="h4" align="center" gutterBottom>
        My Skills
      </Typography>
      {
        isAdmin && (
          <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <Link href="/admin/skill">
              <Button variant='contained'>Add skill</Button>
            </Link>
          </Box>
        )
      }
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, mt: 4 }}>
        {skills.map((skill) => (
          <Card key={skill.title} elevation={0} sx={{ textAlign: 'center', bgcolor: 'transparent', width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(25% - 16px)' } }}
            onContextMenu={(e) => handleContextMenu(e, skill.id)}>
            <CardContent>
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  bgcolor: 'primary.main',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 2,
                }}
              />
              <Typography variant="h6" gutterBottom>
                {skill.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {skill.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
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
    </Container>
  );
};

export default SkillsSection;