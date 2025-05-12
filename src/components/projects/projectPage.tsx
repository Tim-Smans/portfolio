'use client';

import React, { FC, useCallback, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  InputAdornment,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Project } from '@/lib/models/project';
import Link from 'next/link';
import Actions from '@actions'

interface Props {
  projectsData: Project[]
  isAdmin: boolean
}

const ProjectsPage: FC<Props> = ({ projectsData, isAdmin }) => {
  const [searchTerm, setSearchTerm] = useState('');
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

  const handleDeleteProject = useCallback(() => {
    if (contextMenu?.id) {
      console.log(`Deleting project: ${contextMenu.id}`);
      Actions.deleteProject(contextMenu.id);
    }
    handleCloseMenu();
  }, [contextMenu, handleCloseMenu]);

  const filteredProjects = projectsData.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.name.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 8 }}>
      <Container sx={{ overflow: 'visible' }}>
        <Typography variant='h2' component='h1' gutterBottom align='center'>
          My <Box component="span" color="primary.main">Projects</Box>
        </Typography>
        <Box sx={{ maxWidth: 600, mx: 'auto', mb: 6 }}>
          <TextField
            fullWidth
            variant='outlined'
            placeholder='Search projects...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                onContextMenu={(e) => handleContextMenu(e, project.id)}>
                <CardMedia component='img' height='200' image={project.coverImageUrl!} alt={project.name} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant='h5' component='div'>
                    {project.name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary' paragraph>
                    {project.shortDescription}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {project.tags.map((tag) => (
                      <Chip key={tag.id} label={tag.name} size='small' sx={{ mr: 1, mb: 1 }} />
                    ))}
                  </Box>

                </CardContent>
                <Link href={`/projects/${project.slug}`}>
                  <Button variant='contained' sx={{ width: "100%" }}>Details</Button>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Menu
          open={!!contextMenu}
          onClose={handleCloseMenu}
          anchorReference="anchorPosition"
          anchorPosition={
            contextMenu
              ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
              : undefined
          }
          PaperProps={{
            sx: {
              zIndex: 1302, // Hoger dan standaard
            },
          }}
        >
          <MenuItem onClick={handleDeleteProject}>Delete Project</MenuItem>
          <Link href={`/admin/project/${contextMenu?.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <MenuItem>Update Project</MenuItem>
          </Link>
        </Menu>
        {filteredProjects.length === 0 && (
          <Typography variant='h6' align='center' sx={{ mt: 4 }}>
            No projects found matching your search.
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default ProjectsPage;