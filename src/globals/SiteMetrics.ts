import type { GlobalConfig } from 'payload'

export const SiteMetrics: GlobalConfig = {
  slug: 'site-metrics',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'properties_served',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        description: 'Propriedades atendidas',
      },
    },
    {
      name: 'increased_productivity',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        description: 'Produtividade aumentada (%)',
      },
    },
    {
      name: 'customer_satisfication',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        description: 'Satisfação do cliente (%)',
      },
    },
  ],
}
