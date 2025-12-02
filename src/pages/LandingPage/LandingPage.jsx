import Navbar from "../../components/Navbar";
import Hero from "../../modules/Hero";
import About from "../../modules/About";
import Blog from "../../modules/Blog";
import Footer from "../../components/Footer";
import Announcement from "../../modules/Announcement";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero id="hero" />
      <About id="about" />
      <Blog id="blogs" />
      <Announcement id="announcement" />
      <Footer id="footer" />
    </>
  );
};

export default LandingPage;
