import Navbar from "../../components/Navbar";
import Hero from "../../modules/Hero";
import About from "../../modules/About";
import Blog from "../../modules/Blog";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero id="hero" />
      <About id="about" />
      <Blog id="blogs" />
    </>
  );
};

export default LandingPage;
