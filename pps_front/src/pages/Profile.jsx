import { useContext, useState, useEffect } from "react";
import ProfileData from "../components/ProfileData";
import api from "../api";
import useTokenData from "../hooks/useTokenData";
import { AuthContext } from "../AuthProvider";
import ProfileEnterpriseData from "../components/ProfileEnterpriseData";
import Footer from "../components/Footer";

const Profile = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { tokenData } = useTokenData();
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (tokenData && tokenData.rol) {
        const userRol = tokenData.rol;
        setUserInfo(userRol);
      } else {
        setUserInfo(null);
      }
    };

    fetchUserInfo();
  }, [tokenData]);

  const userIdentity = () => {
    if (userInfo === "Student") {
      return <ProfileData />;
    } else if (userInfo === "Enterprise") {
      return <ProfileEnterpriseData />;
    } else if (userInfo === "Admin") {
      return <h1>Perfil de administrador</h1>;
    } else {
      return <h1>Error al detectar rol, avisar a programacion</h1>;
    }
  };

  return (
    <div>
      {userIdentity()} <Footer youarenterprise={true} moreinfo={true} />
    </div>
  );
};

export default Profile;
