import * as React from "react";
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  MenuItem,
} from "@mui/material";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const LISTA = [
  { value: "dni", label: "DNI" },
  { value: "pasaporte", label: "Pasaporte" },
  { value: "cedula", label: "Cédula de identidad" },
  { value: "Libreta Civica", label: "LC" },
];

const EditProfileStudent = ({ open, handleClose, userId }) => {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [cuil, setCuil] = useState("");
  const [civilStatus, setCivilStatus] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [englishLevel, setEnglishLevel] = useState("");
  const [tittle, setTittle] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");

  useEffect(() => {
    if (open) {
      fetch(`https://localhost:7047/api/User/GetStudentsById/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setName(data.name);
          setBirthDate(data.birthDate);
          setDocumentType(data.documentType);
          setDocumentNumber(data.fileNumber);
          setCuil(data.cuil);
          setCivilStatus(data.civilStatus);
          setGender(data.sex);
          setEmail(data.email);
          setPhone(data.phoneNumber);
          setAddress(data.address);
          setCity(data.city);
          setEnglishLevel(data.englishLevel);
          setTittle(data.tittle);
          setExperience(data.experience);
          setEducation(data.education);
        })
        .catch((error) => {
          console.error("Error fetching student data:", error);
          toast.error("Error al obtener los datos del estudiante");
        });
    }
  }, [open, userId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
      toast.error("El nombre no puede estar vacío");
      return;
    }
    if (/\d/.test(name)) {
      toast.error("El nombre no puede contener números");
      return;
    }

    if (birthDate === "") {
      toast.error("La fecha de nacimiento no puede estar vacía");
      return;
    }

    const today = new Date();
    const birthDateObj = new Date(birthDate);
    if (birthDateObj >= today) {
      toast.error("La fecha de nacimiento no puede ser futura");
      return;
    }

    if (documentType === "") {
      toast.error("Debe seleccionar un tipo de documento");
      return;
    }
    if (documentNumber === "") {
      toast.error("El número de documento no puede estar vacío");
      return;
    }
    if (!/^\d+$/.test(documentNumber)) {
      toast.error("El número de documento solo puede contener números");
      return;
    }

    if (cuil === "") {
      toast.error("El CUIL/CUIT no puede estar vacío");
      return;
    }
    if (!/^\d+$/.test(cuil)) {
      toast.error("El número de cuil solo puede contener números");
      return;
    }

    if (civilStatus === "") {
      toast.error("Debe seleccionar un estado civil");
      return;
    }
    if (gender === "") {
      toast.error("Debe seleccionar un género");
      return;
    }
    if (email === "") {
      toast.error("El correo electrónico no puede estar vacío");
      return;
    }
    if (!emailRegex.test(email)) {
      toast.error("El correo electrónico no tiene un formato válido");
      return;
    }
    if (phone === "") {
      toast.error("El teléfono no puede estar vacío");
      return;
    }
    if (!/^\d+$/.test(phone)) {
      toast.error("El número de telefono solo puede contener números");
      return;
    }
    if (address === "") {
      toast.error("La dirección no puede estar vacía");
      return;
    }
    if (city === "") {
      toast.error("La ciudad no puede estar vacía");
      return;
    }

    if (englishLevel === "") {
      toast.error("Debe seleccionar un nivel de inglés");
      return;
    }

    if (tittle === "") {
      toast.error("El campo del titulo no puede estar vacío");
      return;
    }

    if (experience === "") {
      toast.error("El campo de experiencia no puede estar vacío");
      return;
    }

    if (education === "") {
      toast.error("El campo de educación no puede estar vacío");
      return;
    }

    const studentData = {
      name,
      birthDate,
      fileNumber: parseInt(documentNumber, 10),
      dni: parseInt(documentNumber, 10),  // Assuming dni is the same as document number
      cuil: parseInt(cuil, 10),
      phoneNumber: phone,
      city,
      address,
      sex: gender,
      civilStatus,
      tittle,
      education,
      englishLevel: parseInt(englishLevel, 10),
      experience,
    };

    fetch(`https://localhost:7047/api/User/UpdateStudent/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la actualización");
        }
        toast.success("Perfil actualizado correctamente");
        handleClose();
      })
      .catch((error) => {
        console.error("Error actualizando perfil:", error);
        toast.error(`Error actualizando perfil: ${error.message}`);
      });
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle
        id="form-dialog-title"
        style={{ textAlign: "center", backgroundColor: "#EEEEEE" }}
      >
        Editar perfil
      </DialogTitle>

      <DialogContent style={{ paddingTop: "10px" }}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-required"
            label="Nombre y apellido"
            required
            fullWidth
            variant="outlined"
            color="secondary"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            margin="normal"
            id="date"
            label="Fecha de Nacimiento"
            type="date"
            required
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            color="secondary"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="tipo-documento"
                label="Tipo"
                variant="outlined"
                color="secondary"
                required
                select
                value={documentType}
                onChange={(e) => setDocumentType(e.target.value)}
              >
                {LISTA.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={8}>
              <TextField
                fullWidth
                id="numero-documento"
                label="Número de Documento"
                required
                variant="outlined"
                color="secondary"
                value={documentNumber}
                onChange={(e) => setDocumentNumber(e.target.value)}
              />
            </Grid>
          </Grid>
          <TextField
            variant="outlined"
            label="CUIL o CUIT"
            fullWidth
            required
            margin="normal"
            color="secondary"
            value={cuil}
            onChange={(e) => setCuil(e.target.value)}
          />
          <FormControl component="fieldset">
            <FormLabel
              component="legend"
              id="demo-row-radio-buttons-group-label"
              color="secondary"
            >
              Estado Civil
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={civilStatus}
              onChange={(e) => setCivilStatus(e.target.value)}
            >
              <FormControlLabel
                value="Soltero"
                control={<Radio color="secondary" />}
                label="Soltero"
              />
              <FormControlLabel
                value="Casado"
                control={<Radio color="secondary" />}
                label="Casado"
              />
              <FormControlLabel
                value="Divorciado"
                control={<Radio color="secondary" />}
                label="Divorciado"
              />
              <FormControlLabel
                value="Viudo"
                control={<Radio color="secondary" />}
                label="Viudo"
              />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel
              component="legend"
              id="demo-row-radio-buttons-group-label"
              color="secondary"
            >
              Genero
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <FormControlLabel
                value="Masculino"
                control={<Radio color="secondary" />}
                label="Masculino"
              />
              <FormControlLabel
                value="Femenino"
                control={<Radio color="secondary" />}
                label="Femenino"
              />
              <FormControlLabel
                value="Otro"
                control={<Radio color="secondary" />}
                label="Otro"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            variant="outlined"
            label="Correo Electrónico"
            fullWidth
            required
            margin="normal"
            color="secondary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            label="Teléfono"
            fullWidth
            required
            margin="normal"
            color="secondary"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6} style={{ paddingTop: "24px" }}>
              <TextField
                fullWidth
                id="Ciudad"
                label="Ciudad"
                variant="outlined"
                color="secondary"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="Dirección"
                fullWidth
                margin="normal"
                color="secondary"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
          </Grid>
          <TextField
            fullWidth
            id="nivel-ingles"
            label="Nivel de Inglés"
            variant="outlined"
            color="secondary"
            required
            select
            value={englishLevel}
            onChange={(e) => setEnglishLevel(e.target.value)}
          >
            <MenuItem value="1">Básico</MenuItem>
            <MenuItem value="2">Intermedio</MenuItem>
            <MenuItem value="3">Avanzado</MenuItem>
          </TextField>
          <TextField
            variant="outlined"
            label="Titulo (ejemplo: Programador, Analista, etc)"
            fullWidth
            required
            margin="normal"
            color="secondary"
            value={tittle}
            onChange={(e) => setTittle(e.target.value)}
          />
          <TextField
            id="experiencia"
            label="Experiencia"
            fullWidth
            required
            multiline
            rows={4}
            variant="outlined"
            color="secondary"
            margin="normal"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
          <TextField
            id="educacion"
            label="Educación"
            fullWidth
            required
            multiline
            rows={4}
            variant="outlined"
            color="secondary"
            margin="normal"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
        </form>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancelar
        </Button>
        <Button type="submit" onClick={handleSubmit} color="secondary">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProfileStudent;
