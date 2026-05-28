import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import SectionTitle from "../../components/SectionTitle";
import BlogCarousel from "../../components/Carousel/BlogCarousel";
import BlogCard from "../../components/Cards/BlogCard";
import { useBlog } from "../../utils/hooks/useBlog";
import * as S from "./Blog.styled";
import { fadeIn } from "../../utils/helpers/transitions/transitions";

const BLOG_CONFIG = {
  DISPLAY_LIMIT: 3,
  VIEW_ALL_THRESHOLD: 3,
};

const Blog = memo(({ id }) => {
  const navigate = useNavigate();

  const handleViewAll = () => navigate("/blog");

  return (
    <S.BlogWrapper id={id}>
      <BlogContent onViewAll={handleViewAll} config={BLOG_CONFIG} />
    </S.BlogWrapper>
  );
});

Blog.displayName = "Blog";

const BlogContent = memo(({ onViewAll, config }) => {
  const { blogs } = useBlog();

  const shouldShowViewAll = blogs.length > config.VIEW_ALL_THRESHOLD;

  return (
    <S.Content>
      <SectionTitle
        title="Featured Blogs"
        subtitle="School Highlights & Features"
      />

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <BlogCarousel />

        {shouldShowViewAll && (
          <S.ButtonWrapper>
            <S.ViewAllButton onClick={onViewAll} aria-label="View all blog posts">
              View all
            </S.ViewAllButton>
          </S.ButtonWrapper>
        )}
      </motion.div>
    </S.Content>
  );
});

BlogContent.displayName = "BlogContent";

export default Blog;