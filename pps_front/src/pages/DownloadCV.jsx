import Footer from "../components/Footer";
import Header from "../components/Header";
import LogoUtn from "../assets/images/logo-utn.png";
import useTokenData from "../hooks/useTokenData";
import api from "../api";
import * as React from "react";
import { AuthContext } from "../AuthProvider";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import {
    Avatar,
    Typography,
    Button,
    Grid
} from "@mui/material";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const DownloadCV = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState("");
    const [coursesFile, setCoursesFile] = useState("");
    const { tokenData } = useTokenData();
    const navigate = useNavigate();
    const showDataById = async () => {
        try {
            if (tokenData && tokenData.userid) {
                const userIdInt = parseInt(tokenData.userid, 10);
                const response = await api.get(`/User/GetStudentsById/${userIdInt}`);
                setCoursesFile(response.data.profilePhoto);
                setUserInfo(response.data);
            } else {
                console.error("tokenData o tokenData.userid es nulo.");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

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
    
  const goToHome = () =>{
    navigate('/profile')
  }
    useEffect(() => {
        if (tokenData) {
            showDataById();
            setTimeout(handleGeneratePDF, 1000);
            setTimeout(goToHome, 1000);
            
        }
    }, [tokenData]);


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
                            src={`data:image/jpeg;base64,${coursesFile}`}
                            sx={{ width: 200, height: 200, margin: '0 auto' }}
                        />
                    </Grid>
                    
                    <Grid item xs={12} style={{ textAlign: 'center', marginTop: 20 }}>
                        <Typography variant="h4">{userInfo.name}</Typography>
                        <Typography variant="h5">{userInfo.tittle}</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: 5 }}>
                        <Typography>{userInfo.experience}</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: 20 }}>
                        <Typography variant="h6">Datos personales:</Typography>
                        <Typography>Fecha de nacimiento: {userInfo.birthdate}</Typography>
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
                
            </div>
            
        </div>
    );
};

export default DownloadCV;
