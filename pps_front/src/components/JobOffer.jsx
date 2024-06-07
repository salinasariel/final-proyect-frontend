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
      <div className="rounded-xl border p-5 shadow-md bg-white w-90 md:max-w-sm  min-w-[390px] min-h-[280px]  mb-4 ">
        <div className="flex w-full items-center justify-between border-b pb-3">
          <div className="flex items-center gap-2">
            <img
              className="h-8 w-8 rounded-full bg-slate-400"
              src={image}
              alt=""
            ></img>
            <div className="text-lg font-bold text-black"></div>
          </div>
          <div className="flex items-center space-x-8">
            <button
              onClick={showDataById}
              className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold hover:bg-[#00ADB5] hover:text-white"
            >
              Postularse
            </button>
            <div className="text-xs text-neutral-500">#{id}</div>
          </div>
        </div>

        <div className="mt-4 mb-6">
          <div className="mb-3 flex justify-between items-center">
            <h1 className="text-xl font-bold">{title} </h1>
            <h1>{time}</h1>
          </div>
          <div className="text-sm text-neutral-600">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default JobOffer;
