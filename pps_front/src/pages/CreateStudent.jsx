import React, { useState } from 'react';
import { TextField, Button, Typography } from "@mui/material";
import Header from '../components/Header';
import Footer from "../components/Footer";
import api from '../api';

import { toast } from "react-toastify";

const CreateStudent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fileNumber, setFileNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = {

      name: name,
      email: email,
      password: password,
      rol: 0,
      userState: true,
      fileNumber: parseInt(fileNumber, 10),
      dni: 0,
      cuil: 0,
      phoneNumber: "Sin completar",
      city: "Sin completar",
      address: "Sin completar",
      birthDate: "2024-06-08T17:29:27.409Z",
      sex: "Sin completar",
      civilStatus: "Sin completar",
      tittle: "Sin completar",
      careerAge: 0,
      englishLevel: 0,
      cvFile: "Sin completar",
      highSchoolFile: "Sin completar",
      coursesFile: "Sin completar"
    };

    try {
      const response = await api.post("/User/CreateStudents", studentData);
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
              <b>Solicitud de alta estudiantes</b>
            </Typography>
            <TextField
              id="fileNumber"
              margin="normal"
              label="Legajo"
              required
              fullWidth
              variant="outlined"
              color="secondary"
              value={fileNumber}
              onChange={(e) => setFileNumber(e.target.value)}
            />
            <TextField
              id="name"
              margin="normal"
              label="Nombre"
              required
              fullWidth
              variant="outlined"
              color="secondary"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <TextField
              id='email'
              variant="outlined"
              label="Email"
              fullWidth
              required
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

export default CreateStudent;
