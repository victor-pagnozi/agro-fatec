import { GlobalConfig } from 'payload'

export const SiteMetrics: GlobalConfig = {
  slug: 'site-metrics',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'properties_served',
      label: 'Propriedades atendidas',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        description: 'Propriedades atendidas',
      },
    },
    {
      name: 'increased_productivity',
      label: 'Produtividade aumentada (%)',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        description: 'Produtividade aumentada (%)',
      },
    },
    {
      name: 'customer_satisfication',
      label: 'Satisfação do cliente (%)',
      type: 'number',
      required: true,
      defaultValue: 0,
      admin: {
        description: 'Satisfação do cliente (%)',
      },
    },
  ],
}
