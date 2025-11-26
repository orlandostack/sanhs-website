import Logo from "../assets/logo.png";
import { IoMdMenu } from "react-icons/io";

export const navbarData = {
  logo: Logo,
  brand: "SANHS",
  subBrand: "San Antonio National High School",
  menu: IoMdMenu,

  links: [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Blogs", to: "blogs" },
    { name: "Announcement", to: "announcement" },
    { name: "Contact", to: "contacts" },
  ],
};
