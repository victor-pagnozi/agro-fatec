import { theme } from '@/app/config/theme'
import { Box, Button, Typography } from '@mui/material'
import { Leaf } from 'lucide-react'
import Link from 'next/link'

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

      <Box
        sx={{
          display: 'flex',
          gap: 4,
          fontSize: 16,
          fontWeight: 600,
          color: 'grey.400',
          textDecoration: 'none',
        }}
      >
        <Link href="/" style={{ textDecoration: 'none', color: theme.palette.grey[700] }}>
          Home
        </Link>

        <Link href="/artigos" style={{ textDecoration: 'none', color: theme.palette.grey[700] }}>
          Artigos
        </Link>
        <Link
          href="/fale-conosco"
          style={{ textDecoration: 'none', color: theme.palette.grey[700] }}
        >
          Fale Conosco
        </Link>
      </Box>

      <Box>
        <Button
          variant="contained"
          color="secondary"
          sx={{ borderRadius: 2, textTransform: 'none', boxShadow: 'none' }}
        >
          Solicitar Consultoria
        </Button>
      </Box>
    </Box>
  )
}
