import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowUser = () => {
  const { UserId } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${UserId}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row g-3">
        {error && <div>{error}</div>}
        {loading && <div className="spinner-border"></div>}
        {user && (
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">{user.name}</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">username : {user.username}</li>
                <li className="list-group-item">email : {user.email}</li>
                <li className="list-group-item">phone : {user.phone}</li>
                <li className="list-group-item">website : {user.website}</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowUser;
