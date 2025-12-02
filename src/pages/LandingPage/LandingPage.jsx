import Navbar from "../../components/Navbar";
import Hero from "../../modules/Hero";
import About from "../../modules/About";
import Blog from "../../modules/Blog";
import Footer from "../../components/Footer";
import Announcement from "../../modules/Announcement";
import Events from "../../modules/Events/Events";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero id="hero" />
      <About id="about" />
      <Blog id="blogs" />
      <Announcement id="announcement" />
      <Events id="events" />
      <Footer id="footer" />
    </>
  );
};

export default LandingPage;
