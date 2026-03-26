import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();

  return <h2>📄 Blog Details for ID: {id}</h2>;
}

export default BlogDetails;