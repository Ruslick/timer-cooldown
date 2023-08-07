import { Container } from '@mui/material'
import React from 'react'
import { TimeSection } from '../../UI/TimeSection'
import { getTime } from '../../../utils/getTime'

export const Cooldown = () => {
  return (
    <Container>
      <TimeSection time={getTime(0)}/>
    </Container>
  )
}
