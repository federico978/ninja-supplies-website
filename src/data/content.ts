/**
 * NINJA SUPPLIES — central content
 * ---------------------------------------------------------------------------
 * All public copy and every image reference lives here. Editing this file
 * changes the website; no component needs to be touched for a content change.
 *
 * Rules this content is held to:
 *  - No client names, project counts, capacities, certifications, partnerships,
 *    locations, team size, founding year, or performance figures.
 *  - No invented specifications, ratings, drawing numbers, or coordinates.
 *  - Geographic wording is a market/project focus only. It must never imply
 *    offices, warehouses, facilities, employees, or permanent physical presence.
 *  - Image alt text describes only what is visibly in the frame. It never
 *    asserts ownership, a client, a location, or a capacity.
 *  - The only contact detail is the email below.
 */

import type { ImageMetadata } from 'astro';

/* Real photography. Imported so Astro can optimize and generate srcsets. */
import deploymentSiteAerial from '../assets/images/deployment-site-aerial.jpg';
import modularArrayAerial from '../assets/images/modular-array-aerial.jpg';
import gasProcessingSite from '../assets/images/gas-processing-site.jpg';
import portraitAriel from '../assets/images/portrait-ariel-martin-perelman.png';
import portraitBernardo from '../assets/images/portrait-bernardo-cabral-nonna.png';

export const photos = {
  deploymentSiteAerial,
  modularArrayAerial,
  gasProcessingSite,
} as const;

export const company = {
  name: 'Ninja Supplies',
  email: 'contact@ninjasupplies.us',
  /** Market focus — approved wording. Not a claim of physical presence. */
  focus: 'Focused on projects in the United States and across the Americas',
  copyright: '© 2026 Ninja Supplies',
} as const;

export const meta = {
  title: 'Ninja Supplies: Modular infrastructure for computing at the energy source',
  description:
    'Ninja Supplies configures, sources, and deploys modular data center infrastructure (power, cooling, enclosure, and logistics) for computing operations sited at the power they run on.',
  /**
   * Social share image. Requires a 1200×630 raster at public/og/og-cover.png.
   * Left null until that asset exists so no broken path is ever emitted.
   */
  ogImage: null as string | null,
} as const;

export const nav = [
  { index: '01', label: 'Overview', href: '#overview' },
  { index: '02', label: 'Systems', href: '#systems' },
  { index: '03', label: 'Deployment', href: '#method' },
  { index: '04', label: 'Company', href: '#company' },
] as const;

/* ------------------------------------------------------------------ HERO -- */

export const hero = {
  index: '01',
  eyebrow: 'Overview',
  /**
   * Provisional headline. Alternatives kept below so they can be swapped in a
   * single edit and compared without touching any component.
   */
  headline: ['Compute infrastructure,', 'deployed at the', 'energy source.'],
  headlineAlternatives: [
    ['Infrastructure built', 'where the power', 'already is.'],
    ['From available power', 'to operating', 'compute capacity.'],
    ['Modular infrastructure', 'for computing at', 'the energy source.'],
    ['Deployable infrastructure', 'for energy-intensive', 'computing.'],
  ],
  lede:
    'Ninja Supplies configures, sources, and deploys modular data center infrastructure for computing operations sited at the power they run on.',
  references: [
    { label: 'Focus', value: 'United States and the Americas' },
    { label: 'Systems', value: 'Power · Cooling · Enclosure · Logistics' },
    { label: 'Engagement', value: 'Configuration through commissioning' },
  ],
  primaryCta: { label: 'Start a conversation', href: '#contact' },
  image: deploymentSiteAerial,
  imageAlt:
    'Aerial view of a remote site: a containerized power module on a trailer with radiator units on its roof, a smaller generator alongside, heavy cabling running to a long row of open-top immersion-cooled computing tanks, on cleared desert ground.',
  imageCaption: 'Containerized power and immersion-cooled compute on a remote pad',
} as const;

/* ------------------------------------------------------------- POSITION -- */

