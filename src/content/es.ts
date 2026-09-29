import type { Dictionary } from './types'
import { PRICING as P, SLA_HOURS as SLA, EXPRESS_DELIVERY_DAYS as DAYS, usd } from '@/lib/site'

const es: Dictionary = {
  common: {
    skip: 'Saltar al contenido',
    nav: [
      { label: 'Servicios', href: '/services' },
      { label: 'Precios', href: '/pricing' },
      { label: 'Proyectos', href: '/work' },
      { label: 'Lab', href: '/lab' },
      { label: 'Nosotros', href: '/about' },
      { label: 'Blog', href: '/blog' },
    ],
    headerCta: 'Solicita tu propuesta',
    menu: 'Menú',
    close: 'Cerrar',
    language: 'Idioma',
    switchTo: 'Read in English',
    theme: { label: 'Tema de color', dark: 'Oscuro', light: 'Claro', daltonism: 'Apto para daltonismo' },
    footer: {
      pitch: 'Sistemas web para negocios que no pueden darse el lujo de un sitio que falla. Rápidos, medidos y mantenidos después del lanzamiento.',
      studio: 'Estudio',
      services: 'Servicios',
      legal: 'Legal',
      rights: 'Todos los derechos reservados.',
      builtWith: 'Este sitio: Next.js, WordPress headless, cero constructores visuales.',
      privacy: 'Privacidad',
      terms: 'Términos',
      cookies: 'Cookies',
    },
    home: 'Inicio',
    cookie: {
      text: 'Usamos una cookie de analítica para saber qué páginas sirven. No se registra nada hasta que aceptes.',
      accept: 'Permitir analítica',
      reject: 'No, gracias',
      more: 'Política de cookies',
    },
    qualify: 'Solicita tu propuesta',
    faqTitle: 'Lo que nos preguntan antes de cada proyecto',
    learnMore: 'Ver el detalle',
  },

  home: {
    meta: {
      title: 'World of Gust | Sistemas web que no se caen y venden',
      description:
        'Desarrollamos sitios en Next.js y WordPress headless con Lighthouse 90+, automatizaciones y SLA real. Para negocios que no pueden permitirse caídas.',
    },
    hero: {
      title: 'No hacemos páginas web. Desplegamos infraestructura que factura.',
      lead: 'Sitios rápidos, automatizaciones de backend y un SLA de respuesta, para negocios que no pueden darse el lujo de fallar.',
      primary: 'Solicita tu propuesta',
      secondary: 'Ver resultados',
    },
    receipt: {
      title: 'Esta página, medida en tu navegador',
      loaded: 'Carga completa',
      transferred: 'Transferido',
      requests: 'Solicitudes',
      lcp: 'Pintado principal',
      fcp: 'Primer pintado',
      note: 'Números reales de tu visita, no una captura. Este es el estándar que entregamos.',
      pending: 'Midiendo',
    },
    fears: {
      title: 'Tres cosas que le quitan el sueño a cualquier dueño de negocio. Las eliminamos.',
      items: [
        {
          fear: 'El sitio se cae justo en el peor momento.',
          answer: `Monitoreo de disponibilidad 24/7 y SLA de respuesta en ${SLA.performance} horas.`,
          proof: 'Incluido en todos los planes desde el mes 2.',
        },
        {
          fear: 'Alguien del equipo hace a mano lo que debería hacer un sistema.',
          answer: 'Automatizaciones con n8n y Make para notificaciones, CRM y reportes.',
          proof: 'Te las mostramos en el onboarding.',
        },
        {
          fear: 'A los seis meses del lanzamiento ya se siente viejo.',
          answer: 'Stack moderno, actualizaciones semanales de dependencias y rendimiento medido.',
          proof: 'Lighthouse 90+ documentado en cada entrega.',
        },
      ],
    },
    work: {
      title: 'Pruebas, no promesas',
      lead: 'Cada caso responde tres preguntas: qué estaba fallando, qué decidimos y qué cambió.',
      cta: 'Todos los casos',
    },
    offers: {
      title: 'Tres formas de trabajar con nosotros',
      items: [
        {
          name: 'Infraestructura Digital',
          tagline: 'Desde sitios corporativos de alto rendimiento hasta aplicaciones web a medida. Frontend, backend y nube, por una sola persona responsable.',
          price: `${usd(P.infrastructure.from)} - ${usd(P.infrastructure.to)}+`,
          href: '/services/digital-infrastructure',
        },
        {
          name: 'Express Commerce System',
          tagline: `De idea a operativo en ${DAYS} días hábiles. Para restaurantes, tiendas y comercios locales.`,
          price: `${usd(P.expressCommerce.from)} - ${usd(P.expressCommerce.to)}`,
          href: '/services/express-commerce',
        },
        {
          name: 'Operaciones Digitales',
          tagline: 'El plan mensual que mantiene todo rápido, seguro y con alguien que responde.',
          price: `${usd(P.retainers.essential)} - ${usd(P.retainers.operations)} / mes`,
          href: '/services/digital-operations',
        },
      ],
      compare: 'Comparar paquetes y planes',
    },
    afterLaunch: {
      title: 'La mayoría de agencias entrega el sitio y desaparece. Nosotros empezamos el día del lanzamiento.',
      body: 'Todo proyecto continúa con un plan mensual de operaciones: monitoreo, copias de seguridad, actualizaciones de seguridad y alguien que responde en horas, no en semanas.',
      cta: 'Cómo funciona el plan mensual',
    },
    final: {
      title: 'Si tu mayor preocupación es que se vea bonito, probablemente no somos el equipo correcto.',
      body: 'Si necesitas un sitio que rinda, se encuentre en Google y siga funcionando, responde unas preguntas. Toma tres minutos y nos dice a ambos si hay coincidencia.',
    },
  },

  services: {
    meta: {
      title: 'Desarrollo Web y Aplicaciones a Medida para Negocios',
      description:
        'Infraestructura digital, sitios express para comercios y planes mensuales de operación. Ordenados por el problema que resuelven, con rangos de precio claros.',
    },
    title: 'Servicios, ordenados por el problema que resuelven',
    lead: 'Hacemos tres cosas y las hacemos bien. Elige la que corresponde al problema que tienes hoy.',
    items: [
      {
        name: 'Infraestructura Digital',
        problem: 'Necesitas más que una página: un sistema que haga algo por tu negocio. O tu sitio actual está lento, es difícil de actualizar y nadie responde cuando falla.',
        forWho: 'Empresas y startups que necesitan un sitio serio, una plataforma o una aplicación web a medida.',
        price: `${usd(P.infrastructure.from)} - ${usd(P.infrastructure.to)}+`,
        href: '/services/digital-infrastructure',
      },
      {
        name: 'Express Commerce System',
        problem: 'Tu negocio funciona, pero tus clientes en línea encuentran un sitio lento, un menú roto o nada.',
        forWho: 'Restaurantes, tiendas, consultores y comercios locales.',
        price: `${usd(P.expressCommerce.from)} - ${usd(P.expressCommerce.to)}`,
        href: '/services/express-commerce',
      },
      {
        name: 'Operaciones Digitales',
        problem: 'Ya tienes un sitio, y cada arreglo se convierte en perseguir a alguien que responde en semanas.',
        forWho: 'Todos nuestros clientes después del lanzamiento, y sitios existentes que pasan nuestra auditoría.',
        price: `${usd(P.retainers.essential)} - ${usd(P.retainers.operations)} / mes`,
        href: '/services/digital-operations',
      },
    ],
    notSure: {
      title: '¿No sabes cuál encaja?',
      body: 'El formulario de calificación te lleva a la opción correcta. Si ninguna encaja, también te lo diremos.',
    },
    faq: [
      {
        q: '¿Por qué muestran rangos y no precios exactos?',
        a: 'Porque el alcance cambia el precio y no vamos a esconderlo detrás de un "desde $350". El rango te dice con honestidad si estamos dentro de tu presupuesto antes de invertir tiempo en una llamada.',
      },
      {
        q: '¿El plan mensual es obligatorio?',
        a: `Forma parte de todos los proyectos desde el mes 2, porque es la única forma de garantizar el SLA. Sin él, el soporte se cobra por hora (${usd(P.hourlyOutsideRetainer.from)}-${usd(P.hourlyOutsideRetainer.to)}) y sin prioridad.`,
      },
      {
        q: '¿Trabajan con clientes fuera de Venezuela?',
        a: 'La mayoría de nuestros clientes están en Estados Unidos, España y Latinoamérica. Trabajamos entre husos horarios, en español e inglés, y facturamos en USD.',
      },
      {
        q: '¿Pueden hacerse cargo de un WordPress existente?',
        a: 'Sí, después de una auditoría. A veces rehacerlo se paga solo en meses; a veces basta con una limpieza. La auditoría nos dice cuál.',
      },
    ],
  },

  infrastructure: {
    meta: {
      title: 'Desarrollo Web y Aplicaciones a Medida en Next.js',
      description: `Sitios corporativos, plataformas y aplicaciones web a medida con Lighthouse 90+, backend propio y SLA. Frontend, backend y nube. Inversión desde ${usd(P.infrastructure.from)}.`,
    },
    breadcrumb: 'Infraestructura Digital',
    title: 'Infraestructura Digital Corporativa',
    lead: 'Desde un sitio corporativo hasta una aplicación a medida, construido como software real: rápido, conectado a tus herramientas y mantenido después del lanzamiento.',
    problemTitle: 'El problema',
    problem:
      'Tu empresa necesita algo que trabaje, no solo que se vea. Un sitio que capture leads y se conecte a tu operación, o una aplicación a medida que resuelva un problema que ninguna herramienta genérica resuelve. Y que no dependa de alguien que tarda semanas en responder cuando algo falla.',
    includesTitle: 'Qué incluye',
    includes: [
      'Sitio en Next.js con Lighthouse 90+ garantizado al lanzamiento',
      'CMS WordPress headless para editar sin depender de un desarrollador',
      'Integraciones según necesidad: CRM, email marketing, pagos',
      'Base técnica de SEO: metadatos, schema, sitemap, hreflang',
      `SLA de respuesta en ${SLA.performance} horas hábiles desde el mes 2`,
      'Una semana de onboarding para tu equipo',
      'Backend y lógica de negocio a medida cuando el proyecto lo pide: APIs, bases de datos e integraciones (Django, AWS)',
    ],
    excludesTitle: 'Qué no incluye',
    excludes: [
      'Producción de contenido (textos, fotos y video son responsabilidad del cliente)',
      'Gestión de redes sociales',
      'Campañas de SEO continuo (disponible como complemento documentado)',
    ],
    outcomeTitle: 'Qué puedes esperar',
    outcome: [
      'Páginas que cargan en menos de 2,5 segundos en móvil',
      'Cambios de contenido en minutos, sin abrir un ticket',
      'Leads que llegan solos a tu CRM',
    ],
    investmentTitle: 'Inversión',
    investment: `${usd(P.infrastructure.from)} - ${usd(P.infrastructure.to)}+ USD`,
    investmentNote: 'El rango depende del volumen de integraciones y funcionalidades. Más el plan Performance desde el mes 2.',
    cta: 'Solicita tu propuesta',
    faq: [
      {
        q: '¿Por qué WordPress headless y no un tema de WordPress normal?',
        a: 'Tu equipo conserva el editor que ya conoce. Tus visitantes reciben un frontend en Next.js más rápido y con muchas menos piezas que se puedan romper o hackear.',
      },
      {
        q: '¿Cuánto tarda un proyecto?',
        a: 'Entre 4 y 10 semanas según el alcance. Recibes el calendario en la propuesta, antes de pagar nada.',
      },
      {
        q: '¿Pueden construir una tienda en línea aquí?',
        a: 'Sí. Catálogos complejos, cotizaciones B2B e integraciones de pago entran en el paquete Scale.',
      },
    ],
  },

  express: {
    meta: {
      title: `Express Commerce System: Tu Web de Negocio en ${DAYS} Días`,
      description: `Sitio rápido para restaurantes, tiendas y comercios locales. Listo en ${DAYS} días hábiles, Lighthouse 90+, WhatsApp y Maps integrados. Desde ${usd(P.expressCommerce.from)}.`,
    },
    breadcrumb: 'Express Commerce System',
    title: 'Express Commerce System',
    tagline: `De idea a operativo en ${DAYS} días. Sin constructores visuales. Sin plugins que se rompen.`,
    lead: 'Un sitio ultraligero construido por alguien que domina WordPress y Shopify a fondo, no una plantilla armada a las prisas. Carta o catálogo, pedidos o reservas, WhatsApp y Maps.',
    problemTitle: 'El problema',
    problem:
      'Tienes un negocio funcionando: un restaurante, una tienda, un servicio local. Tus clientes llegan a un sitio lento que no carga bien en el móvil, o simplemente no encuentran nada. Cada día que sigue así, otro se lleva a ese cliente.',
    includesTitle: 'Qué incluye',
    includes: [
      '3 a 5 páginas: inicio, carta o catálogo, contacto, ubicación',
      'Integración con Google Maps y WhatsApp Business',
      'Formulario de pedido o reserva adaptado a tu negocio',
      'Lighthouse 90+ garantizado al lanzamiento',
      'Dominio y hosting configurados y a tu nombre',
      'Panel de edición simple, sin conocimientos técnicos',
      'Montado sobre WordPress o Shopify según tu caso, optimizado a mano para que cargue como un sitio a medida',
    ],
    excludesTitle: 'Qué no incluye',
    excludes: [
      'Pagos en línea con carrito e inventario completo (eso es Infraestructura Digital)',
      'Redacción de textos y fotografía',
      'Más de 5 páginas',
    ],
    outcomeTitle: 'Qué puedes esperar',
    outcome: [
      'Carga en menos de 1,5 segundos',
      'Tus clientes te escriben por WhatsApp con un toque',
      'Un sitio que no se degrada porque no tiene plugins que envejezcan',
    ],
    investmentTitle: 'Inversión',
    investment: `${usd(P.expressCommerce.from)} - ${usd(P.expressCommerce.to)} USD, pago único`,
    investmentNote: `Más ${usd(P.retainers.essential)} al mes desde el mes 2 (plan Essential).`,
    cta: 'Solicitar mi Express Commerce System',
    guaranteeTitle: 'Garantía de entrega',
    guarantee: `Si no entregamos en ${DAYS} días hábiles desde que recibimos tus materiales (logo, textos, imágenes), te devolvemos el 50% del pago. Sin discusiones, sin letra pequeña.`,
    maintenanceTitle: 'Por qué el mantenimiento no es opcional',
    maintenance:
      'El plan incluye monitoreo de disponibilidad, copias de seguridad diarias y actualizaciones de seguridad mensuales. Sin él, cualquier sitio se degrada en 3 a 6 meses. El mantenimiento no es un extra; es lo que protege lo que acabas de invertir.',
    compareTitle: 'Express Commerce frente a una agencia tradicional',
    compareCols: ['', 'Express Commerce System', 'Agencia tradicional'],
    compareRows: [
      ['Tiempo de entrega', `${DAYS} días hábiles`, '4 a 8 semanas'],
      ['Velocidad (Lighthouse)', '90+ garantizado', 'Variable, sin garantía'],
      ['Dependencias', 'Mínimas', '15 a 30 plugins'],
      ['Costo inicial', `${usd(P.expressCommerce.from)} - ${usd(P.expressCommerce.to)}`, '$3.000+'],
      ['Mantenimiento', `${usd(P.retainers.essential)}/mes, incluido`, 'Por solicitud'],
      ['SLA de respuesta', `${SLA.essential} horas hábiles`, 'Sin garantía'],
    ],
    forWhoTitle: 'Pensado para',
    forWho: ['Restaurantes y cafés', 'Tiendas físicas', 'Consultores', 'Profesionales independientes', 'Comercios de servicios locales'],
    faq: [
      {
        q: '¿Qué tengo que enviar antes de que empiecen los 5 días?',
        a: 'Logo, textos, fotos, tu carta o catálogo y acceso a tu dominio si ya tienes uno. Te enviamos una lista el mismo día que firmas.',
      },
      {
        q: '¿Puedo actualizar precios y la carta yo mismo?',
        a: 'Sí. El panel está hecho para eso: cambias un precio o un plato en un minuto desde el teléfono.',
      },
    ],
  },

  operations: {
    meta: {
      title: 'Planes de Mantenimiento Web con SLA | Operaciones Digitales',
      description: `Mantenimiento web mensual con monitoreo, copias de seguridad, seguridad y SLA de respuesta desde ${SLA.operations}h. Planes desde ${usd(P.retainers.essential)} al mes.`,
    },
    breadcrumb: 'Operaciones Digitales',
    title: 'Plan de Operaciones Digitales',
    lead: 'El plan que mantiene tu sitio rápido, seguro y con alguien que responde. Los proyectos son cómo nos conocemos; las operaciones, cómo trabajamos juntos.',
    problemTitle: 'El problema',
    problem:
      'Un sitio sin mantenimiento activo es como un auto sin servicio: funciona hasta que deja de funcionar, y siempre falla en el peor momento. Las dependencias desactualizadas son la puerta más común para ataques, y las automatizaciones rotas fallan en silencio.',
    includesTitle: 'Todos los planes incluyen',
    includes: [
      'Monitoreo de disponibilidad 24/7 con alertas automáticas',
      'Copias de seguridad diarias automatizadas',
      'Actualizaciones de seguridad',
      'Reporte mensual de rendimiento: Lighthouse, disponibilidad, incidentes',
      'Horas incluidas para cambios menores',
    ],
    excludesTitle: 'Qué no incluye',
    excludes: ['Secciones o funcionalidades nuevas (se cotizan aparte)', 'Producción de contenido', 'Gestión de campañas pagadas'],
    outcomeTitle: 'Qué obtienes',
    outcome: [
      'Alguien responsable cuando algo falla',
      'Un sitio tan rápido como el día del lanzamiento',
      'Automatizaciones que siguen funcionando cuando nadie las mira',
    ],
    investmentTitle: 'Inversión',
    investment: `${usd(P.retainers.essential)} - ${usd(P.retainers.operations)} USD al mes`,
    investmentNote: 'Empieza en el mes 2 de cada proyecto. Los sitios existentes entran después de una auditoría técnica.',
    cta: 'Solicita tu propuesta',
    whyTitle: 'Por qué se paga solo',
    why: [
      {
        title: 'Una caída cuesta más que el plan',
        body: 'Cuatro horas fuera de línea en un día de campaña pueden costar más que doce meses de mantenimiento. Cada clic pagado que termina en un error es dinero perdido.',
      },
      {
        title: 'Prioridad, por escrito',
        body: 'Con un plan tienes un tiempo de respuesta contractual. Sin él, eres una solicitud más en la fila.',
      },
      {
        title: 'Tu tiempo vale más',
        body: 'Si tu hora vale $50 y el plan te ahorra dos horas al mes persiguiendo temas técnicos, ya se pagó solo.',
      },
    ],
    tiersTitle: 'Planes',
    withoutTitle: '¿Puedo prescindir del plan?',
    without: `Sí. En ese caso el soporte se cobra por hora, de ${usd(P.hourlyOutsideRetainer.from)} a ${usd(P.hourlyOutsideRetainer.to)}, sin prioridad garantizada. La mayoría de clientes pasa a un plan después de dos o tres solicitudes sueltas. La decisión es tuya.`,
    faq: [
      {
        q: '¿Las horas que no uso se acumulan?',
        a: 'No. Se reinician cada mes para mantener capacidad reservada para tu SLA.',
      },
      {
        q: '¿Puedo cambiar de plan?',
        a: 'Sí, al inicio de cualquier mes y sin penalización.',
      },
    ],
  },

  retainerTiers: [
    {
      name: 'Essential',
      for: 'Para sitios Express Commerce System',
      price: `${usd(P.retainers.essential)}/mes`,
      sla: `Respuesta en ${SLA.essential}h`,
      items: ['Monitoreo 24/7', 'Copias de seguridad diarias', 'Actualizaciones de seguridad mensuales', 'Reporte mensual de rendimiento', '1 hora de cambios incluida'],
    },
    {
      name: 'Performance',
      for: 'Para sitios corporativos (Launch y Scale)',
      price: `${usd(P.retainers.performance)}/mes`,
      sla: `Respuesta en ${SLA.performance}h`,
      items: ['Todo lo de Essential', 'Alerta si Lighthouse baja de 85', 'Actualización semanal de dependencias', '2 horas de cambios incluidas', 'Revisión trimestral de conversión'],
    },
    {
      name: 'Operations',
      for: 'Para proyectos con automatizaciones n8n o Make',
      price: `${usd(P.retainers.operations)}/mes`,
      sla: `Respuesta en ${SLA.operations}h`,
      items: ['Todo lo de Performance', 'Mantenimiento de flujos de automatización', 'Monitoreo de CRM, email y pagos', '3 horas de cambios incluidas', 'Llamada estratégica mensual de 30 minutos'],
    },
  ],

  pricing: {
    meta: {
      title: 'Precios de Páginas Web: Paquetes y Planes de Mantenimiento',
      description: `Precios de desarrollo web transparentes. Launch desde ${usd(P.packages.launch)}, Scale desde ${usd(P.packages.scale)}, Automate a consultar. Mantenimiento desde ${usd(P.retainers.essential)}/mes.`,
    },
    title: 'Precios que muestran valor, no horas',
    lead: 'Nunca vendemos por hora. Pagas por un resultado y por alguien que responde después del lanzamiento.',
    packagesTitle: 'Paquetes de proyecto',
    packages: [
      {
        name: 'Launch',
        price: usd(P.packages.launch),
        for: 'Una presencia corporativa seria',
        items: ['Sitio de 5 a 8 páginas', 'Lighthouse 90+', 'CMS headless', 'Base técnica de SEO', 'SLA incluido'],
        retainer: `Plan: ${usd(P.retainers.performance)}/mes`,
      },
      {
        name: 'Scale',
        price: usd(P.packages.scale),
        for: 'Vender e integrar',
        items: ['Sitio complejo', 'E-commerce', 'Integraciones de CRM y pagos', 'SLA prioritario'],
        retainer: `Plan: ${usd(P.retainers.performance)}/mes`,
        featured: true,
      },
      {
        name: 'Automate',
        price: 'A consultar',
        for: 'Operaciones que corren solas',
        items: ['Arquitectura a medida', 'Flujos con n8n y Make', `SLA de ${SLA.operations}h`, 'Revisión estratégica mensual'],
        retainer: `Plan: ${usd(P.retainers.operations)}/mes`,
      },
    ],
    anchor:
      'Un sitio caído durante una campaña de Google Ads puede costar diez veces el mantenimiento mensual. El plan existe para que ese cálculo nunca te aplique.',
    retainersTitle: 'Planes mensuales de operación',
    retainersLead: 'Todo proyecto continúa con uno de estos desde el mes 2.',
    exampleTitle: 'Así se ve el primer año',
    example: [
      { label: 'Fase 1: desarrollo y lanzamiento (Scale)', value: `${usd(P.packages.scale)}` },
      { label: 'Fase 2: plan Performance, meses 2 a 12', value: `${usd(P.retainers.performance)} x 11` },
    ],
    exampleTotal: { label: 'Total primer año', value: usd(P.packages.scale + P.retainers.performance * 11) },
    exampleNote: 'Ves el año completo antes de firmar. Sin sorpresas en el mes cuatro.',
    rulesTitle: 'Cómo cotizamos',
    rules: [
      `Los proyectos parten desde ${usd(P.minimumProject)}.`,
      'Rangos, nunca desgloses por hora.',
      '50% para iniciar, 50% al lanzar.',
      'Facturamos en USD. Zelle, PayPal o transferencia.',
    ],
    faq: [
      {
        q: '¿Por qué hay un mínimo?',
        a: 'Por debajo no podemos garantizar Lighthouse 90+, el SLA ni un QA serio. Preferimos menos proyectos bien hechos.',
      },
      {
        q: '¿Ofrecen pagos por etapas?',
        a: 'En Scale y Automate, sí: tres hitos atados a entregables, acordados en la propuesta.',
      },
    ],
  },

  about: {
    meta: {
      title: 'Sobre World of Gust: Estudio Pequeño, Responsable de Verdad',
      description:
        'World of Gust es un estudio web boutique liderado por Gustavo Liendo. Perfil senior en cada proyecto, una red de especialistas y una sola persona responsable.',
    },
    title: 'Un estudio pequeño con una persona responsable',
    lead: 'Sin ejecutivos de cuenta ni traspasos. Quien te atiende en la primera llamada es quien responde por tu sistema.',
    noteTitle: 'Por qué fundé World of Gust',
    note: [
      'Llevo más de cinco años construyendo para empresas en Estados Unidos, España y Latinoamérica. El patrón se repite: un lanzamiento bonito y después silencio. Seis meses más tarde el sitio está lento, un plugin rompió un formulario y nadie responde.',
      'Fundé World of Gust para vender lo contrario: sistemas medidos antes del lanzamiento y mantenidos después. Prefiero trabajar con menos clientes por más tiempo que perseguir el próximo proyecto barato.',
    ],
    signature: 'Gustavo Liendo, fundador',
    modelTitle: 'Cómo nos organizamos',
    model: [
      {
        title: 'Liderazgo senior en cada proyecto',
        body: 'Me hago cargo de la arquitectura, la revisión de código y la relación. Nada sale sin pasar por mí.',
      },
      {
        title: 'Especialistas cuando el proyecto los necesita',
        body: 'Diseño, redacción y automatización se suman por proyecto desde una red con la que trabajamos hace años.',
      },
      {
        title: 'Procesos documentados',
        body: 'Checklists de onboarding, QA y entrega. La calidad no depende de que alguien tenga un buen día.',
      },
    ],
    processTitle: 'Del primer mensaje a la operación mensual',
    process: [
      { title: 'Calificar', body: 'Un formulario de tres minutos. Si no hay coincidencia, te lo decimos en un día hábil.' },
      { title: 'Llamada de descubrimiento', body: '30 minutos sobre tu negocio, no sobre colores.' },
      { title: 'Propuesta', body: 'Alcance, calendario y total del primer año. En 48 horas.' },
      { title: 'Construir y lanzar', body: 'Revisiones semanales, enlace de pruebas desde la primera semana y reporte Lighthouse al lanzar.' },
      { title: 'Operar', body: 'Monitoreo, actualizaciones, SLA y reporte mensual. Aquí es donde la mayoría se detiene.' },
    ],
    stackTitle: 'Con qué construimos',
    stack: ['Next.js', 'React', 'TypeScript', 'WordPress headless', 'WPGraphQL', 'Shopify', 'WooCommerce', 'Django', 'AWS', 'Vercel', 'n8n', 'Make'],
    factsTitle: 'En números',
    facts: [
      { value: '5+', label: 'años construyendo para la web' },
      { value: '6', label: 'países con clientes activos' },
      { value: '2', label: 'idiomas de trabajo' },
    ],
  },

  lab: {
    meta: {
      title: 'Lab: Cómo Construimos, a la Vista',
      description:
        'Nuestro stack, nuestros presupuestos de rendimiento y los principios detrás de cada decisión. Starter kits de código abierto y experimentos de World of Gust.',
    },
    title: 'Cómo construimos, a la vista',
    lead: 'La mayoría de estudios esconde su proceso. Nosotros lo publicamos, porque cualquiera dice que hace calidad y muy pocos pueden mostrarla.',
    specTitle: 'Este sitio, como ficha técnica',
    spec: [
      { label: 'Framework', value: 'Next.js App Router, server components por defecto' },
      { label: 'Contenido', value: 'WordPress headless vía WPGraphQL' },
      { label: 'Estilos', value: 'Tailwind CSS v4, una hoja de estilos, sin kits de UI' },
      { label: 'Tipografía', value: 'Fuente variable autoalojada, sin bloqueo de render' },
      { label: 'Presupuesto de JavaScript', value: 'Solo se hidratan cabecera, tema, idioma y formularios' },
      { label: 'Idiomas', value: 'Inglés y español con hreflang' },
      { label: 'Analítica', value: 'Modo de consentimiento, denegado por defecto' },
      { label: 'Objetivo de rendimiento', value: 'Lighthouse 90+ en móvil, en cada página' },
    ],
    principlesTitle: 'Principios',
    principles: [
      { title: 'Medir antes de afirmar', body: 'Cada entrega sale con su reporte de Lighthouse. Si un número está en nuestro sitio, puedes verificarlo.' },
      { title: 'Menos dependencias, menos fallas', body: 'Cada plugin o paquete es una actualización futura y un posible agujero. Solo entran cuando se ganan su lugar.' },
      { title: 'Quien edita también es usuario', body: 'El CMS se diseña para la persona que cambia precios a las 9 de la noche, no para el desarrollador.' },
      { title: 'Infraestructura aburrida', body: 'Hosting probado, despliegues predecibles, copias de seguridad verificadas. La emoción va en el producto, no en producción.' },
    ],
    openTitle: 'Trabajo abierto',
    open: [
      {
        title: 'Starter kit headless',
        body: 'La base Next.js + WPGraphQL + Tailwind v4 que usamos en los Express Commerce System, documentada y con licencia MIT.',
        status: 'En preparación',
      },
      {
        title: 'Experimentos interactivos',
        body: 'Landings guiadas por scroll y en 3D con GSAP y React Three Fiber, publicadas como demos visitables.',
        status: 'En progreso',
      },
      {
        title: 'Playground',
        body: 'Pequeñas herramientas y experimentos con APIs, cada uno con demo en vivo o un resumen breve de las decisiones detrás.',
        status: 'En progreso',
      },
    ],
    github: 'Seguir en GitHub',
  },

  work: {
    meta: {
      title: 'Casos de Estudio: Proyectos Web con Resultados Medibles',
      description:
        'Casos de estudio de e-commerce, sitios corporativos y WordPress headless. El problema de negocio, las decisiones técnicas y el resultado.',
    },
    title: 'Casos de estudio',
    lead: 'No capturas de pantalla. Qué estaba fallando, qué decidimos y qué cambió.',
    empty: 'Estamos documentando los casos. Mientras tanto, pídenos referencias en la llamada de descubrimiento.',
    viewCase: 'Leer el caso',
    labels: {
      client: 'Cliente',
      problem: 'El problema de negocio',
      decisions: 'Decisiones clave',
      metrics: 'Al lanzamiento',
      result: 'El resultado',
      stack: 'Stack',
      live: 'Visitar el sitio',
      code: 'Ver el código',
      back: 'Todos los casos',
      next: '¿Tienes un problema parecido?',
      gallery: 'Pantallas',
    },
  },

  blog: {
    meta: {
      title: 'Blog: WordPress Headless, Next.js y Rendimiento Web',
      description:
        'Artículos prácticos sobre WordPress headless, Next.js, rendimiento web y automatización, en español. Un artículo profundo al mes en lugar de doce superficiales.',
    },
    title: 'Notas desde el taller',
    lead: 'Un artículo profundo al mes sobre el stack que usamos a diario. Sin relleno.',
    empty: 'Los primeros artículos vienen en camino. Estos son los temas en los que estamos escribiendo:',
    topicsTitle: 'Próximamente',
    topics: [
      'WordPress headless con Next.js: cuándo vale la pena y cuándo no',
      'n8n o Make para automatizar un negocio pequeño',
      'Cómo construimos un Express Commerce System en cinco días',
      'SEO para sitios Next.js multilingües con hreflang',
    ],
    read: 'Leer artículo',
    back: 'Todos los artículos',
    minRead: 'min de lectura',
  },

  contact: {
    meta: {
      title: 'Solicita tu propuesta | Empieza con World of Gust',
      description:
        'Responde unas preguntas sobre tu negocio y presupuesto. Si hay coincidencia, recibes respuesta en menos de 24 horas hábiles y una llamada de descubrimiento.',
    },
    title: 'Solicita tu propuesta',
    lead: 'Antes de hablar de presupuesto, necesitamos entender tu negocio.',
    intro:
      'Toma tres minutos y nos permite preparar una propuesta relevante, no una plantilla genérica. Si tu proyecto es una buena coincidencia, tendrás respuesta en menos de 24 horas hábiles.',
    sideTitle: 'Qué pasa después',
    steps: [
      { title: 'Leemos cada respuesta', body: 'Personalmente, no un bot. En menos de 24 horas hábiles.' },
      { title: 'Llamada de descubrimiento', body: '30 minutos por video, o asíncrona si prefieres.' },
      { title: 'Propuesta', body: 'Alcance, calendario y total del primer año en 48 horas.' },
    ],
    direct: '¿Prefieres escribir por email?',
    form: {
      stepOf: 'Paso {n} de {total}',
      back: 'Atrás',
      next: 'Continuar',
      submit: 'Enviar y solicitar mi llamada',
      sending: 'Enviando',
      required: 'Este campo es obligatorio.',
      invalidEmail: 'Escribe un email válido.',
      error: 'No se pudo enviar. Inténtalo de nuevo o escríbenos directamente por email.',
      successTitle: 'Solicitud recibida',
      success:
        'Revisamos cada cuestionario personalmente. Si tu proyecto es una buena coincidencia, recibirás respuesta en menos de 24 horas hábiles.',
      s1: {
        title: 'El proyecto',
        company: 'Nombre de la empresa o proyecto',
        type: '¿Qué estás buscando?',
        types: {
          infrastructure: 'Sitio web corporativo o plataforma',
          'express-commerce': 'Sitio express para mi negocio (carta, catálogo, tienda)',
          redesign: 'Rediseño de un sitio existente',
          automation: 'Automatizaciones e integraciones de backend',
          other: 'Otra cosa',
        },
        otherPlaceholder: 'Cuéntanos brevemente',
      },
      s2: {
        title: 'El problema',
        consequence: '¿Qué le pasa a tu negocio si esto no se resuelve en los próximos 90 días?',
        consequenceHint: 'Sé concreto: ventas perdidas, horas desperdiciadas, un lanzamiento en riesgo.',
        tried: '¿Ya intentaron resolverlo antes?',
        triedOptions: [
          { value: 'provider', label: 'Sí, con otro proveedor. No funcionó.' },
          { value: 'internal', label: 'Sí, internamente. Sin resultados.' },
          { value: 'first', label: 'No, es la primera vez.' },
        ],
      },
      s3: {
        title: 'El presupuesto',
        budget: '¿Cuál es tu rango de inversión para este proyecto?',
        options: [
          { value: 'lt1k', label: 'Menos de $1.000' },
          { value: '1k-2.5k', label: '$1.000 - $2.500' },
          { value: '2.5k-5k', label: '$2.500 - $5.000' },
          { value: '5k-10k', label: '$5.000 - $10.000' },
          { value: 'gt10k', label: 'Más de $10.000' },
          { value: 'unsure', label: 'Aún no lo sé, necesito orientación' },
        ],
        lowTitle: 'Una nota rápida sobre presupuesto',
        low: `Nuestros proyectos parten desde ${usd(P.expressCommerce.from)} para sistemas express y ${usd(P.infrastructure.from)} para sitios corporativos. Si estás en una etapa temprana, el Express Commerce System suele ser la opción más eficiente.`,
        lowCta: 'Ver el Express Commerce System',
      },
      s4: {
        title: 'Tu operación',
        tools: '¿Qué herramientas usa hoy tu equipo?',
        toolsHint: 'CRM, facturación, email marketing, reservas. Esto nos muestra oportunidades de automatización.',
        hours: '¿Cuántas horas semanales se van en tareas repetitivas que podrían automatizarse?',
        hoursOptions: [
          { value: '0-2', label: '0 - 2 horas' },
          { value: '2-5', label: '2 - 5 horas' },
          { value: '5-10', label: '5 - 10 horas' },
          { value: '10+', label: 'Más de 10 horas' },
        ],
      },
      s5: {
        title: 'El compromiso',
        retainer: `Para garantizar el rendimiento después del lanzamiento, todos los proyectos incluyen un plan mensual de operación (${usd(P.retainers.essential)}-${usd(P.retainers.operations)} al mes desde el mes 2). ¿Está dentro de tus expectativas?`,
        options: [
          { value: 'yes', label: 'Sí, tiene sentido' },
          { value: 'explain', label: 'Primero quiero entender qué incluye' },
          { value: 'no', label: 'No busco mantenimiento continuo' },
        ],
        noteNo:
          'Entendido. Un sistema sin mantenimiento activo funciona hasta que deja de funcionar, y siempre en el peor momento. Podemos explicarte el impacto real en la llamada, sin ningún compromiso.',
      },
      s6: {
        title: 'Cerremos',
        name: 'Tu nombre',
        email: 'Email',
        channel: '¿Cómo prefieres comunicarte?',
        channels: [
          { value: 'email', label: 'Email' },
          { value: 'whatsapp', label: 'WhatsApp' },
          { value: 'video', label: 'Videollamada' },
        ],
        deadline: '¿Hay una fecha límite? (opcional)',
        privacy: 'Solo usamos tus respuestas para evaluar tu proyecto. Consulta nuestra política de privacidad.',
      },
    },
  },

  legal: {
    privacy: {
      meta: { title: 'Política de Privacidad', description: 'Cómo World of Gust recopila, usa y protege la información que compartes en este sitio web.' },
      title: 'Política de privacidad',
      updated: 'Última actualización: septiembre de 2026',
      sections: [
        {
          h: 'Responsable',
          p: ['World of Gust, estudio web liderado por Gustavo Liendo, es responsable de los datos recopilados en este sitio. Contacto: contact@worldofgust.com.'],
        },
        {
          h: 'Qué recopilamos',
          p: [
            'Las respuestas que envías en el formulario de calificación: nombre, email, empresa y detalles del proyecto.',
            'Si aceptas las cookies de analítica, datos de uso anónimos a través de Google Analytics 4.',
          ],
        },
        {
          h: 'Para qué los usamos',
          p: ['Para evaluar tu proyecto, responderte y preparar una propuesta. Para entender qué páginas son útiles, solo si das tu consentimiento.'],
        },
        {
          h: 'Con quién los compartimos',
          p: ['Resend (envío de email) y, si aceptas la analítica, Google. No vendemos ni alquilamos tus datos.'],
        },
        {
          h: 'Cuánto tiempo los conservamos',
          p: ['Las solicitudes se conservan hasta 24 meses, o hasta que nos pidas eliminarlas.'],
        },
        {
          h: 'Tus derechos',
          p: ['Puedes solicitar acceso, corrección o eliminación de tus datos en cualquier momento escribiendo a contact@worldofgust.com.'],
        },
      ],
    },
    terms: {
      meta: { title: 'Términos de Uso del Sitio Web', description: 'Términos que regulan el uso del sitio web de World of Gust, sus precios de referencia y el contenido publicado.' },
      title: 'Términos de uso',
      updated: 'Última actualización: septiembre de 2026',
      sections: [
        { h: 'Uso del sitio', p: ['Este sitio presenta los servicios de World of Gust. Puedes navegarlo libremente con fines de evaluación personal o comercial.'] },
        {
          h: 'Precios y ofertas',
          p: ['Los precios de este sitio son rangos de referencia en USD. Cada proyecto se rige por su propia propuesta y contrato escritos, que prevalecen sobre la información mostrada aquí.'],
        },
        { h: 'Propiedad intelectual', p: ['Los textos, el diseño y el código de este sitio pertenecen a World of Gust. Los proyectos de clientes pertenecen a sus dueños y se muestran con permiso.'] },
        { h: 'Responsabilidad', p: ['Trabajamos para mantener esta información correcta, pero no garantizamos que esté libre de errores. Nada en este sitio constituye una oferta vinculante.'] },
        { h: 'Contacto', p: ['Preguntas sobre estos términos: contact@worldofgust.com.'] },
      ],
    },
    cookies: {
      meta: { title: 'Política de Cookies y Consentimiento', description: 'Qué cookies usa worldofgust.com, por qué la analítica está apagada hasta que aceptes y cómo cambiar tu decisión.' },
      title: 'Política de cookies',
      updated: 'Última actualización: septiembre de 2026',
      sections: [
        {
          h: 'Almacenamiento necesario',
          p: ['Guardamos en tu navegador el tema elegido y tu decisión sobre cookies. No contienen datos personales y sirven para recordar tus preferencias.'],
        },
        {
          h: 'Cookies de analítica',
          p: ['Las cookies de Google Analytics 4 (_ga, _ga_*) solo se crean si eliges "Permitir analítica". Hasta entonces, el modo de consentimiento mantiene la analítica denegada.'],
        },
        { h: 'Cambiar tu decisión', p: ['Borra los datos de este sitio en tu navegador y el aviso aparecerá de nuevo.'] },
      ],
    },
  },

  notFound: {
    title: 'Esta página no existe',
    body: 'Se movió o nunca existió. Estas son las páginas que la gente suele buscar.',
    home: 'Ir al inicio',
    work: 'Ver casos de estudio',
  },
}

export default es
