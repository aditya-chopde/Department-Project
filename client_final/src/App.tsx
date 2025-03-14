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

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Admin Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/admin-dashboard" element={<Home />}>
            <Route index element={<LoginRequests />} />
            <Route path="text-posts" element={<TextPosts />} />
            <Route path="image-posts" element={<ImagePosts />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