export const position = {
  index: '02',
  eyebrow: 'Position',
  statement: [
    'Conventional development starts with a building and looks for power.',
    'This work starts with the power and builds to it.',
  ],
  body: [
    'Energy is frequently available where conventional data center development is impractical (too remote, too slow to permit, too far from a grid connection, or mismatched to the load it would have to carry). That gap is where Ninja Supplies works: taking a site’s actual conditions and available power, and resolving them into infrastructure that can be procured, delivered, installed, and operated.',
    'This is not procurement. Specifying a transformer is straightforward. Making the transformer, the cooling method, the enclosure, the transport route, and the commissioning sequence agree with one another, under the conditions of a specific site, is the work.',
  ],
  aside: {
    label: 'What this is not',
    text: 'Ninja Supplies is not an equipment reseller. A parts list is not a deployment, and a quote is not a configuration.',
  },
  image: gasProcessingSite,
  imageAlt:
    'Ground-level view of a gas processing site: a row of storage tanks with an access stairway, two vertical separator vessels, connecting pipework and a control cabinet, on open desert ground.',
  imageCaption: 'Production infrastructure, where the available energy already is',
} as const;

/* -------------------------------------------------------------- SYSTEMS -- */

export type SystemCode = 'MDC' | 'PWR' | 'CLG' | 'LOG' | 'INT';

export interface SystemEntry {
  code: SystemCode;
  name: string;
  short: string;
  summary: string;
  covers: readonly string[];
  dependsOn: readonly SystemCode[];
  dependency: string;
  image: ImageMetadata | string;
  imageAlt: string;
  imageCaption: string;
  /** object-position for this frame's crop. */
  imagePosition?: string;
  /** True only while a temporary concept asset is still in place. */
  imageIsTemp?: boolean;
}

export const systems = {
  index: '03',
  eyebrow: 'Integrated Systems',
  title: ['Five systems.', 'One specification.'],
  lede:
    'Power, cooling, enclosure, and logistics are not separate purchases. Each one sets the limits of the others, and a decision taken in isolation is usually reversed on site. We specify them together.',
  legend:
    'Select a system to see what it covers. The codes show direct dependencies. Hover or focus a row to see which systems it constrains.',
  entries: [
    {
      code: 'MDC',
      name: 'Modular Data Center Infrastructure',
      short: 'Modular',
      summary:
        'Containerized and modular enclosures specified for transport, rapid installation, and operation in remote or nontraditional locations.',
      covers: [
        'Containerized computing systems',
        'Modular enclosure configurations',
        'Structural and mounting provisions',
        'Multi-unit and staged expansion',
      ],
      dependsOn: ['PWR', 'CLG', 'LOG'],
      dependency:
        'Enclosure geometry follows from the cooling method and the power density it has to carry. It is a consequence of the system, not the starting point.',
      image: modularArrayAerial,
      imageAlt:
        'Aerial view of modular units arranged in rows on a prepared pad, each with side louvres and roof panels, connected by ground-level pipework and cabling.',
      imageCaption: 'Modular units set out in rows on a prepared pad',
      imagePosition: '46% 42%',
    },
    {
      code: 'PWR',
      name: 'Power and Electrical Systems',
      short: 'Power',
      summary:
        'The electrical infrastructure that connects available generation to computing equipment, from the source through to the rack.',
      covers: [
        'Electrical distribution',
        'Transformers',
        'Switchgear',
        'Protection systems',
        'Cabling and terminations',
        'Power integration',
      ],
      dependsOn: ['MDC', 'CLG', 'INT'],
      dependency:
        'The characteristics of the source and the distance to the pad determine the distribution design, and with it, what the enclosure and the cooling can support.',
      image: deploymentSiteAerial,
      imageAlt:
        'A containerized power module on a trailer with roof-mounted radiators and a side air intake, a smaller generator set beside it, and bundled cables running out across the ground.',
      imageCaption: 'Generation and distribution at the pad',
      imagePosition: '34% 58%',
    },
    {
      code: 'CLG',
      name: 'Cooling Infrastructure',
      short: 'Cooling',
      summary:
        'Air-cooled and liquid-cooled configurations selected against equipment density, site climate, and the operating requirement.',
      covers: [
        'Air-cooled configurations',
        'Liquid-cooled configurations',
        'Density-matched selection',
        'Climate and ambient conditions',
      ],
      dependsOn: ['MDC', 'PWR'],
      dependency:
        'Cooling method is set by density and climate, and in turn sets enclosure dimensions, weight, and the electrical load the site has to carry.',
      image: deploymentSiteAerial,
      imageAlt:
        'Close aerial view of a long row of open-top immersion-cooling tanks filled with dielectric fluid, with distribution pipework running along the top of the row and a cabinet at the near end.',
      imageCaption: 'Immersion-cooled tanks and distribution pipework',
      imagePosition: '88% 62%',
    },
    {
      code: 'LOG',
      name: 'Deployment and Logistics',
      short: 'Logistics',
      summary:
        'Sourcing, transport, and field execution: from equipment procurement through installation and commissioning support on site.',
      covers: [
        'Equipment sourcing',
        'Transportation planning',
        'Site coordination',
        'Deployment sequencing',
        'Installation support',
        'Commissioning assistance',
      ],
      dependsOn: ['MDC', 'PWR', 'CLG'],
      dependency:
        'Transport routes and lift constraints limit module dimensions and weight before a single unit has been specified.',
      image: modularArrayAerial,
      imageAlt:
        'Aerial view of a site under build-out: rows of modular units on a graded pad beside a control container, with an access track running along the edge and materials laid down nearby.',
      imageCaption: 'Access, laydown, and set-out on a working site',
      imagePosition: '68% 55%',
    },
    {
      code: 'INT',
      name: 'Integrated Project Configuration',
      short: 'Integration',
      summary:
        'The work of resolving power, cooling, enclosure, and logistics into one deployable configuration.',
      covers: [
        'Requirement definition',
        'System configuration',
        'Supplier coordination',
        'Interface resolution',
        'Deployment planning',
      ],
      dependsOn: ['MDC', 'PWR', 'CLG', 'LOG'],
      dependency:
        'Every constraint above competes with the others. Integration is the decision-making that makes them agree.',
      image: deploymentSiteAerial,
      imageAlt:
        'Wide aerial view of a remote site showing generation, a containerized power module, cable runs, and a row of immersion-cooled computing tanks working together on one pad.',
      imageCaption: 'Power, cooling, and compute resolved onto one pad',
      imagePosition: '56% 55%',
    },
  ] as const satisfies readonly SystemEntry[],
} as const;

