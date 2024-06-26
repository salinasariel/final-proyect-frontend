import { useState } from "react";
import { TextField, Button, Typography, Box, Paper, Container } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import api from "../api";

import { toast } from "react-toastify";

const CreateStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fileNumber, setFileNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fileNumber.match(/^\d{5}$/)) {
      toast.error("El número de legajo debe tener exactamente 5 caracteres numéricos.");
      return;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$/;
    if (!password.match(passwordPattern)) {
      toast.error(
        "La contraseña debe tener al menos 7 caracteres, 1 letra mayúscula, 1 letra minúscula y 1 número."
      );
      return;
    }

    const studentData = {
      email: email,
      password: password,
      fileNumber: fileNumber,
      name: name,
      dni: 0,
      rol: 0,
      userState: true,
    };

    try {
      const response = await api.post("User/register_student", studentData);
      toast.success(`Estudiante creado correctamente con ID: ${response.data}`);
    } catch (error) {
      console.error("Error creando estudiante:", error);
      toast.error(`Error creando estudiante: ${error.message}`);
    }
  };

  return (
    <>
      <Header />
      <Container component="main" maxWidth="sm">
        <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
          <Typography variant="h5" component="h1" align="center" gutterBottom>
            Solicitud de Alta Estudiantes
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              id="fileNumber"
              label="Legajo"
              
              margin="normal"
              required
              fullWidth
              variant="outlined"
              color="secondary"
              value={fileNumber}
              onChange={(e) => setFileNumber(e.target.value)}
              
            />
            <TextField
              id="name"
              label="Nombre"
              
              margin="normal"
              required
              fullWidth
              variant="outlined"
              color="secondary"
              value={name}
              onChange={(e) => setName(e.target.value)}
              inputProps={{ minLength: 3, maxLength: 30 }}
            />
            <TextField
              id="password"
              label="Contraseña"
              type="password"
              
              margin="normal"
              required
              fullWidth
              variant="outlined"
              color="secondary"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              inputProps={{ minLength: 7 }}
            />
            <TextField
              id="email"
              label="Email"
              type="email"
              
              margin="normal"
              required
              fullWidth
              variant="outlined"
              color="secondary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Box textAlign="center" mt={2}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="large"
              >
                Enviar Solicitud
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
      <Footer youarenterprise={true} moreinfo={true} />
    </>
  );
};

export default CreateStudent;
