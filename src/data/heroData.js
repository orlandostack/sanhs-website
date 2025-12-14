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
    },
    {
      id: "vision",
      logo: SanhsLogo,
      title: "Vision",
      subtitle: "Click to view vision",
    },
    {
      id: "philosophy",
      logo: SanhsLogo,
      title: "Philosophy",
      subtitle: "Click to view philosophy",
    },
  ],
};
