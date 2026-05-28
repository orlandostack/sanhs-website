import { memo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useBlog } from "../../../utils/hooks/useBlog";

const Wrapper = styled.div`
  margin-bottom: 5rem;
`;

const carouselStyle = {
  margin: 0,
  height: "60vh",
  color: "white",
  textAlign: "center",
  borderRadius: "1rem",
  position: "relative",
  overflow: "hidden",
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "2rem",
  textAlign: "left",
};

const baseArrowStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  cursor: "pointer",
  color: "black",
  fontSize: "16px",
};

const BlogCarousel = memo(() => {
  const navigate = useNavigate();
  const { loading, error, blogs } = useBlog();
  const carouselRef = useRef(null);

  if (loading) return <p>Loading featured blogs...</p>;
  if (error) return <p>Failed to load featured blogs</p>;

  const featuredBlogs = blogs.filter((blog) => blog.isFeatured);

  const handleNavigate = (id) => navigate(`/blog/${id}`);
  const handlePrev = () => carouselRef.current?.prev();
  const handleNext = () => carouselRef.current?.next();

  return (
    <Wrapper>
      <div style={{ position: "relative" }}>
        <Carousel ref={carouselRef} infinite>
          {featuredBlogs.map((blog) => (
            <div key={blog.blogId}>
              <div
                role="button"
                tabIndex={0}
                aria-label={`Read blog: ${blog.title}`}
                onClick={() => handleNavigate(blog.blogId)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleNavigate(blog.blogId);
                  }
                }}
                style={{
                  ...carouselStyle,
                  background: `url(${blog.thumbnail?.url}) no-repeat center center`,
                  backgroundSize: "cover",
                  cursor: "pointer",
                }}
              >
                <div style={overlayStyle}>
                  <h3
                    style={{
                      margin: "0 0 0.5rem",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    {blog.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: "1rem", opacity: 0.9 }}>
                    {blog.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        <button
          style={{ ...baseArrowStyle, left: "20px" }}
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          <LeftOutlined />
        </button>
        <button
          style={{ ...baseArrowStyle, right: "20px" }}
          onClick={handleNext}
          aria-label="Next slide"
        >
          <RightOutlined />
        </button>
      </div>
    </Wrapper>
  );
});

BlogCarousel.displayName = "BlogCarousel";

export default BlogCarousel;