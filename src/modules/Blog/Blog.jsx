import { memo } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import BlogCarousel from "../../components/Carousel/BlogCarousel";
import BlogCard from "../../components/Cards/BlogCard";
import { useBlog } from "../../utils/hooks/useBlog";
import * as S from "./Blog.styled";

const BLOG_CONFIG = {
  DISPLAY_LIMIT: 3,
  VIEW_ALL_THRESHOLD: 3,
};

const Blog = memo(({ id }) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/blogpage");
  };

  return (
    <S.BlogWrapper id={id}>
      <BlogContent onViewAll={handleViewAll} config={BLOG_CONFIG} />
    </S.BlogWrapper>
  );
});

export default Blog;

const BlogContent = memo(({ onViewAll, config }) => {
  const { loading, error, blogs } = useBlog();

  const totalBlogs = blogs.length;
  const shouldShowViewAll = totalBlogs > config.VIEW_ALL_THRESHOLD;

  return (
    <S.Content>
      <SectionTitle title="Featured" subtitle="School Highlights & Features" />

      <BlogCarousel />

      <SectionTitle title="Blog news" subtitle="Recent Blog Posts" />

      {loading ? (
        <div>Loading blogs...</div>
      ) : error ? (
        <div>Failed to load blogs</div>
      ) : (
        <>
          <BlogCard displayLimit={config.DISPLAY_LIMIT} />

          {shouldShowViewAll && (
            <S.ViewAllButton onClick={onViewAll}>View all</S.ViewAllButton>
          )}
        </>
      )}
    </S.Content>
  );
});
