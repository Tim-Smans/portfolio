'use client';
import React, { FC } from 'react';
import { Box, Container, Typography, Chip, Grid, Paper, Button } from '@mui/material';
import { ImageAspectRatio, Share, Web } from '@mui/icons-material';
import Image from 'next/image';
import { Project } from '@/lib/models/project';
import AddTagModal from './addTagModal';

interface Props{
  project: Project
  isAdmin: boolean
}

const ProjectDetail: FC<Props> = ({project, isAdmin}) => {
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '60vh',
          minHeight: 400,
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
              zIndex: 1,
            },
          }}
        >
          <Image
            src={project.coverImageUrl || '/placeholder.svg'}
            alt={project.name}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </Box>
        <Container
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            pb: 6,
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Typography
            variant='h1'
            component='h1'
            sx={{
              color: 'white',
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 2,
            }}
          >
            {project.name}
          </Typography>
          <Typography
            variant='h5'
            sx={{
              color: 'white',
              maxWidth: '800px',
            }}
          >
            {project.shortDescription}
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Left Column - Description */}
          <Grid item xs={12} md={8}>
            <Typography variant='h4' gutterBottom>
              Project Description
            </Typography>
            {project.description.split('\n\n').map((paragraph, index) => (
              <Typography key={index} variant='body1' paragraph>
                {paragraph}
              </Typography>
            ))}

            <Typography variant='h4' sx={{ mt: 8, mb: 4 }}>
              Project Gallery
            </Typography>
            {
              isAdmin && (
                <Button
                  variant='outlined'
                  size='small'
                  startIcon={<ImageAspectRatio />}
                >
                  Add image to project
                </Button>
              )
            }
            <Grid container spacing={2}>
              {project.images.map((image) => (
                <Grid item xs={12} sm={6} md={4} key={image.id}>
                  <Paper
                    elevation={1}
                    sx={{
                      position: 'relative',
                      paddingTop: '75%', // 4:3 aspect ratio
                      overflow: 'hidden',
                      borderRadius: 2,
                    }}
                  >
                    <Image src={image.url || '/placeholder.svg'} alt={image.alt} fill style={{ objectFit: 'cover' }} />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right Column - Actions & Tags */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'sticky', top: 24 }}>
              <Button
                variant='contained'
                fullWidth
                size='large'
                startIcon={<Web />}
                sx={{ mb: 2 }}
              >
                Open project online
              </Button>
              <Button
                variant='outlined'
                fullWidth
                size='large'
                startIcon={<Share />}
                sx={{
                  mb: 4,
                }}
              >
                Share Project
              </Button>

              <Typography variant='h6' gutterBottom>
                Tags
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {
                  isAdmin && (
                    <AddTagModal />
                  )
                }
                {project.tags.map((tag) => (
                  <Chip
                    key={tag.id}
                    label={tag.name}
                    sx={{
                      bgcolor: tag.color,
                      color: 'white',
                      '&:hover': {
                        bgcolor: tag.color,
                        opacity: 0.9,
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectDetail;