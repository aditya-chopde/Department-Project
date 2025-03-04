import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from './pages/Login';
import Signup from './pages/Signup';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={ <Signup />} />
        <Route path="/dashboard" element={ <UserDashboard />} />
        <Route path="/admin-dashboard" element={ <AdminDashboard />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
