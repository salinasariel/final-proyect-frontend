import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { toast } from "react-toastify";
import useTokenData from "../hooks/useTokenData";

const ChangeUserPicture = () => {
  const [fileBase64, setFileBase64] = useState("");
  const navigate = useNavigate();
  const { tokenData } = useTokenData();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result.split(",")[1];
      setFileBase64(base64String);
      console.log("Base64 de la imagen:", base64String);
    };
    reader.readAsDataURL(file);
  };

  const goToHome = () => {
    navigate("/home");
  };

  const UpdateProfilePhoto = async () => {
    try {
      if (!fileBase64) {
        toast.error("Debe ingresar una foto")
      } else {

        const userIdInt = parseInt(tokenData.userid, 10);
        const response = await api.put(`User/${userIdInt}/profilePhoto`, {
          profilePhoto: fileBase64,
        });
        console.log("Respuesta de la API:", response.data);
        setTimeout(goToHome, 2000);

      }
      
    } catch (error) {
      console.error("Error al actualizar la foto de perfil");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 rounded-lg p-4 dark:bg-stone-900 dark:text-white">
      <input type="file" onChange={handleFileChange} />
      <button className="bg-black text-white rounded-lg px-4 py-2 mt-4" onClick={UpdateProfilePhoto}>
        Enviar
      </button>
    </div>
  );
};

export default ChangeUserPicture;
