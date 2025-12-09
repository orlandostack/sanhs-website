import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { GoArrowLeft } from "react-icons/go";
import { blogData } from "../../data/blogData";
import * as S from "./BlogContent.styled";

const BlogContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  const blog = blogData.find((item) => item.id === parseInt(id));

  const handleBack = () => navigate(-1);

  if (!blog) {
    return (
      <S.Wrapper>
        <S.Content>
          <S.IconWrapper onClick={handleBack}>
            <GoArrowLeft />
          </S.IconWrapper>
          <h2>Blog post not found</h2>
          <p>
            The blog post you're looking for doesn't exist or has been removed.
          </p>
        </S.Content>
      </S.Wrapper>
    );
  }

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <S.Wrapper>
      <S.Content>
        <S.IconWrapper onClick={handleBack}>
          <GoArrowLeft />
        </S.IconWrapper>
        <S.Title>{blog.title}</S.Title>
        <S.Subtitle>{blog.subtitle}</S.Subtitle>
        <S.DateText>{formatDate(blog.date)}</S.DateText>
        <S.ThumbnailImage src={blog.thumbnail} alt={blog.title} />
        <S.BlogText>{blog.content}</S.BlogText>
      </S.Content>
    </S.Wrapper>
  );
};

export default BlogContent;
