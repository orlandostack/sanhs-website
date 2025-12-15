import BlogContent from "../../modules/BlogContent";
import { motion as MOTION } from "framer-motion";
import { fadeInUp } from "../../utils/helpers/transitions/transitions";

const BlogContentPage = () => {
  return (
    <MOTION.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <BlogContent />
    </MOTION.div>
  );
};

export default BlogContentPage;
