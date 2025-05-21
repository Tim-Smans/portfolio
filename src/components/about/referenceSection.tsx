import { Email, GitHub, LinkedIn, Twitter } from '@mui/icons-material'
import { Box, Button, Card, CardContent, Paper, Typography } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'



const references = [
  {
    name: 'Tuan Nguyen Gia',
    title: 'AI Engineer at AMD Silo AI & Senior Lecturer at Metropolia University of Applied Sciences',
    linkedIn: 'https://www.linkedin.com/in/tunggi/',
  },
]

const ReferenceSection: FC = () => {

   return (
    <Paper elevation={3} sx={{ p: 4, mt: 6, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom color="primary.main">
        References
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', mb: 4 }}>
        The individuals listed below have worked closely with me during my workplace learning,
        studies, or other projects. They can speak to my work ethic, technical skills, and collaboration abilities.
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
        {references.map((ref, idx) => (
          <Card key={idx} sx={{ minWidth: 280, maxWidth: 400 }}>
            <CardContent>
              <Typography variant="h6" component="div">
                {ref.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {ref.title}
              </Typography>
              <Link href={ref.linkedIn} target="_blank" rel="noopener" style={{color: '#2196F3'}}>
                View LinkedIn Profile
              </Link>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Paper>
  )
}

export default ReferenceSection