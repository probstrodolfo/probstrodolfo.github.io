export const siteContent = {
  identity: {
    name: "Probst Lab",
    affiliation: "UC Davis Entomology & Nematology",
  },

  navigation: [
    { label: "Research", href: "/research/" },
    { label: "People", href: "/people/" },
    { label: "Publications", href: "/publications/" },
    { label: "News", href: "/news/" },
    { label: "Teaching & Outreach", href: "/teaching-outreach/" },
    { label: "Join", href: "/join/" },
  ],

  hero: {
    eyebrow: "Evolutionary biology · UC Davis",
    title: "We study ants to understand how evolution builds biodiversity.",
    summary:
      "The Probst Lab combines phylogenomics, natural history, morphology, and field biology to investigate ant evolution, ant–plant symbioses, and the forces that generate biological diversity.",
    primaryLink: { label: "Explore our research", href: "#central-question" },
    secondaryLink: { label: "Meet the lab", href: "/people/" },
    image: {
      show: true,
      src: "/images/myrmelachista-hero.jpeg",
      alt: "Myrmelachista ants moving across the stem of their host plant.",
      caption: "Myrmelachista · Neotropical ant–plant symbiosis",
      objectPosition: "50% 46%",
    },
  },

  openingQuestion: {
    show: true,
    label: "A question at the center of our work",
    title: "When evolution faces similar challenges, does it arrive at the same solution?",
    body:
      "We use ants—especially repeated origins of plant specialization—as natural experiments for testing how history, ecology, and environment shape evolutionary outcomes.",
  },
} as const;
