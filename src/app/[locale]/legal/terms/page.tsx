import type { Metadata } from 'next'
import { pageSetup, type LocaleParams } from '@/lib/page'
import { buildMetadata } from '@/lib/seo'
import { LegalPage } from '@/components/ui/LegalPage'

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const { locale, d } = await pageSetup(params)
  return buildMetadata({ locale, href: '/legal/terms', meta: d.legal.terms.meta })
}

export default async function Page({ params }: LocaleParams) {
  const { locale, d } = await pageSetup(params)
  return <LegalPage locale={locale} home={d.common.home} doc={d.legal.terms} href="/legal/terms" />
}
