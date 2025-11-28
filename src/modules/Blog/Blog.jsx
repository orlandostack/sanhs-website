import { memo } from "react";
import { blogData } from "../../data/blogData";

import theme from "../../styles/Theme";
import SectionTitle from "../../components/SectionTitle";
import BlogCarousel from "../../components/Carousel/BlogCarousel";
import BlogCard from "../../components/Cards/BlogCard";

import * as S from "./Blog.styled";

const Blog = memo(({ id }) => {
  return (
    <S.BlogWrapper id={id}>
      <S.Content>
        <SectionTitle
          title="Featured"
          subtitle="School Highlights & Features"
          titleColor={theme.color.white}
          subtitleColor={theme.color.white}
        />

        <BlogCarousel />

        <SectionTitle
          title="Blog news"
          subtitle="Recent Blog Posts"
          titleColor={theme.color.white}
          subtitleColor={theme.color.white}
        />
        <BlogCard blogs={blogData} />
        <S.ViewAllButton>View all</S.ViewAllButton>
      </S.Content>
    </S.BlogWrapper>
  );
});

export default Blog;
