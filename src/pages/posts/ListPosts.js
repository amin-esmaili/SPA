import { Link } from "react-router-dom";

const ListPosts = ({ posts }) => {
    return (
      <>
        {posts.map((post) => (
          <div className="col-md-4" key={post.id}>
            <div className="card">
              <div className="card-header fw-bold">
                <Link to={`${post.id}`}>Title : {post.title}</Link>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Body : {post.body}</li>
              </ul>
            </div>
          </div>
        ))}
      </>
    );
  };
  
  export default ListPosts;
  