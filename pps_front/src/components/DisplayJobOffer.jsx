import JobOffer from "./JobOffer";

import { useState, useEffect } from "react";
import api from '../api';


const DisplayJobOffer = () => {

  const [offers, setOffers] = useState([]);


  useEffect(() => {
    const fetchOffers = async () => {

      try {
        const response = await api.get('/OffersCotroller/GetAllOffers');
        setOffers(response.data);
      } catch (error) {
        console.error('Error fetching offers:', error);
      }
    };

    fetchOffers();
  }, []);
  return (


    <div className="m-5 md:flex flex-row gap-5 md:flex-wrap ">
  {offers.map((offers, index) => (
    <JobOffer
      key={index}
      title={offers.tittle}
      description={offers.about}
      image={offers.image}
      time={offers.location}
      id={offers.offerId}
      companyName={offers.companyName}
    />
  ))}
</div>

  );
};

export default DisplayJobOffer;
