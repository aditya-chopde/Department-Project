import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/admin/Login";
import NotFound from "./pages/NotFound";
import Home from "./pages/admin/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>

          {/* Admin Router  */}
          <Route path="/" element={<Login />} />
          <Route path="/admin-dashboard" element={<Home />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
