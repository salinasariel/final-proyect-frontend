// Login.js
import  { useState, useContext } from "react";
import { AuthContext } from "../AuthProvider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import LoginHeader from "../components/LoginHeader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    /*habria que crear un validor que cuando un email o contraseña no coincida con ninguno en la base de datos te devuelva un mensaje aclaraando la situacion 
    o hacer un validor que si el email ingresado no coincide con la contraseña registrada te tire un mensaje aclarando la situacion.*/
    
    if (!emailRegex.test(email)) {
      toast.error('Por favor ingresa un correo electrónico válido.');
      return;
    }

    
    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$/)) {
      toast.error(
        "La contraseña debe tener al menos 7 caracteres, 1 letra mayúscula, 1 letra minúscula y 1 número."
      );
      return;
    }

    if (!email || !password) {
      toast.error('Por favor completa todos los campos.');
      return;
    }
    const result = await login(email, password);
    if (result.success) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      navigate("/home");
    }
  };
  return (
    
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    > 
    <LoginHeader/>
      <ToastContainer />
      <div style={{ flex: 1 }}>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white shadow-md rounded-lg p-8 max-w-md scale-up-center">
            <h1 className="text-3xl font-bold text-center mb-4">
              Inicio de Sesión
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="email" className="font-semibold">
                  Acceso
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Su email."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="font-semibold">
                  Clave
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Su clave alfanumerica."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition duration-300"
              >
                Iniciar Sesión
              </button>
            </form>
            <p className="text-center mt-4">
              ¿No tiene cuenta de estudiante?{" "}
              <a
                href="/createstudent"
                className="text-blue-500 hover:underline"
              >
                Solicítela
              </a>
              .
            </p>
          </div>
        </div>
        <Footer youarenterprise={true} moreinfo={true} />
      </div>
    </div>
  );
};

export default Login;
