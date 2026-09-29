import Image from 'next/image'
import { Link } from '@/components/ui/Link'
import type { WPProject } from '@/lib/wp'

export function ProjectCard({
  project,
  cta,
  industry,
  large = false,
  priority = false,
}: {
  project: WPProject
  cta: string
  industry?: string
  large?: boolean
  priority?: boolean
}) {
  const img = project.featuredImage?.node
  const f = project.projectFields
  return (
    <article className={large ? 'md:col-span-2' : ''}>
      <Link href={{ pathname: '/work/[slug]', params: { slug: project.slug } }} className="group block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] border border-line bg-raised">
          {img ? (
            <Image
              src={img.sourceUrl}
              alt={img.altText || project.title}
              fill
              priority={priority}
              sizes={large ? '(min-width: 1240px) 1160px, 100vw' : '(min-width: 768px) 580px, 100vw'}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : null}
        </div>
        <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <h3 className="t-h3 text-[1.5rem]">{project.title}</h3>
          {industry ? <p className="t-small text-muted">{industry}</p> : null}
        </div>
        {f?.shortDescription ? <p className="mt-2 max-w-[60ch] text-muted">{f.shortDescription}</p> : null}
        <span className="mt-4 inline-block t-small font-semibold text-accent group-hover:underline">{cta}</span>
      </Link>
    </article>
  )
}
