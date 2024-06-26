import Header from "../components/Header";
import DisplayMyOffersEnterprise from "../components/DisplayMyOffersEnterprise";
import useTokenData from "../hooks/useTokenData";
import { AuthContext } from "../AuthProvider";
import { useContext, useState, useEffect } from "react";
import Footer from "../components/Footer";

const Panel = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { tokenData } = useTokenData();
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userRol = tokenData.rol;
      setUserInfo(userRol);
    };

    fetchUserInfo();
  }, [tokenData]);

  const userIdentity = () => {
    if (userInfo === "Student") {
      return <h1>Perfil de panel de usuario</h1>;
    } else if (userInfo === "Enterprise") {
      return <DisplayMyOffersEnterprise />;
    } else if (userInfo === "Admin") {
      return <h1>Perfil de administrador</h1>;
    } else {
      return <h1>Error al detectar rol, avisar a programacion</h1>;
    }
  };

  return (
    <div className=" min-h-screen">
      <Header />
      {userIdentity()}
      <Footer youarenterprise={true} moreinfo={true} />
    </div>
  );
};

export default Panel;
