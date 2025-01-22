import { Box, Button, Card, CardContent, Container, Typography } from '@mui/material';
import React, { FC } from 'react';

interface Props{
  isAdmin: boolean
}

const SkillsSection: FC<Props> = ({isAdmin}) => {
  return (
    <Container sx={{ mb: 15 }}>
      <Typography variant="h4" align="center" gutterBottom>
        My Skills
      </Typography>
      {
        isAdmin && (
          <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <Button variant='contained'>Add skill</Button>
          </Box>
        )
      }
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, mt: 4 }}>
        {[
          { title: 'React', subtitle: 'Frontend Development' },
          { title: 'Node.js', subtitle: 'Backend Development' },
          { title: 'Linux', subtitle: 'Design' },
          { title: 'Database', subtitle: 'Management' },
        ].map((skill) => (
          <Card key={skill.title} elevation={0} sx={{ textAlign: 'center', bgcolor: 'transparent', width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(25% - 16px)' } }}>
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
                {skill.subtitle}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default SkillsSection;