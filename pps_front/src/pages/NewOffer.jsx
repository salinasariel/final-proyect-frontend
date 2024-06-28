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
} from "@mui/material";

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
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-[50%]">
          <form onSubmit={handleSubmit}>
            <Typography variant="h6" style={{ paddingTop: "5px" }}>
              <b>Crear nueva oferta</b>
            </Typography>
            <TextField
              id="title"
              margin="normal"
              label="Título"
              required
              fullWidth
              variant="outlined"
              color="secondary"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              id="about"
              margin="normal"
              label="Descripción"
              required
              fullWidth
              variant="outlined"
              color="secondary"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
            <TextField
              id="location"
              margin="normal"
              label="Ubicación de la oferta"
              required
              fullWidth
              variant="outlined"
              color="secondary"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <TextField
              id="sector"
              variant="outlined"
              label="Sector de la compañía"
              fullWidth
              required
              margin="normal"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
            />
            <TextField
              id="skillsRequired"
              variant="outlined"
              label="Habilidades requeridas"
              fullWidth
              required
              margin="normal"
              value={skillsRequired}
              onChange={(e) => setSkillsRequired(e.target.value)}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="immediateIncorporation-label">
                ¿Incorporación inmediata?
              </InputLabel>
              <Select
                labelId="immediateIncorporation-label"
                id="immediateIncorporation"
                value={immediateIncorporation}
                onChange={(e) => setImmediateIncorporation(e.target.value)}
                required
              >
                <MenuItem value="true">Sí</MenuItem>
                <MenuItem value="false">No</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel id="isIntern-label">¿Es intern?</InputLabel>
              <Select
                labelId="isIntern-label"
                id="isIntern"
                value={isIntern}
                onChange={(e) => setIsIntern(e.target.value)}
                required
              >
                <MenuItem value="true">Sí</MenuItem>
                <MenuItem value="false">No</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="careersInterested"
              variant="outlined"
              label="Carreras interesadas"
              fullWidth
              required
              margin="normal"
              value={careersInterested}
              onChange={(e) => setCareersInterested(e.target.value)}
            />
            <TextField
              id="internTime"
              variant="outlined"
              label="Tiempo de internado"
              fullWidth
              required
              margin="normal"
              value={internTime}
              onChange={(e) => setInternTime(e.target.value)}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="isPaid-label">¿Es pago?</InputLabel>
              <Select
                labelId="isPaid-label"
                id="isPaid"
                value={isPaid}
                onChange={(e) => setIsPaid(e.target.value)}
                required
              >
                <MenuItem value="true">Sí</MenuItem>
                <MenuItem value="false">No</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
              Crear Oferta
            </Button>
          </form>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer youarenterprise={true} moreinfo={true} />
    </>
  );
};

export default NewOffer;
