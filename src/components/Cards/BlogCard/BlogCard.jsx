import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Collage } from "./BlogCard.styled";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const BlogCard = memo(({ blogs }) => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/blog/${id}`);
  };

  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const latestBlogs = sortedBlogs.slice(0, 3);

  if (latestBlogs.length === 0) {
    return <div>No blogs available</div>;
  }

  const [mostRecent, ...otherBlogs] = latestBlogs;

  return (
    <Collage>
      <div className="LeftSide">
        <div className="card" onClick={() => handleNavigate(mostRecent.id)}>
          <img src={mostRecent.thumbnail} alt={mostRecent.title} />
          <div className="overlay">
            <div className="content">
              <h3 className="title">{mostRecent.title}</h3>
              <p className="subtitle">{mostRecent.subtitle}</p>
              <p className="date">{formatDate(mostRecent.date)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="RightSide">
        {otherBlogs.map((blog) => (
          <div
            key={blog.id}
            className="card"
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
          </div>
        ))}
      </div>
    </Collage>
  );
});

export default BlogCard;
