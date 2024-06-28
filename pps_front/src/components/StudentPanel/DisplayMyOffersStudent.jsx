import { useEffect, useState } from "react";
import api from "../../api";
import useTokenData from "../../hooks/useTokenData";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CancelApplicationButton from "./CancelApplicationButton";

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
      }
    } catch (error) {
      console.error("Error al obtener las ofertas:", error);
    }
  };

  useEffect(() => {
    GetApplications();
  }, [tokenData]);

  return (
    <div className=" my-2">
      {offers.length === 0 ? (
        <div></div>
      ) : (
        <div>
          <Accordion className="mb-4 dark:bg-gray-800 dark:text-white">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="dark:text-white" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Mis postulaciones</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer component={Paper} className="dark:bg-gray-900">
                <Table aria-label="simple table">
                  <TableHead className="bg-gray-100 dark:bg-gray-700">
                    <TableRow>
                      <TableCell className="dark:text-white">Oferta</TableCell>
                      <TableCell className="dark:text-white">
                        Nombre de la empresa
                      </TableCell>
                      <TableCell className="dark:text-white">
                        Contacto
                      </TableCell>
                      <TableCell className="dark:text-white">Estado</TableCell>
                      <TableCell className="dark:text-white"></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {offers.map((offer, userId) => (
                      <TableRow key={userId} className="dark:bg-gray-800">
                        <TableCell className="dark:text-white">
                          {offer.offers.tittle}
                        </TableCell>
                        <TableCell className="dark:text-white">
                          {offer.enterprise.name}
                        </TableCell>
                        <TableCell className="dark:text-white">
                          {offer.enterprise.email}
                        </TableCell>
                        <TableCell>
                          <CancelApplicationButton
                            offerId={offer.offers.offerId}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        </div>
      )}
    </div>
  );
};

export default DisplayMyOffersStudent;
