// eslint-disable-next-line react/prop-types
const JobOffer = ({ title, description, image, time, id, empresName }) => {
  return (
    <div className="">
      {" "}
      <div className="rounded-xl border p-5 shadow-md bg-white w-90 md:max-w-sm   ">
        <div className="flex w-full items-center justify-between border-b pb-3">
          <div className="flex items-center gap-2">
            <img
              className="h-8 w-8 rounded-full bg-slate-400"
              src={image}
            ></img>
            <div className="text-lg font-bold text-black">{empresName}</div>
          </div>
          <div className="flex items-center space-x-8">
            <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold hover:bg-[#00ADB5] hover:text-white">
              Postularse
            </button>
            <div className="text-xs text-neutral-500">#{id}</div>
          </div>
        </div>

        <div className="mt-4 mb-6">
          <div className="mb-3 flex justify-between items-center">
            <h1 className="text-xl font-bold">{title} </h1>
            <h1>{time}</h1>
          </div>
          <div className="text-sm text-neutral-600">{description}</div>
          <ul className="flex text-xs my-2 gap-2 text-[#00ADB5]">
            <li>#etiqueta1</li>
            <li>#etiqueta1</li>
            <li>#etiqueta1</li>
            <li>#etiqueta1</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobOffer;
