import { Typography } from '@mui/material'

export const ToggleTitle = ({page, variant}: {page: "cooldown" | "timer", variant: "cooldown" | "timer"}) => {
  return (
    <Typography variant='h5' sx={{
        bgcolor: page === variant ? "whitesmoke" : "inherit",
        padding: 1,
        borderRadius: 3
    }}>{variant === "timer" ? "Timer" : "Cooldown"}</Typography>
  )
}
