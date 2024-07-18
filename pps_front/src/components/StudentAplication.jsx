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
      state: { userInfo: userInfo, direction: "panel" },
    });
  };
  return (
    <div className="scale-up-center hoveranimation p-auto">
      <div className="dark:bg-stone-900 dark:text-white dark:border-0 rounded-xl border p-5 shadow-md bg-white w-90 md:max-w-sm  min-w-[390px] min-h-[280px] mb-4 ">
        <div className="mt-4 mb-6">
          <div className="mb-3 justify-between items-center">
            <div className="flex items-center gap-3">
              <Avatar
                alt="User photo"
                src={`data:image/jpeg;base64,${coursesFile}`}
                sx={{ width: 70, height: 70 }}
              />
              <div className=" items-center gap-4">
                <h1 className="text-xl font-bold"> {userInfo.name}</h1>
                <h1 className="">{userInfo.tittle} </h1>
              </div>
            </div>
          </div>
          <div className="text-sm text-neutral-600 dark:text-white">
            {userInfo.about}
          </div>

          <button
            onClick={gotopdf}
            className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold hover:bg-[#00ADB5] hover:text-white my-5 dark:bg-stone-900 dark:hover:bg-stone-700"
          >
            Descargar CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentAplication;
