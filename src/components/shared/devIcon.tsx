import { FC } from 'react'

interface Props{
  iconName: string
  colored?: boolean
  size?: number
}

const DevIcon: FC<Props> = ({iconName, colored, size}) =>{

  return(
    <i 
      className={`devicon-${iconName}-plain ${colored ? 'colored' : ''}`}
      style={{fontSize: size}}
      >

    </i>
  )
}

export default DevIcon