import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/admin/Login";
import NotFound from "./pages/NotFound";
import Home from "./pages/admin/Home";
import LoginRequests from "./components/admin/LoginRequests";
import TextPosts from "./components/admin/TextPosts";
import ImagePosts from "./components/admin/ImagePosts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserLogin from "./components/user/UserLogin";
import AuthGuard from "./lib/CheckAdminAuth";
import UserSignUp from "./components/user/UserSignUp";
import HomePage from "./pages/main/HomePage";
import UserDashboard from "./components/user/UserDashboard";
import AuthGuardUser from "./lib/CheckUserAuth";
import GetTextPosts from "./components/user/get-text-posts";
import AddImagePost from "./components/user/add-image-post";
import AddTextPost from "./components/user/add-text-post";
import GetImagePost from "./components/user/get-image-post";
import AllPosts from "./components/main/AllPosts";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<AllPosts />} />

          {/* User Routes  */}
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignUp />} />
          <Route element={<AuthGuardUser />}>
            <Route path="/user-dashboard" element={<UserDashboard />}>
              <Route index element={<GetTextPosts />} />
              <Route path="get-image-posts" element={<GetImagePost />} />
              <Route path="add-image-posts" element={<AddImagePost />} />
              <Route path="add-text-posts" element={<AddTextPost />} />
            </Route>
          </Route>

          {/* Protected Admin Dashboard Routes */}
          <Route path="/admin" element={<Login />} />
          <Route element={<AuthGuard />}>
            <Route path="/admin-dashboard" element={<Home />}>
              <Route index element={<LoginRequests />} />
              <Route path="text-posts" element={<TextPosts />} />
              <Route path="image-posts" element={<ImagePosts />} />
            </Route>
          </Route>

          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
