// GSA Website Content Data Object containing both French and English translations for clean modular structure.

export interface ProfileCard {
  title: string;
  text: string;
}

export interface ValueItem {
  name: string;
  desc: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
  description: string;
}

export interface SectorItem {
  id: string;
  title: string;
  description: string;
  profiles: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  enjeu: string;
  solution: string;
  impact: string;
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
}

export interface TranslationSet {
  nav: {
    home: string;
    profile: string;
    stats: string;
    sectors: string;
    services: string;
    whyUs: string;
    contact: string;
    cta: string;
  };
  hero: {
    tagline: string;
    badge: string;
    subtitle: string;
    slogan: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  profile: {
    sectionTitle: string;
    sectionSubtitle: string;
    introTitle: string;
    introText: string;
    cards: {
      entreprise: ProfileCard;
      activite: ProfileCard;
      atout: ProfileCard;
      fondation: ProfileCard;
      valeur: ProfileCard;
      engagement: ProfileCard;
    };
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    valuesTitle: string;
    valuesSubtitle: string;
    valuesList: ValueItem[];
  };
  stats: {
    sectionTitle: string;
    sectionSubtitle: string;
    intro: string;
    items: StatItem[];
    quote: string;
  };
  sectors: {
    sectionTitle: string;
    sectionSubtitle: string;
    teamText: string;
    items: SectorItem[];
  };
  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    challengeLabel: string;
    solutionLabel: string;
    impactLabel: string;
    items: ServiceItem[];
  };
  whyGsa: {
    sectionTitle: string;
    sectionSubtitle: string;
    reasons: {
      title: string;
      desc: string;
    }[];
    approachTitle: string;
    approachSubtitle: string;
    approachSteps: ApproachStep[];
  };
  contact: {
    sectionTitle: string;
    sectionSubtitle: string;
    subtitleText: string;
    formTitle: string;
    fullName: string;
    email: string;
    company: string;
    phone: string;
    industry: string;
    selectIndustry: string;
    message: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    infoTitle: string;
    rights: string;
  };
}

