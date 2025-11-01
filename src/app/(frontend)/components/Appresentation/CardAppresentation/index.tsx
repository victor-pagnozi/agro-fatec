import { Box, Card, Typography } from '@mui/material'

interface CardAppresentationProps {
  title: string
  description: string
  icon: React.ReactNode
}

export const CardAppresentation = ({ title, description, icon }: CardAppresentationProps) => {
  return (
    <Card
      sx={{
        padding: 2,
        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        borderRadius: 3,
        width: 170,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
        <Box sx={{ color: 'secondary.main' }}>{icon}</Box>

        <Box>
          <Typography variant="h6" sx={{ fontSize: 12, fontWeight: 400, color: 'grey.600' }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 500 }}>
            {description}
          </Typography>
        </Box>
      </Box>
    </Card>
  )
}
