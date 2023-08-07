import { Box, Typography } from '@mui/material'
import React from 'react'

export const ToggleTitle = ({page, variant}: {page: "cooldown" | "timer", variant: "cooldown" | "timer"}) => {
  return (
    <Typography variant='h3' sx={{
        color: page === variant ? "darkslategray" : "inherit",
        bgcolor: page === variant ? "whitesmoke" : "inherit",
        padding: 1,
        borderRadius: 3
    }}>{variant === "timer" ? "Timer" : "Cooldown"}</Typography>
  )
}
