import { useState, useEffect } from "react";
import JobEnterpriseOffer from "./JobEnterpriseOffer";
import api from "../api";
import useTokenData from "../hooks/useTokenData";
import { Link } from "react-router-dom";

const DisplayMyOffersEnterprise = () => {
  const { tokenData } = useTokenData();

  const [offers, setOffers] = useState([]);
  const [explain, setExplain] = useState(false);
  const [explainData, setExplainData] = useState(null);

  const updateExplain = (value) => {
    setExplain(value);
  };

  const showData = async () => {
    try {
      if (tokenData && tokenData.userid) {
        const userIdInt = parseInt(tokenData.userid, 10);
        const response = await api.get(
          `/OffersCotroller/GetOffersByEnterprise?enterpriseId=${userIdInt}`
        );
        setOffers(response.data);
      }
    } catch (error) {
      console.error("Error al obtener las ofertas:", error);
    }
  };

  useEffect(() => {
    showData();
  }, [tokenData]);

  let results = offers;
  let empty = false;

  const updateExplainData = (data) => {
    setExplainData(data);
  };

  return (
    <>
      <div className="absolute right-0 m-5">
        <Link to="/newoffer">
          <button
            type="button"
            className="h-8 p-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xs dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>
      </div>
      {!explain && (
        <div className="m-5 md:flex flex-row gap-7 md:flex-wrap p-auto">
          {empty && <h1>No hay ofertas publicadas 😞</h1>}
          {results.map((offer, index) => (
            <JobEnterpriseOffer
              key={index}
              title={offer.tittle}
              description={offer.about}
              image={offer.image}
              time={offer.location}
              id={offer.offerId}
              companyName={offer.companyName}
              updateExplain={setExplain}
              updateExplainData={updateExplainData}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default DisplayMyOffersEnterprise;
