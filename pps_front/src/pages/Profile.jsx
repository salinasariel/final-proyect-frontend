import Header from "../components/Header";
import * as React from "react";
import { Avatar, Typography, Fab, Divider, Link, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import { useState } from "react";

const Profile = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const [File, setFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Aquí puedes realizar cualquier validación necesaria para el archivo
    setFile(file);
  };

  const handleUpload = () => {
    // Aquí puedes enviar el archivo a tu servidor o realizar cualquier otra acción
    console.log("Archivo subido:", File);
  };

  return (
    <div>
      <Header />
      <div className=" flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="scale-up-center bg-white shadow-md rounded-lg p-8 max-w-3xl mx-auto relative">
          {/* Contenedor flex para la imagen y el texto */}
          <div className="flex items-center relative">
            {/* boton edit */}
            <Fab
              onClick={handleOpen}
              color="secondary"
              aria-label="edit"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                marginTop: "0.25rem",
                marginRight: "0.25rem",
                width: "32px",
                height: "32px",
                minWidth: "32px",
                minHeight: "32px",
              }}
            >
              <EditIcon />
            </Fab>

            {/* Div de la imagen */}
            <div className="relative">
              <Avatar
                alt="Julian Vazquez"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 100, height: 100 }}
              />
              <Fab
                color="secondary"
                aria-label="add"
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  marginTop: "0.25rem",
                  marginRight: "0.25rem",
                  width: "32px",
                  height: "32px",
                  minWidth: "32px",
                  minHeight: "32px",
                }}
              >
                <AddIcon />
              </Fab>
            </div>
            {/* Div nombre de usuario*/}
            <div className="ml-4 ">
              <Typography variant="h3" fontWeight="bold" align="center">
                Julian Vazquez
              </Typography>

              <ul>
                <li>
                  <MailOutlineOutlinedIcon></MailOutlineOutlinedIcon>
                  <span>julianvazquez12@gmail.com</span>
                </li>
                <li>
                  <PhoneIphoneOutlinedIcon></PhoneIphoneOutlinedIcon>
                  <span>+54-2474568140</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Tercer div con otros datos */}
          <div className="mt-4">
            {/* aca se agrega mas elementos con los datos adicionales */}
            <Typography variant="h5" fontWeight="bold">
              Acerca de mí...
            </Typography>

            <a>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum repudiandae voluptatum alias. Necessitatibus, quia? Similique ducimus sunt exercitationem ullam. Recusandae quisquam accusantium doloremque alias perspiciatis asperiores consequatur quam quo distinctio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusantium tempora veniam, consequatur dolore ducimus voluptatibus velit reiciendis ex corporis deleniti? Aspernatur similique atque maiores illo. Ipsa tenetur nihil nam!
            </a>
          </div>

          <div>
            <Typography variant="h5" fontWeight="bold">
              Experiencias profesionales
            </Typography>
            <Typography variant="subtitle1" fontWeight="bold">
              escuela
            </Typography>
            <Typography variant="body1">trabaje en la escuela</Typography>
            <Divider />
            <Typography variant="subtitle1" fontWeight="bold">
              facultad
            </Typography>
            <Typography variant="body1">trabaje en la facultad</Typography>
          </div>

          <div>
            <Typography variant="h5" fontWeight="bold">
              Aptitudes
            </Typography>
          </div>

          <div>
            <Typography variant="h5" fontWeight="bold">
              Redes
            </Typography>
            <Link
              href="https://www.instagram.com/tu_usuario/"
              target="_blank"
              rel="noopener"
              color="secondary"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
      {/* ventana de edición */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle
          id="form-dialog-title"
          style={{ textAlign: "center", backgroundColor: "#EEEEEE" }}
        >
          Editar Información
        </DialogTitle>
        <DialogContent>
          <form>
            {/* nombre */}
            <Typography variant="subtitle1" style={{ paddingTop: "5px" }}>
              Nombre
            </Typography>
            <TextField
              id="outlined-required"
              label="Nombre"
              required
              fullWidth
              variant="outlined"
              color="secondary"
            />
            {/* apellido */}
            <Typography variant="subtitle1" style={{ paddingTop: "5px" }}>
              Apellido
            </Typography>
            <TextField
              id="outlined-required"
              label="Apellido"
              required
              fullWidth
              variant="outlined"
            />
            {/* fecha de nacimiento */}
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
            />
            {/*tipo y numero de doc */}
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={4}>
                {/* Primer campo de entrada */}
                <TextField
                  fullWidth
                  id="tipo-documento"
                  label="Tipo"
                  variant="outlined"
                  required
                  select
                >
                  {/*aca se agrega las opciones para el tipo de documento
                  {LISTA.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}*/}
                </TextField>
              </Grid>
              <Grid item xs={8}>
                {/* Segundo campo de entrada */}
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
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Estado Civil
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value=""
                  control={<Radio />}
                  label="Soltero"
                />
                <FormControlLabel value="" control={<Radio />} label="Casado" />
                <FormControlLabel
                  value=""
                  control={<Radio />}
                  label="Divorciado"
                />
                <FormControlLabel value="" control={<Radio />} label="viudo" />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Genero
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Femenino"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Masculino"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Otro"
                />
              </RadioGroup>
            </FormControl>
            {/* celular */}
            <TextField
              variant="outlined"
              label="Número de celular"
              fullWidth
              required
              margin="normal"
            />
            {/* telefono */}
            <TextField
              variant="outlined"
              label="Número de telefono (opcional)"
              fullWidth
              margin="normal"
            />
            {/* domicilio familiar */}
            <Typography variant="subtitle1" gutterBottom>
              Domicilio familiar
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                {/* Calle */}
                <TextField fullWidth label="Calle" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* Número */}
                <TextField fullWidth label="Número" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* Letra */}
                <TextField fullWidth label="Letra" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* Torre */}
                <TextField fullWidth label="Torre" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* Piso */}
                <TextField fullWidth label="Piso" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* Dto */}
                <TextField fullWidth label="Dto" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* Localidad */}
                <TextField fullWidth label="Localidad" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* Provincia */}
                <TextField fullWidth label="Provincia" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* País */}
                <TextField fullWidth label="País" variant="outlined" />
              </Grid>
            </Grid>
            {/* domicilio particular */}
            <Typography variant="subtitle1" gutterBottom>
              Domicilio particular
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Calle" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Número" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Letra" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Torre" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Piso" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Dto" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Localidad" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Provincia" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="País" variant="outlined" />
              </Grid>
            </Grid>
            {/*Curriculum Vitae*/}
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
              value={File ? File.name : ""}
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
                disabled={!File}
              >
                Subir CV
              </Button>
            </label>
            {/*Titulo Secundario*/}
            <Typography variant="subtitle1">Titulo Secundario</Typography>
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
              value={File ? File.name : ""}
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
                disabled={!File}
              >
                Subir Título Secundario
              </Button>
            </label>
            {/*Otros Titulos*/}
            <Typography variant="subtitle1">Otros Titulos</Typography>
            <input
              accept=".pdf,.doc,.docx"
              style={{ display: "none" }}
              id="Other-file"
              type="file"
              onChange={handleFileChange}
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              disabled
              value={File ? File.name : ""}
              label="Nombre del archivo"
            />
            <label htmlFor="Other-file">
              <Button variant="outlined" component="span">
                Adjuntar Título
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpload}
                disabled={!File}
              >
                Subir Título
              </Button>
            </label>
            {/* DATOS DE LA CARRERA*/}
            <Typography variant="subtitle1">Datos de la carrera</Typography>
            <TextField
              label="Carrera"
              value=""
              /*onChange={(e) => setCareer(e.target.value)}*/
              fullWidth
              required
            />
            <TextField label="Legajo" value="" fullWidth required />
            <TextField
              label="Cantidad de materias aprobadas"
              type="number"
              value=""
              fullWidth
              required
            />
            <TextField
              label="Promedio con aplazos"
              type="number"
              value=""
              fullWidth
              required
            />
            <TextField
              label="Promedio sin aplazos"
              type="number"
              value=""
              fullWidth
              required
            />
            {/*
            <FormControl fullWidth>
              <FormLabel>Año en que cursa</FormLabel>
              <Select
                value={yearOfStudy}
                onChange={(e) => setYearOfStudy(e.target.value)}
                required
              >
                <MenuItem value="1">1er año</MenuItem>
                <MenuItem value="2">2do año</MenuItem>
                <MenuItem value="3">3er año</MenuItem>
                
              </Select>
            </FormControl>
            */}
            {/*
      <FormControl fullWidth>
        <FormLabel>Turno</FormLabel>
        <RadioGroup value={shift} onChange={(e) => setShift(e.target.value)} row>
          <FormControlLabel value="morning" control={<Radio />} label="Mañana" />
          <FormControlLabel value="evening" control={<Radio />} label="Tarde" />
          <FormControlLabel value="night" control={<Radio />} label="Noche" />
        </RadioGroup>
      </FormControl>*/}
            <TextField label="Plan" value="" fullWidth required />
            <TextField
              label="Año de ingreso"
              type="number"
              value=""
              fullWidth
              required
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
      
    </div>
  );
};

export default Profile;
