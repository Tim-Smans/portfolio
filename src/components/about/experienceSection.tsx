import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineDot from "@mui/lab/TimelineDot"
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
import { Divider, Paper, Typography } from '@mui/material'
import { FC } from 'react'
import { School, Work } from '@mui/icons-material'


const ExperienceSection: FC = () => {

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom>
      Experience & Education
    </Typography>
    <Divider sx={{ mb: 2 }} />
    <Timeline position={"alternate"}>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" sx={{ display: { xs: "none", md: "block" } }}>
          2020 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <Work />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Senior Frontend Developer
          </Typography>
          <Typography variant="subtitle2" color="primary">
            Tech Innovations Inc.
          </Typography>
          <Typography variant="body2" sx={{ display: { xs: "block", md: "none" }, color: "text.secondary" }}>
            2020 - Present
          </Typography>
          <Typography>
            Leading frontend development for enterprise applications. Implementing modern React architectures
            and mentoring junior developers.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" sx={{ display: { xs: "none", md: "block" } }}>
          2017 - 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <Work />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            UI/UX Developer
          </Typography>
          <Typography variant="subtitle2" color="primary">
            Digital Solutions LLC
          </Typography>
          <Typography variant="body2" sx={{ display: { xs: "block", md: "none" }, color: "text.secondary" }}>
            2017 - 2020
          </Typography>
          <Typography>
            Designed and developed user interfaces for web and mobile applications. Collaborated with product
            managers and UX researchers.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" sx={{ display: { xs: "none", md: "block" } }}>
          2015 - 2017
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <School />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Master's in Computer Science
          </Typography>
          <Typography variant="subtitle2" color="primary">
            Stanford University
          </Typography>
          <Typography variant="body2" sx={{ display: { xs: "block", md: "none" }, color: "text.secondary" }}>
            2015 - 2017
          </Typography>
          <Typography>
            Specialized in Human-Computer Interaction and Software Engineering. Thesis on adaptive user
            interfaces.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" sx={{ display: { xs: "none", md: "block" } }}>
          2011 - 2015
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <School />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Bachelor's in Computer Science
          </Typography>
          <Typography variant="subtitle2" color="primary">
            MIT
          </Typography>
          <Typography variant="body2" sx={{ display: { xs: "block", md: "none" }, color: "text.secondary" }}>
            2011 - 2015
          </Typography>
          <Typography>
            Graduated with honors. Minor in Design. Active in hackathons and coding competitions.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  </Paper>
  )
}

export default ExperienceSection