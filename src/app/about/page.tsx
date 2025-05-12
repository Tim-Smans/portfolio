import AboutLayout from '@/components/about/aboutLayout'
import { Skill } from '@prisma/client'
import { FC } from 'react'
import DAL from '@dal'
import { isAdmin } from '@/lib/server/actions'

const AboutPage: FC = async () => {
  const admin = await isAdmin();
  const skills: Skill[] = await DAL.getSkills();

  return (
    <AboutLayout isAdmin={admin} skills={skills}/>
  )
}

export default AboutPage