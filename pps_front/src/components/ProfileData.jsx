import Header from "../components/Header";
import * as React from "react";
import api from "../api";
import useTokenData from "../hooks/useTokenData";
import ChangeUserPicture from "./ChangeUserPicture";
import { AuthContext } from "../AuthProvider";
import {
  Avatar,
  Typography,
  Fab,
  Divider,
  Link,
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
  
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const ProfileData = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [open, setOpen] = React.useState(false);
  const [userInfo, setUserInfo] = useState("");
  const [coursesFile, setCoursesFile] = useState("");
  const { tokenData } = useTokenData();
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const showDataById = async () => {
    try {
      if (tokenData && tokenData.userid) {
        const userIdInt = await parseInt(tokenData.userid, 10);
        console.log(userIdInt);
        const response = await api.get(`/User/GetStudentsById/${userIdInt}`);
        setCoursesFile(response.data.profilePhoto);
        setUserInfo(response.data);
        console.log("traigo fotito check");
      } else {
        console.error("tokenData o tokenData.userid es nulo.");
      }
    } catch (error) {
      console.error("Error fetching offers:", error);
    }
  };

  
  const gotopdf = () =>{
    navigate('/downloadcv')
  }
  useEffect(() => {
    if (tokenData) {
      showDataById();
    }
  }, [tokenData]);

  const [File, setFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleUpload = () => {
    console.log("Archivo subido:", File);
  };

  const editImage = () => {};

  const [showChangePicture, setShowChangePicture] = useState(false);

  const handleAddClick = () => {
    setShowChangePicture(true);
  };

  return (
    <div>
      <Header />
      {showChangePicture && <ChangeUserPicture />}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="scale-up-center bg-white shadow-md rounded-lg p-8 max-w-3xl mx-auto">
          <div className="flex items-center relative">
            <Fab
              onClick={gotopdf}
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
           
              <FileDownloadIcon />
            </Fab>
            <Fab
              onClick={handleOpen}
              color="secondary"
              aria-label="edit"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                marginTop: "0.25rem",
                marginRight: "3.2rem",
                width: "32px",
                height: "32px",
                minWidth: "32px",
                minHeight: "32px",
              }}
            >
           
              <EditIcon />
            </Fab>

            <div className="relative">
              <Avatar
                alt="User photo"
                src={`data:image/jpeg;base64,${coursesFile}`}
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
                onClick={handleAddClick}
              >
                <AddIcon />
              </Fab>
            </div>
            <div className="ml-4">
              <Typography variant="h3" fontWeight="bold" align="center">
                {userInfo.name}
              </Typography>

              <ul>
                <li>
                  <MailOutlineOutlinedIcon />
                  <span>{userInfo.email}</span>
                </li>
                <li>
                  <PhoneIphoneOutlinedIcon />
                  <span>{userInfo.PhoneNumber}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <Typography variant="h5" fontWeight="bold">
              Acerca de mí...
            </Typography>
            <a>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              repudiandae voluptatum alias. Necessitatibus, quia? Similique
              ducimus sunt exercitationem ullam. Recusandae quisquam accusantium
              doloremque alias perspiciatis asperiores consequatur quam quo
              distinctio! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ipsum accusantium tempora veniam, consequatur dolore ducimus
              voluptatibus velit reiciendis ex corporis deleniti? Aspernatur
              similique atque mayores illo. Ipsa tenetur nihil nam!
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
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" style={{ textAlign: "center", backgroundColor: "#EEEEEE" }}>
          Editar Información
        </DialogTitle>
        <DialogContent>
          <form>
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
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={4}>
                <TextField fullWidth id="tipo-documento" label="Tipo" variant="outlined" required select>
                  {/*aca se agrega las opciones para el tipo de documento
                  {LISTA.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}*/}
                </TextField>
              </Grid>
              <Grid item xs={8}>
                <TextField fullWidth id="numero-documento" label="Número de Documento" required variant="outlined" />
              </Grid>
            </Grid>
            <TextField variant="outlined" label="CUIL o CUIT" fullWidth required margin="normal" />
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Estado Civil</FormLabel>
              <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                <FormControlLabel value="" control={<Radio />} label="Soltero" />
                <FormControlLabel value="" control={<Radio />} label="Casado" />
                <FormControlLabel value="" control={<Radio />} label="Divorciado" />
                <FormControlLabel value="" control={<Radio />} label="viudo" />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Genero</FormLabel>
              <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />
                <FormControlLabel value="Femenino" control={<Radio />} label="Femenino" />
                <FormControlLabel value="Otro" control={<Radio />} label="Otro" />
              </RadioGroup>
            </FormControl>
            <TextField variant="outlined" label="Correo Electrónico" fullWidth required margin="normal" />
            <TextField variant="outlined" label="Teléfono" fullWidth required margin="normal" />
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

export default ProfileData;
