'use client';

import React, { FC, useState } from 'react';
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
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Project } from '@/lib/models/project';
import Link from 'next/link';

interface Props {
  projectsData: Project[]
}

const ProjectsPage: FC<Props> = ({projectsData}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projectsData.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) => tag.name.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 8 }}>
      <Container>
        <Typography variant='h2' component='h1' gutterBottom align='center'>
          My Projects
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
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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
                <Link href={`/projects/${project.id}`}>
                  <Button variant='contained' sx={{width: "100%"}}>Details</Button>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
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