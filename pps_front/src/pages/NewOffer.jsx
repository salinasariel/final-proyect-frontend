import DisplayJobOffer from "../components/DisplayJobOffer";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import api from "../api";
import useTokenData from "../hooks/useTokenData";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import {
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
  Box,
  Paper,
  Grid
} from "@mui/material";
import "../Css/customText.css";

const NewOffer = () => {
  const { tokenData } = useTokenData();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [location, setLocation] = useState("");
  const [sector, setSector] = useState("");
  const [skillsRequired, setSkillsRequired] = useState("");
  const [immediateIncorporation, setImmediateIncorporation] = useState("");
  const [isIntern, setIsIntern] = useState("");
  const [careersInterested, setCareersInterested] = useState("");
  const [internTime, setInternTime] = useState("");
  const [isPaid, setIsPaid] = useState("");

  const goToPanel = () => {
    navigate("/panel");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userIdInt = parseInt(tokenData.userid, 10);
    const offerData = {
      offerId: 0,
      userId: userIdInt,
      tittle: title,
      about: about,
      publishedDate: "2024-06-22T15:46:29.994Z",
      finishDate: "2024-06-22T15:46:29.994Z",
      from: "string",
      location: location,
      sector: sector,
      skillsRequired: skillsRequired,
      inmediteIncorporation: immediateIncorporation === "true",
      intern: isIntern === "true",
      careerMinimumAge: 0,
      careersInterested: 0,
      internTime: 0,
      isPaid: isPaid === "true",
      offerState: true,
    };

    try {
      const response = await api.post("/OffersCotroller/NewOffer", offerData);
      toast.success(`Oferta creada correctamente`);
      setTimeout(goToPanel, 1500);
    } catch (error) {
      console.error("error", error);
      toast.error(`Tuvimos un error creando la oferta`);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
          <Paper elevation={3} sx={{ p: 4, maxWidth: 800, width: "100%" }} className=" dark:text-white  dark:bg-neutral-800 ">
            <Typography variant="h5" component="h2" gutterBottom>
              <b>Crear nueva oferta</b>
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="body1">Título</Typography>
                  <TextField
                    id="title"
                    className="dark:bg-neutral-900"
                    required
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    color="secondary"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    InputProps={{
                      className: "text-input", 
                    }}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <Typography variant="body1">Ubicación de la oferta</Typography>
                  <TextField
                    id="location"
                    className="dark:bg-neutral-900"
                    required
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    color="secondary"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    InputProps={{
                      className: "text-input", 
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">Sector de la compañía</Typography>
                  <TextField
                    id="sector"
                    className="dark:bg-neutral-900"
                    required
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    color="secondary"
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    InputProps={{
                      className: "text-input", 
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">Habilidades requeridas</Typography>
                  <TextField
                    id="skillsRequired"
                    className="dark:bg-neutral-900"
                    required
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    color="secondary"
                    value={skillsRequired}
                    onChange={(e) => setSkillsRequired(e.target.value)}
                    InputProps={{
                      className: "text-input", 
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">¿Incorporación inmediata?</Typography>
                  <FormControl fullWidth margin="dense" variant="outlined">
                    <Select
                      id="immediateIncorporation"
                      value={immediateIncorporation}
                      onChange={(e) => setImmediateIncorporation(e.target.value)}
                      required
                      color="secondary"
                      className="text-input dark:text-white dark:bg-neutral-900"
                      MenuProps={{
                        classes: {
                          paper: "select-menu",
                        },
                      }}
                    >
                      <MenuItem value="true" className="menu-item ">Sí</MenuItem>
                      <MenuItem value="false" className="menu-item ">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">¿Es intern?</Typography>
                  <FormControl fullWidth margin="dense" variant="outlined">
                    <Select
                      id="isIntern"
                      value={isIntern}
                      onChange={(e) => setIsIntern(e.target.value)}
                      required
                      color="secondary"
                      className=" text-input dark:text-white dark:bg-neutral-900"
                      MenuProps={{
                        classes: {
                          paper: "select-menu", 
                        },
                      }}
                    >
                      <MenuItem value="true" className="menu-item ">Sí</MenuItem>
                      <MenuItem value="false" className="menu-item ">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">Carreras interesadas</Typography>
                  <TextField
                    id="careersInterested"
                    required
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    value={careersInterested}
                    onChange={(e) => setCareersInterested(e.target.value)}
                    color="secondary"
                      className="text-input dark:text-white dark:bg-neutral-900"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">Tiempo de internado</Typography>
                  <TextField
                    id="internTime"
                    required
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    value={internTime}
                    onChange={(e) => setInternTime(e.target.value)}
                    color="secondary"
                      className="text-input dark:text-white dark:bg-neutral-900"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">¿Es pago?</Typography>
                  <FormControl fullWidth margin="dense" variant="outlined">
                    <Select
                      id="isPaid"
                      value={isPaid}
                      onChange={(e) => setIsPaid(e.target.value)}
                      required
                      color="secondary"
                      className=" text-input dark:text-white dark:bg-neutral-900"
                      MenuProps={{
                        classes: {
                          paper: "select-menu", 
                        },
                      }}
                    >
                      <MenuItem value="true" className="menu-item">Sí</MenuItem>
                      <MenuItem value="false" className="menu-item">No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">Descripción</Typography>
                  <TextField
                    id="about"
                    required
                    fullWidth
                    margin="dense"
                    variant="outlined"
                    color="secondary"
                    multiline
                    rows={4}
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    className=" text-input dark:text-white dark:bg-neutral-900"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box mt={2}>
                    <Button type="submit" variant="contained" color="secondary" fullWidth>
                      Crear Oferta
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Box>
      </Container>
      <Footer youarenterprise={true} moreinfo={true} />
    </>
  );
};

export default NewOffer;
