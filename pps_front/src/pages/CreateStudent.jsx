import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
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
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-[50%]">
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
              id="email"
              variant="outlined"
              label="Email"
              fullWidth
              required
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold   // dark:bg-neutral-800  dark:text-gray-50 dark:border-0 "
            >
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
      <Footer youarenterprise={true} moreinfo={true} />
    </>
  );
};

export default CreateStudent;
