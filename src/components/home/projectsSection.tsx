import { Container, Typography, Box, Card, CardMedia, CardContent, Stack, Chip } from '@mui/material';
import React, { FC } from 'react';

const ProjectsSection: FC = () => {
  return (
    <Container sx={{ mb: 15 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Featured Projects
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, // Verdeel in 3 kolommen voor grotere schermen
          gap: 4, // Spacing tussen kaarten
          mt: 4,
        }}
      >
        {[
          {
            title: 'Project One',
            description: 'A modern web application built with React',
            image: '/placeholder.svg?height=300&width=500',
            tags: ['React', 'Node.js'],
          },
          {
            title: 'Project Two',
            description: 'Mobile app UI/UX design',
            image: '/placeholder.svg?height=300&width=500',
            tags: ['Figma', 'UI/UX'],
          },
          {
            title: 'Project Three',
            description: 'E-commerce website development',
            image: '/placeholder.svg?height=300&width=500',
            tags: ['Next.js', 'MongoDB'],
          },
        ].map((project) => (
          <Card key={project.title} sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="200"
              image={project.image}
              alt={project.title}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {project.description}
              </Typography>
              <Stack direction="row" spacing={1}>
                {project.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" />
                ))}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default ProjectsSection;
