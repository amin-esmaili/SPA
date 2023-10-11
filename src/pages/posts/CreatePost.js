import { useState } from "react";
import Swal from "sweetalert2";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false)
        setError(null)
        Swal.fire({
            title : "Thank!",
            text : "Post created seccessfully" ,
            icon : "success" ,
            confirmButtonText : " Ok" ,
        });
      }).catch(err => {
        setLoading(false)
        setError(err.message)
        Swal.fire({
          title : "Error!",
          text : err.message ,
          icon : "warning" ,
          confirmButtonText : " Ok" ,
      });
      });
      
  };
  return (
    <>
      <div className="col-md-6 p-5">
        <h2>create Post:</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="form-control"
            ></input>
            <div className="form-text text-danger">
              {title ? "" : "Title is required"}
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Body</label>
            <textarea
              onChange={(e) => setBody(e.target.value)}
              className="form-control"
              rows="3"
            ></textarea>
            <div className="form-text text-danger">
              {body ? "" : "Body is required"}
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-dark"
            disabled={title === "" || body === ""}
          >
            create
            {loading && <div className="spinner-border spinner-border-sm me-3
            "></div>}
          </button>
          {error && <div className="mt-2 f2-bold text-danger">{error}</div>}
        </form>
      </div>
    </>
  );
};

export default CreatePost;
