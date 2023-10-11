import { useState } from "react";
import Swal from "sweetalert2";

const DeletePost = ({ postId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleClick = () => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setError(null);
        Swal.fire({
          title: "Thank!",
          text: `Post ${postId} deleted seccessfully`,
          icon: "success",
          confirmButtonText: " Ok",
        });
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "warning",
          confirmButtonText: " Ok",
        });
      });
  };

  return (
    <>
      <button onClick={handleClick} className="btn btn-sm btn-danger me-4">
        {loading && (
          <div className="spinner-border spinner-border-sm me-2"></div>
        )}
        Delete
      </button>
      {error && <div className="mt-2 f2-bold text-danger">{error}</div>}
    </>
  );
};

export default DeletePost;
