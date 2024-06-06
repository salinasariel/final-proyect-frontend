import { useState, useEffect } from "react";
import JobOffer from "./JobOffer";
import ExplainJobOffer from "./ExplainJobOffer";
import api from "../api";
import useTokenData from "../hooks/useTokenData";

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
    <>
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
