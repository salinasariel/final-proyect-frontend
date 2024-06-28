import { useState, useEffect } from "react";
import api from "../api";
import { toast } from "react-toastify";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const JobOffer = ({
  title,
  description,
  image,
  time,
  id,
  companyName,
  updateExplain,
  updateExplainData,
}) => {
  const [students, setStudents] = useState([]);
  const [enterprises, setEnterprises] = useState([]);
  const [offers, setOffers] = useState([]);
  const [pendingStudents, setPendingStudents] = useState([]);
  const [authorizedStudents, setAuthorizedStudents] = useState([]);
  const [pendingEnterprises, setPendingEnterprise] = useState([]);
  const [authorizedEnterprises, setAuthorizedEnterprise] = useState([]);
  const [pendingOffers, setPendingOffers] = useState([]);
  const [authorizedOffers, setAuthorizedOffers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const showOfferData = async () => {
    try {
      const response = await api.get(
        "/OffersCotroller/GetAllOffersWithEnterprise"
      );
      setOffers(response.data);

      const pending = response.data.filter((offer) => !offer.offerState);
      const authorized = response.data.filter((offer) => offer.offerState);

      setPendingOffers(pending);
      setAuthorizedOffers(authorized);
    } catch (error) {
      console.error("Error obteniendo estudiantes:", error);
    }
  };

  const changeStateOffer = async (offerId) => {
    try {
      const response = await api.post(
        `/OffersCotroller/ChangeStateOffer?ofertaId=${offerId}`
      );
      setOffers(response.data);
      toast.success(`Estado de oferta cambiado correctamente.`);
      showOfferData();
    } catch (error) {
      console.error("Error obteniendo estudiantes:", error);
    }
  };

  const showStudentData = async () => {
    try {
      const response = await api.get("/User/GetAllStudents");
      setStudents(response.data);

      const pending = response.data.filter((student) => !student.userState);
      const authorized = response.data.filter((student) => student.userState);

      setPendingStudents(pending);
      setAuthorizedStudents(authorized);
    } catch (error) {
      console.error("Error obteniendo estudiantes:", error);
    }
  };

  const changeStateStudent = async (studentId) => {
    try {
      const response = await api.put(`/User/ChangeStateStudent/${studentId}`);
      setStudents(response.data);

      toast.success(`Estado de estudiante cambiado correctamente.`);
      showStudentData();
    } catch (error) {
      console.error("Error obteniendo estudiantes:", error);
    }
  };

  const showEnterpriseData = async () => {
    try {
      const response = await api.get("/User/GetAllEnterprises");
      setEnterprises(response.data);

      const pending = response.data.filter(
        (enterprise) => !enterprise.userState
      );
      const authorized = response.data.filter(
        (enterprise) => enterprise.userState
      );

      setPendingEnterprise(pending);
      setAuthorizedEnterprise(authorized);
    } catch (error) {
      console.error("Error obteniendo estudiantes:", error);
    }
  };

  const changeStateEnterprise = async (enterpriseId) => {
    try {
      const response = await api.put(
        `/User/ChangeStateEnterprise/${enterpriseId}`
      );
      setStudents(response.data);

      toast.success(`Estado de empresa cambiado correctamente.`);
      showEnterpriseData();
    } catch (error) {
      console.error("Error obteniendo estudiantes:", error);
    }
  };
  useEffect(() => {
    showStudentData();
    showEnterpriseData();
    showOfferData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPendingOffers = pendingOffers.filter((offer) =>
    offer.tittle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAuthorizedOffers = authorizedOffers.filter((offer) =>
    offer.tittle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPendingEnterprises = pendingEnterprises.filter((enterprise) =>
    enterprise.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAuthorizedEnterprises = authorizedEnterprises.filter(
    (enterprise) =>
      enterprise.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPendingStudents = pendingStudents.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAuthorizedStudents = authorizedStudents.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <>
        <br></br>

        <h1 className="text-2xl font-bold  dark:text-white">Ofertas</h1>

        <TextField
          label="Buscar por nombre"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchTerm}
          onChange={handleSearch}
          className="dark:text-white  dark:bg-gray-700"
        />

        <Accordion className="mb-4 dark:bg-gray-800 dark:text-white">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="dark:text-white" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Ofertas a autorizar</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper} className="dark:bg-gray-900">
              <Table aria-label="simple table">
                <TableHead className="bg-gray-100 dark:bg-gray-700">
                  <TableRow>
                    <TableCell className="dark:text-white">ID</TableCell>
                    <TableCell className="dark:text-white">
                      Nombre de oferta
                    </TableCell>
                    <TableCell className="dark:text-white">
                      Nombre de la empresa
                    </TableCell>
                    <TableCell className="dark:text-white">Activar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredPendingOffers.map((offer, index) => (
                    <TableRow key={index} className="dark:bg-gray-800">
                      <TableCell className="dark:text-white">
                        {offer.offerId}
                      </TableCell>
                      <TableCell className="dark:text-white">
                        {offer.tittle}
                      </TableCell>
                      <TableCell className="dark:text-white">
                        {offer.enterprise.name}
                      </TableCell>
                      <TableCell>
                        <button
                          onClick={() => changeStateOffer(offer.offerId)}
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => changeStateOffer(offer.offerId)}
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="red"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>

        <Accordion className="mb-4 dark:bg-gray-800 dark:text-white">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="dark:text-white" />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Ofertas habilitadas</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper} className="dark:bg-gray-900">
              <Table aria-label="simple table">
                <TableHead className="bg-gray-100 dark:bg-gray-700">
                  <TableRow>
                    <TableCell className="dark:text-white">ID</TableCell>
                    <TableCell className="dark:text-white">
                      Nombre de oferta
                    </TableCell>
                    <TableCell className="dark:text-white">
                      Nombre de la empresa
                    </TableCell>
                    <TableCell className="dark:text-white">
                      Desactivar
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredAuthorizedOffers.map((offer) => (
                    <TableRow key={offer.offerId} className="dark:bg-gray-800">
                      <TableCell className="dark:text-white">
                        {offer.offerId}
                      </TableCell>
                      <TableCell className="dark:text-white">
                        {offer.tittle}
                      </TableCell>
                      <TableCell className="dark:text-white">
                        {offer.enterprise.name}
                      </TableCell>
                      <TableCell>
                        <button
                          onClick={() => changeStateOffer(offer.offerId)}
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                            />
                          </svg>
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </>
      <>
        <br></br>

        <h1 className="text-2xl font-bold  dark:text-white">Estudiantes</h1>

        <TextField
          label="Buscar por nombre"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchTerm}
          onChange={handleSearch}
          className="dark:text-white  dark:bg-gray-700"
        />

        <Accordion className="mb-4 dark:bg-gray-800 dark:text-white">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="dark:text-white" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Alumnos a autorizar</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper} className="dark:bg-gray-900">
              <Table aria-label="simple table">
                <TableHead className="bg-gray-100 dark:bg-gray-700">
                  <TableRow>
                    <TableCell className="dark:text-white">ID</TableCell>
                    <TableCell className="dark:text-white">
                      Nombre del alumno
                    </TableCell>
                    <TableCell className="dark:text-white">Estado</TableCell>
                    <TableCell className="dark:text-white">Activar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredPendingStudents.map((student) => (
                    <TableRow key={student.userId} className="dark:bg-gray-800">
                      <TableCell className="dark:text-white">
                        {student.userId}
                      </TableCell>
                      <TableCell className="dark:text-white">
                        {student.name}
                      </TableCell>
                      <TableCell className="dark:text-white">
                        Pendiente
                      </TableCell>
                      <TableCell>
                        <button
                          onClick={() => changeStateStudent(student.userId)}
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </button>
                        <button className="text-blue-600 dark:text-blue-400 hover:underline">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="red"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>

        <Accordion className="mb-4 dark:bg-gray-800 dark:text-white">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="dark:text-white" />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Alumnos habilitados</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper} className="dark:bg-gray-900">
              <Table aria-label="simple table">
                <TableHead className="bg-gray-100 dark:bg-gray-700">
                  <TableRow>
                    <TableCell className="dark:text-white">ID</TableCell>
                    <TableCell className="dark:text-white">
                      Nombre del alumno
                    </TableCell>
                    <TableCell className="dark:text-white">Estado</TableCell>
                    <TableCell className="dark:text-white">
                      Desautorizar
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredAuthorizedStudents.map((student) => (
                    <TableRow key={student.userId} className="dark:bg-gray-800">
                      <TableCell className="dark:text-white">
                        {student.userId}
                      </TableCell>
                      <TableCell className="dark:text-white">
                        {student.name}
                      </TableCell>
                      <TableCell className="dark:text-white">
                        Habilitado
                      </TableCell>
                      <TableCell>
                        <button
                          onClick={() => changeStateStudent(student.userId)}
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                            />
                          </svg>
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </>

      <>
        <br></br>

        <h1 className="text-2xl font-bold  dark:text-white">Empresas</h1>

        <TextField
          label="Buscar por nombre"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchTerm}
          onChange={handleSearch}
          className="dark:text-white  dark:bg-gray-700"
        />

        <Accordion className="mb-4 dark:bg-gray-800 dark:text-white">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="dark:text-white" />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Empresas a autorizar</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper} className="dark:bg-gray-900">
              <Table aria-label="simple table">
                <TableHead className="bg-gray-100 dark:bg-gray-700">
                  <TableRow>
                    <TableCell className="dark:text-white">ID</TableCell>
                    <TableCell className="dark:text-white">
                      Nombre de la empresa
                    </TableCell>
                    <TableCell className="dark:text-white">Estado</TableCell>
                    <TableCell className="dark:text-white">Activar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredPendingEnterprises.map((enterprise) => (
                    <TableRow
                      key={enterprise.userId}
                      className="dark:bg-gray-800"
                    >
                      <TableCell className="dark:text-white">
                        {enterprise.userId}
                      </TableCell>
                      <TableCell className="dark:text-white">
                        {enterprise.name}
                      </TableCell>
                      <TableCell className="dark:text-white">
                        Pendiente
                      </TableCell>
                      <TableCell>
                        <button
                          onClick={() =>
                            changeStateEnterprise(enterprise.userId)
                          }
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                        </button>
                        <button className="text-blue-600 dark:text-blue-400 hover:underline">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="red"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>

        <Accordion className="mb-4 dark:bg-gray-800 dark:text-white">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="dark:text-white" />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Empresas habilitadas</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper} className="dark:bg-gray-900">
              <Table aria-label="simple table">
                <TableHead className="bg-gray-100 dark:bg-gray-700">
                  <TableRow>
                    <TableCell className="dark:text-white">ID</TableCell>
                    <TableCell className="dark:text-white">
                      Nombre de la empresa
                    </TableCell>
                    <TableCell className="dark:text-white">Estado</TableCell>
                    <TableCell className="dark:text-white">
                      Desautorizar
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredAuthorizedEnterprises.map((enterprise) => (
                    <TableRow
                      key={enterprise.userId}
                      className="dark:bg-gray-800"
                    >
                      <TableCell className="dark:text-white">
                        {enterprise.userId}
                      </TableCell>
                      <TableCell className="dark:text-white">
                        {enterprise.name}
                      </TableCell>
                      <TableCell className="dark:text-white">
                        Habilitado
                      </TableCell>
                      <TableCell>
                        <button
                          onClick={() =>
                            changeStateEnterprise(enterprise.userId)
                          }
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                            />
                          </svg>
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </>

      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default JobOffer;
