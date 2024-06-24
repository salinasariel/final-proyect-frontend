import { useState } from "react";
import api from "../api";

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
      console.log(response.data);
      setLocalExplain(true);
      updateExplain(true);
      updateExplainData(response.data);
    } catch (error) {
      console.error("Error fetching offers:", error);
    }
  };

  return (
    <div className="scale-up-center hoveranimation p-auto">
      <div className="rounded-xl border dark:border-0 p-5 shadow-md bg-white  dark:bg-stone-900 w-90 md:max-w-sm min-w-[390px] min-h-[280px] mb-4">
        <div className="flex w-full items-center justify-between border-b pb-3 dark:border-neutral-700">
          <div className="flex items-center gap-2">
            <img
              className="h-8 w-8 rounded-full "
              src={image}
              alt="companyProfileImage"
            ></img>
            <div className="text-lg font-bold text-black dark:text-white">
              {companyName}
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <button
              onClick={showDataById}
              className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold hover:bg-[#00ADB5]  // dark:bg-neutral-800  dark:text-gray-50 dark:border-0 "
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
          <div className="text-sm dark:text-neutral-400">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default JobOffer;
