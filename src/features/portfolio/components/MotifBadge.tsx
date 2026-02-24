import { Briefcase, Cpu, ScanLine, Wrench } from 'lucide-react'

import type { TimelineMotif } from '../types'

export function MotifBadge({ motif }: { motif: TimelineMotif }) {
  if (motif === 'hardware') {
    return <Cpu aria-hidden="true" className="h-4 w-4" />
  }
  if (motif === 'mechanical') {
    return <Wrench aria-hidden="true" className="h-4 w-4" />
  }
  if (motif === 'software') {
    return <ScanLine aria-hidden="true" className="h-4 w-4" />
  }
  return <Briefcase aria-hidden="true" className="h-4 w-4" />
}
