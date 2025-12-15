import AnnouncementList from "../../modules/AnnouncementList";
import { motion as MOTION } from "framer-motion";
import { fadeIn } from "../../utils/helpers/transitions/transitions";

const AnnouncementPage = () => {
  return (
    <MOTION.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <AnnouncementList />
    </MOTION.div>
  );
};

export default AnnouncementPage;
