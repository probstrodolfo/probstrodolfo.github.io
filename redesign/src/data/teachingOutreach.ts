export const teachingOutreachContent = {
  masthead: {
    label: "Teaching & outreach",
    title: "Learning begins with close observation.",
    introduction:
      "Ants and other insects make abstract ideas tangible. We use them to connect evolution, biodiversity, organismal biology, genomics, and the practice of asking better scientific questions.",
    image: {
      show: true,
      src: "/images/student-research-symposium.jpg",
      alt: "A collage of undergraduate researchers presenting their projects at a scientific symposium.",
      caption: "Undergraduate researchers sharing their work",
      objectPosition: "50% 48%",
    },
  },

  approach: {
    label: "Teaching approach",
    title: "Science is something students do—not simply something they receive.",
    paragraphs: [
      "Teaching in the Probst Lab combines conceptual foundations with hands-on investigation. Students examine organisms, work with specimens and data, evaluate evidence, and explain what their results mean. Natural history provides the starting point; modern tools such as phylogenetics, bioinformatics, and nanopore sequencing extend what students can ask.",
      "We aim to build classrooms in which curiosity is taken seriously, expectations are clear, and students with different backgrounds can develop scientific confidence. The goal is not only to learn entomology or evolutionary biology, but to practice the habits of observation, reasoning, collaboration, and communication that make science possible.",
    ],
    cycle: [
      {
        number: "01",
        title: "Observe",
        description: "Begin with organisms, patterns, specimens, and phenomena that invite careful attention.",
      },
      {
        number: "02",
        title: "Question",
        description: "Turn curiosity into biological questions that can be examined with evidence.",
      },
      {
        number: "03",
        title: "Investigate",
        description: "Use field, laboratory, computational, and comparative methods with purpose.",
      },
      {
        number: "04",
        title: "Communicate",
        description: "Explain findings clearly, evaluate uncertainty, and connect results to larger ideas.",
      },
    ],
  },

  currentTeaching: {
    label: "At UC Davis",
    title: "Current teaching",
    introduction:
      "Current courses bring together insect form and function, diversity, field observation, collections, scientific data, and molecular approaches.",
    courses: [
      {
        code: "ENT 100",
        title: "General Entomology",
        term: "Fall 2026 · Lecture",
        summary:
          "An organism-centered exploration of insect structure, physiology, development, evolution, ecology, and diversity. Lectures connect foundational concepts with living examples, research case studies, and questions students can reason through together.",
        topics: [
          "Insect form & function",
          "Evolution & diversity",
          "Ecology & behavior",
          "Scientific reasoning",
        ],
        show: true,
      },
      {
        code: "ENT 100L",
        title: "General Entomology Laboratory",
        term: "Fall 2026 · Laboratory",
        summary:
          "A hands-on course built around specimen observation, collection, identification, curation, and research-quality data. Students connect morphology and natural history with DNA barcoding and the responsibilities of documenting biodiversity.",
        topics: [
          "Specimen-based learning",
          "Identification & curation",
          "Biodiversity databases",
          "DNA barcoding",
        ],
        show: true,
      },
    ],
  },

  selectedTeaching: {
    show: true,
    label: "Selected experience",
    title: "Courses across organisms, methods, and places.",
    introduction:
      "Previous teaching has ranged from introductory scientific inquiry to graduate comparative methods and immersive field courses. The complete record remains available in the CV.",
    items: [
      {
        year: "2025",
        title: "Introduction to Comparative Methods for Evolution",
        role: "Instructor",
        institution: "Museu Paraense Emílio Goeldi · Belém, Brazil",
        note: "Graduate short course taught in Portuguese",
        show: true,
      },
      {
        year: "2022–25",
        title: "Undergraduate Research",
        role: "Instructor & research mentor",
        institution: "Science Research Initiative · University of Utah",
        note: "Project development, research practice, and scientific communication",
        show: true,
      },
      {
        year: "2024",
        title: "Being Human in STEM",
        role: "Co-instructor",
        institution: "University of Utah",
        note: "Identity, belonging, equity, and the culture of science",
        show: true,
      },
      {
        year: "2023–24",
        title: "Examining and Addressing Climate Change in Costa Rica",
        role: "Organizer, coordinator & instructor",
        institution: "University of Utah",
        note: "Immersive field-based learning",
        show: true,
      },
      {
        year: "2021–22",
        title: "Tree Thinking: Introduction to Phylogenetics",
        role: "Instructor",
        institution: "University of Utah",
        note: "Evolutionary reasoning and phylogenetic interpretation",
        show: true,
      },
      {
        year: "2018",
        title: "Introduction to Molecular Phylogenetics",
        role: "Instructor",
        institution: "Universidad del Magdalena · Santa Marta, Colombia",
        note: "Graduate short course taught in Spanish",
        show: true,
      },
    ],
  },

  outreach: {
    label: "Public science",
    title: "Insects open doors to curiosity.",
    introduction:
      "Outreach is an extension of the lab's scientific work: an opportunity to share the wonder of insects, make research tools accessible, and invite more people into the process of discovery.",
    image: {
      show: true,
      src: "/images/outreach-stemfest.jpg",
      alt: "Children and families examining insects and specimens with microscopes during a public science event.",
      caption: "Hands-on entomology at a community STEM event",
      objectPosition: "50% 50%",
    },
    items: [
      {
        title: "Public entomology events",
        description:
          "Hands-on activities, talks, and exhibits invite visitors of all ages to observe arthropods closely and explore their ecological roles.",
        show: true,
      },
      {
        title: "DNA barcoding & genomics workshops",
        description:
          "Accessible workshops introduce molecular tools—from DNA barcoding to portable nanopore sequencing—through authentic biological questions.",
        show: true,
      },
      {
        title: "Community science",
        description:
          "Collaborative projects connect participants with biodiversity documentation, insect conservation, and the ecosystems around them.",
        show: true,
      },
      {
        title: "Talks beyond the university",
        description:
          "Presentations in museums, community organizations, schools, and nontraditional learning spaces make evolutionary biology available to broader audiences.",
        show: true,
      },
    ],
  },

  communication: {
    label: "Mentorship in practice",
    title: "Research becomes more powerful when students can explain it.",
    body:
      "Students are encouraged to present their work, develop their scientific voice, and learn how to adapt an explanation for different audiences. Posters, talks, public demonstrations, and conversations around specimens are not add-ons to research—they are part of learning how knowledge is built and shared.",
    image: {
      show: true,
      src: "/images/student-science-communication.jpg",
      alt: "An undergraduate researcher explaining a scientific poster to visitors at a research event.",
      caption: "An undergraduate researcher sharing project results",
      objectPosition: "50% 48%",
    },
  },

  invitation: {
    show: true,
    label: "Connect",
    title: "Planning an insect, evolution, or biodiversity event?",
    body:
      "We welcome conversations with educators, museums, community groups, and colleagues interested in public programs, classroom visits, workshops, or collaborative teaching.",
    email: "probstrodolfo@gmail.com",
    buttonLabel: "Start a conversation",
  },
} as const;
