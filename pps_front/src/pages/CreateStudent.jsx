import React, { useState } from 'react';
import Footer from "../components/Footer";
import { Avatar, Typography, Fab, Divider, Link, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import Header from '../components/Header';

const CreateStudent = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Upload logic here
    console.log("Uploading file: ", file);
  };

  return (
    <>
    <Header/>
    <div className="flex flex-col items-center justify-center min-h-screen ">
      
      <div className='max-w-[50%]'>
      <form>
        {/* Nombre */}
        <Typography variant="subtitle1" style={{ paddingTop: "5px" }}>
          Nombre
        </Typography>
        <TextField
          id="nombre"
          label="Nombre"
          required
          fullWidth
          variant="outlined"
          color="secondary"
        />

        {/* Apellido */}
        <Typography variant="subtitle1" style={{ paddingTop: "5px" }}>
          Apellido
        </Typography>
        <TextField
          id="apellido"
          label="Apellido"
          required
          fullWidth
          variant="outlined"
        />

        {/* Fecha de Nacimiento */}
        <TextField
          margin="normal"
          id="fecha-nacimiento"
          label="Fecha de Nacimiento"
          type="date"
          required
          fullWidth
          InputLabelProps={{ shrink: true }}
          variant="outlined"
        />

        {/* Tipo y Número de Documento */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={4}>
            <TextField
              fullWidth
              id="tipo-documento"
              label="Tipo"
              variant="outlined"
              required
              select
            >
              {/* Agregar opciones aquí */}
            </TextField>
          </Grid>
          <Grid item xs={8}>
            <TextField
              fullWidth
              id="numero-documento"
              label="Número de Documento"
              required
              variant="outlined"
            />
          </Grid>
        </Grid>

        <TextField
          variant="outlined"
          label="CUIL o CUIT"
          fullWidth
          required
          margin="normal"
        />

        {/* Estado Civil */}
        <FormControl>
          <FormLabel id="estado-civil-label">Estado Civil</FormLabel>
          <RadioGroup
            row
            aria-labelledby="estado-civil-label"
            name="estado-civil"
          >
            <FormControlLabel value="soltero" control={<Radio />} label="Soltero" />
            <FormControlLabel value="casado" control={<Radio />} label="Casado" />
            <FormControlLabel value="divorciado" control={<Radio />} label="Divorciado" />
            <FormControlLabel value="viudo" control={<Radio />} label="Viudo" />
          </RadioGroup>
        </FormControl>

        {/* Género */}
        <FormControl>
          <FormLabel id="genero-label">Género</FormLabel>
          <RadioGroup
            row
            aria-labelledby="genero-label"
            name="genero"
          >
            <FormControlLabel value="female" control={<Radio />} label="Femenino" />
            <FormControlLabel value="male" control={<Radio />} label="Masculino" />
            <FormControlLabel value="other" control={<Radio />} label="Otro" />
          </RadioGroup>
        </FormControl>

        {/* Celular */}
        <TextField
          variant="outlined"
          label="Número de celular"
          fullWidth
          required
          margin="normal"
        />

        {/* Teléfono */}
        <TextField
          variant="outlined"
          label="Número de teléfono (opcional)"
          fullWidth
          margin="normal"
        />

        {/* Domicilio Familiar */}
        <Typography variant="subtitle1" gutterBottom>
          Domicilio Familiar
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Calle" variant="outlined" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Número" variant="outlined" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Letra" variant="outlined" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Torre" variant="outlined" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Piso" variant="outlined" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Dto" variant="outlined" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Localidad" variant="outlined" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Provincia" variant="outlined" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="País" variant="outlined" /></Grid>
        </Grid>

        {/* Domicilio Particular */}
        <Typography variant="subtitle1" gutterBottom>
          Domicilio Particular
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Calle" variant="outlined" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Número" variant="outlined" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Letra" variant="outlined" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Torre" variant="outlined" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Piso" variant="outlined" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Dto" variant="outlined" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Localidad" variant="outlined" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="Provincia" variant="outlined" /></Grid>
          <Grid item xs={12} sm={6}><TextField fullWidth label="País" variant="outlined" /></Grid>
        </Grid>

        {/* Curriculum Vitae */}
        <Typography variant="subtitle1">Curriculum Vitae</Typography>
        <input
          accept=".pdf,.doc,.docx"
          style={{ display: "none" }}
          id="cv-file"
          type="file"
          onChange={handleFileChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          disabled
          value={file ? file.name : ""}
          label="Nombre del archivo"
        />
        <label htmlFor="cv-file">
          <Button variant="outlined" component="span">
            Adjuntar CV
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
            disabled={!file}
          >
            Subir CV
          </Button>
        </label>

        {/* Título Secundario */}
        <Typography variant="subtitle1">Título Secundario</Typography>
        <input
          accept=".pdf,.doc,.docx"
          style={{ display: "none" }}
          id="title-file"
          type="file"
          onChange={handleFileChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          disabled
          value={file ? file.name : ""}
          label="Nombre del archivo"
        />
        <label htmlFor="title-file">
          <Button variant="outlined" component="span">
            Adjuntar Título Secundario
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
            disabled={!file}
          >
            Subir Título Secundario
          </Button>
        </label>

        {/* Otros Títulos */}
        <Typography variant="subtitle1">Otros Títulos</Typography>
        <input
          accept=".pdf,.doc,.docx"
          style={{ display: "none" }}
          id="other-file"
          type="file"
          onChange={handleFileChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          disabled
          value={file ? file.name : ""}
          label="Nombre del archivo"
        />
        <label htmlFor="other-file">
          <Button variant="outlined" component="span">
            Adjuntar Título
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
            disabled={!file}
          >
            Subir Título
          </Button>
        </label>

        {/* Datos de la Carrera */}
        <Typography variant="subtitle1">Datos de la carrera</Typography>
        <TextField label="Carrera" fullWidth required />
        <TextField label="Legajo" fullWidth required />
        <TextField label="Cantidad de materias aprobadas" type="number" fullWidth required />
        <TextField label="Promedio con aplazos" type="number" fullWidth required />
        <TextField label="Promedio sin aplazos" type="number" fullWidth required />
        <TextField label="Plan" fullWidth required />
        <TextField label="Año de ingreso" type="number" fullWidth required />
      </form>
      
      </div>
    </div>
    <Footer youarenterprise={false} />
    </>
    
  );
};

export default CreateStudent;
