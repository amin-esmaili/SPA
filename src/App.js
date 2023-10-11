import Header from "./compponents/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import IndexUser from "./pages/users/Indext";
import IndexPost from "./pages/posts/IndextPosts";
import ShowUser from "./pages/users/IdShow";
import ShowPost from "./pages/posts/ShowPost";
import CreatePost from "./pages/posts/CreatePost";
import EditPost from "./pages/posts/EditPost";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="Users" element={<IndexUser />} />
        <Route exact path="Users/:UserId" element={<ShowUser />} />
        <Route exact path="Posts" element={<IndexPost />} />
        <Route exact path="Posts/create" element={<CreatePost />} />
        <Route exact path="Posts/:PostId" element={<ShowPost />} />
        <Route exact path="Posts/:PostId/edit" element={<EditPost/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
