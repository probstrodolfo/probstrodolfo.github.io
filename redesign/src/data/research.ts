export const researchContent = {
  masthead: {
    label: "Research",
    title: "Ants reveal how history, ecology, and opportunity build biodiversity.",
    introduction:
      "We combine natural history, systematics, phylogenomics, morphology, and field ecology to understand how ant lineages diversify, adapt, and repeatedly evolve specialized relationships.",
    image: {
      show: true,
      src: "/images/ant-forager.jpeg",
      alt: "A Myrmelachista ant foraging on the leaf of its host plant.",
      caption: "Myrmelachista foraging on its host plant",
      objectPosition: "50% 48%",
    },
  },

  centralQuestion: {
    label: "The question connecting our work",
    title: "Contingency or predictability?",
    paragraphs: [
      "Evolution is shaped by history, but similar ecological challenges can produce strikingly similar outcomes. We ask when independent ant lineages follow parallel paths—and when their distinct histories lead them elsewhere.",
      "Repeated origins of plant specialization in Myrmelachista give us unusually well-controlled natural comparisons. Closely related lineages have independently adopted different nesting strategies, allowing us to test the genomic, morphological, and ecological basis of convergence.",
    ],
  },

  strategies: {
    label: "Replicated transitions in Myrmelachista",
    items: [
      {
        number: "01",
        title: "Opportunistic nesting",
        description:
          "Colonies occupy pre-existing cavities in plants without depending on one specialized host relationship.",
      },
      {
        number: "02",
        title: "Facultative association",
        description:
          "Species associate closely with plants while retaining greater ecological flexibility in where and how they nest.",
      },
      {
        number: "03",
        title: "Obligate specialization",
        description:
          "Colonies form persistent, highly specialized associations with particular host plants.",
      },
    ],
  },

  programs: {
    label: "Research programs",
    title: "Three connected ways of studying ant evolution",
    items: [
      {
        number: "01",
        slug: "symbioses-convergence",
        title: "Ant–plant symbioses & convergent evolution",
        question: "Do independent lineages solve specialization in similar ways?",
        paragraphs: [
          "Our central system is Myrmelachista, a Neotropical ant lineage containing repeated origins of intimate associations with understory plants. These evolutionary replicates let us compare specialists with closely related opportunists while minimizing the deep phylogenetic differences that complicate broad comparisons.",
          "We combine field collections across multiple tropical sites with genomes and transcriptomes to test whether independent specialists share changes in gene families, genomic architecture, or gene expression. The goal is to understand both the predictability of specialization and the historical constraints that make each transition distinctive.",
        ],
        approaches: ["Field biology", "Comparative genomics", "Transcriptomics", "Natural history"],
        image: {
          show: true,
          src: "/images/ant-plant-worker.jpeg",
          alt: "A Myrmelachista worker moving across a green host-plant leaf.",
          caption: "Ant–plant specialization in the Neotropics",
          objectPosition: "50% 44%",
        },
        links: [
          {
            label: "Evolutionary déjà vu · Proceedings B (2024)",
            href: "https://doi.org/10.1098/rspb.2024.1214",
          },
        ],
      },
      {
        number: "02",
        slug: "systematics-phylogenomics",
        title: "Systematics, phylogenomics & deep history",
        question: "How does evolutionary history shape the diversity we see today?",
        paragraphs: [
          "We reconstruct ant relationships and revise classifications so that names, traits, and ecological observations can be interpreted in an evolutionary framework. Our work integrates morphological study, natural history collections, ultraconserved elements, genomic data, and fossil evidence.",
          "Across living and extinct lineages, we examine how morphology, geographic history, and ecological transitions interact. Current systems include Myrmelachista, the dirt ants Basiceros, and broad phylogenomic sampling of Neotropical ant communities.",
        ],
        approaches: ["Taxonomy", "Phylogenomics", "Morphology", "Fossils & biogeography"],
        image: {
          show: true,
          src: "/images/myrmelachista-workers.jpeg",
          alt: "Myrmelachista workers gathered at openings in a host-plant stem.",
          caption: "Natural history provides the context for phylogenomics",
          objectPosition: "50% 45%",
        },
        links: [
          {
            label: "A fossil-informed history of Basiceros · Proceedings B (2025)",
            href: "https://doi.org/10.1098/rspb.2024.2171",
          },
        ],
      },
      {
        number: "03",
        slug: "functional-diversity",
        title: "Functional diversity & environmental change",
        question: "How do ant communities vary across places and changing environments?",
        paragraphs: [
          "Ant communities contain enormous variation in body size, morphology, behavior, and ecological roles. We use functional traits and community data to examine how that variation is distributed across biomes, regions, and sampling environments.",
          "By combining trait hypervolumes, phylogenetic information, biodiversity inventories, and field monitoring, we investigate community assembly, functional redundancy, and the capacity of ant assemblages to respond to environmental change.",
        ],
        approaches: ["Functional traits", "Community ecology", "Biodiversity data", "Field monitoring"],
        image: {
          show: true,
          src: "/images/costa-rica-fieldwork.jpg",
          alt: "A researcher collecting ants from an understory plant in a tropical forest.",
          caption: "Field collections connect traits, communities, and environments",
          objectPosition: "57% 50%",
        },
        links: [] as Array<{ label: string; href: string }>,
      },
    ],
  },

  methods: {
    label: "How we work",
    title: "Evidence across scales",
    introduction:
      "Our questions move between organisms, collections, communities, and genomes. We choose methods for the biological problem rather than treating any one method as the destination.",
    items: [
      { title: "Field biology", description: "Collecting colonies, hosts, ecological observations, and environmental context." },
      { title: "Natural history collections", description: "Connecting new data to specimens, names, places, and deep historical records." },
      { title: "Morphology & taxonomy", description: "Documenting variation and building stable, testable species hypotheses." },
      { title: "Phylogenomics", description: "Reconstructing evolutionary relationships across species and communities." },
      { title: "Genomes & transcriptomes", description: "Testing for parallel genomic and expression changes during specialization." },
      { title: "Traits & biodiversity data", description: "Linking organismal form to community structure and environmental change." },
    ],
  },

  collaborations: {
    label: "Collaborative extensions",
    title: "Methods that travel beyond ants",
    introduction:
      "Ants are the lab's primary organismal focus. Through student-led and collaborative projects, we also apply comparative and sequencing approaches to other systems when they offer a useful biological question or training opportunity.",
    items: [
      {
        title: "Portable biodiversity sequencing",
        description:
          "Nanopore barcoding and metabarcoding for rapid species discovery, identification, and biodiversity surveys.",
      },
      {
        title: "Cryptic diversity",
        description:
          "Integrating morphology, morphometrics, and molecular data in birds and other difficult-to-identify lineages.",
      },
      {
        title: "Venom and prey evolution",
        description:
          "Comparative work on cone-snail diversification, prey specialization, and the evolution of venom components.",
      },
    ],
  },
} as const;
