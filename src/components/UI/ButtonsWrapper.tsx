import { Box } from '@mui/material'
import React from 'react'

export const ButtonsWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <Box justifyContent='center' display='flex' mt={6} gap={5}>
      {children}
    </Box>

  )
}
