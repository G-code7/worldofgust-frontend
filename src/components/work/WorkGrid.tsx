import type { Locale } from '@/i18n/routing'
import type { WPProject } from '@/lib/wp'
import { getCaseStudy } from '@/content/case-studies'
import { ProjectCard } from './ProjectCard'

export function WorkGrid({ projects, locale, cta, empty }: { projects: WPProject[]; locale: Locale; cta: string; empty: string }) {
  if (!projects.length) {
    return <p className="max-w-[56ch] rounded-[var(--radius-card)] border border-dashed border-line-strong p-8 text-muted">{empty}</p>
  }
  return (
    <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
      {projects.map((p, i) => (
        <ProjectCard
          key={p.id}
          project={p}
          cta={cta}
          industry={getCaseStudy(p.slug)?.industry[locale]}
          large={i === 0}
          priority={i === 0}
        />
      ))}
    </div>
  )
}
