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

  researchThemes: {
    show: true,
    label: "What we study",
    title: "Ants are our window into evolution.",
    introduction:
      "Across tropical forests, museum collections, genomes, and ecological datasets, we ask how ant lineages diversify, adapt, and repeatedly form specialized relationships.",
    items: [
      {
        show: true,
        number: "01",
        slug: "ant-plant-symbioses",
        title: "Ant–plant symbioses & convergent evolution",
        question: "Why do intimate partnerships evolve again and again?",
        summary:
          "Using Myrmelachista and their host plants, we compare repeated transitions from opportunistic nesting to specialized mutualism. Field collections, genomes, and transcriptomes let us test whether independent lineages reach similar evolutionary solutions.",
        image: {
          show: true,
          src: "/images/ant-plant-worker.jpeg",
          alt: "A Myrmelachista worker moving across the leaf of its host plant.",
          caption: "Myrmelachista worker on a Lauraceae host plant",
          objectPosition: "50% 45%",
        },
      },
      {
        show: true,
        number: "02",
        slug: "systematics-evolutionary-history",
        title: "Ant systematics & evolutionary history",
        question: "How does history shape the diversity we see today?",
        summary:
          "We combine morphology, phylogenomics, fossils, natural history, and taxonomy to reconstruct ant relationships and understand the origins of ecological and morphological diversity.",
        image: {
          show: true,
          src: "/images/myrmelachista-workers.jpeg",
          alt: "A group of Myrmelachista workers at openings in a green host-plant stem.",
          caption: "Myrmelachista workers at their host-plant nest entrance",
          objectPosition: "50% 45%",
        },
      },
      {
        show: true,
        number: "03",
        slug: "diversity-environmental-change",
        title: "Ant diversity in a changing world",
        question: "How do communities respond to environmental change?",
        summary:
          "We integrate functional traits, community data, biodiversity inventories, and portable sequencing to study how ant assemblages vary across regions, habitats, and environmental gradients.",
        image: {
          show: true,
          src: "/images/costa-rica-fieldwork.jpg",
          alt: "A researcher collecting ants from an understory plant in a tropical forest.",
          caption: "Collecting ants in Costa Rica",
          objectPosition: "57% 50%",
        },
      },
    ],
  },
} as const;
