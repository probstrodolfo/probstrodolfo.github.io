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

  growingLab: {
    label: "The group",
    title: "The lab is growing at UC Davis.",
    body:
      "Profiles for new students and researchers will be added as they join. Each profile will foreground the questions they are asking, the organisms and methods they work with, and the research they make their own.",
    link: { label: "Learn about joining the lab", href: "/join/" },
  },
} as const;
