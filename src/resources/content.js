import { translations } from "./translations";

// Function to get content based on current language
export const getContent = (language = "es") => {
  const t = translations[language];

  const person = {
    firstName: t.person.firstName,
    lastName: t.person.lastName,
    get name() {
      return `${this.firstName} ${this.lastName}`;
    },
    role: t.person.role,
    avatar: "/images/avatar.jpeg",
    email: "nutriciondariomv@gmail.com",
    location: t.person.location,
    languages: t.person.languages,
  };

  const newsletter = {
    display: true,
    title: t.newsletter.title,
    description: t.newsletter.description,
  };

  const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/dar%C3%ADo-moreno-villamayor/",
    },
    {
      name: "Instagram",
      icon: "instagram",
      link: "https://www.instagram.com/dario.moreno.v",
    },
    {
      name: "Email",
      icon: "email",
      link: `mailto:${person.email}`,
    },
  ];

  const home = {
    subline: t.home.subline,
  };

  const about = {
    services: {
      display: true,
      title: t.about.services.title,
      services: t.about.services.services,
    },
  };

  const gallery = {
    path: "/gallery",
    label: t.gallery.label,
    title: t.gallery.title,
    description: t.gallery.description,
    images: [
      {
        src: "/images/gallery/horizontal-1.jpg",
        alt: "Nutrición saludable",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/horizontal-2.jpg",
        alt: "Comida nutritiva",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/horizontal-3.jpg",
        alt: "Estilo de vida saludable",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/horizontal-4.jpg",
        alt: "Bienestar y salud",
        orientation: "horizontal",
      },
      {
        src: "/images/gallery/vertical-1.jpg",
        alt: "Nutrición deportiva",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/vertical-2.jpg",
        alt: "Alimentación balanceada",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/vertical-3.jpg",
        alt: "Salud preventiva",
        orientation: "vertical",
      },
      {
        src: "/images/gallery/vertical-4.jpg",
        alt: "Coaching nutricional",
        orientation: "vertical",
      },
    ],
  };

  return { person, social, newsletter, home, about, gallery };
};

// Default export for backward compatibility
const defaultContent = getContent("es");
export const { person, social, newsletter, home, about, gallery } = defaultContent;
