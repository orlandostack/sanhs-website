import { motion as MOTION } from "framer-motion";
import { fadeIn, slideUp } from "../../utils/helpers/transitions/transitions";

import Navbar from "../../components/Navbar";
import Hero from "../../modules/Hero";
import About from "../../modules/About";
import Blog from "../../modules/Blog";
import Footer from "../../components/Footer";
import Announcement from "../../modules/Announcement";
import Events from "../../modules/Events";
import CTA from "../../components/CtaSection/CTA";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <MOTION.div variants={fadeIn} initial="hidden" animate="visible">
        <Hero id="hero" />
      </MOTION.div>

      <MOTION.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <About id="about" />
      </MOTION.div>

      <MOTION.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Blog id="blogs" />
      </MOTION.div>

      <MOTION.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Announcement id="announcement" />
      </MOTION.div>

      <MOTION.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Events id="events" />
      </MOTION.div>

      <MOTION.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <CTA id="call-to-action" />
      </MOTION.section>

      <MOTION.footer
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <Footer id="footer" />
      </MOTION.footer>
    </>
  );
};

export default LandingPage;
