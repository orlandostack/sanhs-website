// src/data/navbarData.js
import Logo from "../assets/logo.png";
import {
  IoHomeOutline,
  IoInformationCircleOutline,
  IoNewspaperOutline,
  IoMegaphoneOutline,
  IoMailOutline,
  IoDownloadOutline,
} from "react-icons/io5";

export const navbarData = {
  logo: Logo,
  brand: "SANHS",
  subBrand: "San Antonio National High School",

  links: [
    { name: "Home", to: "hero", icon: IoHomeOutline },
    { name: "About", to: "about", icon: IoInformationCircleOutline },
    { name: "Blogs", to: "blogs", icon: IoNewspaperOutline },
    { name: "Announcement", to: "announcement", icon: IoMegaphoneOutline },
    { name: "Contact", to: "footer", icon: IoMailOutline },
    {
      name: "Download Forms",
      to: "downloads",
      icon: IoDownloadOutline,
      isRoute: true,
    },
  ],
};
