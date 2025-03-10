import AboutLayout from '@/components/about/aboutLayout'
import { Skill } from '@prisma/client'
import { FC } from 'react'
import DAL from '@dal'

const AboutPage: FC = async () => {
  
  const skills: Skill[] = await DAL.getSkills();

  return (
    <AboutLayout skills={skills}/>
  )
}

export default AboutPage