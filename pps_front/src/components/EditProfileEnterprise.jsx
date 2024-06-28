import * as React from "react";
import { useState } from "react";
import { TextField, Grid, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { toast } from "react-toastify";

const EditProfileEnterprise = ({ open, handleClose }) => {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [cuit, setCuit] = useState("");
  const [legalAbout, setLegalAbout] = useState("");
  const [webPage, setWebPage] = useState("");
  const [city, setCity] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [enterpriseType, setEnterpriseType] = useState("");
  const [employeesQuantity, setEmployeesQuantity] = useState("");
  const [about, setAbout]= useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cuitRegex = /^\d{11}$/;

    if (contactName.trim() === "") {
      toast.error("El nombre de contacto no puede estar vacío");
      return;
    }

    if (contactEmail.trim() === "") {
      toast.error("El correo electrónico de contacto no puede estar vacío");
      return;
    } else if (!emailRegex.test(contactEmail)) {
      toast.error("El correo electrónico de contacto no tiene un formato válido");
      return;
    }

    if (cuit.trim() === "") {
      toast.error("El CUIT no puede estar vacío");
      return;
    } else if (!cuitRegex.test(cuit)) {
      toast.error("El CUIT debe contener exactamente 11 dígitos numéricos");
      return;
    }

    if (legalAbout.trim() === "") {
      toast.error("La descripción legal no puede estar vacía");
      return;
    }

    if (webPage.trim() === "") {
      toast.error("La página web no puede estar vacía");
      return;
    }

    if (city.trim() === "") {
      toast.error("La ciudad no puede estar vacía");
      return;
    }

    if (contactPhone.trim() === "") {
      toast.error("El teléfono de contacto no puede estar vacío");
      return;
    }

    if (enterpriseType.trim() === "") {
      toast.error("Debe seleccionar un tipo de empresa");
      return;
    }

    if (employeesQuantity.trim() === "") {
      toast.error("La cantidad de empleados no puede estar vacía");
      return;
    } else if (!/^\d+$/.test(employeesQuantity)) {
      toast.error("La cantidad de empleados debe ser un valor numérico");
      return;
    }
    if (about.trim() === "") {
        toast.error("La descripción de la empresa no puede estar vacía");
        return;
      }

    console.log("Datos del formulario:");
    console.log("Nombre de Contacto:", contactName);
    console.log("Correo Electrónico de Contacto:", contactEmail);
    console.log("CUIT:", cuit);
    console.log("Descripción Legal:", legalAbout);
    console.log("Página Web:", webPage);
    console.log("Ciudad:", city);
    console.log("Teléfono de Contacto:", contactPhone);
    console.log("Tipo de Empresa:", enterpriseType);
    console.log("Cantidad de Empleados:", employeesQuantity);
    console.log("acerca de nosotros:", about);

    // backend

    toast.success("Formulario enviado correctamente");
    handleClose(); // Cerrar el diálogo después de enviar correctamente
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title" style={{ textAlign: "center", backgroundColor: "#EEEEEE" }}>
        Formulario de Empresa
      </DialogTitle>

      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="Nombre de Contacto"
                fullWidth
                required
                margin="normal"
                color="secondary"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="Correo Electrónico de Contacto"
                fullWidth
                required
                margin="normal"
                color="secondary"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="CUIT"
                fullWidth
                required
                margin="normal"
                color="secondary"
                value={cuit}
                onChange={(e) => setCuit(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="Descripción Legal"
                fullWidth
                required
                margin="normal"
                color="secondary"
                value={legalAbout}
                onChange={(e) => setLegalAbout(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="Página Web"
                fullWidth
                required
                margin="normal"
                color="secondary"
                value={webPage}
                onChange={(e) => setWebPage(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="Ciudad"
                fullWidth
                required
                margin="normal"
                color="secondary"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="Teléfono de Contacto"
                fullWidth
                required
                margin="normal"
                color="secondary"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="Tipo de Empresa"
                fullWidth
                required
                
                margin="normal"
                color="secondary"
                value={enterpriseType}
                onChange={(e) => setEnterpriseType(e.target.value)}
              >
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="Cantidad de Empleados"
                fullWidth
                required
                margin="normal"
                color="secondary"
                value={employeesQuantity}
                onChange={(e) => setEmployeesQuantity(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Descripción de la Empresa"
                fullWidth
                required
                multiline
                rows={4}
                margin="normal"
                color="secondary"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancelar
        </Button>
        <Button type="submit" onClick={handleSubmit} color="secondary">
          Enviar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProfileEnterprise;
