import { createContext, useState, useEffect } from "react";
import api from "./api";
import { toast } from "react-toastify";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = async (mail, password) => {
    try {
      const response = await api.post("/Auth/login", { mail, password });
      const token = response.data;
      if (token) {
        localStorage.setItem("token", token);
        console.log(token);
        setIsLoggedIn(true);
        toast.success("Ingresado", {
          position: "bottom-left",
        });
      }
      return { success: true };
    } catch (error) {
      toast.error("Credenciales incorrectas", {
        position: "bottom-left",
      });
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.setItem("theme", "light")
    setIsLoggedIn(false);
    document.body.classList.remove("dark");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
