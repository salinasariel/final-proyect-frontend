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

const ProfileEnterpriseData = () => {
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
        const response = await api.get(`/User/GetEnterpriseById/${userIdInt}`);
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

  
  const gotopdf = () => {
    navigate('/downloadcv', {
      state: { userInfo }
    });
  };

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
        <div className="scale-up-center bg-white shadow-md rounded-lg p-8 max-w-3xl mx-auto relative">
      
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
          <div className="flex items-center relative">

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
                  <span>{userInfo.contactPhone}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            {userInfo.tittle}
          </div>
          <Divider></Divider>
          <div>
          <Typography variant="h5" fontWeight="bold">
              Acerca de la compañia
            </Typography>
            <p>
              {userInfo.about}
            </p>
          </div>
          <div>
            <Typography variant="h8" fontWeight="bold">
              Rubro: {userInfo.enterpriseType}
            </Typography> 
            <Typography variant="subtitle1" fontWeight="bold">
              
              </Typography>
              <Typography variant="h8" fontWeight="bold">
              Cantidad de empleados: {userInfo.employeesQuantity}
            </Typography>
            
            <Typography variant="subtitle1" fontWeight="bold">
              
              </Typography>
              <Typography variant="h8" fontWeight="bold">
              CUIT: {userInfo.cuit}
            </Typography>
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
              href={`${userInfo.webPage}`}
              target="_blank"
              rel="noopener"
              color="secondary"
            >
              Web
            </Link><br></br>
            <Link
              href={`${userInfo.linkedin}`}
              target="_blank"
              rel="noopener"
              color="secondary"
            >
               Linkedin
            </Link>
          </div>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" style={{ textAlign: "center", backgroundColor: "#EEEEEE" }}>
          Editar perfil
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
              color="secondary"
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
            />
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={4}>
                <TextField fullWidth id="tipo-documento" label="Tipo" variant="outlined" color="secondary" required select>
                  {/*aca se agrega las opciones para el tipo de documento
                  {LISTA.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}*/}
                </TextField>
              </Grid>
              <Grid item xs={8}>
                <TextField fullWidth id="numero-documento" label="Número de Documento" required variant="outlined" color="secondary"/>
              </Grid>
            </Grid>
            <TextField variant="outlined" label="CUIL o CUIT" fullWidth required margin="normal" color="secondary"/>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label" color="secondary">Estado Civil</FormLabel>
              <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                <FormControlLabel value="" control={<Radio color="secondary" />} label="Soltero" />
                <FormControlLabel value="" control={<Radio color="secondary"/>} label="Casado" />
                <FormControlLabel value="" control={<Radio color="secondary"/>} label="Divorciado" />
                <FormControlLabel value="" control={<Radio color="secondary"/>} label="viudo" />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label" color="secondary">Genero</FormLabel>
              <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                <FormControlLabel value="Masculino" control={<Radio color="secondary"/>} label="Masculino" />
                <FormControlLabel value="Femenino" control={<Radio color="secondary"/>} label="Femenino" />
                <FormControlLabel value="Otro" control={<Radio color="secondary"/>} label="Otro" />
              </RadioGroup>
            </FormControl>
            <TextField variant="outlined" label="Correo Electrónico" fullWidth required margin="normal" color="secondary"/>
            <TextField variant="outlined" label="Teléfono" fullWidth required margin="normal" color="secondary"/>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="secondary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProfileEnterpriseData;
