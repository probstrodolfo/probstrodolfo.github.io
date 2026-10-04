export const joinContent = {
  masthead: {
    label: "Join the lab",
    title: "Bring your questions. Build the science with us.",
    introduction:
      "The Probst Lab welcomes people who are curious about ants, evolution, biodiversity, natural history, and the many ways those subjects intersect.",
  },

  availability: {
    show: true,
    label: "Current status",
    title: "The lab is growing.",
    body:
      "Specific funded openings will be posted here when available. General inquiries from prospective students, postdoctoral researchers, and collaborators are welcome at any time, although opportunities depend on project fit, mentoring capacity, and funding.",
  },

  culture: {
    label: "How we work",
    title: "Curiosity, ownership, and generous collaboration.",
    paragraphs: [
      "Mentorship in the Probst Lab is built around helping researchers develop their own questions, gain confidence with unfamiliar methods, and take meaningful ownership of their work. Projects may begin with an ant specimen, a field observation, a phylogenetic pattern, or a dataset—but they should grow into questions that matter to the person pursuing them.",
      "We value careful natural history, clear expectations, constructive feedback, and open communication. We also recognize that scientists arrive through different paths and with different kinds of experience. Our goal is to create an environment in which people can learn ambitiously, ask for help, and contribute their distinct perspectives.",
    ],
    values: [
      "Questions before techniques",
      "Independence with support",
      "Natural history matters",
      "Collaboration over competition",
      "Inclusive, accessible science",
      "Clear scientific communication",
    ],
    image: {
      show: true,
      src: "/images/costa-rica-fieldwork.jpg",
      alt: "A researcher examining an understory plant during tropical fieldwork in Costa Rica.",
      caption: "Fieldwork in Costa Rica",
      objectPosition: "57% 50%",
    },
  },

  pathways: {
    label: "Ways to join",
    title: "Different stages, shared curiosity.",
    introduction:
      "There is no single route into the lab. The most useful first message explains what you hope to learn, what questions interest you, and why this group might be a good intellectual fit.",
    items: [
      {
        number: "01",
        title: "Graduate students",
        body:
          "Prospective graduate students should be excited to develop an independent research direction connected to the lab's broader interests in ant evolution, symbiosis, systematics, biodiversity, or environmental change.",
        details: [
          "Contact the lab well before the relevant application deadline.",
          "Include a CV and a concise description of your research interests.",
          "Explain which questions or parts of the lab's work genuinely interest you.",
          "Admission is handled through the appropriate UC Davis graduate program.",
        ],
        links: [] as Array<{ label: string; href: string }>,
      },
      {
        number: "02",
        title: "Undergraduate researchers",
        body:
          "Undergraduates may contribute to specimen-based taxonomy, imaging, biodiversity data, field or laboratory work, genomics, and bioinformatics. Projects depend on available mentoring and on finding a scope that supports real learning and meaningful contribution.",
        details: [
          "Tell us what draws you to insects, evolution, or biodiversity.",
          "Share your weekly availability and the timeframe you have in mind.",
          "Previous research experience is not required for every project.",
          "Reliability, curiosity, and willingness to learn matter greatly.",
        ],
        links: [] as Array<{ label: string; href: string }>,
      },
      {
        number: "03",
        title: "Postdoctoral researchers",
        body:
          "Researchers interested in developing fellowship proposals or complementary projects are encouraged to get in touch early. Strong fits may connect ant biology with comparative genomics, functional traits, collections, field ecology, or new analytical approaches.",
        details: [
          "Describe the question you want to pursue and how it extends the lab's work.",
          "Include your CV, publication record, and approximate timeline.",
          "Mention fellowships or funding mechanisms you are considering.",
          "Funded positions will be advertised explicitly when available.",
        ],
        links: [] as Array<{ label: string; href: string }>,
      },
      {
        number: "04",
        title: "Collaborators & visitors",
        body:
          "We welcome collaborations that bring together complementary organisms, collections, field systems, data, or methods. The best collaborations begin with a clear scientific question and an open conversation about shared goals and contributions.",
        details: [
          "Introduce the scientific question and why collaboration would help answer it.",
          "Identify relevant samples, data, methods, or expertise.",
          "Suggest a realistic first step or conversation.",
          "International and cross-disciplinary connections are especially welcome.",
        ],
        links: [] as Array<{ label: string; href: string }>,
      },
    ],
  },

  firstMessage: {
    label: "Before you write",
    title: "Help us understand the fit.",
    introduction:
      "A short, thoughtful message is much more useful than a generic inquiry. It does not need to be formal or elaborate, but it should give us enough context to respond meaningfully.",
    items: [
      {
        title: "Who you are",
        description: "Your current institution, program or career stage, and the path that brought you to this point.",
      },
      {
        title: "What interests you",
        description: "The organisms, questions, or approaches you find compelling—not simply a list of broad keywords.",
      },
      {
        title: "Why this lab",
        description: "A specific connection between your interests and the research or mentoring environment described here.",
      },
      {
        title: "What you are seeking",
        description: "The type of opportunity, anticipated timing, availability, and any relevant application or funding deadlines.",
      },
    ],
  },

  contact: {
    label: "Start a conversation",
    title: "Interested in ants—and in the questions they help us ask?",
    body:
      "Send a concise introduction along with your CV or résumé. If there is not an immediate opening, a thoughtful message can still begin a useful scientific conversation.",
    email: "probstrodolfo@gmail.com",
    buttonLabel: "Email Rodolfo",
  },
} as const;
