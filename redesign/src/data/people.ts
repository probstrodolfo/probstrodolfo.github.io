export const peopleContent = {
  masthead: {
    label: "People",
    title: "A lab built around curiosity, natural history, and collaboration.",
    introduction:
      "The Probst Lab is a growing group of researchers using ants to explore evolution, biodiversity, and symbiosis.",
  },

  principalInvestigator: {
    label: "Principal investigator",
    name: "Rodolfo S. Probst",
    role: "Assistant Professor",
    department: "Department of Entomology and Nematology",
    institution: "University of California, Davis",
    image: {
      show: true,
      src: "/images/rodolfo-probst.jpg",
      alt: "Portrait of Rodolfo S. Probst.",
      objectPosition: "50% 38%",
    },
    biography: [
      "Rodolfo is an evolutionary biologist and myrmecologist interested in how historical contingency and ecological opportunity shape biodiversity. His research centers on ants—especially Myrmelachista—and uses repeated origins of ant–plant specialization as natural experiments in convergent evolution.",
      "He combines field biology, natural history collections, morphology, phylogenomics, functional traits, and emerging sequencing technologies to understand how ant lineages diversify, adapt, and interact with their environments.",
    ],
    interests: [
      "Ant evolution",
      "Systematics & phylogenomics",
      "Ant–plant symbioses",
      "Functional biodiversity",
      "Natural history",
    ],
    links: [
      {
        label: "Google Scholar",
        href: "https://scholar.google.com/citations?user=S8om22EAAAAJ&hl=en",
      },
      { label: "ORCID", href: "https://orcid.org/0000-0002-5885-5701" },
      { label: "GitHub", href: "https://github.com/probstrodolfo" },
    ],
  },

  graduateStudents: {
    label: "Graduate researchers",
    title: "Current graduate students",
    introduction:
      "Our graduate students bring distinct questions and approaches to the lab's shared interest in ants, biodiversity, and evolution.",
    members: [
      {
        name: "Mandy Frazer",
        initials: "MF",
        role: "PhD Student",
        biography:
          "Mandy is interested in the biological mechanisms that shape invasion success. Her research interests connect chemical ecology, chronobiology, behavior, and genetics to understand how organisms perceive, respond to, and adapt to novel environments.",
        interests: [
          "Invasion biology",
          "Chemical ecology",
          "Chronobiology",
          "Behavior",
          "Genetics",
        ],
        image: {
          show: false,
          src: "",
          alt: "Portrait of Mandy Frazer.",
          objectPosition: "50% 40%",
        },
        links: [] as Array<{ label: string; href: string }>,
      },
      {
        name: "Luke Doyle",
        initials: "LD",
        role: "PhD Student",
        biography:
          "Luke is interested in documenting and explaining ant diversity through taxonomy and systematics. He is also interested in macrophotography as a tool for observing diagnostic variation, developing accessible species resources, and communicating the extraordinary diversity of ants.",
        interests: [
          "Ant taxonomy",
          "Systematics",
          "Macrophotography",
          "Species diversity",
          "Natural history",
        ],
        image: {
          show: false,
          src: "",
          alt: "Portrait of Luke Doyle.",
          objectPosition: "50% 40%",
        },
        links: [] as Array<{ label: string; href: string }>,
      },
    ],
  },

  growingLab: {
    label: "The group",
    title: "The lab is growing at UC Davis.",
    body:
      "Future students, postdoctoral researchers, undergraduates, and collaborators will be added as they join the group. Each profile will foreground the questions they are asking and the research they make their own.",
    link: { label: "Learn about joining the lab", href: "/join/" },
  },
} as const;
