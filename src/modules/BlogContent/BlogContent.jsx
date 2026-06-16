import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import * as S from "./BlogContent.styled";
import { useBlog } from "../../utils/hooks/useBlog";
import { FaCalendarAlt } from "react-icons/fa";
import CTA from "../../components/CtaSection/CTA";


const BlogContent = () => {
  const { blogId } = useParams();
  const { loading, error, blogs } = useBlog();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [blogId]);

  /**
   * Format date string to readable format
   * @param {string} dateString - ISO date string
   * @returns {string} Formatted date
   */
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Loading state
  if (loading) {
    return (
      <>
        <Navbar />
        <S.Wrapper>
          <S.Content>
            <S.LoadingText>Loading blog...</S.LoadingText>
          </S.Content>
        </S.Wrapper>
        <Footer />
      </>
    );
  }

  // Error state
  if (error) {
    return (
      <>
        <Navbar />
        <S.Wrapper>
          <S.Content>
            <S.ErrorText>Failed to load blog.</S.ErrorText>
          </S.Content>
        </S.Wrapper>
        <Footer />
      </>
    );
  }

  // Find blog by ID
  const blog = blogs.find((item) => item.blogId === blogId);

  // Not found state
  if (!blog) {
    return (
      <>
        <Navbar />
        <S.Wrapper>
          <S.Content>
            <S.NotFoundHeading>Blog post not found</S.NotFoundHeading>
            <S.NotFoundText>
              The blog post you're looking for doesn't exist or has been removed.
            </S.NotFoundText>
          </S.Content>
        </S.Wrapper>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <S.BlogThumbnail>
        <S.ThumbnailImage
          src={blog.thumbnail?.url}
          alt={blog.title}
          loading="eager"
          role="img"
        />
        <S.Overlay aria-hidden="true" />
        <S.ThumbnailContentWrapper>
          <S.ThumbnailTitle>{blog.title}</S.ThumbnailTitle>
          <S.ThumbnailSubtitle>{blog.subtitle}</S.ThumbnailSubtitle>
        </S.ThumbnailContentWrapper>
      </S.BlogThumbnail>

      {/* Main Content Section */}
      <S.Wrapper>
        <S.Content>
          <S.Body>
            {blog.gallery && blog.gallery.length > 0 && (
              <S.Gallery role="region" aria-label="Blog gallery">
                {blog.gallery.map((image, index) => (
                  <S.GalleryImage
                    key={`gallery-${blogId}-${index}`}
                    src={image.url}
                    alt={`${blog.title} - Image ${index + 1}`}
                    loading="lazy"
                  />
                ))}
              </S.Gallery>
            )}

            <S.ArticleHeader>
              <S.ArticleTitle>{blog.title}</S.ArticleTitle>
              <S.DateText dateTime={blog.date}>
                <FaCalendarAlt />
                {formatDate(blog.date)}
              </S.DateText>
            </S.ArticleHeader>

            <S.BlogText>{blog.content}</S.BlogText>
          </S.Body>
        </S.Content>
      </S.Wrapper>

      <CTA />
      <Footer />
    </>
  );
};

export default BlogContent;