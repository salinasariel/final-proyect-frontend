import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { toast } from "react-toastify";
import useTokenData from "../hooks/useTokenData";

const ExplainJobOffer = ({
  title,
  description,
  image,
  time,
  id,
  empresName,
  updateExplain,
}) => {
  const [localExplain, setLocalExplain] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const { tokenData } = useTokenData();
  const [userInfo, setUserInfo] = useState("");

  const closeExplain = () => {
    console.log("Cerrando explicación");
    setLocalExplain(false);
    updateExplain(false);
  };

  const continueOffer = () => {
    if (!isLoggedIn) {
      toast.warning("Debe ingresar para postularse a una oferta.", {
        position: "bottom-right",
      });
    } else {
      navigate("/sendoffer", {
        state: { title, image, id, empresName },
      });
    }
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (tokenData && tokenData.rol) {
        const userRol = tokenData.rol;
        setUserInfo(userRol);
      } else {
        setUserInfo(null);
      }
    };
    fetchUserInfo();
  }, [tokenData]);

  return (
    <div style={{ overflow: "hidden" }}>
      <div className=""></div>
      <div className="scale-up-horizontal-right hoveranimation flex justify-center items-center w-full h-screen overflow-hidden">
        <div className="rounded-xl border dark:border-0 p-5 shadow-md bg-white dark:bg-stone-900 w-full h-screen overflow-hidden">
          <div className="flex w-full items-center justify-between border-b pb-3 overflow-hidden">
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="text-lg font-bold text-black dark:text-white">
                {empresName}
              </div>
            </div>
            <div className="flex items-center space-x-8">
            {userInfo == "Student" && (
              <button
                onClick={continueOffer}
                className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold hover:bg-[#00ADB5]  // dark:bg-neutral-800  dark:text-gray-50 dark:border-0 "
              >
            
            
                Continuar
              </button>
              )}
              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                #{id}
              </div>
            </div>
            <button onClick={closeExplain}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 dark:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 mb-6">
            <div className="mb-3 flex justify-between items-center">
              <h1 className="text-xl font-bold dark:text-white">{title}</h1>
              <h1 className="dark:text-neutral-400 text-sm">{time}</h1>
            </div>
            <div className="text-sm dark:text-neutral-400">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplainJobOffer;
