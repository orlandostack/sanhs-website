import { useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { GoArrowLeft } from "react-icons/go";
import SectionTitle from "../../components/SectionTitle";
import * as S from "./Blogs.styled";
import { useBlog } from "../../utils/hooks/useBlog";

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { loading, error, blogs } = useBlog();

  const handleBack = () => navigate(-1);
  const handleNavigate = (id) => navigate(`/blog/${id}`);

  const filteredBlogs = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(term) ||
        blog.subtitle.toLowerCase().includes(term) ||
        (blog.keywords &&
          blog.keywords.some((k) => k.toLowerCase().includes(term)))
    );
  }, [searchTerm, blogs]);

  // Sort blogs by date
  const sortedBlogData = useMemo(() => {
    return [...filteredBlogs].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }, [filteredBlogs]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading)
    return (
      <S.Wrapper>
        <p>Loading blogs...</p>
      </S.Wrapper>
    );
  if (error)
    return (
      <S.Wrapper>
        <p>Failed to load blogs.</p>
      </S.Wrapper>
    );
  if (blogs.length === 0)
    return (
      <S.Wrapper>
        <p>No blogs available.</p>
      </S.Wrapper>
    );

  return (
    <S.Wrapper>
      <S.Content>
        <S.IconWrapper onClick={handleBack}>
          <GoArrowLeft />
        </S.IconWrapper>

        <S.Header>
          <SectionTitle
            title="Blog Posts"
            subtitle="Latest Updates and Stories"
          />
          <S.SearchInput
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </S.Header>

        <S.CardWrapper>
          {sortedBlogData.map((blog) => (
            <S.Card
              key={blog.blogId}
              onClick={() => handleNavigate(blog.blogId)}
            >
              <img src={blog.thumbnail?.url} alt={blog.title} />
              <div className="overlay">
                <div className="content">
                  <h3 className="title">{blog.title}</h3>
                  <p className="subtitle">{blog.subtitle}</p>
                  <p className="date">{formatDate(blog.date)}</p>
                </div>
              </div>
            </S.Card>
          ))}
        </S.CardWrapper>
      </S.Content>
    </S.Wrapper>
  );
};

export default Blogs;
