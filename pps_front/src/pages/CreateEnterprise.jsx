import  { useState } from 'react';
import { TextField, Button, Typography } from "@mui/material";
import Header from '../components/Header';
import Footer from "../components/Footer";
import api from '../api';

import { toast } from "react-toastify";

const CreateEnterprise = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [cuitnumber, setcuitNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enterpriseData = {

      email: email,
      password: password,
      cuit: cuitnumber,
      name: name,
      city: city,
      rol: 0,
      userState: true

    };

    try {
      const response = await api.post("/User/CreateEnterprise", enterpriseData);
      toast.success(`Estudiante creado correctamente con ID: ${response.data}`);
    } catch (error) {
      console.error("Error creando estudiante:", error);
      toast.error(`Error creando estudiante: ${error.message}`);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className='max-w-[50%]'>
          <form onSubmit={handleSubmit}>
            <Typography variant="h6" style={{ paddingTop: "5px" }}>
              <b>Solicitud de alta empresas</b>
            </Typography>
            <TextField
              id="fileNumber"
              margin="normal"
              label="CUIT"
              required
              fullWidth
              variant="outlined"
              color="secondary"
              value={cuitnumber}
              onChange={(e) => setcuitNumber(e.target.value)}
            />
            <TextField
              id="name"
              margin="normal"
              label="Nombre Institucional"
              required
              fullWidth
              variant="outlined"
              color="secondary"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="city"
              margin="normal"
              label="Ciudad"
              required
              fullWidth
              variant="outlined"
              color="secondary"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              id='email'
              variant="outlined"
              label="Email de contacto"
              fullWidth
              required
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="password"
              margin="normal"
              label="Contraseña"
              type="password"
              required
              fullWidth
              variant="outlined"
              color="secondary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" variant="contained" color="primary">
              Crear Estudiante
            </Button>
          </form>
        </div>
      </div>
      <Footer youarenterprise={false} />

    </>
  );
};

export default CreateEnterprise;
