import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import API from "./baseUrl";

const AuthGuard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        const response = await API.post("/authenticate-admin", { }, {
            headers: { Authorization: `Bearer ${token}` }, 
          });
        setIsAuthenticated(response.data.success);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; 
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin" replace />;
};

export default AuthGuard;
