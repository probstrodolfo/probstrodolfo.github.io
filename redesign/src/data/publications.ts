export type Publication = {
  id: string;
  year: string;
  status?: "Submitted" | "Accepted";
  type: "Journal article" | "Review" | "Book chapter" | "Preprint";
  authors: string;
  titleHtml: string;
  venue: string;
  details?: string;
  href?: string;
  note?: string;
  show: boolean;
};

export const publications: Publication[] = [
  {
    id: "dominican-amber-ants",
    year: "Current",
    status: "Submitted",
    type: "Journal article",
    authors:
      "Fiorentino, G., Ladino, N., Mera-Rodríguez, D., Cubillos, D., Cavalcanti, J. P., Probst, R. S., et al.",
    titleHtml: "A hyperdiverse ant fauna from Dominican amber.",
    venue: "Manuscript submitted",
    show: true,
  },
  {
    id: "empidonax-identification",
    year: "Current",
    status: "Accepted",
    type: "Journal article",
    authors:
      "Buxton, A., Probst, R. S., Kittelberger, K., Blair, H., & Şekercioğlu, Ç.",
    titleHtml:
      "Catching flycatchers: high congruence of field and molecular identifications of <em>Empidonax</em> (Passeriformes: Tyrannidae) flycatchers highlights the feasibility of accurate in-hand identification.",
    venue: "Accepted for publication",
    note: "Includes a master's student coauthor",
    show: true,
  },
  {
    id: "ant-systematics-future",
    year: "2025",
    type: "Review",
    authors:
      "Oberski, J., Griebenow, Z., Camacho, G. P., Boudinot, B. E., Probst, R. S., et al.",
    titleHtml: "Ant systematics: Past, present, and future.",
    venue: "Insect Systematics and Diversity",
    href: "https://doi.org/10.1093/isd/ixaf025",
    show: true,
  },
  {
    id: "honeybee-metabarcoding",
    year: "2025",
    type: "Preprint",
    authors: "Wiese, C., Probst, R. S., Briggs, H., & Steffens, J.",
    titleHtml:
      "Evaluating the effect of formic acid treatment on <em>Apis mellifera</em> foraging behavior using nanopore metabarcoding technologies.",
    venue: "bioRxiv",
    href: "https://doi.org/10.1101/2025.06.27.662048",
    note: "Undergraduate-led research",
    show: true,
  },
  {
    id: "labidus-mars",
    year: "2025",
    type: "Journal article",
    authors: "DuVal, M., Probst, R. S., Branstetter, M. G., & Longino, J. T.",
    titleHtml:
      "Untangling the ant claws: the army ant (Formicidae: Dorylinae) <em>Labidus mars</em> is a <em>Neivamyrmex</em>.",
    venue: "Insect Systematics and Diversity",
    href: "https://doi.org/10.1093/isd/ixaf016",
    note: "Undergraduate-led research",
    show: true,
  },
  {
    id: "basiceros-fossil-body-size",
    year: "2025",
    type: "Journal article",
    authors: "Fiorentino, G., Probst, R. S., Richter, A., Economo, E., & Barden, P.",
    titleHtml:
      "A fossil-informed pattern of body size increase and local extinction in <em>Basiceros</em> dirt ants (Hymenoptera: Formicidae).",
    venue: "Proceedings of the Royal Society B: Biological Sciences",
    href: "https://doi.org/10.1098/rspb.2024.2171",
    show: true,
  },
  {
    id: "ant-ecomorphology",
    year: "2025",
    type: "Book chapter",
    authors:
      "Boudinot, B. E., Casadei-Ferreira, A., Wöhrl, T. A., Probst, R. S., Lieberman, Z. E., Czekanski-Moir, J., & Richter, A.",
    titleHtml: "Ant ecomorphology.",
    venue: "Insect Ecomorphology: Linking Functional Insect Morphology to Ecology and Evolution",
    details: "pp. 469–524",
    href: "https://doi.org/10.1016/B978-0-443-18544-1.00012-0",
    show: true,
  },
  {
    id: "evolutionary-deja-vu",
    year: "2024",
    type: "Journal article",
    authors: "Probst, R. S., Longino, J. T., & Branstetter, M. G.",
    titleHtml: "Evolutionary déjà vu: extreme convergence in an ant–plant association.",
    venue: "Proceedings of the Royal Society B: Biological Sciences",
    href: "https://doi.org/10.1098/rspb.2024.1214",
    show: true,
  },
  {
    id: "chi-conotoxins",
    year: "2024",
    type: "Journal article",
    authors:
      "Espino, S., Watkins, M., Probst, R. S., Chase, K., Imperial, J., Koch, T. L., Robinson, S. D., Salcedo, P. F., Taylor, D., Gajewiak, J., Yandell, M., Safavi-Hemami, H., & Olivera, B. M.",
    titleHtml:
      "χ-Conotoxins are an evolutionary innovation in mollusk-hunting cone snails as a counter-adaptation to prey defense.",
    venue: "Molecular Biology and Evolution",
    href: "https://academic.oup.com/mbe/article/41/11/msae226/7848657",
    show: true,
  },
  {
    id: "camponotus-pollination",
    year: "2024",
    type: "Journal article",
    authors: "Pereyra, M., Probst, R. S., & Cocucci, A. A.",
    titleHtml:
      "The first record of ants (<em>Camponotus chilensis</em>, Hymenoptera: Formicidae) as potential pollinators of a Neotropical tree species (<em>Lomatia hirsuta</em>, Proteaceae).",
    venue: "Journal of Applied Entomology",
    href: "https://doi.org/10.1111/jen.13335",
    note: "Co-first authorship",
    show: true,
  },
  {
    id: "sampling-ant-diversities",
    year: "2023",
    type: "Journal article",
    authors: "Probst, R. S., Silva, R. R., & Brandão, C. R. F.",
    titleHtml: "Sampling local ant diversities and the importance of trait analyses.",
    venue: "Biotropica",
    details: "55: 944–953",
    href: "https://doi.org/10.1111/btp.13244",
    show: true,
  },
  {
    id: "basiceros-revision",
    year: "2022",
    type: "Journal article",
    authors: "Probst, R. S., & Brandão, C. R. F.",
    titleHtml:
      "A taxonomic revision of the dirt ants, <em>Basiceros</em> Schulz 1906 (Hymenoptera, Formicidae).",
    venue: "Zootaxa",
    details: "5149(1): 1–75",
    href: "https://doi.org/10.11646/zootaxa.5149.1.1",
    show: true,
  },
  {
    id: "atlantic-ants",
    year: "2021",
    type: "Journal article",
    authors: "Silva, R. R., Probst, R. S., et al.",
    titleHtml: "Atlantic Ants: a dataset of ants in Atlantic Forests of South America.",
    venue: "Ecology",
    details: "103: e03580",
    href: "https://doi.org/10.1002/ecy.3580",
    show: true,
  },
  {
    id: "basiceros-phylogeny",
    year: "2019",
    type: "Journal article",
    authors: "Probst, R. S., Wray, B. D., Moreau, C. S., & Brandão, C. R. F.",
    titleHtml:
      "A phylogenetic analysis of the dirt ants, <em>Basiceros</em> (Formicidae: Myrmicinae): inferring life histories through morphological convergence.",
    venue: "Insect Systematics and Diversity",
    details: "3(4)",
    href: "https://doi.org/10.1093/isd/ixz013",
    show: true,
  },
  {
    id: "leptomyrmex-biogeography",
    year: "2016",
    type: "Journal article",
    authors:
      "Boudinot, B. E., Probst, R. S., Brandão, C. R. F., Feitosa, R. M. S., & Ward, P. S.",
    titleHtml:
      "Out of the Neotropics: newly discovered relictual species sheds light on the biogeographical history of spider ants (<em>Leptomyrmex</em>, Dolichoderinae, Formicidae).",
    venue: "Systematic Entomology",
    details: "41(3): 658–671",
    href: "https://doi.org/10.1111/syen.12181",
    show: true,
  },
  {
    id: "myopias-taxonomy",
    year: "2015",
    type: "Journal article",
    authors: "Probst, R. S., Boudinot, B. E., & Guénard, B.",
    titleHtml:
      "Toward understanding the predatory ant genus <em>Myopias</em> (Formicidae: Ponerinae), including a key to global species, male-based diagnosis, and new species description.",
    venue: "Sociobiology",
    details: "62(2): 192–212",
    href: "https://doi.org/10.13102/sociobiology.v62i2.192-212",
    show: true,
  },
  {
    id: "poneromorph-diet",
    year: "2015",
    type: "Book chapter",
    authors: "Brandão, C. R. F., Prado, L. P., Ulysséa, M. A., Probst, R. S., & Alarcon, V.",
    titleHtml: "Dieta das Poneromorfas Neotropicais.",
    venue: "Poneromorfas do Brasil",
    details: "pp. 137–153",
    href: "https://doi.org/10.7476/9788574554419.0012",
    show: true,
  },
];

