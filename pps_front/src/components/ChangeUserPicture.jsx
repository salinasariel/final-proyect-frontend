import React, { useState } from "react";
import api from "../api";
import { Base64 } from 'js-base64';

const ChangeUserPicture = ({}) => {
  const [fileBase64, setFileBase64] = useState('');
  const [fileType, setFileType] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileType(file.type); 

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result.split(',')[1];
      setFileBase64(Base64.encode(base64String)); 
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    try {
      const response = await api.post('/YourEndpoint', {
        base64: fileBase64,
        fileType: fileType
      });
      console.log('Respuesta del servidor:', response.data);
    } catch (error) {
      console.error('Error al enviar el archivo:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default ChangeUserPicture;
