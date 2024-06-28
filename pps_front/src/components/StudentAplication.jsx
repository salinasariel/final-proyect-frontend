import api from "../api";
import { useState, useEffect, useContext } from "react";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
const StudentAplication = ({ id, studentId }) => {
  const [localExplain, setLocalExplain] = useState(false);
  const [coursesFile, setCoursesFile] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const navigate = useNavigate();
  const showDataById = async () => {
    try {
      const userIdInt = studentId;

      const response = await api.get(`/User/GetStudentsById/${userIdInt}`);
      setCoursesFile(response.data.profilePhoto);
      setUserInfo(response.data);
    } catch (error) {
      console.error("Error fetching offers:", error);
    }
  };

  useEffect(() => {
    showDataById();
  }, []);

  const gotopdf = () => {
    navigate("/downloadcv", {
      state: { userInfo },
    });
  };
  return (
    <div className="scale-up-center hoveranimation p-auto">
      <div className="rounded-xl border p-5 shadow-md bg-white w-90 md:max-w-sm  min-w-[390px] min-h-[280px]  mb-4 ">
        <div className="flex w-full items-center justify-between border-b pb-3">
          <div className="flex items-center gap-2">
            <Avatar
              alt="User photo"
              src={`data:image/jpeg;base64,${coursesFile}`}
              sx={{ width: 100, height: 100 }}
            />
            <div className="text-lg font-bold text-black"></div>
          </div>
          <div className="flex items-center space-x-8">
            <button
              onClick={gotopdf}
              className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold hover:bg-[#00ADB5] hover:text-white"
            >
              Descargar CV
            </button>
            <div className="text-xs text-neutral-500">#{id}</div>
          </div>
        </div>

        <div className="mt-4 mb-6">
          <div className="mb-3 flex justify-between items-center">
            <h1 className="text-xl font-bold">{userInfo.name} </h1>
          </div>
          <div className="text-sm text-neutral-600">{userInfo.about}</div>
        </div>
      </div>
    </div>
  );
};

export default StudentAplication;
