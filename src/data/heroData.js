// src/data/heroData.js
import { FaUser } from "react-icons/fa";
import { FaHandHolding } from "react-icons/fa";
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
      id: "card-1",
      logo: SanhsLogo,
      title: "40 years",
      subtitle: "EST. 1985-2025",
    },
    {
      id: "card-2",
      logo: FaUser,
      title: "2,203",
      subtitle: "Total Students",
    },
    {
      id: "card-3",
      logo: FaHandHolding,
      title: "TVL/GAS",
      subtitle: "Programs Offer",
    },
  ],
};
