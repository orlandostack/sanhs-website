import Blogs from "../../modules/BlogList";
import { motion as MOTION } from "framer-motion";
import { fadeIn } from "../../utils/helpers/transitions/transitions";
const BlogPage = () => {
  return (
    <MOTION.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Blogs />
    </MOTION.div>
  );
};

export default BlogPage;
