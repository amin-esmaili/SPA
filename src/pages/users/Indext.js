import React, { useEffect, useState } from "react";
import ListUsers from "./List";

const IndexUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
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
        <h2>Users:</h2>
        {error && <div>{error}</div>}
        {loading && <div className="spinner-border"></div>}
        {users && <ListUsers users={users} />}
      </div>
    </div>
  );
};

export default IndexUser;
