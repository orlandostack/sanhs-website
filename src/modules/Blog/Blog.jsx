import { memo } from "react";
import { useNavigate } from "react-router-dom";

import SectionTitle from "../../components/SectionTitle";
import BlogCarousel from "../../components/Carousel/BlogCarousel";
import BlogCard from "../../components/Cards/BlogCard";
import * as S from "./Blog.styled";

const Blog = memo(({ id }) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/blogpage");
  };

  return (
    <S.BlogWrapper id={id}>
      <S.Content>
        <SectionTitle
          title="Featured"
          subtitle="School Highlights & Features"
        />

        <BlogCarousel />

        <SectionTitle title="Blog news" subtitle="Recent Blog Posts" />

        <BlogCard />

        <S.ViewAllButton onClick={handleViewAll}>View all</S.ViewAllButton>
      </S.Content>
    </S.BlogWrapper>
  );
});

export default Blog;
