import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import api from "../api";

const Vermifoto = () => {
  const [coursesFile, setCoursesFile] = useState("");

  const showDataById = async () => {
    try {
      const response = await api.get(`/User/GetStudentsById/6`);
      setCoursesFile(response.data.coursesFile);
      console.log("traigo fotito check")
    } catch (error) {
      console.error("Error fetching offers:", error);
    }
  };

  useEffect(() => {
    showDataById();
  }, []);

  return (
    <div>
      <Header />
      {coursesFile && <img src={`data:image/jpeg;base64,${coursesFile}`} alt="Courses File" />}
    </div>
  );
};

export default Vermifoto;
