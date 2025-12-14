import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { GoArrowLeft } from "react-icons/go";
import * as S from "./BlogContent.styled";
import { useBlog } from "../../utils/hooks/useBlog";

const BlogContent = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const { loading, error, blogs } = useBlog();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [blogId]);

  if (loading)
    return (
      <S.Wrapper>
        <p>Loading blog...</p>
      </S.Wrapper>
    );
  if (error)
    return (
      <S.Wrapper>
        <p>Failed to load blog.</p>
      </S.Wrapper>
    );

  const blog = blogs.find((item) => item.blogId === blogId);

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
        <S.ThumbnailImage src={blog.thumbnail?.url} alt={blog.title} />
        <S.BlogText>{blog.content}</S.BlogText>
      </S.Content>
    </S.Wrapper>
  );
};

export default BlogContent;
