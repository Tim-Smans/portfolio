'use client';
import { Project } from '@/lib/models/project';
import { Container, Typography, Box, Card, CardMedia, CardContent, Stack, Chip, Button, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import React, { FC, useState, useCallback } from 'react';
import Actions from '@actions';
import { Tag } from '@prisma/client';


interface Props {
  isAdmin: boolean;
  projects: Project[];
}

const ProjectsSection: FC<Props> = ({ isAdmin, projects }) => {
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

  const handleDeleteProject = useCallback(() => {
    if (contextMenu?.id) {
      console.log(`Deleting project: ${contextMenu.id}`);
      Actions.deleteProject(contextMenu.id);
    }
    handleCloseMenu();
  }, [contextMenu, handleCloseMenu]);

  return (
    <Container sx={{ mb: 15 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Featured Projects
      </Typography>
      {isAdmin && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link href={'/admin/project'}>
            <Button variant="contained">
              Add project
            </Button>
          </Link>
        </Box>
      )}
      {
        projects.length === 0 && (
          <Typography variant="body1" align="center" gutterBottom>
            No projects found
          </Typography>
        )
      }
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, // Verdeel in 3 kolommen voor grotere schermen
          gap: 4, // Spacing tussen kaarten
          mt: 4,
        }}
      >
        {projects.map((project) => (
          <Card
            key={project.name}
            onContextMenu={(e) => handleContextMenu(e, project.id)} // Contextmenu activeren
            sx={{ height: '100%' }}
          >
            <CardMedia
              component="img"
              height="200"
              image={project.coverImageUrl!}
              alt={project.name}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {project.shortDescription}
              </Typography>
              <Stack direction="row" spacing={1}>
                {project.tags.map((tag: Tag) => (
                  <Chip key={tag.id} label={tag.name} size="small" />
                ))}
              </Stack>
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
        <MenuItem onClick={handleDeleteProject}>Delete Project</MenuItem>
      </Menu>
    </Container>
  );
};

export default ProjectsSection;
