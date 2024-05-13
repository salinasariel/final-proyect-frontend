import JobOffer from "./JobOffer";

import { useState, useEffect } from "react";
import api from '../api';


const DisplayJobOffer = ({busqueda}) => {

  const [offers, setOffers] = useState([]);

  const showData = async () => {
    try {
      const response = await api.get('/OffersCotroller/GetAllOffers');
      console.log(response.data);
      setOffers(response.data);
    } catch (error) {
      console.error('Error fetching offers:', error);
    }
  };
  useEffect(() => {
    showData();
    
  }, []);

  
  let results = []
  let search = busqueda
  let empty
  if(!search)
    {
      results = offers
  }else{
    results = offers.filter((data)=>
    data.tittle.toLowerCase().includes(search.toLocaleLowerCase()))
    if (Object.keys(results).length === 0) {
       empty = true;
    }
    
  }
  
  
  
  return (
    <div>
      
            
      <div className=" m-5 md:flex flex-row gap-7 md:flex-wrap ">
        {empty && (<h1>No hay resultados. 😞</h1>)}
        {results.map((offers, index) => (
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
    </div>



  );
};

export default DisplayJobOffer;
