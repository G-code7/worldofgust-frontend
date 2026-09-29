import type { StaticPathname as AppPathname } from '@/i18n/routing'

export type Meta = { title: string; description: string }

export type NavItem = { label: string; href: AppPathname }

export type Faq = { q: string; a: string }

export type ServiceKey = 'infrastructure' | 'express-commerce' | 'redesign' | 'automation' | 'other'

export type ServiceSheet = {
  meta: Meta
  breadcrumb: string
  title: string
  lead: string
  problemTitle: string
  problem: string
  includesTitle: string
  includes: string[]
  excludesTitle: string
  excludes: string[]
  outcomeTitle: string
  outcome: string[]
  investmentTitle: string
  investment: string
  investmentNote: string
  cta: string
  faq: Faq[]
}

export type LegalDoc = {
  meta: Meta
  title: string
  updated: string
  sections: { h: string; p: string[] }[]
}

export type Dictionary = {
  common: {
    skip: string
    nav: NavItem[]
    headerCta: string
    menu: string
    close: string
    language: string
    switchTo: string
    theme: { label: string; dark: string; light: string; daltonism: string }
    footer: {
      pitch: string
      studio: string
      services: string
      legal: string
      rights: string
      builtWith: string
      privacy: string
      terms: string
      cookies: string
    }
    home: string
    cookie: { text: string; accept: string; reject: string; more: string }
    qualify: string
    faqTitle: string
    learnMore: string
  }
  home: {
    meta: Meta
    hero: { title: string; lead: string; primary: string; secondary: string }
    receipt: {
      title: string
      loaded: string
      transferred: string
      requests: string
      lcp: string
      fcp: string
      note: string
      pending: string
    }
    fears: { title: string; items: { fear: string; answer: string; proof: string }[] }
    work: { title: string; lead: string; cta: string }
    offers: {
      title: string
      items: { name: string; tagline: string; price: string; href: AppPathname }[]
      compare: string
    }
    afterLaunch: { title: string; body: string; cta: string }
    final: { title: string; body: string }
  }
  services: {
    meta: Meta
    title: string
    lead: string
    items: {
      name: string
      problem: string
      forWho: string
      price: string
      href: AppPathname
    }[]
    notSure: { title: string; body: string }
    faq: Faq[]
  }
  infrastructure: ServiceSheet
  express: ServiceSheet & {
    tagline: string
    guaranteeTitle: string
    guarantee: string
    maintenanceTitle: string
    maintenance: string
    compareTitle: string
    compareCols: [string, string, string]
    compareRows: [string, string, string][]
    forWhoTitle: string
    forWho: string[]
  }
  operations: ServiceSheet & {
    whyTitle: string
    why: { title: string; body: string }[]
    tiersTitle: string
    withoutTitle: string
    without: string
  }
  retainerTiers: {
    name: string
    for: string
    price: string
    sla: string
    items: string[]
  }[]
  pricing: {
    meta: Meta
    title: string
    lead: string
    packagesTitle: string
    packages: {
      name: string
      price: string
      for: string
      items: string[]
      retainer: string
      featured?: boolean
    }[]
    anchor: string
    retainersTitle: string
    retainersLead: string
    exampleTitle: string
    example: { label: string; value: string }[]
    exampleTotal: { label: string; value: string }
    exampleNote: string
    rules: string[]
    rulesTitle: string
    faq: Faq[]
  }
  about: {
    meta: Meta
    title: string
    lead: string
    noteTitle: string
    note: string[]
    signature: string
    modelTitle: string
    model: { title: string; body: string }[]
    processTitle: string
    process: { title: string; body: string }[]
    stackTitle: string
    stack: string[]
    factsTitle: string
    facts: { value: string; label: string }[]
  }
  lab: {
    meta: Meta
    title: string
    lead: string
    specTitle: string
    spec: { label: string; value: string }[]
    principlesTitle: string
    principles: { title: string; body: string }[]
    openTitle: string
    open: { title: string; body: string; status: string }[]
    github: string
  }
  work: {
    meta: Meta
    title: string
    lead: string
    empty: string
    viewCase: string
    labels: {
      client: string
      problem: string
      decisions: string
      metrics: string
      result: string
      stack: string
      live: string
      code: string
      back: string
      next: string
      gallery: string
    }
  }
  blog: {
    meta: Meta
    title: string
    lead: string
    empty: string
    topicsTitle: string
    topics: string[]
    read: string
    back: string
    minRead: string
  }
  contact: {
    meta: Meta
    title: string
    lead: string
    intro: string
    sideTitle: string
    steps: { title: string; body: string }[]
    direct: string
    form: {
      stepOf: string
      back: string
      next: string
      submit: string
      sending: string
      required: string
      invalidEmail: string
      error: string
      successTitle: string
      success: string
      s1: {
        title: string
        company: string
        type: string
        types: Record<ServiceKey, string>
        otherPlaceholder: string
      }
      s2: {
        title: string
        consequence: string
        consequenceHint: string
        tried: string
        triedOptions: { value: string; label: string }[]
      }
      s3: {
        title: string
        budget: string
        options: { value: string; label: string }[]
        lowTitle: string
        low: string
        lowCta: string
      }
      s4: {
        title: string
        tools: string
        toolsHint: string
        hours: string
        hoursOptions: { value: string; label: string }[]
      }
      s5: {
        title: string
        retainer: string
        options: { value: string; label: string }[]
        noteNo: string
      }
      s6: {
        title: string
        name: string
        email: string
        channel: string
        channels: { value: string; label: string }[]
        deadline: string
        privacy: string
      }
    }
  }
  legal: { privacy: LegalDoc; terms: LegalDoc; cookies: LegalDoc }
  notFound: { title: string; body: string; home: string; work: string }
}
