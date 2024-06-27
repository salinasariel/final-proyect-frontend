import { useState, useEffect } from "react";
import api from "../api";
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
    const [pendingStudents, setPendingStudents] = useState([]);
    const [authorizedStudents, setAuthorizedStudents] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const showStudentData = async () => {
        try {
            const response = await api.get("/User/GetAllStudents");
            setStudents(response.data);

            const pending = response.data.filter(student => !student.userState);
            const authorized = response.data.filter(student => student.userState);

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
            showStudentData();
        } catch (error) {
            console.error("Error obteniendo estudiantes:", error);
        }
    };

    useEffect(() => {
        showStudentData();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

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
                                    <TableCell className="dark:text-white">Nombre del alumno</TableCell>
                                    <TableCell className="dark:text-white">Estado</TableCell>
                                    <TableCell className="dark:text-white">Activar</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredPendingStudents.map((student) => (
                                    <TableRow key={student.userId} className="dark:bg-gray-800">
                                        <TableCell className="dark:text-white">{student.userId}</TableCell>
                                        <TableCell className="dark:text-white">{student.name}</TableCell>
                                        <TableCell className="dark:text-white">Pendiente</TableCell>
                                        <TableCell>
                                            <button onClick={() => changeStateStudent(student.userId)} className="text-blue-600 dark:text-blue-400 hover:underline">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
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
                                    <TableCell className="dark:text-white">Nombre del alumno</TableCell>
                                    <TableCell className="dark:text-white">Estado</TableCell>
                                    <TableCell className="dark:text-white">Desautorizar</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredAuthorizedStudents.map((student) => (
                                    <TableRow key={student.userId} className="dark:bg-gray-800">
                                        <TableCell className="dark:text-white">{student.userId}</TableCell>
                                        <TableCell className="dark:text-white">{student.name}</TableCell>
                                        <TableCell className="dark:text-white">Habilitado</TableCell>
                                        <TableCell>
                                            <button onClick={() => changeStateStudent(student.userId)} className="text-blue-600 dark:text-blue-400 hover:underline">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
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
                    <Typography>Alumnos a autorizar</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer component={Paper} className="dark:bg-gray-900">
                        <Table aria-label="simple table">
                            <TableHead className="bg-gray-100 dark:bg-gray-700">
                                <TableRow>
                                    <TableCell className="dark:text-white">ID</TableCell>
                                    <TableCell className="dark:text-white">Nombre del alumno</TableCell>
                                    <TableCell className="dark:text-white">Estado</TableCell>
                                    <TableCell className="dark:text-white">Activar</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredPendingStudents.map((student) => (
                                    <TableRow key={student.userId} className="dark:bg-gray-800">
                                        <TableCell className="dark:text-white">{student.userId}</TableCell>
                                        <TableCell className="dark:text-white">{student.name}</TableCell>
                                        <TableCell className="dark:text-white">Pendiente</TableCell>
                                        <TableCell>
                                            <button onClick={() => changeStateStudent(student.userId)} className="text-blue-600 dark:text-blue-400 hover:underline">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
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
                                    <TableCell className="dark:text-white">Nombre del alumno</TableCell>
                                    <TableCell className="dark:text-white">Estado</TableCell>
                                    <TableCell className="dark:text-white">Desautorizar</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredAuthorizedStudents.map((student) => (
                                    <TableRow key={student.userId} className="dark:bg-gray-800">
                                        <TableCell className="dark:text-white">{student.userId}</TableCell>
                                        <TableCell className="dark:text-white">{student.name}</TableCell>
                                        <TableCell className="dark:text-white">Habilitado</TableCell>
                                        <TableCell>
                                            <button onClick={() => changeStateStudent(student.userId)} className="text-blue-600 dark:text-blue-400 hover:underline">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
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
        </div>
    );
};

export default JobOffer;
