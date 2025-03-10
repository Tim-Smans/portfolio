'use client'

import { FC } from 'react'
import Actions from '@actions';
 

const LogoutPage: FC = () => {
  
  Actions.signOut()

  return (
    <p>Loging out...</p>
  )
}

export default LogoutPage