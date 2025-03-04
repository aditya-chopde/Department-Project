import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/Login";
import Signup from "./pages/Signup";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./components/admin_dashboard/AdminLogin";
import AdminPastPostsPage from "./pages/AdminPastPostsPage";
import AddPostPage from "./pages/AddPostPage";
import AddImagePage from "./pages/AddImagePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Landing Page Routes  */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Signup />} />

          {/* User Dashboard Routes  */}
          <Route path="/dashboard" element={<UserDashboard />}/>
          <Route path="/dashboard/add-post" element={<AddPostPage />}/>
          <Route path="/dashboard/add-image" element={<AddImagePage />}/>

          {/* Admin Dashboard Routes  */}
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />}/>
          <Route path="/admin-dashboard/past-posts" element={<AdminPastPostsPage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
