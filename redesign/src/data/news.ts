export const newsContent = {
  masthead: {
    label: "Lab news",
    title: "From field notes to finished work.",
    introduction:
      "Updates from the Probst Lab: new research, student accomplishments, fieldwork, talks, and the everyday work of studying ants and biodiversity.",
  },

  current: {
    show: true,
    label: "The next chapter",
    title: "The Probst Lab is taking shape at UC Davis.",
    body:
      "We are building a group centered on ant evolution, systematics, symbiosis, and biodiversity. New lab updates will appear here as projects begin, students settle in, and our first UC Davis field and research stories unfold.",
    link: { label: "Meet the lab", href: "/people/" },
  },

  archive: {
    show: true,
    label: "Earlier highlights",
    title: "Research and mentorship before UC Davis.",
    introduction:
      "These selected updates document projects and student accomplishments from Rodolfo's earlier mentoring and research work. They are part of the lab's story, while remaining clearly distinct from current membership at UC Davis.",
  },
} as const;

export const newsItems = [
  {
    id: "afo-2025",
    show: true,
    featured: true,
    date: "July 2025",
    category: "Student research",
    title: "Rocky presents ant–plant research at AFO",
    summary:
      "Rocky presented a poster at the Association of Field Ornithologists meeting, sharing research developed through undergraduate mentorship and field-based inquiry.",
    image: {
      show: false,
      src: "/images/ant-forager.jpeg",
      alt: "An ant forager on vegetation.",
      caption: "Ant-centered research in the field",
      objectPosition: "50% 50%",
    },
  },
  {
    id: "army-ant-paper-2025",
    show: true,
    featured: true,
    date: "June 2025",
    category: "Publication",
    title: "Undergraduate-led army ant research reaches publication",
    summary:
      "A project led by Megan on army ant biology became a published paper—an important milestone in a longer process of observation, analysis, writing, and revision.",
    image: {
      show: true,
      src: "/images/ant-forager.jpeg",
      alt: "An ant walking across a green leaf.",
      caption: "Ant natural history motivates questions at every scale",
      objectPosition: "50% 42%",
    },
  },
  {
    id: "pbesa-2025",
    show: true,
    featured: false,
    date: "March 2025",
    category: "Conference",
    title: "Student research at the Pacific Branch ESA meeting",
    summary:
      "Megan and Sylvia presented their work at the Pacific Branch Entomological Society of America meeting, where Megan received the award for best undergraduate oral presentation.",
    image: { show: false, src: "", alt: "", caption: "", objectPosition: "50% 50%" },
  },
  {
    id: "ucur-2025",
    show: true,
    featured: false,
    date: "February 2025",
    category: "Student research",
    title: "A group of student projects at UCUR",
    summary:
      "Undergraduate researchers shared projects and practiced explaining their questions, methods, and findings at the Utah Conference on Undergraduate Research.",
    image: {
      show: true,
      src: "/images/student-research-symposium.jpg",
      alt: "Undergraduate researchers presenting scientific posters at a symposium.",
      caption: "Undergraduate research presentations at UCUR",
      objectPosition: "50% 50%",
    },
  },
  {
    id: "capitol-hill-2025",
    show: true,
    featured: false,
    date: "February 2025",
    category: "Science communication",
    title: "Research on Capitol Hill",
    summary:
      "Alex presented undergraduate research to legislators and visitors, translating a scientific project for audiences beyond the university.",
    image: {
      show: true,
      src: "/images/student-science-communication.jpg",
      alt: "An undergraduate researcher explaining a scientific poster to visitors.",
      caption: "Sharing undergraduate research beyond the university",
      objectPosition: "50% 48%",
    },
  },
  {
    id: "stemfest-2025",
    show: true,
    featured: false,
    date: "January 2025",
    category: "Outreach",
    title: "Hands-on science at STEMFEST",
    summary:
      "The group brought specimens, biological questions, and hands-on activities to STEMFEST, inviting visitors to explore insects and the tools used to study them.",
    image: {
      show: true,
      src: "/images/outreach-stemfest.jpg",
      alt: "Students and visitors taking part in a hands-on science outreach activity.",
      caption: "Making insect science tangible at STEMFEST",
      objectPosition: "50% 50%",
    },
  },
  {
    id: "sacnas-2024",
    show: true,
    featured: false,
    date: "October 2024",
    category: "Conference",
    title: "Undergraduate projects travel to SACNAS",
    summary:
      "Students presented posters at the SACNAS National Diversity in STEM Conference and joined a broad community of scientists committed to inclusive research and mentorship.",
    image: { show: false, src: "", alt: "", caption: "", objectPosition: "50% 50%" },
  },
] as const;
