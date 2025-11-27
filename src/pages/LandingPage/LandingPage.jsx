import Navbar from "../../components/Navbar";
import Hero from "../../modules/Hero";
import About from "../../modules/About";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero id="hero" />
      <About id="about" />
    </>
  );
};

export default LandingPage;
