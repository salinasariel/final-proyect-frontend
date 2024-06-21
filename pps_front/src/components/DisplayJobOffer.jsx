import { useState, useEffect } from "react";
import JobOffer from "./JobOffer";
import ExplainJobOffer from "./ExplainJobOffer";
import api from "../api";

const DisplayJobOffer = ({ busqueda }) => {
  const [offers, setOffers] = useState([]);
  const [explain, setExplain] = useState(false);
  const [explainData, setExplainData] = useState(null);
  const [forceRender, setForceRender] = useState(false);

  const updateExplain = (value) => {
    setExplain(value);
  };
  const showData = async () => {
    try {
      const response = await api.get("/OffersCotroller/GetAllOffers");
      console.log(response.data);
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
      {!explain && (
        <div className="m-5 md:flex flex-row gap-7 md:flex-wrap p-auto">
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

export default DisplayJobOffer;
