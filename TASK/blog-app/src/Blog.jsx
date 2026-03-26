import { Link } from "react-router-dom";

const blogs = [
  { id: 1, title: "React Basics" },
  { id: 2, title: "Hooks Guide" },
  { id: 3, title: "Router Tutorial" }
];

function Blogs() {
  return (
    <div className="blog-list">
        {blogs.map((blog) => (
            <div key={blog.id} className="blog-item">
                <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
            </div>
        ))}
    </div>
  );
}

export default Blogs;