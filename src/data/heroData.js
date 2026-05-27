// src/data/heroData.js
import SanhsLogo from "../assets/logo.png";
import BgImage from "../assets/bg-image.png";

export const heroData = {
  bgImage: BgImage,
  heading: "Where Learning Meets Excellence",
  subheading:
    "Shaping Future-Ready Learners at San Antonio National High School",

  primaryButton: "Message Us",
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
      title: "Core Values",
      subtitle: "Click to view core values",
    },
  ],
};
