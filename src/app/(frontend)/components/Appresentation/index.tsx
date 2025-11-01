import { Box, Button, Typography } from '@mui/material'
import { Award, CircleCheckBig, TrendingUp, Users } from 'lucide-react'
import Image from 'next/image'
import { CardAppresentation } from './CardAppresentation'
import { getPayload } from 'payload'
import config from '@payload-config'

export const Appresentation = async () => {
  const payload = await getPayload({ config })
  const siteMetrics = await payload.findGlobal({ slug: 'site-metrics' })

  return (
    <Box
      sx={{
        bgcolor: 'rgba(240, 254, 240)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        justifyItems: 'center',
        gap: 2,
        paddingY: 10,
      }}
    >
      <Box sx={{ paddingX: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h1" sx={{ fontSize: 48, fontWeight: 600 }}>
          Maximize o Potencial do seu{' '}
          <Typography
            sx={{ color: 'primary.main', fontSize: 48, fontWeight: 600, lineHeight: 1.2 }}
          >
            Agronegócio
          </Typography>
        </Typography>

        <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 300, color: 'grey.800' }}>
          Consultoria especializada em milho, soja e sorgo. Aumentamos sua produtividade com
          tecnologia de ponta e expertise comprovada no campo.
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <CircleCheckBig color="#00a63e" size={20} />
            <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 300, color: 'grey.800' }}>
              + 15 Anos de Experiência
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <CircleCheckBig color="#00a63e" size={20} />
            <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 300, color: 'grey.800' }}>
              + 500 Fazendas Atendidas
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <CircleCheckBig color="#00a63e" size={20} />
            <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 300, color: 'grey.800' }}>
              30% Aumento Médio
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <CircleCheckBig color="#00a63e" size={20} />
            <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 300, color: 'grey.800' }}>
              Suporte 24/7
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button variant="contained" color="secondary" sx={{ textTransform: 'none' }}>
            Solicitar Consultoria Gratuita
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            sx={{ textTransform: 'none', backgroundColor: 'white' }}
          >
            Conhecer Nossos Casos
          </Button>
        </Box>
      </Box>

      <Box>
        <Image
          src="https://images.unsplash.com/photo-1562672767-51120ccfdfeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBjb25zdWx0YW50fGVufDF8fHx8MTc1NzYxODM1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Appresentation"
          width={550}
          height={500}
          style={{ borderRadius: 18 }}
          priority
        />

        <Box sx={{ marginTop: -5, marginLeft: -1, display: 'flex', gap: 2 }}>
          <CardAppresentation
            description={`+${siteMetrics?.increased_productivity}%`}
            title="Produtividade"
            icon={<TrendingUp size={30} />}
          />
          <CardAppresentation
            description={`${siteMetrics?.properties_served}+`}
            title="Clientes"
            icon={<Users size={30} />}
          />
          <CardAppresentation
            description={`${new Date().getFullYear() - 2010} Anos`}
            title="Experiência"
            icon={<Award size={30} />}
          />
        </Box>
      </Box>
    </Box>
  )
}
