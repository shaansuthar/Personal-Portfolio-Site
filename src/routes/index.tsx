import { createFileRoute } from '@tanstack/react-router'

import { PortfolioPage } from '../features/portfolio/PortfolioPage'

export const Route = createFileRoute('/')({ component: PortfolioPage })
