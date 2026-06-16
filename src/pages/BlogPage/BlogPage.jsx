import Blogs from "../../modules/BlogList";
import { motion as MOTION } from "framer-motion";
import { fadeIn } from "../../utils/helpers/transitions/transitions";
import BlogList from "../../modules/BlogList";
import CTA from "../../components/CtaSection/CTA";
import Footer from "../../components/Footer"

const BlogPage = () => {
  return (
    <>
      <MOTION.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <BlogList />
      </MOTION.div>

      {/* CTA SECTION */}
      <MOTION.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
      </MOTION.section>
      <CTA />

      {/* FOOTER SECTION */}
      <Footer />
    </>
  );
};

export default BlogPage;
