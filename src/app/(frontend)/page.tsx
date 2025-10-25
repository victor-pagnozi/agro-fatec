import './styles.css'

import { Box } from '@mui/material'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Header } from './components/Header'

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })
  const siteMetrics = await payload.findGlobal({ slug: 'site-metrics' })

  const metrics = {
    properties_served: siteMetrics?.properties_served ?? 0,
    increased_productivity: siteMetrics?.increased_productivity ?? 0,
    customer_satisfication: siteMetrics?.customer_satisfication ?? 0,
  }

  return (
    <Box>
      <Header />

      <Box>{JSON.stringify(metrics)}</Box>
    </Box>
  )
}