/* --------------------------------------------------------------- METHOD -- */

export const method = {
  index: '04',
  eyebrow: 'Deployment Method',
  title: ['How a deployment', 'actually proceeds.'],
  lede:
    'Five stages, each with something concrete at the end of it. The sequence matters: work done out of order tends to be work done twice.',
  image: gasProcessingSite,
  imageAlt:
    'Detail of production equipment on a working site: two vertical separator vessels with valves, gauges and connecting pipework, beside a control cabinet.',
  imageCaption: 'Reading the site before anything is specified',
  stages: [
    {
      number: '01',
      title: 'Requirements and Site Conditions',
      body: 'What the site actually provides: available power and its characteristics, ambient conditions, access, ground, and the operating requirement the infrastructure has to meet.',
      output: 'Defined constraints and load profile',
    },
    {
      number: '02',
      title: 'System Configuration',
      body: 'Cooling method, enclosure format, electrical topology, and expansion path resolved against one another into a single coherent configuration.',
      output: 'Configured system definition',
    },
    {
      number: '03',
      title: 'Sourcing and Integration',
      body: 'Equipment specified and sourced, interfaces between suppliers resolved, and the package assembled as one scope rather than a set of separate orders.',
      output: 'Procured scope with resolved interfaces',
    },
    {
      number: '04',
      title: 'Logistics and Deployment',
      body: 'Transport planning, delivery sequencing, site coordination, and installation in the order the site is able to accept it.',
      output: 'Equipment installed on site',
    },
    {
      number: '05',
      title: 'Commissioning and Support',
      body: 'Systems energized, verified against the original requirement, and handed over with continuing operational support.',
      output: 'Operating capacity and ongoing support',
    },
  ],
} as const;

/* --------------------------------------------------------- ENVIRONMENTS -- */

export const environments = {
  index: '05',
  eyebrow: 'Operating Environments',
  title: ['The conditions', 'this work is built for.'],
  lede:
    'Not every deployment is difficult in the same way. These are the situations the approach is designed around.',
  items: [
    {
      title: 'Stranded or underutilized generation',
      body: 'Power available at the wellhead, the plant, or behind the meter, with no economic path to market.',
    },
    {
      title: 'Remote and off-grid sites',
      body: 'Locations with no grid connection, limited road access, or long and expensive supply lines.',
    },
    {
      title: 'Load co-located with generation',
      body: 'Computing sited at the source to avoid transmission constraints and interconnection queues.',
    },
    {
      title: 'Staged capacity expansion',
      body: 'Deployments that need to start small and grow in modules rather than in buildings.',
    },
    {
      title: 'Demanding climates',
      body: 'Ambient extremes, dust, and humidity that determine which cooling method is viable at all.',
    },
    {
      title: 'Compressed timelines',
      body: 'Requirements where a conventional construction schedule does not fit the opportunity.',
    },
  ],
} as const;

