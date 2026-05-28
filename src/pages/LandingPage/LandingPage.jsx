import { motion } from "framer-motion";
import { fadeIn, slideUp } from "../../utils/helpers/transitions/transitions";

import Navbar from "../../components/Navbar";
import Hero from "../../modules/Hero";
import About from "../../modules/About";
import Blog from "../../modules/Blog";
import Footer from "../../components/Footer";
import Announcement from "../../modules/Announcement";
import Events from "../../modules/Events";
import CTA from "../../components/CtaSection/CTA";

const inView = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-100px" },
};

const LandingPage = () => {
  return (
    <main className="page--homepage">
      <Navbar />

      {/*
        Each module renders its own <section> (the styled wrapper).
        We wrap that section in a motion.div so Framer Motion always
        gets a real DOM element as its ref target — no forwardRef
        threading through styled-components needed.
      */}
      <motion.div variants={fadeIn} initial="hidden" animate="visible">
        <Hero id="hero" />
      </motion.div>

      <motion.div variants={slideUp} {...inView}>
        <About id="about" />
      </motion.div>

      <motion.div variants={slideUp} {...inView}>
        <Blog id="blogs" />
      </motion.div>

      <motion.div variants={slideUp} {...inView}>
        <Announcement id="announcement" />
      </motion.div>

      <motion.div variants={slideUp} {...inView}>
        <Events id="events" />
      </motion.div>

      <motion.div variants={fadeIn} {...inView}>
        <CTA id="call-to-action" />
      </motion.div>

      <motion.div variants={fadeIn} {...inView}>
        <Footer id="footer" />
      </motion.div>
    </main>
  );
};

export default LandingPage;