export const translations: { FR: TranslationSet; EN: TranslationSet } = {
  FR: {
    nav: {
      home: "Accueil",
      profile: "Profil & Identité",
      stats: "Chiffres Clés",
      sectors: "Secteurs",
      services: "Services",
      whyUs: "Pourquoi GSA",
      contact: "Contact",
      cta: "Consultation"
    },
    hero: {
      tagline: "GLOBAL SOLUTIONS ALGERIA",
      badge: "Fondée en 2026",
      subtitle: "Assistance technique & administrative — Équipe pluridisciplinaire",
      slogan: "WE BRING YOUR PROJECTS TO LIFE",
      ctaPrimary: "Découvrir nos services",
      ctaSecondary: "Nous contacter"
    },
    profile: {
      sectionTitle: "Profil de l'Entreprise",
      sectionSubtitle: "Présentation générale de EURL GSA",
      introTitle: "Un partenaire de confiance à vos côtés",
      introText: "EURL GSA simplifie, accélère et sécurise vos déploiements industriels en Algérie grâce à une maîtrise complète de l'assistance et de la logistique.",
      cards: {
        entreprise: {
          title: "Entreprise",
          text: "EURL GSA — Global Solutions Algeria est une société algérienne spécialisée dans l'assistance technique et administrative pour des projets industriels et d'infrastructure."
        },
        activite: {
          title: "Activité",
          text: "Consulting et assistance aux entreprises nationales et internationales dans les domaines de l'industrie et de l'énergie."
        },
        atout: {
          title: "Notre atout",
          text: "Contrairement aux grandes structures, nous offrons une approche sur mesure, agile et réactive. Chaque mission est prise en charge par des profils soigneusement sélectionnés pour leur adéquation au projet, et non issus d'un vivier générique."
        },
        fondation: {
          title: "Fondation",
          text: "Créée en 2026, GSA est portée par une équipe fondatrice issue de secteurs industriels exigeants. Nous capitalisons sur cette expérience collective pour offrir un niveau d'exécution rigoureux dès les premiers projets."
        },
        valeur: {
          title: "Valeur ajoutée",
          text: "Nous permettons à nos clients de se recentrer sur leur cœur de métier en prenant en charge l'intégralité des dimensions techniques, administratives et logistiques de leurs projets — avec réactivité, transparence et conformité."
        },
        engagement: {
          title: "Engagement",
          text: "Accompagner chaque client vers la réussite de ses projets les plus exigeants, en alliant sobriété d'organisation, rigueur d'exécution et conformité absolue aux réglementations en vigueur."
        }
      },
      missionTitle: "Notre Mission",
      missionText: "Accompagner la réussite de projets complexes en mobilisant une équipe pluridisciplinaire expérimentée, capable d'intervenir avec rigueur, réactivité et conformité sur l'ensemble du cycle de vie d'un projet — de la phase de préparation jusqu'à la livraison finale.",
      visionTitle: "Notre Vision",
      visionText: "Être reconnu, en Algérie et à l'international, comme un partenaire fiable et de proximité pour l'assistance technique et administrative — distingué par la qualité de ses profils, la fluidité de son organisation et l'intégrité de ses pratiques.",
      valuesTitle: "Nos Valeurs Fondamentales",
      valuesSubtitle: "Les principes guidant chacune de nos actions au quotidien",
      valuesList: [
        { name: "Excellence", desc: "Chaque mission est conduite avec le plus haut niveau de rigueur et de soin." },
        { name: "Engagement", desc: "Nous honorons nos engagements, quelles que soient les contraintes rencontrées." },
        { name: "Transparence", desc: "Une communication claire, honnête et proactive avec chacun de nos partenaires." },
        { name: "Respect des talents", desc: "Nos collaborateurs sont notre ressource principale — nous les sélectionnons et les traitons avec soin." },
        { name: "Agilité", desc: "Nous adaptons notre organisation aux réalités changeantes de chaque projet." },
        { name: "Responsabilité", desc: "Nous assumons pleinement nos actes vis-à-vis de nos clients, de nos équipes et de la société." }
      ]
    },
    stats: {
      sectionTitle: "GSA en Chiffres",
      sectionSubtitle: "Une structure jeune, une ambition clairement définie",
      intro: "GSA est une entreprise fondée en 2026. Nous ne revendiquons pas un historique que nous n'avons pas encore — nous affichons les fondations solides sur lesquelles nous construisons notre réputation : une équipe pluridisciplinaire, des engagements clairs et une organisation déjà opérationnelle.",
      items: [
        { value: "2026", label: "Année de création", sublabel: "Dynamique nouvelle", description: "Une dynamique nouvelle, portée par une équipe expérimentée." },
        { value: "Équipe", label: "Pluridisciplinaire", sublabel: "Profils complémentaires", description: "Profils techniques, administratifs, logistiques et commerciaux complémentaires." },
        { value: "6", label: "Secteurs couverts", sublabel: "Expertise transverse", description: "Oil & Gas, Énergie, BTPH, Télécom, Industrie, Environnement." },
        { value: "100%", label: "Conformité légale", sublabel: "Zéro risque", description: "Engagement contractuel sur chaque mission, sans exception." },
        { value: "0", label: "Tolérance accident", sublabel: "Priorité HSE", description: "Protocole HSE strict appliqué sur l'ensemble de nos missions." },
        { value: "Sur mesure", label: "Approche projet", sublabel: "Pas de générique", description: "Chaque mission est traitée au cas par cas avec une réponse spécifique." }
      ],
      quote: "« La crédibilité se construit mission après mission. Chez GSA, elle commence dès la première. »"
    },
    sectors: {
      sectionTitle: "Secteurs d'Intervention",
      sectionSubtitle: "Une expertise sectorielle portée par une équipe pluridisciplinaire",
      teamText: "Expertise multisectorielle — équipe adaptée à chaque contexte de projet",
      items: [
        {
          id: "oil-gas",
          title: "OIL & GAS",
          description: "Accompagnement de projets en exploration, production et transport.",
          profiles: ["Chef projet EPC", "Construction Manager", "Topographe", "Commissioning Manager", "Ingénieurs process", "Techniciens de maintenance", "Coordinateurs HSE", "Inspecteurs qualité"]
        },
        {
          id: "energy",
          title: "ÉNERGIE",
          description: "Projets de production et distribution électrique, réseaux d'énergies renouvelables, réseaux HT/MT.",
          profiles: ["Ingénieurs électriques", "Chefs de projet", "Techniciens en instrumentation"]
        },
        {
          id: "btph",
          title: "BTPH",
          description: "Bâtiment, travaux publics et hydraulique d'envergure nationale.",
          profiles: ["Conducteurs de travaux", "Ingénieurs génie civil", "Contrôleurs qualité", "Responsables de chantier"]
        },
        {
          id: "telecom",
          title: "TÉLÉCOM & IT",
          description: "Déploiement de réseaux, infrastructures IT critiques et datacenters.",
          profiles: ["Ingénieurs réseau", "Chefs de projet IT", "Techniciens fibre optique", "Administrateurs systèmes"]
        },
        {
          id: "industry",
          title: "INDUSTRIE",
          description: "Maintenance industrielle, automatisation des procédés et optimisation des process.",
          profiles: ["Techniciens électromécaniciens", "Ingénieurs en automatisme", "Agents de contrôle qualité"]
        },
        {
          id: "environment",
          title: "ENVIRONNEMENT & EAU",
          description: "Traitement de l'eau, assainissement et gestion rigoureuse de la conformité environnementale.",
          profiles: ["Ingénieurs hydrauliques", "Techniciens de traitement", "Responsables conformité environnementale"]
        }
      ]
    },
    services: {
      sectionTitle: "Nos Services",
      sectionSubtitle: "Assistance technique, administrative, logistique & développement commercial",
      challengeLabel: "ENJEU",
      solutionLabel: "SOLUTION",
      impactLabel: "IMPACT PROJET",
      items: [
        {
          id: "tech-assist",
          title: "ASSISTANCE TECHNIQUE",
          enjeu: "Disposer rapidement de profils techniques adaptés au contexte spécifique de votre projet.",
          solution: "Identification et mise à disposition de profils ciblés — techniciens, ingénieurs et spécialistes — sélectionnés selon les exigences précises de la mission. Intégration facilitée et suivi de terrain assuré.",
          impact: "Des collaborateurs opérationnels dès leur prise de poste, permettant une exécution fluide et dans les délais convenus."
        },
        {
          id: "admin-assist",
          title: "ASSISTANCE ADMINISTRATIVE",
          enjeu: "Gérer les obligations administratives et sociales en conformité totale, sans alourdir la conduite de vos projets.",
          solution: "Gestion des contrats de travail, déclarations sociales (CNAS, CACOBATPH), traitement de la paie, conformité fiscale et accompagnement juridique continu selon le droit algérien.",
          impact: "Des démarches simplifiées, une conformité assurée vis-à-vis des autorités compétentes, et une gestion RH fluide et sécurisée."
        },
        {
          id: "portage",
          title: "PORTAGE SALARIAL",
          enjeu: "Sécuriser le statut de vos consultants et collaborateurs tout en déléguant entièrement la gestion opérationnelle.",
          solution: "Portage salarial avec intégration des charges obligatoires, paiement en dinars ou en devises selon les conditions légales, et encadrement réglementaire rigoureux pour les missions locales et internationales.",
          impact: "Tranquillité administrative pour vos équipes, flexibilité de gestion pour votre organisation, et conformité garantie sur chaque mission."
        },
        {
          id: "mobility",
          title: "MOBILITÉ INTERNATIONALE",
          enjeu: "Déployer des experts à l'étranger ou accueillir des profils internationaux en Algérie, en toute conformité et sans friction administrative.",
          solution: "Gestion complète des visas, permis de travail et autorisations de séjour. Coordination des déplacements, accueil personnalisé et suivi administratif continu tout au long de la mission.",
          impact: "Des experts internationaux intégrés rapidement et sereinement, sans rupture opérationnelle due à des blocages administratifs."
        },
        {
          id: "logistics",
          title: "LOGISTIQUE INTÉGRÉE",
          enjeu: "Assurer des conditions d'accueil et de travail optimales à vos équipes dès leur premier jour d'affectation.",
          solution: "Prise en charge logistique complète : hébergement sécurisé, transport de personnel, équipements de travail, EPI conformes aux standards, restauration et télécommunications mobiles selon les besoins du terrain.",
          impact: "Des collaborateurs performants dans de bonnes conditions dès J+1, une motivation préservée et des opérations sans interruption liée à des manques logistiques."
        },
        {
          id: "commercial-assist",
          title: "ASSISTANCE COMMERCIALE",
          enjeu: "Accompagner l'implantation ou le développement de votre activité sur le marché algérien de manière structurée et pérenne.",
          solution: "Support à la création de bureaux de liaison ou succursales, mise en relation avec des décideurs locaux, conseil market-entry adapté au contexte réglementaire algérien, et secrétariat commercial dédié.",
          impact: "Un accès facilité au marché algérien, un gain de temps significatif sur les démarches d'implantation et un ancrage local solide dès les premières étapes."
        }
      ]
    },
    whyGsa: {
      sectionTitle: "Pourquoi GSA ?",
      sectionSubtitle: "Nos différenciateurs d'excellence",
      reasons: [
        {
          title: "Équipe pluridisciplinaire constituée",
          desc: "Dès le lancement, GSA dispose d'une équipe aux compétences complémentaires couvrant les dimensions techniques, administratives, logistiques et commerciales — sans dépendance à un profil unique."
        },
        {
          title: "Approche sur mesure, pas de réponse générique",
          desc: "Chaque mission est analysée individuellement. Nous construisons une réponse adaptée aux contraintes réelles du projet : secteur, localisation, délais, exigences réglementaires."
        },
        {
          title: "Réactivité opérationnelle",
          desc: "Notre structure agile nous permet de mobiliser rapidement les profils adéquats et de démarrer une mission sans les délais inhérents aux grandes structures administratives."
        },
        {
          title: "Conformité sans compromis",
          desc: "Toutes nos interventions respectent scrupuleusement le droit algérien du travail, les réglementations sociales et fiscales, ainsi que les normes HSE applicables au secteur concerné."
        },
        {
          title: "Proximité et transparence",
          desc: "Nous privilégions une relation directe avec nos clients : un interlocuteur identifié, un reporting régulier et une communication honnête à chaque étape de la mission."
        }
      ],
      approachTitle: "Notre Approche & Méthodologie",
      approachSubtitle: "Un processus rigoureux en 4 étapes pour garantir l'excellence",
      approachSteps: [
        {
          step: "01",
          title: "Écoute & Analyse",
          description: "Compréhension approfondie de vos besoins, contraintes terrain et exigences réglementaires."
        },
        {
          step: "02",
          title: "Proposition ciblée",
          description: "Identification des profils/solutions adaptés avec un chiffrage de coûts transparent et réaliste."
        },
        {
          step: "03",
          title: "Mise en œuvre",
          description: "Déploiement rapide, intégration facilitée des intervenants et prise en charge de la coordination."
        },
        {
          step: "04",
          title: "Suivi & Reporting",
          description: "Accompagnement continu durant la mission, points réguliers avec ajustements en temps réel."
        }
      ]
    },
    contact: {
      sectionTitle: "Contactez-nous",
      sectionSubtitle: "Commencez votre projet avec GSA aujourd'hui",
      subtitleText: "Partenaire de confiance — à votre écoute pour concrétiser et sécuriser vos opérations.",
      formTitle: "Envoyer un message de consultation",
      fullName: "Nom et Prénom",
      email: "Adresse Email",
      company: "Entreprise / Organisation",
      phone: "Numéro de téléphone",
      industry: "Secteur d'activité",
      selectIndustry: "Sélectionnez votre secteur",
      message: "Expression du besoin / Message détaillé",
      submit: "Envoyer la demande",
      submitting: "Transmission sécurisée...",
      successTitle: "Message envoyé avec succès !",
      successMessage: "Merci pour votre intérêt. Un conseiller spécialisé de Eurl GSA vous recontactera sous 24 heures (jours ouvrables).",
      infoTitle: "Coordonnées de l'entreprise",
      rights: "EURL GSA © 2026 — Partenaire de confiance. Tous droits réservés."
    }
  },
  EN: {
    nav: {
      home: "Home",
      profile: "Profile & Identity",
      stats: "Key Figures",
      sectors: "Sectors",
      services: "Services",
      whyUs: "Why GSA",
      contact: "Contact",
      cta: "Consultation"
    },
    hero: {
      tagline: "GLOBAL SOLUTIONS ALGERIA",
      badge: "Established in 2026",
      subtitle: "Technical & Administrative Assistance — Multidisciplinary Team",
      slogan: "WE BRING YOUR PROJECTS TO LIFE",
      ctaPrimary: "Discover Our Services",
      ctaSecondary: "Get in Touch"
    },
    profile: {
      sectionTitle: "Corporate Profile",
      sectionSubtitle: "General Presentation of EURL GSA",
      introTitle: "A trusted partner by your side",
      introText: "EURL GSA simplifies, accelerates and secures your industrial setups in Algeria through complete management of technical support and logistics.",
      cards: {
        entreprise: {
          title: "Company",
          text: "EURL GSA — Global Solutions Algeria is an Algerian company specializing in technical and administrative assistance for industrial and infrastructure projects."
        },
        activite: {
          title: "Core Activity",
          text: "Consulting and support for national and international businesses in the fields of industry and energy."
        },
        atout: {
          title: "Our Key Edge",
          text: "Unlike rigid corporate giants, we provide a tailored, agile, and reactive approach. Every mission is allocated to profiles carefully chosen for project alignment, rather than standard generic benches."
        },
        fondation: {
          title: "Foundation",
          text: "Founded in 2026, GSA is powered by a founding team coming from demanding industrial domains. We capitalize on this collective experience to offer rigorous execution from day one."
        },
        valeur: {
          title: "Value Added",
          text: "We enable our clients to refocus on their core competency by fully handling the technical, administrative, and logistical dimensions of their projects — with speed, transparency, and strict compliance."
        },
        engagement: {
          title: "Commitment",
          text: "Supporting each client toward the success of their most challenging projects, combining lean organizational structure, operational rigor, and absolute compliance with current national legislations."
        }
      },
      missionTitle: "Our Mission",
      missionText: "Support the success of complex projects by mobilizing an experienced, multidisciplinary team capable of acting with rigor, reactivity, and strict compliance throughout the project lifecycle — from scoping to final delivery.",
      visionTitle: "Our Vision",
      visionText: "To be recognized, in Algeria and globally, as a reliable, local partner for technical and administrative support — distinguished by outstanding talent matching, fluid organization, and absolute integrity.",
      valuesTitle: "Our Core Values",
      valuesSubtitle: "Principal guidelines directing each of our daily behaviors",
      valuesList: [
        { name: "Excellence", desc: "Each mission is executed with the highest level of rigor and professional care." },
        { name: "Commitment", desc: "We honor our commitments, regardless of the challenges or site constraints encountered." },
        { name: "Transparency", desc: "Clear, honest, and proactive communication with every single one of our partners." },
        { name: "Respect for Talent", desc: "Our employees are our primary resource — we select, onboard, and support them with extreme care." },
        { name: "Agility", desc: "We continuously adapt our organization to the shifting realities on site for each project." },
        { name: "Responsibility", desc: "We take full responsibility for our actions toward clients, internal teams, and civil society." }
      ]
    },
    stats: {
      sectionTitle: "GSA in Figures",
      sectionSubtitle: "A modern structure with a clearly defined ambition",
      intro: "GSA is an enterprise founded in 2026. While we don't claim decades of legacy, we showcase the solid foundations on which we build our reputation: a multidisciplinary team, unambiguous commitments, and immediate operational capabilities.",
      items: [
        { value: "2026", label: "Year Founded", sublabel: "New dynamics", description: "A fresh corporate momentum, powered by highly experienced industrial senior partners." },
        { value: "Team", label: "Multidisciplinary", sublabel: "Complementary skills", description: "A perfect blend of complementary technical, administrative, logistics, and sales competencies." },
        { value: "6", label: "Sectors Covered", sublabel: "Transverse expertise", description: "Oil & Gas, Power & Renewables, Infrastructure (BTPH), Telecom, General Industry, Water & Environment." },
        { value: "100%", label: "Legal Compliance", sublabel: "Zero liability", description: "Contractual commitment on every assignment, with absolute conformity to local labor and tax laws." },
        { value: "0", label: "Accident Tolerance", sublabel: "Strict HSE priority", description: "Rigid HSE protocols implemented across all active client locations and camps." },
        { value: "Tailored", label: "Bespoke Matching", sublabel: "No generic benches", description: "Each mission analyzed individually to construct a specialized and custom-crafted workforce answer." }
      ],
      quote: "« Trust and credibility are earned assignment after assignment. At GSA, it starts from the very first. »"
    },
    sectors: {
      sectionTitle: "Sectors of Intervention",
      sectionSubtitle: "Deep sector experience driven by an elite multidisciplinary team",
      teamText: "Multisectoral expertise — custom workforces adapted to each project environment",
      items: [
        {
          id: "oil-gas",
          title: "OIL & GAS",
          description: "Full technical lifecycle support in pipeline exploration, production, and transit.",
          profiles: ["EPC Project Manager", "Construction Manager", "Topographer", "Commissioning Manager", "Process Engineers", "Maintenance Technicians", "HSE Site Coordinators", "QA/QC inspectors"]
        },
        {
          id: "energy",
          title: "POWER & ENERGY",
          description: "Power production, distribution grids, renewable energy, and HV/MV cabling structures.",
          profiles: ["Electrical Engineers", "Technical Project Managers", "Instrumentation Specialists"]
        },
        {
          id: "btph",
          title: "BTPH & INFRASTRUCTURE",
          description: "Large-scale civil works, building constructs, and advanced hydraulic infrastructures.",
          profiles: ["Civil Engineers", "Works Managers", "Quality Controllers", "Construction Site Leaders"]
        },
        {
          id: "telecom",
          title: "TELECOM & IT",
          description: "Deployment of communication towers, critical IT structures, and high-tier datacenters.",
          profiles: ["Network Engineers", "IT Managers", "Fibre Splicers", "Systems Administrators"]
        },
        {
          id: "industry",
          title: "GENERAL INDUSTRY",
          description: "Precision plant maintenance, process automation, and optimization of production lines.",
          profiles: ["Electro-mechanical Technicians", "Automation Engineers", "Quality Control Inspectors"]
        },
        {
          id: "environment",
          title: "ENVIRONMENT & WATER",
          description: "Water treatment setups, purification processes and rigid environmental law compatibility.",
          profiles: ["Hydraulic Engineers", "Water Treatment Operators", "HSE Compliance managers"]
        }
      ]
    },
    services: {
      sectionTitle: "Our Services",
      sectionSubtitle: "Technical, administrative, logistics & commercial market entry solutions",
      challengeLabel: "CHALLENGE",
      solutionLabel: "SOLUTION",
      impactLabel: "PROJECT IMPACT",
      items: [
        {
          id: "tech-assist",
          title: "TECHNICAL ASSISTANCE",
          enjeu: "Rapidly deploy precise technical workforces adapted to your project's technical specificities.",
          solution: "Pinpoint identification and direct assignment of technicians, engineers, and specialists selected specifically for the mission context. On-site integration support and field compliance reporting.",
          impact: "Fully operational specialists starting from day one, ensuring continuous and fluid project execution strictly within scheduled timetables."
        },
        {
          id: "admin-assist",
          title: "ADMINISTRATIVE ASSISTANCE",
          enjeu: "Manage administrative obligations and social declarations in total legality, without encumbering on-site teams.",
          solution: "Drafting employment agreements, executing complex social declarations (CNAS, CACOBATPH), precise payroll processing, tax compliance, and ongoing local legal reviews.",
          impact: "Simplified administrative pathways, legally bulletproof operations with state authorities, and fluid HR management."
        },
        {
          id: "portage",
          title: "EURL SALARY PORTAGE",
          enjeu: "Legally secure the local status of your international consultants and local talent, while outsourcing overheads.",
          solution: "Complete local wage employment structure including full payroll tax, payments in Algerian Dinars or devises based on national regulations, and rigid contracts.",
          impact: "Full administrative peace of mind, high operational flexibility for your management, and guaranteed compliance for audit pathways."
        },
        {
          id: "mobility",
          title: "GLOBAL MOBILITY",
          enjeu: "Deploy foreign experts or assign international talent into Algeria smoothly with zero administrative road-blocks.",
          solution: "Full end-to-end management of visas, work permits, and residency approvals. Organized travel transit, welcome services, and continuous compliance audits.",
          impact: "Expedited onboarding of elite talent in Algeria, preventing expensive project disruptions due to administrative delays."
        },
        {
          id: "logistics",
          title: "INTEGRATED LOGISTICS",
          enjeu: "Ensure optimal campsite living, transport, and equipment protection for your workforce immediately upon deployment.",
          solution: "A-Z logistics coordination: secure corporate housing/campsites, passenger transit, personal work tools, compliant certified PPE, catering, and robust mobile communication setups.",
          impact: "Motivated and comfortable workers on site from J+1, maintaining high workforce retention and zero downtime due to logistical gaps."
        },
        {
          id: "commercial-assist",
          title: "COMMERCIAL ENABLING",
          enjeu: "Successfully launch, represent, or expand your operations inside the complex Algerian industrial market in a stable way.",
          solution: "Assisting in establishing local liaison offices or subsidiaries, strategic introductions to industrial decision-makers, local market-entry advisory and dedicated administration.",
          impact: "Vastly shortened time-to-market, direct high-level corporate connections, and solid legal backing during your early setup stage."
        }
      ]
    },
    whyGsa: {
      sectionTitle: "Why Choose GSA?",
      sectionSubtitle: "Our elements of core differentiation",
      reasons: [
        {
          title: "Fully Established Multidisciplinary Force",
          desc: "From starting operations, GSA has an internal team spanning technical, regulatory, fiscal, and logistical domains — ensuring zero reliance on a single focal point."
        },
        {
          title: "Tailored Care, No Generic Responses",
          desc: "Every contract client is reviewed independently. We build a personalized program customized to location, schedule, and actual in-field constraints."
        },
        {
          title: "Extreme Operational Agility",
          desc: "Our responsive corporate style allows us to quickly source key talent and launch projects rapidly without the classic delays of bureaucratic giants."
        },
        {
          title: "Unyielding Legal Compliance",
          desc: "Every worker, transaction, and contract strictly adheres to Algerian labor policies, social filings, and specific local HSE frameworks."
        },
        {
          title: "Direct Proximity and Total Transparency",
          desc: "We focus on real relations: a dedicated account owner, recurring progress reports, and truthful, transparent dialogue at every stage of the project."
        }
      ],
      approachTitle: "Our Approach & Methodology",
      approachSubtitle: "A rigorous 4-step path to deliver exceptional industrial performance",
      approachSteps: [
        {
          step: "01",
          title: "Listen & Inspect",
          description: "Full mapping of client targets, regional site conditions, and legal/tax boundaries."
        },
        {
          step: "02",
          title: "Targeted Strategy",
          description: "Direct talent matching and transparent, realistic financial forecasting with zero hidden fees."
        },
        {
          step: "03",
          title: "Mobilization",
          description: "Accelerated deployment, guided local onboarding, and on-site field support."
        },
        {
          step: "04",
          title: "Refinement & Auditing",
          description: "Constant monitoring of performance, compliance controls, and real-time adjustments."
        }
      ]
    },
    contact: {
      sectionTitle: "Get in Touch",
      sectionSubtitle: "Initiate your Algeria setups with absolute safety",
      subtitleText: "A reliable corporate partner — listening and executing to protect and power your regional ventures.",
      formTitle: "Submit highly structured consultation request",
      fullName: "Full Name",
      email: "Corporate email Address",
      company: "Company Name",
      phone: "Phone Number",
      industry: "Industry Sector",
      selectIndustry: "Select your industry",
      message: "Expression of Need / Detailed Project Scope",
      submit: "Submit Request",
      submitting: "Creating secure tunnel...",
      successTitle: "Submission Received Successfully!",
      successMessage: "Thank you for contacting us. A senior partner from EURL GSA will connect with you within 24 business hours.",
      infoTitle: "Corporate Offices & Details",
      rights: "EURL GSA © 2026 — Partner of trust. All rights reserved."
    }
  }
};
