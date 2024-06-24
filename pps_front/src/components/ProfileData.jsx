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

import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

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
      } else {
        console.error("tokenData o tokenData.userid es nulo.");
      }
    } catch (error) {
      console.error("Error fetching offers:", error);
    }
  };

  const gotopdf = () => {
    navigate("/downloadcv", {
      state: { userInfo },
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
    <div className="min-h-screen">
      <Header />

      {showChangePicture && <ChangeUserPicture />}

      <div className="container mx-auto py-8 ">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4 ">
          <div className="col-span-4 sm:col-span-3">
            <div className="  shadow rounded-lg p-6 dark:bg-stone-900 bg-[#EEEEEE]">
              <div className="flex flex-col items-center dark:text-white">
                <img
                  alt="User photo"
                  src={`data:image/jpeg;base64,${coursesFile}`}
                  className=" rounded-xl"
                ></img>

                <h1 className="text-xl font-bold my-2 ">
                  {userInfo.name} - {userInfo.fileNumber}
                </h1>
                <p className="text-gray-700 dark:text-white">
                  {userInfo.tittle}
                </p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center max-h-5">
                  <button
                    href="#"
                    className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold hover:text-[#00ADB5]   // dark:bg-neutral-800  dark:text-gray-50 dark:border-0 dark:hover:text-[#00ADB5] "
                    onClick={handleOpen}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={handleAddClick}
                    className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold hover:text-[#00ADB5]   // dark:bg-neutral-800  dark:text-gray-50 dark:border-0 dark:hover:text-[#00ADB5] "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={gotopdf}
                    className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold hover:text-[#00ADB5]   // dark:bg-neutral-800  dark:text-gray-50 dark:border-0 dark:hover:text-[#00ADB5] "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-[#EEEEEE] shadow rounded-lg p-6 dark:bg-stone-900 dark:text-white">
              <h2 className="text-xl font-bold mb-4">Acerca de mi</h2>
              <p className="text-gray-700 dark:text-neutral-400">
                {userInfo.about}
              </p>

              <h2 className="text-xl font-bold mt-6 mb-4 flex gap-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                  <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
                </svg>
                Email de contacto
              </h2>

              <p className="dark:text-neutral-400">{userInfo.email}</p>

              <h2 className="text-xl font-bold mt-6 mb-4 flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                  <path
                    fillRule="evenodd"
                    d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
                    clipRule="evenodd"
                  />
                </svg>
                Telefono de contacto
              </h2>

              <p className="dark:text-neutral-400">{userInfo.phoneNumber}</p>

              <h2 className="text-xl font-bold mt-6 mb-4 flex gap-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
                Direccion
              </h2>

              <div className="flex flex-wrap">
                <p className="dark:text-neutral-400">
                  {userInfo.address} - {userInfo.city}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle
          id="form-dialog-title"
          style={{ textAlign: "center", backgroundColor: "#EEEEEE" }}
        >
          Editar perfil
        </DialogTitle>
        <button onClick={handleOpen}>Editar foto de perfil</button>

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
                <TextField
                  fullWidth
                  id="tipo-documento"
                  label="Tipo"
                  variant="outlined"
                  color="secondary"
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
                <TextField
                  fullWidth
                  id="numero-documento"
                  label="Número de Documento"
                  required
                  variant="outlined"
                  color="secondary"
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
            />
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                color="secondary"
              >
                Estado Civil
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value=""
                  control={<Radio color="secondary" />}
                  label="Soltero"
                />
                <FormControlLabel
                  value=""
                  control={<Radio color="secondary" />}
                  label="Casado"
                />
                <FormControlLabel
                  value=""
                  control={<Radio color="secondary" />}
                  label="Divorciado"
                />
                <FormControlLabel
                  value=""
                  control={<Radio color="secondary" />}
                  label="viudo"
                />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label"
                color="secondary"
              >
                Genero
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
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
            />
            <TextField
              variant="outlined"
              label="Teléfono"
              fullWidth
              required
              margin="normal"
              color="secondary"
            />
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

export default ProfileData;
