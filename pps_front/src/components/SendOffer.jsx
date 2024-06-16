import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { toast } from "react-toastify";
import Header from "./Header";
import api from "../api";
import useTokenData from "../hooks/useTokenData";

const SendOffer = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const { title, image, id, empresName } = location.state || {};
    const { tokenData } = useTokenData();
    
    const goToHome = () => {
        navigate('/');
    };

    const sendOffer = async () => {
        try {
          if (tokenData && tokenData.userid) {
            const userIdInt = parseInt(tokenData.userid, 10);
            const applicationData = {
                applicationID: 0,
                offerId: id,
                userId: userIdInt,
                applicationState: 0
            };
            const response = await api.post("/Application/ApplyForAnOffer", applicationData);
            toast.success(`Se postuló correctamente.`);
            setTimeout(goToHome, 2000);
          } else {
            console.error("tokenData o tokenData.userid es nulo.");
          }
        } catch (error) {
            toast.error(`No pudimos enviar tu postulación. ${error.message}`);
        }
      };


    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="scale-up-vertical-center flex justify-center items-center flex-1 p-4">
                <div className="w-full max-w-4xl bg-white rounded-xl border p-5 shadow-md">
                    <div className="flex w-full items-center justify-between border-b pb-3">
                        <div className="flex items-center gap-2">
                            <img className="h-8 w-8 rounded-full bg-slate-400" src={image} alt="" />
                            <b>¿Está seguro de aplicar en {empresName} para el puesto de {title}?</b>
                        </div>
                        <button onClick={goToHome}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-4 mb-6">
                        <div className="flex justify-end mt-4">
                            <button onClick={sendOffer} className="rounded-2xl border bg-neutral-100 px-8 py-2 text-xs font-semibold hover:bg-[#00ADB5] hover:text-white">
                                Sí, aplicar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendOffer;
