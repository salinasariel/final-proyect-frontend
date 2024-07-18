import { useState, useEffect } from "react";
import api from "../api";
import useTokenData from "../hooks/useTokenData";
import { useLocation } from "react-router-dom";
import StudentAplication from "../components/StudentAplication";
import Header from "../components/Header";

const ExplainApplications = () => {
  const location = useLocation();
  const { offerId } = location.state || {};

  const [applications, setApplications] = useState([]);
  const [explain, setExplain] = useState(false);
  const [explainData, setExplainData] = useState(null);

  const updateExplain = (value) => {
    setExplain(value);
  };

  const showData = async () => {
    try {
      const response = await api.get(
        `/Application/GetApplicationsByOfferID?offerId=${offerId}`
      );
      setApplications(response.data);
    } catch (error) {
      console.error("Error al obtener las aplicaciones:", error);
    }
  };

  useEffect(() => {
    showData();
  }, [offerId]);

  const updateExplainData = (data) => {
    setExplainData(data);
  };

  const empty = applications.length === 0;

  return (
    <>
      <Header />
      {!explain && (
        <div className="m-5 md:flex flex-row gap-7 md:flex-wrap p-auto ">
          {empty && <h1 className="dark:text-white">No hay postulantes 😞</h1>}
          {applications.map((application, index) => (
            <StudentAplication
              key={index}
              studentId={application.userId}
              time={application.location}
              id={application.offerId}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ExplainApplications;
