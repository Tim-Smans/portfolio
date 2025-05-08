import { FC } from 'react'

interface Props{
  iconName: string
  colored?: boolean
  size?: number
  color?: string
}

const DevIcon: FC<Props> = ({iconName, colored, size, color}) =>{

  return(
    <i 
      className={`devicon-${iconName}-plain ${colored ? 'colored' : ''}`}
      style={{fontSize: size, color: color}}
      >
    
    </i>
  )
}

export default DevIcon