import { useState } from "react";
import api from "../api";
import { Avatar } from "@mui/material";

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
  const [localExplain, setLocalExplain] = useState(false);

  const showDataById = async () => {
    try {
      const response = await api.get(
        `/OffersCotroller/GetOfferById?offerId=${id}`
      );

      setLocalExplain(true);
      updateExplain(true);
      updateExplainData(response.data);
    } catch (error) {
      console.error("Error fetching offers:", error);
    }
  };

  const truncatedDescription =
    description.length > 100
      ? `${description.substring(0, 200)}...`
      : description;

  return (
    <div className="scale-up-center hoveranimation p-auto">
      <div className="rounded-xl border dark:border-0 p-5 shadow-md bg-white dark:bg-stone-900 w-90 md:max-w-sm min-w-[390px] min-h-[280px] ">
        <div className="flex w-full items-center justify-between border-b pb-3 dark:border-neutral-700">
          <div className="flex items-center gap-2">
            <Avatar
              alt="User photo"
              src={`data:image/jpeg;base64,${image}`}
              sx={{ width: 60, height: 60 }}
            />
            <div className="text-lg font-bold text-black dark:text-white">
              {companyName}
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <button
              onClick={showDataById}
              className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold hover:text-sm dark:bg-transparent dark:text-white"
            >
              Postularse
            </button>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              #{id}
            </div>
          </div>
        </div>

        <div className="mt-4 mb-6">
          <div className="mb-3 flex justify-between items-center">
            <h1 className="text-xl font-bold dark:text-white">{title}</h1>
            <h1 className="dark:text-neutral-400 text-sm">{time}</h1>
          </div>
          <div className="text-sm dark:text-neutral-400">
            {truncatedDescription}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOffer;
