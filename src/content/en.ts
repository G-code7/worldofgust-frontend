import type { Dictionary } from './types'
import { PRICING as P, SLA_HOURS as SLA, EXPRESS_DELIVERY_DAYS as DAYS, usd } from '@/lib/site'

const en: Dictionary = {
  common: {
    skip: 'Skip to content',
    nav: [
      { label: 'Services', href: '/services' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Work', href: '/work' },
      { label: 'Lab', href: '/lab' },
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
    ],
    headerCta: 'Request your proposal',
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
    switchTo: 'Leer en español',
    theme: { label: 'Color theme', dark: 'Dark', light: 'Light', daltonism: 'Color-blind safe' },
    footer: {
      pitch: 'Web systems for businesses that cannot afford a site that fails. Built fast, measured, and maintained after launch.',
      studio: 'Studio',
      services: 'Services',
      legal: 'Legal',
      rights: 'All rights reserved.',
      builtWith: 'This site: Next.js, headless WordPress, zero page builders.',
      privacy: 'Privacy',
      terms: 'Terms',
      cookies: 'Cookies',
    },
    home: 'Home',
    cookie: {
      text: 'We use one analytics cookie to see which pages help. Nothing is tracked until you say yes.',
      accept: 'Allow analytics',
      reject: 'No thanks',
      more: 'Cookie policy',
    },
    qualify: 'Request your proposal',
    faqTitle: 'Questions we get before every project',
    learnMore: 'See the details',
  },

  home: {
    meta: {
      title: 'World of Gust | Web systems that stay up and sell',
      description:
        'We build fast Next.js and headless WordPress sites with Lighthouse 90+, backend automation and a real SLA. For businesses that cannot afford downtime.',
    },
    hero: {
      title: "We don't build websites. We deploy revenue infrastructure.",
      lead: 'Fast sites, backend automation and a response SLA, for businesses that cannot afford a site that fails.',
      primary: 'Request your proposal',
      secondary: 'See the results',
    },
    receipt: {
      title: 'This page, measured in your browser',
      loaded: 'Fully loaded',
      transferred: 'Transferred',
      requests: 'Requests',
      lcp: 'Largest paint',
      fcp: 'First paint',
      note: 'Real numbers from your visit, not a screenshot. This is the standard we ship.',
      pending: 'Measuring',
    },
    fears: {
      title: 'Three things that keep owners up at night. We remove them.',
      items: [
        {
          fear: 'The site goes down at the worst possible moment.',
          answer: `Uptime monitoring around the clock and a ${SLA.performance}-hour response SLA.`,
          proof: 'Included in every plan from month two.',
        },
        {
          fear: 'Someone on the team is doing by hand what a system should do.',
          answer: 'n8n and Make automations for notifications, CRM sync and reports.',
          proof: 'We demo them during onboarding.',
        },
        {
          fear: 'Six months after launch, it already feels old.',
          answer: 'Modern stack, weekly dependency updates and measured performance.',
          proof: 'Lighthouse 90+ documented on every delivery.',
        },
      ],
    },
    work: {
      title: 'Proof, not promises',
      lead: 'Each case study answers three questions: what was breaking, what we decided, and what changed.',
      cta: 'All case studies',
    },
    offers: {
      title: 'Three ways to work with us',
      items: [
        {
          name: 'Digital Infrastructure',
          tagline: 'Corporate sites and platforms on Next.js with a headless CMS your team can edit.',
          price: `${usd(P.infrastructure.from)} - ${usd(P.infrastructure.to)}+`,
          href: '/services/digital-infrastructure',
        },
        {
          name: 'Express Commerce System',
          tagline: `From idea to live in ${DAYS} business days. For restaurants, shops and local businesses.`,
          price: `${usd(P.expressCommerce.from)} - ${usd(P.expressCommerce.to)}`,
          href: '/services/express-commerce',
        },
        {
          name: 'Digital Operations',
          tagline: 'The monthly plan that keeps everything fast, secure and answered.',
          price: `${usd(P.retainers.essential)} - ${usd(P.retainers.operations)} / month`,
          href: '/services/digital-operations',
        },
      ],
      compare: 'Compare packages and plans',
    },
    afterLaunch: {
      title: 'Most agencies hand over the site and disappear. Launch day is where we start.',
      body: 'Every project continues with a monthly operations plan: monitoring, backups, security updates and someone who answers within hours, not weeks.',
      cta: 'How the monthly plan works',
    },
    final: {
      title: 'If your biggest concern is that it looks pretty, we are probably not the right team.',
      body: 'If you need a site that performs, gets found and keeps working, answer a few questions. It takes three minutes and tells us both if there is a fit.',
    },
  },

  services: {
    meta: {
      title: 'Web Development Services for Growing Businesses',
      description:
        'Digital infrastructure, express commerce sites and monthly operations plans. Ordered by the business problem they solve, with price ranges up front.',
    },
    title: 'Services, ordered by the problem they solve',
    lead: 'We do three things and we do them well. Pick the one that matches the problem you have today.',
    items: [
      {
        name: 'Digital Infrastructure',
        problem: 'Your site exists but does not work for you: slow, hard to update, and nobody answers when it breaks.',
        forWho: 'Companies, professional services and brands that sell through their site.',
        price: `${usd(P.infrastructure.from)} - ${usd(P.infrastructure.to)}+`,
        href: '/services/digital-infrastructure',
      },
      {
        name: 'Express Commerce System',
        problem: 'Your business runs, but online customers find a slow site, a broken menu or nothing at all.',
        forWho: 'Restaurants, shops, consultants and local businesses.',
        price: `${usd(P.expressCommerce.from)} - ${usd(P.expressCommerce.to)}`,
        href: '/services/express-commerce',
      },
      {
        name: 'Digital Operations',
        problem: 'You already have a site, and every fix turns into a chase for someone who replies in weeks.',
        forWho: 'Every client after launch, and existing sites that pass our audit.',
        price: `${usd(P.retainers.essential)} - ${usd(P.retainers.operations)} / month`,
        href: '/services/digital-operations',
      },
    ],
    notSure: {
      title: 'Not sure which one fits?',
      body: 'The qualification form routes you to the right option. If none fits, we will tell you that too.',
    },
    faq: [
      {
        q: 'Why do you show price ranges instead of exact prices?',
        a: 'Because scope changes the price and we refuse to hide that behind a "from $350". The range tells you honestly if we are within your budget before you spend time on a call.',
      },
      {
        q: 'Is the monthly plan mandatory?',
        a: `It is part of every project from month two, because it is the only way we can guarantee the SLA. Without it, support is billed hourly (${usd(P.hourlyOutsideRetainer.from)}-${usd(P.hourlyOutsideRetainer.to)}) with no priority.`,
      },
      {
        q: 'Do you work with clients outside Venezuela?',
        a: 'Most of our clients are in the United States, Spain and Latin America. We work across time zones, in English and Spanish, and invoice in USD.',
      },
      {
        q: 'Can you take over an existing WordPress site?',
        a: 'Yes, after an audit. Sometimes a rebuild pays for itself in months; sometimes a cleanup is enough. The audit tells us which.',
      },
    ],
  },

  infrastructure: {
    meta: {
      title: 'Corporate Web Development on Next.js and Headless WordPress',
      description: `Corporate sites and platforms with Lighthouse 90+, a CMS your team can edit and a ${SLA.performance}h SLA. Investment ${usd(P.infrastructure.from)}-${usd(P.infrastructure.to)}+.`,
    },
    breadcrumb: 'Digital Infrastructure',
    title: 'Corporate Digital Infrastructure',
    lead: 'A website that works as a business asset: fast, editable by your team, connected to your tools and maintained after launch.',
    problemTitle: 'The problem',
    problem:
      'Your company has an online presence, but not a digital asset that works. The site loads slowly, does not convert, and depends on someone who took weeks to answer the last time something broke.',
    includesTitle: 'What is included',
    includes: [
      'Next.js site with Lighthouse 90+ guaranteed at launch',
      'Headless WordPress CMS so your team edits without a developer',
      'Backend integrations as needed: CRM, email marketing, payments',
      'Technical SEO foundation: metadata, schema, sitemap, hreflang',
      `${SLA.performance}-business-hour response SLA from month two`,
      'One week of onboarding for your team',
    ],
    excludesTitle: 'What is not included',
    excludes: [
      'Content production (copy, photos, video are on your side)',
      'Social media management',
      'Ongoing SEO campaigns (available as a documented add-on)',
    ],
    outcomeTitle: 'What you can expect',
    outcome: [
      'Pages that load in under 2.5 seconds on mobile',
      'Content changes in minutes, without opening a ticket',
      'Leads that land in your CRM automatically',
    ],
    investmentTitle: 'Investment',
    investment: `${usd(P.infrastructure.from)} - ${usd(P.infrastructure.to)}+ USD`,
    investmentNote: 'The range depends on the number of integrations and specific features. Plus the Performance plan from month two.',
    cta: 'Request your proposal',
    faq: [
      {
        q: 'Why headless WordPress instead of a normal WordPress theme?',
        a: 'Your team keeps the editor they know. Visitors get a Next.js frontend that is faster and has far fewer moving parts that can break or get hacked.',
      },
      {
        q: 'How long does a project take?',
        a: 'Between 4 and 10 weeks depending on scope. You get the calendar in the proposal, before paying anything.',
      },
      {
        q: 'Can you build an online store here?',
        a: 'Yes. Complex catalogs, B2B quotes and payment integrations fall under the Scale package.',
      },
    ],
  },

  express: {
    meta: {
      title: `Express Commerce System: Business Website in ${DAYS} Days`,
      description: `Fast site for restaurants, shops and local businesses. Live in ${DAYS} business days, Lighthouse 90+, WhatsApp and Maps built in. ${usd(P.expressCommerce.from)}-${usd(P.expressCommerce.to)}.`,
    },
    breadcrumb: 'Express Commerce System',
    title: 'Express Commerce System',
    tagline: `From idea to live in ${DAYS} days. No page builders. No plugins that break.`,
    lead: 'An ultra-light site for businesses that value speed over ornament. Menu or catalog, orders or bookings, WhatsApp and Maps.',
    problemTitle: 'The problem',
    problem:
      'You have a working business: a restaurant, a shop, a local service. Your customers land on a slow site that breaks on mobile, or on nothing at all. Every day it stays that way, someone else gets that customer.',
    includesTitle: 'What is included',
    includes: [
      '3 to 5 pages: home, menu or catalog, contact, location',
      'Google Maps and WhatsApp Business integration',
      'Order or booking form adapted to your business',
      'Lighthouse 90+ guaranteed at launch',
      'Domain and hosting configured and handed over to you',
      'A simple editing panel, no technical knowledge needed',
    ],
    excludesTitle: 'What is not included',
    excludes: [
      'Online payments with full cart and inventory (that is Digital Infrastructure)',
      'Copywriting and photography',
      'More than 5 pages',
    ],
    outcomeTitle: 'What you can expect',
    outcome: [
      'Loads in under 1.5 seconds',
      'Customers reach you on WhatsApp in one tap',
      'A site that does not degrade because there are no plugins to rot',
    ],
    investmentTitle: 'Investment',
    investment: `${usd(P.expressCommerce.from)} - ${usd(P.expressCommerce.to)} USD one-time`,
    investmentNote: `Plus ${usd(P.retainers.essential)} per month from month two (Essential plan).`,
    cta: 'Request my Express Commerce System',
    guaranteeTitle: 'Delivery guarantee',
    guarantee: `If we do not deliver within ${DAYS} business days after receiving your materials (logo, copy, images), we refund 50% of the payment. No arguments, no fine print.`,
    maintenanceTitle: 'Why maintenance is not optional',
    maintenance:
      'The plan includes uptime monitoring, daily backups and monthly security updates. Without it, any site degrades in 3 to 6 months. Maintenance is not an extra; it is what protects the money you just invested.',
    compareTitle: 'Express Commerce vs. a traditional agency',
    compareCols: ['', 'Express Commerce System', 'Traditional agency'],
    compareRows: [
      ['Delivery time', `${DAYS} business days`, '4 to 8 weeks'],
      ['Speed (Lighthouse)', '90+ guaranteed', 'Variable, not guaranteed'],
      ['Dependencies', 'Minimal', '15 to 30 plugins'],
      ['Upfront cost', `${usd(P.expressCommerce.from)} - ${usd(P.expressCommerce.to)}`, '$3,000+'],
      ['Maintenance', `${usd(P.retainers.essential)}/month, included`, 'Billed per request'],
      ['Response SLA', `${SLA.essential} business hours`, 'No guarantee'],
    ],
    forWhoTitle: 'Built for',
    forWho: ['Restaurants and cafés', 'Physical shops', 'Consultants', 'Independent professionals', 'Local service businesses'],
    faq: [
      {
        q: 'What do I need to send before the 5 days start?',
        a: 'Logo, texts, photos, your menu or catalog, and access to your domain if you already have one. We send you a checklist the day you sign.',
      },
      {
        q: 'Can I update prices and the menu myself?',
        a: 'Yes. The editing panel is built for that: change a price or a dish in a minute from your phone.',
      },
    ],
  },

  operations: {
    meta: {
      title: 'Website Maintenance Plans with SLA | Digital Operations',
      description: `Monthly website maintenance with uptime monitoring, backups, security updates and a response SLA from ${SLA.operations}h. Plans from ${usd(P.retainers.essential)}/month.`,
    },
    breadcrumb: 'Digital Operations',
    title: 'Digital Operations Retainer',
    lead: 'The plan that keeps your site fast, secure and answered. Projects are how we meet; operations are how we work together.',
    problemTitle: 'The problem',
    problem:
      'A site without active maintenance is a car without service: it works until it does not, and it always fails at the worst moment. Outdated dependencies are the most common door for attacks, and broken automations fail silently.',
    includesTitle: 'Every plan includes',
    includes: [
      'Uptime monitoring 24/7 with automatic alerts',
      'Automated daily backups',
      'Security updates',
      'Monthly performance report: Lighthouse, uptime, incidents',
      'Included hours for small changes',
    ],
    excludesTitle: 'What is not included',
    excludes: ['New sections or features (quoted separately)', 'Content production', 'Paid ads management'],
    outcomeTitle: 'What you get',
    outcome: [
      'Someone accountable when something breaks',
      'A site that stays as fast as the day it launched',
      'Automations that keep running when nobody is watching',
    ],
    investmentTitle: 'Investment',
    investment: `${usd(P.retainers.essential)} - ${usd(P.retainers.operations)} USD per month`,
    investmentNote: 'Starts in month two of every project. Existing sites join after a technical audit.',
    cta: 'Request your proposal',
    whyTitle: 'Why it pays for itself',
    why: [
      {
        title: 'Downtime costs more than the plan',
        body: 'Four hours offline on a campaign day can cost more than twelve months of maintenance. Every paid click that lands on an error page is money gone.',
      },
      {
        title: 'Priority, in writing',
        body: `With a plan, you have a contractual response time. Without one, you are one more request in the queue.`,
      },
      {
        title: 'Your time is worth more',
        body: 'If your hour is worth $50 and the plan saves you two hours of technical chasing a month, it has already paid for itself.',
      },
    ],
    tiersTitle: 'Plans',
    withoutTitle: 'Can I skip the plan?',
    without: `Yes. Support is then billed hourly at ${usd(P.hourlyOutsideRetainer.from)}-${usd(P.hourlyOutsideRetainer.to)} with no guaranteed priority. Most clients switch to a plan after two or three ad-hoc requests. Your call.`,
    faq: [
      {
        q: 'Do unused hours roll over?',
        a: 'No. They reset every month so we can keep capacity reserved for your SLA.',
      },
      {
        q: 'Can I change plans?',
        a: 'Yes, at the start of any month, with no penalty.',
      },
    ],
  },

  retainerTiers: [
    {
      name: 'Essential',
      for: 'For Express Commerce System sites',
      price: `${usd(P.retainers.essential)}/month`,
      sla: `${SLA.essential}h response`,
      items: ['Uptime monitoring 24/7', 'Daily backups', 'Monthly security updates', 'Monthly performance report', '1 hour of changes included'],
    },
    {
      name: 'Performance',
      for: 'For corporate sites (Launch and Scale)',
      price: `${usd(P.retainers.performance)}/month`,
      sla: `${SLA.performance}h response`,
      items: ['Everything in Essential', 'Lighthouse alert if it drops below 85', 'Weekly dependency updates', '2 hours of changes included', 'Quarterly conversion review'],
    },
    {
      name: 'Operations',
      for: 'For projects with n8n or Make automations',
      price: `${usd(P.retainers.operations)}/month`,
      sla: `${SLA.operations}h response`,
      items: ['Everything in Performance', 'Automation workflow maintenance', 'Monitoring of CRM, email and payments', '3 hours of changes included', 'Monthly 30-minute strategy call'],
    },
  ],

  pricing: {
    meta: {
      title: 'Website Pricing: Packages and Maintenance Plans',
      description: `Transparent website pricing. Launch from ${usd(P.packages.launch)}, Scale from ${usd(P.packages.scale)}, Automate on request. Maintenance plans from ${usd(P.retainers.essential)}/month.`,
    },
    title: 'Pricing that shows value, not hours',
    lead: 'We never sell by the hour. You pay for an outcome and for someone who answers after launch.',
    packagesTitle: 'Project packages',
    packages: [
      {
        name: 'Launch',
        price: usd(P.packages.launch),
        for: 'A serious corporate presence',
        items: ['5 to 8 page site', 'Lighthouse 90+', 'Headless CMS', 'Technical SEO foundation', 'SLA included'],
        retainer: `Plan: ${usd(P.retainers.performance)}/month`,
      },
      {
        name: 'Scale',
        price: usd(P.packages.scale),
        for: 'Selling and integrating',
        items: ['Complex site', 'E-commerce', 'CRM and payment integrations', 'Priority SLA'],
        retainer: `Plan: ${usd(P.retainers.performance)}/month`,
        featured: true,
      },
      {
        name: 'Automate',
        price: 'On request',
        for: 'Operations that run themselves',
        items: ['Custom architecture', 'n8n and Make workflows', `${SLA.operations}h SLA`, 'Monthly strategy review'],
        retainer: `Plan: ${usd(P.retainers.operations)}/month`,
      },
    ],
    anchor:
      'A site that goes down during a Google Ads campaign can cost ten times the monthly maintenance. The plan exists so that math never applies to you.',
    retainersTitle: 'Monthly operations plans',
    retainersLead: 'Every project continues with one of these from month two.',
    exampleTitle: 'What year one looks like',
    example: [
      { label: 'Phase 1: build and launch (Scale)', value: `${usd(P.packages.scale)}` },
      { label: 'Phase 2: Performance plan, months 2 to 12', value: `${usd(P.retainers.performance)} x 11` },
    ],
    exampleTotal: { label: 'Total year one', value: usd(P.packages.scale + P.retainers.performance * 11) },
    exampleNote: 'You see the full year before signing. No surprises in month four.',
    rulesTitle: 'How we price',
    rules: [
      `Projects start at ${usd(P.minimumProject)}.`,
      'Ranges, never hourly breakdowns.',
      '50% to start, 50% at launch.',
      'Invoiced in USD. Zelle, PayPal or wire transfer.',
    ],
    faq: [
      {
        q: 'Why is there a minimum?',
        a: 'Below it we cannot guarantee Lighthouse 90+, the SLA and proper QA. We prefer fewer projects done right.',
      },
      {
        q: 'Do you offer payment plans?',
        a: 'For Scale and Automate, yes: three milestones tied to deliverables, agreed in the proposal.',
      },
    ],
  },

  about: {
    meta: {
      title: 'About World of Gust: A Small Studio, Accountable',
      description:
        'World of Gust is a boutique web studio led by Gustavo Liendo. Senior hands on every project, a vetted network of specialists, and one person accountable.',
    },
    title: 'A small studio with one person accountable',
    lead: 'No account managers, no handoffs. The person you talk to on the first call is the person responsible for your system.',
    noteTitle: 'Why I started World of Gust',
    note: [
      'I have spent more than five years building for companies in the United States, Spain and Latin America. The pattern repeats: a beautiful launch, then silence. Six months later the site is slow, a plugin broke a form, and nobody answers.',
      'I started World of Gust to sell the opposite: systems that are measured before launch and maintained after it. I would rather work with fewer clients for longer than chase the next cheap project.',
    ],
    signature: 'Gustavo Liendo, founder',
    modelTitle: 'How we are organized',
    model: [
      {
        title: 'Senior lead on every project',
        body: 'I own architecture, code review and the relationship. Nothing ships without passing through me.',
      },
      {
        title: 'Specialists when the project needs them',
        body: 'Design, copy and automation specialists join per project from a network we have worked with for years.',
      },
      {
        title: 'Documented processes',
        body: 'Checklists for onboarding, QA and delivery. The quality does not depend on anyone having a good day.',
      },
    ],
    processTitle: 'From first message to monthly operations',
    process: [
      { title: 'Qualify', body: 'A three-minute form. If there is no fit, we say so within one business day.' },
      { title: 'Discovery call', body: '30 minutes on your business, not on colors.' },
      { title: 'Proposal', body: 'Scope, calendar and year-one total. Delivered within 48 hours.' },
      { title: 'Build and launch', body: 'Weekly check-ins, staging link from week one, Lighthouse report at launch.' },
      { title: 'Operate', body: 'Monitoring, updates, SLA and a monthly report. This is where most studios stop.' },
    ],
    stackTitle: 'What we build with',
    stack: ['Next.js', 'React', 'TypeScript', 'Headless WordPress', 'WPGraphQL', 'Shopify', 'WooCommerce', 'Django', 'AWS', 'Vercel', 'n8n', 'Make'],
    factsTitle: 'In numbers',
    facts: [
      { value: '5+', label: 'years building for the web' },
      { value: '6', label: 'countries with active clients' },
      { value: '2', label: 'working languages' },
    ],
  },

  lab: {
    meta: {
      title: 'Lab: How We Build, in the Open',
      description:
        'Our stack, our performance budgets and the principles behind every decision. Open source starter kits and experiments from World of Gust.',
    },
    title: 'How we build, in the open',
    lead: 'Most studios hide their process. We publish ours, because anyone can claim quality and very few can show it.',
    specTitle: 'This site, as a spec sheet',
    spec: [
      { label: 'Framework', value: 'Next.js App Router, server components by default' },
      { label: 'Content', value: 'Headless WordPress through WPGraphQL' },
      { label: 'Styling', value: 'Tailwind CSS v4, one stylesheet, no UI kit' },
      { label: 'Fonts', value: 'Self-hosted variable font, no render blocking' },
      { label: 'JavaScript budget', value: 'Only the header, theme, language and forms hydrate' },
      { label: 'Languages', value: 'English and Spanish with hreflang' },
      { label: 'Analytics', value: 'Consent mode, denied by default' },
      { label: 'Performance target', value: 'Lighthouse 90+ on mobile, every page' },
    ],
    principlesTitle: 'Principles',
    principles: [
      { title: 'Measure before claiming', body: 'Every delivery ships with a Lighthouse report. If a number is on our site, you can verify it.' },
      { title: 'Fewer dependencies, fewer failures', body: 'Each plugin or package is a future update and a possible hole. We add them only when they pay rent.' },
      { title: 'Editors are users too', body: 'The CMS is designed for the person updating prices at 9pm, not for the developer.' },
      { title: 'Boring infrastructure', body: 'Proven hosting, predictable deploys, backups you have tested. Excitement belongs in the product, not in production.' },
    ],
    openTitle: 'Open work',
    open: [
      {
        title: 'Headless starter kit',
        body: 'The Next.js + WPGraphQL + Tailwind v4 base we use for Express Commerce System projects, documented and MIT licensed.',
        status: 'In preparation',
      },
      {
        title: 'Interactive experiments',
        body: 'Scroll-driven and 3D landings built with GSAP and React Three Fiber, published as visitable demos.',
        status: 'In progress',
      },
      {
        title: 'Playground',
        body: 'Small tools and API experiments, each with a live demo or a short write-up of the decisions behind it.',
        status: 'In progress',
      },
    ],
    github: 'Follow on GitHub',
  },

  work: {
    meta: {
      title: 'Case Studies: Web Projects and Measured Results',
      description:
        'Case studies of e-commerce, corporate sites and headless WordPress builds. The business problem, the technical decisions and the result.',
    },
    title: 'Case studies',
    lead: 'Not screenshots. What was breaking, what we decided, and what changed.',
    empty: 'Case studies are being written up. In the meantime, ask us for references during the discovery call.',
    viewCase: 'Read the case study',
    labels: {
      client: 'Client',
      problem: 'The business problem',
      decisions: 'Key decisions',
      metrics: 'At launch',
      result: 'The result',
      stack: 'Stack',
      live: 'Visit the live site',
      code: 'View the code',
      back: 'All case studies',
      next: 'Have a similar problem?',
      gallery: 'Screens',
    },
  },

  blog: {
    meta: {
      title: 'Blog: Headless WordPress, Next.js and Web Performance',
      description:
        'Practical articles on headless WordPress, Next.js, web performance and automation. One deep article a month instead of twelve shallow ones.',
    },
    title: 'Notes from the build',
    lead: 'One deep article a month on the stack we use every day. No filler.',
    empty: 'The first articles are on the way. These are the topics we are writing about:',
    topicsTitle: 'Coming up',
    topics: [
      'Headless WordPress with Next.js: when it pays off and when it does not',
      'n8n vs Make for small business automation',
      'How we build an Express Commerce System in five days',
      'SEO for multilingual Next.js sites with hreflang',
    ],
    read: 'Read article',
    back: 'All articles',
    minRead: 'min read',
  },

  contact: {
    meta: {
      title: 'Request your proposal | Start with World of Gust',
      description:
        'Answer a few questions about your business and budget. If there is a fit, you get a reply within 24 business hours and a discovery call.',
    },
    title: 'Request your proposal',
    lead: 'Before we talk about budget, we need to understand your business.',
    intro:
      'This takes three minutes and lets us prepare a relevant proposal, not a generic template. If your project is a good fit, you will hear back within 24 business hours.',
    sideTitle: 'What happens next',
    steps: [
      { title: 'We read every answer', body: 'Personally, not a bot. Within 24 business hours.' },
      { title: 'Discovery call', body: '30 minutes on video, or async if you prefer.' },
      { title: 'Proposal', body: 'Scope, calendar and year-one total in 48 hours.' },
    ],
    direct: 'Prefer email?',
    form: {
      stepOf: 'Step {n} of {total}',
      back: 'Back',
      next: 'Continue',
      submit: 'Send and request my discovery call',
      sending: 'Sending',
      required: 'This field is required.',
      invalidEmail: 'Enter a valid email address.',
      error: 'The message could not be sent. Try again, or write to us directly by email.',
      successTitle: 'Request received',
      success:
        'We review every questionnaire personally. If your project is a good fit, you will hear back within 24 business hours.',
      s1: {
        title: 'The project',
        company: 'Company or project name',
        type: 'What are you looking for?',
        types: {
          infrastructure: 'Corporate website or platform',
          'express-commerce': 'Express site for my business (menu, catalog, shop)',
          redesign: 'Redesign of an existing site',
          automation: 'Automations and backend integrations',
          other: 'Something else',
        },
        otherPlaceholder: 'Tell us briefly',
      },
      s2: {
        title: 'The problem',
        consequence: 'What happens to your business if this is not solved in the next 90 days?',
        consequenceHint: 'Be concrete: lost sales, hours wasted, a launch at risk.',
        tried: 'Have you tried to solve this before?',
        triedOptions: [
          { value: 'provider', label: 'Yes, with another provider. It did not work.' },
          { value: 'internal', label: 'Yes, internally. No results.' },
          { value: 'first', label: 'No, this is the first time.' },
        ],
      },
      s3: {
        title: 'The budget',
        budget: 'What is your investment range for this project?',
        options: [
          { value: 'lt1k', label: 'Under $1,000' },
          { value: '1k-2.5k', label: '$1,000 - $2,500' },
          { value: '2.5k-5k', label: '$2,500 - $5,000' },
          { value: '5k-10k', label: '$5,000 - $10,000' },
          { value: 'gt10k', label: 'Over $10,000' },
          { value: 'unsure', label: 'Not sure yet, I need guidance' },
        ],
        lowTitle: 'A quick note on budget',
        low: `Our projects start at ${usd(P.expressCommerce.from)} for express systems and ${usd(P.infrastructure.from)} for corporate sites. If you are at an early stage, the Express Commerce System is usually the most efficient option.`,
        lowCta: 'See the Express Commerce System',
      },
      s4: {
        title: 'Your operation',
        tools: 'Which tools does your team use today?',
        toolsHint: 'CRM, invoicing, email marketing, bookings. This shows us automation opportunities.',
        hours: 'How many hours a week go into repetitive tasks that could be automated?',
        hoursOptions: [
          { value: '0-2', label: '0 - 2 hours' },
          { value: '2-5', label: '2 - 5 hours' },
          { value: '5-10', label: '5 - 10 hours' },
          { value: '10+', label: 'More than 10 hours' },
        ],
      },
      s5: {
        title: 'The commitment',
        retainer: `To guarantee performance after launch, every project includes a monthly operations plan (${usd(P.retainers.essential)}-${usd(P.retainers.operations)} per month from month two). Is that within your expectations?`,
        options: [
          { value: 'yes', label: 'Yes, it makes sense' },
          { value: 'explain', label: 'I want to understand what it includes first' },
          { value: 'no', label: 'I am not looking for ongoing maintenance' },
        ],
        noteNo:
          'Understood. A system without active maintenance works until it does not, and it always fails at the worst moment. We can walk you through the real impact on the call, with no commitment.',
      },
      s6: {
        title: 'Let us close',
        name: 'Your name',
        email: 'Email',
        channel: 'How do you prefer to talk?',
        channels: [
          { value: 'email', label: 'Email' },
          { value: 'whatsapp', label: 'WhatsApp' },
          { value: 'video', label: 'Video call' },
        ],
        deadline: 'Is there a deadline? (optional)',
        privacy: 'We only use your answers to evaluate your project. See our privacy policy.',
      },
    },
  },

  legal: {
    privacy: {
      meta: { title: 'Privacy Policy', description: 'How World of Gust collects, uses and protects the information you share through this website.' },
      title: 'Privacy policy',
      updated: 'Last updated: September 2026',
      sections: [
        {
          h: 'Who is responsible',
          p: ['World of Gust, a web studio led by Gustavo Liendo, is responsible for the data collected on this site. Contact: contact@worldofgust.com.'],
        },
        {
          h: 'What we collect',
          p: [
            'The answers you submit in the qualification form: name, email, company and project details.',
            'If you accept analytics cookies, anonymous usage data through Google Analytics 4.',
          ],
        },
        {
          h: 'Why we use it',
          p: ['To evaluate your project, reply to you and prepare a proposal. To understand which pages are useful, only if you consent.'],
        },
        {
          h: 'Who we share it with',
          p: [
            'Resend (email delivery) and, if you consent to analytics, Google. We do not sell or rent your data.',
          ],
        },
        {
          h: 'How long we keep it',
          p: ['Form submissions are kept up to 24 months, or until you ask us to delete them.'],
        },
        {
          h: 'Your rights',
          p: ['You can request access, correction or deletion of your data at any time by writing to contact@worldofgust.com.'],
        },
      ],
    },
    terms: {
      meta: { title: 'Terms of Use for the Website', description: 'Terms that govern the use of the World of Gust website, its reference prices and the content shown on it.' },
      title: 'Terms of use',
      updated: 'Last updated: September 2026',
      sections: [
        { h: 'Use of this site', p: ['This site presents the services of World of Gust. You may browse it freely for personal or business evaluation.'] },
        {
          h: 'Prices and offers',
          p: ['Prices on this site are reference ranges in USD. Every project is governed by its own written proposal and contract, which prevail over the information shown here.'],
        },
        { h: 'Intellectual property', p: ['Texts, design and code of this site belong to World of Gust. Client projects shown belong to their respective owners and appear with permission.'] },
        { h: 'Liability', p: ['We work to keep this information accurate but do not guarantee it is free of errors. Nothing on this site is a binding offer.'] },
        { h: 'Contact', p: ['Questions about these terms: contact@worldofgust.com.'] },
      ],
    },
    cookies: {
      meta: { title: 'Cookie Policy and Analytics Consent', description: 'Which cookies worldofgust.com uses, why analytics stay off until you accept, and how to change your choice.' },
      title: 'Cookie policy',
      updated: 'Last updated: September 2026',
      sections: [
        {
          h: 'Necessary storage',
          p: ['We store your theme, and your cookie choice, in your browser. They contain no personal data and are needed for the site to remember your preferences.'],
        },
        {
          h: 'Analytics cookies',
          p: ['Google Analytics 4 cookies (_ga, _ga_*) are only set if you choose "Allow analytics". Until then, consent mode keeps analytics storage denied.'],
        },
        { h: 'Changing your choice', p: ['Clear this site\'s data in your browser and the banner will appear again.'] },
      ],
    },
  },

  notFound: {
    title: 'This page does not exist',
    body: 'It was moved or never existed. The pages below are the ones people usually look for.',
    home: 'Go to the home page',
    work: 'See case studies',
  },
}

export default en
