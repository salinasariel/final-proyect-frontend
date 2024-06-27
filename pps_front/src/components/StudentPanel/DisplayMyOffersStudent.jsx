import { useEffect, useState } from "react";
import api from "../../api";
import useTokenData from "../../hooks/useTokenData";
import ApplicationItemList from "./ApplicationItemList";
import ApplicationItemHeader from "./ApplicationItemHeader";

const DisplayMyOffersStudent = () => {
  const { tokenData } = useTokenData();
  const [offers, setOffers] = useState([]);
  const [enterprise, setEnterprise] = useState([]);

  const GetApplications = async () => {
    try {
      if (tokenData && tokenData.userid) {
        const userIdInt = parseInt(tokenData.userid, 10);
        const response = await api.get(
          `/OffersCotroller/GetOfferByStudent?studentId=${userIdInt}`
        );
        const item = await response.data;
        setOffers(item);
        console.log(enterprise);
      } else {
        console.error("Token inválido o no se pudo obtener el ID del usuario.");
      }
    } catch (error) {
      console.error("Error al obtener las ofertas:", error);
    }
  };

  useEffect(() => {
    GetApplications();
  }, [tokenData]);

  console.log(offers);
  return (
    <div className=" my-2">
      {offers.length === 0 ? (
        <div>
          <ApplicationItemHeader />
        </div>
      ) : (
        <div>
          <ApplicationItemHeader />
          {offers.map((offer, index) => (
            <ApplicationItemList
              key={index}
              title={offer.offers.tittle}
              description={offer.offers.about}
              image={offer.enterprise.profilePhoto}
              time={offer.offers.location}
              id={offer.offers.offerId}
              companyName={offer.enterprise.name}
              companyContact={offer.enterprise.email}
              offerId={offer.offers.offerId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayMyOffersStudent;
