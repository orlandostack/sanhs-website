import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import SectionTitle from "../../components/SectionTitle";
import { blogData } from "../../data/blogData";

import * as S from "./Blogs.styled";

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogData);

  const navigate = useNavigate();

  const handleBack = () => navigate(-1);
  const handleNavigate = (id) => navigate(`/blog/${id}`);

  // Live search effect
  useEffect(() => {
    const term = searchTerm.toLowerCase();
    const filtered = blogData.filter(
      (blog) =>
        blog.title.toLowerCase().includes(term) ||
        blog.subtitle.toLowerCase().includes(term) ||
        (blog.keywords &&
          blog.keywords.some((k) => k.toLowerCase().includes(term)))
    );
    setFilteredBlogs(filtered);
  }, [searchTerm]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sort blogs by date
  const sortedBlogData = [...filteredBlogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
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
              key={blog.id || blog.title}
              onClick={() => handleNavigate(blog.id)}
            >
              <img src={blog.thumbnail} alt={blog.title} />
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