export const publicationsContent = {
  masthead: {
    label: "Publications",
    title: "From ant natural history to evolutionary patterns.",
    introduction:
      "Our work connects taxonomy, phylogenomics, morphology, fossils, field biology, and biodiversity data to understand how ants—and occasionally other organisms—evolve and diversify.",
    scholarLink: {
      label: "View Google Scholar",
      href: "https://scholar.google.com/citations?user=S8om22EAAAAJ&hl=en",
    },
  },

  selected: {
    show: true,
    label: "Selected ant research",
    title: "Four entry points into the lab's work.",
    introduction:
      "These papers span the central arc of our research: specialized symbioses, evolutionary history, morphology, and the discovery and description of ant diversity.",
    publicationIds: [
      "evolutionary-deja-vu",
      "basiceros-fossil-body-size",
      "ant-ecomorphology",
      "basiceros-revision",
    ],
  },

  completeRecord: {
    label: "Complete record",
    title: "Publications & scholarly work",
    introduction:
      "The list below is carried over from the previous website and can be updated one entry at a time as papers are accepted or published.",
  },

  inPreparation: {
    show: true,
    label: "In development",
    title: "Manuscripts in preparation",
    introduction:
      "Current projects extend the lab's core work on ant–plant symbioses, systematics, functional diversity, and accessible biodiversity sequencing.",
    items: [
      {
        authors: "Probst, R. S., Branstetter, M. G., & Longino, J. T.",
        titleHtml: "The phylogenomic landscape of understory ant–plant symbioses in the Neotropics.",
        target: "Systematic Biology",
        show: true,
      },
      {
        authors: "Probst, R. S., & Longino, J. T.",
        titleHtml:
          "A taxonomic revision of the arboreal ant genus <em>Myrmelachista</em> (Formicinae: Myrmelachistini).",
        target: "Zootaxa",
        show: true,
      },
      {
        authors: "Lee, S., & Probst, R. S.",
        titleHtml:
          "Unraveling the identities of associated insects (Coccoidea) in ant–plant symbioses with nanopore DNA sequencing.",
        target: "Ecological Entomology",
        note: "Undergraduate-led research",
        show: true,
      },
      {
        authors: "Parkins, A., Probst, R. S., Kittelberger, K., & Şekercioğlu, Ç.",
        titleHtml:
          "Nanopore sequencing as a tool to identify cryptic evolution of reed buntings (Emberizidae: <em>Emberiza</em>).",
        target: "Journal of Avian Biology",
        note: "Undergraduate-led research",
        show: true,
      },
      {
        authors: "Silva, R. R., Probst, R. S., Orivel, J., Baccaro, F. B., & Barro, L. C.",
        titleHtml:
          "Functional trait variation and redundancy across ant communities in the Neotropical and Nearctic regions: linking guilds to ecosystem resilience.",
        target: "Global Ecology and Biogeography",
        show: true,
      },
    ],
  },
} as const;
