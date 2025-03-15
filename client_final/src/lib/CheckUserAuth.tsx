import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import API from "./baseUrl";

const AuthGuardUser = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("tokenUser");
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        const response = await API.post("/authenticate-user", { }, {
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

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AuthGuardUser;
