import CancelApplicationButton from "./CancelApplicationButton";

const ApplicationItemList = ({
  companyName,
  status,
  companyContact,
  title,
  offerId,
}) => {
  return (
    <div className="w-full overflow-x-auto my-0 ">
      <table className="w-full  text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400 table-auto md:table-fixed ml-0">
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td className="pl-2">{title}</td>
          <td className="pl-2">{companyName}</td>
          <td className="pl-2">{companyContact}</td>
          <td className="pl-2 text-center">{status ? "Abierta" : "Cerrada"}</td>
          <td className="pl-2 text-center">
            {" "}
            <CancelApplicationButton offerId={offerId} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ApplicationItemList;
