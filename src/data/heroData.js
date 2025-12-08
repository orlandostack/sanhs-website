// src/data/heroData.js
import SanhsLogo from "../assets/logo.png";
import BgImage from "../assets/bg-image.png";

export const heroData = {
  bgImage: BgImage,
  heading: "San Antonio National High School",
  subheading: "Where Learning Meets Excellence",

  primaryButton: "Get in Touch",
  secondaryButton: "Announcements",

  heroCard: [
    {
      id: "mission",
      logo: SanhsLogo,
      title: "Mission",
      subtitle: "Click to view mission",
      modalContent: `
To develop learners with the necessary knowledge, skills, and values 
to become responsible, productive, and globally competitive citizens.
      `,
    },
    {
      id: "vision",
      logo: SanhsLogo,
      title: "Vision",
      subtitle: "Click to view vision",
      modalContent: `
A school that produces empowered learners who uphold excellence, integrity, 
and leadership in a rapidly changing world.
      `,
    },
    {
      id: "philosophy",
      logo: SanhsLogo,
      title: "Philosophy",
      subtitle: "Click to view philosophy",
      modalContent: `
Education is the key to transforming lives, building character, and shaping 
a just and progressive society.
      `,
    },
  ],
};
