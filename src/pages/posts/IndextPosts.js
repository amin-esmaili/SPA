import React, { useEffect, useState } from "react";
import ListPosts from "./ListPosts";
import { Link } from "react-router-dom";

const IndexPost = () => {
  const [posts, setposts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setposts(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row g-5">
        <h2>Posts :</h2>
        {error && <div>{error}</div>}
        {loading && <div className="spinner-border"></div>}
        <div>
          <Link className="btn btn-dark" to="create">
            create post
          </Link>
        </div>
        <ListPosts posts={posts} />
      </div>
    </div>
  );
};

export default IndexPost;
