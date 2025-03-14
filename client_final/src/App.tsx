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
import AuthGuard from "./lib/CheckAdminAuth";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Public Route (Login Page) */}
          <Route path="/" element={<Login />} />

          {/* Protected Admin Dashboard Routes */}
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
