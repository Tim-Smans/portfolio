import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineDot from "@mui/lab/TimelineDot"
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
import { Divider, Paper, Typography } from '@mui/material'
import { FC } from 'react'
import { School, Work, AirplanemodeActive} from '@mui/icons-material'
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const ExperienceSection: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom color="primary.main">
      Experience & Education
    </Typography>
    <Divider sx={{ mb: 2 }} />
    <Timeline position={isMobile ? "right" : "alternate"}>      
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" sx={{ display: { xs: "none", md: "block" } }}>
          February 2025 - June 2025
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <AirplanemodeActive />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Internship AI Scalers
          </Typography>
          <Typography variant="subtitle1" color="primary">
            Metroplia University Of Applied Sciences Helsinki
          </Typography>
          <Typography variant="body2" sx={{ display: { xs: "block", md: "none" }, color: "text.secondary" }}>
            February 2025 - June 2025
          </Typography>
          <Typography>
            14 Week international internship at Metropolia University in Finland. I learned about the fundamentals of Artificial Intelligence and Machine Learning. Working for their project called 'AI Scalers'
          </Typography>
          <Typography variant="subtitle2" color="secondary">
            Grade: 18/20
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" sx={{ display: { xs: "none", md: "block" } }}>
          2023 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <School />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            Associate Degree in Programming
          </Typography>
          <Typography variant="subtitle2" color="primary">
            Thomas More University Of Applied Sciences
          </Typography>
          <Typography variant="body2" sx={{ display: { xs: "block", md: "none" }, color: "text.secondary" }}>
          2023 - June 2025
          </Typography>
          <Typography>
            A two-year practice-oriented program that equiped me with essential programming skills in C#, JavaScript, object-oriented programming, and mobile development.
          </Typography>
          <Typography variant="subtitle2" color="secondary">
            Passed Summa cum laude with congratulations of the Board of Examiners.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary" sx={{ display: { xs: "none", md: "block" } }}>
          2020 - 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <Work />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" component="span">
            High-end residential construction
          </Typography>
          <Typography variant="subtitle2" color="primary">
            Vlassak verhulst
          </Typography>
          <Typography variant="body2" sx={{ display: { xs: "block", md: "none" }, color: "text.secondary" }}>
          2020 - 2023
          </Typography>
          <Typography>
            Construction of high-end residential buildings. Usually working outside of the country.
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
              Secondary school diploma in Construction
          </Typography>
          <Typography variant="subtitle2" color="primary">
            Vito Hoogstraten
          </Typography>
          <Typography variant="body2" sx={{ display: { xs: "block", md: "none" }, color: "text.secondary" }}>
            2014 - 2020
          </Typography>
          <Typography>
            Diploma in construction with a practical focus.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  </Paper>
  )
}

export default ExperienceSection