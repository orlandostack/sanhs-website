import { useRef } from "react";
import { Carousel } from "antd";
import { blogData } from "../../../data/blogData";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 5rem;
`;

const BlogCarousel = () => {
  const featuredBlogs = blogData.filter((blog) => blog.isFeatured);
  const carouselRef = useRef(null);

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
    background:
      "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "2rem",
    textAlign: "left",
  };

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    cursor: "pointer",
    color: "white",
    fontSize: "16px",
  };

  const prevArrowStyle = {
    ...arrowStyle,
    left: "20px",
  };

  const nextArrowStyle = {
    ...arrowStyle,
    right: "20px",
  };

  return (
    <Wrapper>
      <div style={{ position: "relative" }}>
        <Carousel ref={carouselRef} infinite={true}>
          {featuredBlogs.map((blog) => (
            <div key={blog.id}>
              <div
                style={{
                  ...carouselStyle,
                  background: `url(${blog.thumbnail}) no-repeat center center`,
                  backgroundSize: "cover",
                }}
              >
                <div style={overlayStyle}>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {blog.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "1rem",
                      opacity: 0.9,
                    }}
                  >
                    {blog.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        <button
          style={prevArrowStyle}
          onClick={() => carouselRef.current.prev()}
        >
          <LeftOutlined />
        </button>
        <button
          style={nextArrowStyle}
          onClick={() => carouselRef.current.next()}
        >
          <RightOutlined />
        </button>
      </div>
    </Wrapper>
  );
};

export default BlogCarousel;
