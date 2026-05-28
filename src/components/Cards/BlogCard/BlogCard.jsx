import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Collage } from "./BlogCard.styled";
import { useBlog } from "../../../utils/hooks/useBlog";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const BlogCard = memo(() => {
  const { loading, error, blogs } = useBlog();
  const navigate = useNavigate();

  const handleNavigate = (id) => navigate(`/blog/${id}`);

  const handleKeyDown = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleNavigate(id);
    }
  };

  if (loading) return <div role="status">Loading blogs...</div>;
  if (error) return <div role="alert">Failed to load blogs</div>;
  if (blogs.length === 0) return <div>No blogs available</div>;

  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const latestBlogs = sortedBlogs.slice(0, 3);
  const [mostRecent, ...otherBlogs] = latestBlogs;

  return (
    <Collage>
      {/* Featured / most recent blog */}
      <div className="left-side">
        <article
          className="card"
          role="button"
          tabIndex={0}
          aria-label={`Read blog: ${mostRecent.title}`}
          onClick={() => handleNavigate(mostRecent.blogId)}
          onKeyDown={(e) => handleKeyDown(e, mostRecent.blogId)}
        >
          <img
            src={mostRecent.thumbnail?.url}
            alt={mostRecent.title}
            loading="lazy"
            decoding="async"
          />
          <div className="overlay">
            <div className="content">
              <h3 className="title">{mostRecent.title}</h3>
              <p className="subtitle">{mostRecent.subtitle}</p>
              <p className="date">
                <time dateTime={mostRecent.date}>
                  {formatDate(mostRecent.date)}
                </time>
              </p>
            </div>
          </div>
        </article>
      </div>

      {/* Remaining blogs */}
      <div className="right-side">
        {otherBlogs.map((blog) => (
          <article
            key={blog.blogId}
            className="card"
            role="button"
            tabIndex={0}
            aria-label={`Read blog: ${blog.title}`}
            onClick={() => handleNavigate(blog.blogId)}
            onKeyDown={(e) => handleKeyDown(e, blog.blogId)}
          >
            <img
              src={blog.thumbnail?.url}
              alt={blog.title}
              loading="lazy"
              decoding="async"
            />
            <div className="overlay">
              <div className="content">
                <h3 className="title">{blog.title}</h3>
                <p className="subtitle">{blog.subtitle}</p>
                <p className="date">
                  <time dateTime={blog.date}>{formatDate(blog.date)}</time>
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Collage>
  );
});

BlogCard.displayName = "BlogCard";

export default BlogCard;