/* ------------------------------------------------- VISUAL INFRASTRUCTURE -- */

export const infrastructure = {
  index: '06',
  eyebrow: 'In the Field',
  title: ['Infrastructure is judged', 'on site, not on paper.'],
  lede:
    'Equipment has to arrive, fit, connect, reject heat, and keep running in the conditions that are actually there.',
  feature: {
    image: modularArrayAerial,
    alt: 'Aerial view of a modular deployment: rows of modular units on a graded pad beside a control container, with production tanks and wellsite equipment to one side and an access road running past the site.',
    caption: 'A modular deployment set out beside existing production infrastructure',
  },
  sequence: [
    {
      image: deploymentSiteAerial,
      alt: 'Close aerial view of open-top immersion-cooling tanks filled with dielectric fluid, with pipework running along the top of the row.',
      caption: 'Immersion cooling',
      position: '88% 60%',
    },
    {
      image: modularArrayAerial,
      alt: 'Aerial detail of modular units in rows, showing side louvres, roof panels, and the pipework connecting them at ground level.',
      caption: 'Modular set-out',
      position: '44% 40%',
    },
    {
      image: gasProcessingSite,
      alt: 'Detail of two vertical separator vessels with valves, gauges, and connecting pipework on a production site.',
      caption: 'Source-side equipment',
      position: '72% 45%',
    },
  ],
} as const;

/* -------------------------------------------------------------- APPROACH -- */

export const approach = {
  index: '07',
  eyebrow: 'Why Ninja Supplies',
  title: ['What working with us', 'actually changes.'],
  points: [
    {
      title: 'Direct operating experience',
      body: 'The company is built by people who have developed and run energy-intensive computing infrastructure, not by people who have only specified it.',
    },
    {
      title: 'One party across the whole system',
      body: 'Power, cooling, enclosure, and logistics resolved together, so the interfaces between them are somebody’s responsibility rather than nobody’s.',
    },
    {
      title: 'Built to deployment constraints',
      body: 'Transport limits, lift capacity, site access, and climate are treated as inputs to the design, not problems discovered during installation.',
    },
    {
      title: 'Modular and stageable',
      body: 'Configurations that can start at one module and grow, so capacity follows demand and available power instead of preceding both.',
    },
    {
      title: 'Comfortable in difficult locations',
      body: 'Remote sites, limited access, and demanding climates are the normal operating case rather than the exception.',
    },
    {
      title: 'Present through commissioning',
      body: 'Involvement continues past delivery, through installation, energization, and verification against the original requirement.',
    },
  ],
} as const;

/* ------------------------------------------------------------ LEADERSHIP -- */

export const leadership = {
  index: '08',
  eyebrow: 'Leadership',
  title: ['Founders'],
  people: [
    {
      name: 'Ariel Martin Perelman',
      role: 'Co-Founder',
      bio: 'Energy infrastructure entrepreneur with direct experience developing and scaling off-grid computing operations.',
      portrait: portraitAriel,
      portraitAlt: 'Portrait of Ariel Martin Perelman.',
    },
    {
      name: 'Bernardo Cabral Nonna',
      role: 'Co-Founder',
      bio: 'Entrepreneur and executive focused on infrastructure development, strategic partnerships, and project execution.',
      portrait: portraitBernardo,
      portraitAlt: 'Portrait of Bernardo Cabral Nonna.',
    },
  ],
} as const;

/* --------------------------------------------------------------- CONTACT -- */

export const contact = {
  index: '09',
  eyebrow: 'Contact',
  title: ['Planning a deployment?'],
  lede:
    'Tell us the site, available power, capacity requirement and target timeline.',
  emailLabel: 'Email us directly',
  /**
   * No form. A disabled form reads as broken; the email link is the whole
   * contact experience until a handling method is chosen. The prompts below
   * do the work the form fields were doing.
   */
  promptLabel: 'Useful to include',
  prompts: [
    'Site location and access',
    'Energy source, and how much is available',
    'Capacity you are targeting',
    'Timing and any fixed dates',
  ],
  closing: 'Nothing formal required. A short description of the site is enough to start.',
} as const;
