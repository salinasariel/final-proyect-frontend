import { useState, useEffect } from "react";
import JobOffer from "./JobOffer";
import ExplainJobOffer from "./ExplainJobOffer";
import api from "../api";

const DisplayJobOffer = ({ busqueda }) => {
  const [offers, setOffers] = useState([]);
  const [explain, setExplain] = useState(false);
  const [explainData, setExplainData] = useState(null);

  const updateExplain = (value) => {
    setExplain(value);
  };

  const showData = async () => {
    try {
      const response = await api.get(
        "/OffersCotroller/GetAllOffersWithEnterpriseTrue"
      );

      setOffers(response.data);
    } catch (error) {
      console.error("Error fetching offers:", error);
    }
  };

  useEffect(() => {
    showData();
  }, []);

  let results = [];
  let empty = false;

  if (!busqueda) {
    results = offers;
  } else {
    results = offers.filter((data) =>
      data.tittle.toLowerCase().includes(busqueda.toLowerCase())
    );
    empty = results.length === 0;
  }

  const updateExplainData = (data) => {
    setExplainData(data);
  };

  return (
    <>
      <div
        className={`flex-row gap-3 flex-wrap ${
          explain ? "hidden" : "md:flex md:m-4 md:justify-center"
        }`}
      >
        {empty && <h1 className="dark:text-white">No hay resultados. 😞</h1>}
        {results.map((offer, index) => (
          <JobOffer
            key={index}
            title={offer.tittle}
            description={offer.about}
            image={offer.enterprise.profilePhoto}
            time={offer.location}
            id={offer.offerId}
            companyName={offer.enterprise.name}
            updateExplain={setExplain}
            updateExplainData={updateExplainData}
          />
        ))}
      </div>

      <div
        className={`flex flex-col ${explain ? "h-screen" : "hidden"} md:hidden`}
      >
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

      {explain && (
        <div className="hidden md:flex h-screen">
          <div className="w-1/3 p-5 overflow-auto">
            {empty && <h1>No hay resultados. 😞</h1>}
            {results.map((offer, index) => (
              <JobOffer
                key={index}
                title={offer.tittle}
                description={offer.about}
                image={offer.enterprise.profilePhoto}
                time={offer.location}
                id={offer.offerId}
                companyName={offer.enterprise.name}
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

export default DisplayJobOffer;
