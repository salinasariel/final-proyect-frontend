import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const useTokenData = () => {
  const [tokenData, setTokenData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Debe iniciar sesion");
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      setTokenData(decodedToken);
    } catch (err) {
      setError("El token no es válido");
    }
  }, []);

  return { tokenData, error };
};

export default useTokenData;
