import { useState } from "react";
import api from "../api";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const JobEnterpriseOffer = ({
  title,
  description,

  id,

  updateExplain,
  updateExplainData,
}) => {
  const navigate = useNavigate();
  const [localExplain, setLocalExplain] = useState(false);

  const showDataById = async () => {
    try {
      const response = await api.get(
        `/OffersCotroller/GetOfferById?offerId=${id}`
      );
      console.log(response.data);
      setLocalExplain(true);
      updateExplain(true);
      updateExplainData(response.data);
    } catch (error) {
      console.error("Error fetching offers:", error);
    }
  };

  const deleteOffer = async () => {
    try {
      const responseDelete = await api.delete(
        `/OffersCotroller/DeleteOffer/${id}`
      );
      toast.success(`Su oferte se eliminino correctamente.`);
      window.location.reload();
    } catch {
      toast.error(`Hubo un problema al eliminar su oferta.`);
    }
  };

  const seeApplications = () => {
    navigate("/explainApplications", {
      state: { offerId: id },
    });
  };

  return (
    <div className="scale-up-center hoveranimation p-auto">
      <div className="rounded-xl border p-5 shadow-md bg-white dark:border-none dark:bg-stone-900 dark:text-white w-90 md:max-w-sm  min-w-[390px] min-h-[280px]  mb-4 ">
        <div className="flex w-full items-center justify-between border-b pb-3">
          <div className="flex items-center space-x-2">
            <button
              onClick={seeApplications}
              className="dark:bg-stone-900 rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold hover:bg-[#9acd32] hover:text-white"
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
                  d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                />
              </svg>
            </button>
            <button
              onClick={deleteOffer}
              className="dark:bg-stone-900 rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold hover:bg-[#c30010] hover:text-white"
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
                  d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-4 mb-6">
          <div className="mb-3 flex justify-between items-center">
            <h1 className="text-xl font-bold">{title} </h1>
          </div>
          <div className="text-sm text-neutral-600 dark:text-white">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobEnterpriseOffer;
