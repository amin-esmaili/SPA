import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DeletePost from "./DeletPost";

const ShowPost = () => {
  const { PostId } = useParams();
  const [Post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/Posts/${PostId}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
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
      {error && <div>{error}</div>}
      {loading && <div className="spinner-border"></div>}
      <div className="row g-3 ">
        <h2>Post : {Post.id}</h2>

        <div className="card w-50">
          <div className="card-header">{Post.title}</div>
          <ul className="card-body">{Post.body}</ul>
          <div className="card-footer">
            <DeletePost PostId={Post.id} />
            <Link to={`edit`} className="btn btn-sm btn-dark">
              edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPost;
