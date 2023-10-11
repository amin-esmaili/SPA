import { Link } from "react-router-dom";

const ListUsers = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <div className="col-md-4" key={user.id}>
          <div className="card">
            <div className="card-header fw-bold">
              <Link to={`${user.id}`}>{user.name}</Link>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">username : {user.name}</li>
              <li class="list-group-item">email : {user.email}</li>
              <li class="list-group-item">phone : {user.phone}</li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListUsers;
