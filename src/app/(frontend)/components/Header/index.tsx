import { Box, Typography } from '@mui/material'
import { Leaf } from 'lucide-react'

export const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingX: 4,
        paddingY: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          sx={{
            backgroundColor: '#016630',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 2,
          }}
        >
          <Leaf color="white" />
        </Box>

        <Typography variant="h2" sx={{ fontSize: 24, fontWeight: 500, color: '#016630' }}>
          AgroConsult
        </Typography>
      </Box>
      <Box>Navegação</Box>
      <Box>Botão Consultoria</Box>
    </Box>
  )
}
