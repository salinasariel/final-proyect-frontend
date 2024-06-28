import  { useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import {
    Avatar,
    Typography,
    Button,
    Grid
} from "@mui/material";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogoUtn from "../assets/images/logo-utn.png";

const DownloadCV = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { userInfo } = location.state || {};

    useEffect(() => {
        if (userInfo) {
            setTimeout(() => {
                handleGeneratePDF();
                setTimeout(goToHome, 100); 
            }, 100);
        }
    }, [userInfo]);

    const handleGeneratePDF = () => {
        const input = document.getElementById('pdf-content');
        const scale = 3;
        html2canvas(input, { scale }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'pt',
                format: [canvas.width, canvas.height]
            });
            pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
            pdf.save(`CV - ${userInfo.name}.pdf`);
        });
    };

    const goToHome = () => {
        navigate('/panel');
    }

    if (!userInfo) {
        return <Typography variant="h6" style={{ textAlign: 'center', marginTop: '20px' }}>No se encontró la información del usuario.</Typography>
    }

    return (
        <div>
            <div id="pdf-content" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <img src={LogoUtn} alt="UTN logo" style={{ width: 150 }} />
                    </Grid>
                    <Grid item xs={12} style={{ textAlign: 'center', marginTop: 20 }}>
                        <Avatar
                            alt="User photo"
                            src={`data:image/jpeg;base64,${userInfo.profilePhoto}`}
                            sx={{ width: 250, height: 250, margin: '0 auto' }}
                        />
                    </Grid>
                    <Grid item xs={12} style={{ textAlign: 'center', marginTop: 20 }}>
                        <Typography variant="h4">{userInfo.name}</Typography>
                        <Typography variant="h5">{userInfo.title}</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: 5 }}>
                        <Typography>{userInfo.about}</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: 20 }}>
                        <Typography variant="h6">Datos personales:</Typography>
                        <Typography>Cuil: {userInfo.cuil}</Typography>
                        <Typography>Dirección: {userInfo.address}</Typography>
                        <Typography>Ciudad: {userInfo.city}</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: 20 }}>
                        <Typography variant="h6">Experiencia laboral:</Typography>
                        <Typography>{userInfo.experience}</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: 20 }}>
                        <Typography variant="h6">Educación:</Typography>
                        <Typography>{userInfo.education}</Typography>
                        <Typography>Inglés: {userInfo.englishLevel}</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: 20 }}>
                        <Typography variant="h6">Contacto:</Typography>
                        <Typography>Teléfono: {userInfo.phoneNumber}</Typography>
                        <Typography>Email: {userInfo.email}</Typography>
                    </Grid>
                </Grid>
            </div>
            <div style={{ textAlign: 'center', marginTop: 20 }}>
                <Button variant="contained" color="primary" onClick={handleGeneratePDF}>Descargar CV</Button>
            </div>
            <Footer />
        </div>
    );
};

export default DownloadCV;
