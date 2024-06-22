import { useState, useEffect } from "react";
import JobOffer from "./JobOffer";
import ExplainJobOffer from "./ExplainJobOffer";
import api from "../api";
import useTokenData from "../hooks/useTokenData";
import { Button } from "@mui/base";
import { Link } from "react-router-dom";

const DisplayMyOffers = () => {
  const { tokenData } = useTokenData();

  const [offers, setOffers] = useState([]);
  const [explain, setExplain] = useState(false);
  const [explainData, setExplainData] = useState(null);

  const updateExplain = (value) => {
    setExplain(value);
  };

  const showData = async () => {
    try {
      console.log(tokenData)
      if (tokenData && tokenData.userid) {
        const userIdInt = parseInt(tokenData.userid, 10);
        const response = await api.get(
          `/OffersCotroller/GetOffersByEnterprise?enterpriseId=${userIdInt}`
        );
        setOffers(response.data);
      } else {
        console.error("tokenData o tokenData.userid es nulo.");
        
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
    <><Link to="/newoffer">
    <button
      type="button"
      className=" h-8 p-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full  text-xs   me-2    dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 flex items-center gap-1"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V10.5Z" clip-rule="evenodd" />
</svg>


      <b>Nueva Oferta </b>
     
    </button>
  </Link>
      {!explain && (
        <div className="m-5 md:flex flex-row gap-7 md:flex-wrap p-auto">
          {empty && <h1>No hay ofertas publicadas 😞</h1>}
          {results.map((offer, index) => (
            <JobOffer
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

      {explain && (
        <div className="flex h-screen">
          <div className="w-1/3 p-5 overflow-auto">
            {empty && <h1>No hay resultados. 😞</h1>}
            {results.map((offer, index) => (
              <JobOffer
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
          <div className="w-2/3 p-5">
            {explainData && (
              <ExplainJobOffer
                key={explainData.offerId}
                title={explainData.tittle}
                description={explainData.about}
                image={explainData.image}
                time={explainData.location}
                id={explainData.offerId}
                companyName={explainData.companyName}
                updateExplain={updateExplain}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayMyOffers;
