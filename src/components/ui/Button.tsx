import type { ComponentProps } from 'react'
import { Link } from '@/components/ui/Link'

type Variant = 'primary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-control)] px-5 py-3 text-[0.95rem] font-semibold transition-[background-color,border-color,color,transform] duration-200 active:translate-y-px'

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-on-accent hover:brightness-110',
  ghost: 'border border-line-strong text-text hover:border-text',
}

export function buttonClass(variant: Variant = 'primary', extra = '') {
  return `${base} ${variants[variant]} ${extra}`
}

type Props = ComponentProps<typeof Link> & { variant?: Variant }

export function ButtonLink({ variant = 'primary', className = '', ...props }: Props) {
  return <Link data-button {...props} className={buttonClass(variant, className)} />
}
