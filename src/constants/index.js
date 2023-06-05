import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  kodSite,
  invoiceSite,
  weddingApp,
  everybuddyApp,
  korinySite,
  threejs,
  kod,
  logo,
  lacapsule
} from "../assets";

export const navLinks = [
  {
    id: "presentation",
    title: "Présentation",
  },
  {
    id: "projets",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web",
    icon: web,
  },
  {
    title: "React ",
    icon: creator,
  },
  {
    title: "NodeJs",
    icon: backend,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // }
];

const experiences = [
  {
    title: "Dévelopeuse Full-Stack JS",
    company_name: "Freelance",
    icon: logo,
    iconBg: "#dfdfdf",
    date: "Septembre 2022 - Aujourd'hui",
    points: [],
  },
  {
    title: "Dévelopeuse Front-end",
    company_name: "Kodkodkod.Studio",
    icon: kod,
    iconBg: "#dfdfdf",
    date: "Septembre 2022 - Mars 2023",
    points: [
      "Refonte tous les sites web de l'entreprise (+ de 15 pages).",
      "Mettre en place de nouveaux formulaires de contact pour améliorer la communication avec les clients.",
      "Développer, maintenir et améliorer la partie front-end les sites Web de clients côté front-end (react)."
    ],
  },
  {
    title: "Teacher Assistant",
    company_name: "La Capsule",
    icon: lacapsule,
    iconBg: "#E6DEDD",
    date: "Octobre 2022 - Novembre 2022",
    points: [
      "Aider les futurs développeurs en leur fournissant de l'aide sur place et à distance (déboguer leurs codes, expliquer à nouveau les concepts vus pendant la formation, etc.)",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares presentation their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Koriny",
    description:
      "Plateforme coréen de vente et de location immobilière aux États-Unis. Il propose une interface bilingue anglais-coréen-chinois, des fonctionnalités de recherche avancées avec une carte géographique interactive et un sytème d'exportation du rapport pdf.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "google map API",
        color: "pink-text-gradient",
      },
      {
        name: "jsPdf",
        color: "blue-text-gradient",
      }
    ],
    image: korinySite,
    source_code_link: "https://koriny.com/en",
  },
  {
    name: "Kod Studio",
    description:
      "Site web présente de manière professionnelle les services et les compétences du studio, mettant en valeur son expertise dans le développement de logiciels sur mesure. Les visiteurs peuvent en apprendre davantage sur les projets précédents du studio, consulter les témoignages de clients satisfaits et prendre contact facilement pour discuter de leurs besoins en développement.",
    tags: [
      {
        name: "twig",
        color: "blue-text-gradient",
      },
      {
        name: "symfony",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: kodSite,
    source_code_link: "https://kodkodkod.studio/fr",
  },
  {
    name: "Invoice Generator",
    description:
      "Application permet de créer facilement des factures professionnelles et de les exporter au format PDF. Cette application propose des différents templates et offre des fonctionnalités telles que l'ajout d'articles avec calculs automatiques, et une interface utilisateur conviviale.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "jsPdf",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: invoiceSite,
    source_code_link: "https://invoicenator.netlify.app/",
  },
  {
    name: "Qui&Anh",
    description:
      "Site de mariage offre aux futurs mariés un espace personnalisé pour partager des informations sur leur grand jour, il comprend une galerie de photos pour partager les moments précieux.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "cloudinary",
        color: "pink-text-gradient",
      },
      {
        name: "scss",
        color: "blue-text-gradient",
      }
    ],
    image: weddingApp,
    source_code_link: "https://quianh.netlify.app/",
  },
  {
    name: "everybuddy",
    description:
      "Projet d'étude: Application mobile met en relation les anciens élèves grâce à une recherche géolocalisée et une messagerie instantanée. Elle facilite ainsi les interactions et favorise la création de réseaux professionnels et sociaux entre les utilisateurs. L'objectif est de renforcer les liens entre les alumnis et de faciliter les échanges d'opportunités et de connaissances.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "cloudinary",
        color: "blue-text-gradient",
      }
    ],
    image: everybuddyApp,
    source_code_link: "https://github.com/qui-nguyen",
  },
];

const modalMessages = [
  {
    name: 'success',
    title: 'Message envoyé',
    messages: [
      'Je vous réponderai plus rapide possible !',
      'A très bientôt.'
    ]
  },
  {
    name: 'error',
    title: 'Une erreur survenue !',
    messages: [
      'Je vous réponderai plus rapide possible !',
      'Je vous remercie de me contacter directement par courriel (nguyenhtalice@gmail.com). Je vous répondrai dans les plus brefs délais.',
      'A très bientôt.'
    ]
  },
  {
    name: 'recaptcha',
    title: 'Recaptcha',
    messages: [
      'Merci de valider le Recaptcha'
    ]
  }
]

export { services, technologies, experiences, testimonials, projects, modalMessages };