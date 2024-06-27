import React from "react";

const ApplicationItemHeader = () => {
  return (
    <div className="w-full overflow-x-auto mb-0 text-left">
      <table className="w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-black dark:text-gray-400 table-auto md:table-fixed">
        <thead className="text-center">
          <tr>
            <th scope="col" className="">
              Oferta
            </th>
            <th scope="col" className="">
              Nombre de la empresa
            </th>
            <th scope="col" className="">
              Contacto
            </th>
            <th scope="col" className="">
              Estado de la oferta
            </th>
            <th scope="col">Cancelar</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default ApplicationItemHeader;
