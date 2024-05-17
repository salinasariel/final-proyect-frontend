import React, { useState } from "react";
import { Link } from "react-router-dom";

const ExplainJobOffer = ({ title, description, image, time, id, empresName, updateExplain }) => {
    const [localExplain, setLocalExplain] = useState(false);

    const closeExplain = () => {
        console.log("Cerrando explicación");
        setLocalExplain(false);
        updateExplain(false);
    };

    return (
        <div className="flex h-screen">
            <div className=""></div>
            <div className="scale-up-horizontal-right hoveranimation flex justify-center items-center">
                <div className="rounded-xl border p-5 shadow-md bg-white w-90 w-full h-screen">
                    <div className="flex w-full items-center justify-between border-b pb-3">
                        <div className="flex items-center gap-2">
                            <img className="h-8 w-8 rounded-full bg-slate-400" src={image} alt=""></img>
                            <div className="text-lg font-bold text-black">{empresName}</div>
                        </div>
                        <div className="flex items-center space-x-8">
                            <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold hover:bg-[#00ADB5] hover:text-white">
                                Continuar
                            </button>
                            <div className="text-xs text-neutral-500">#{id}</div>
                        </div>
                        <button onClick={closeExplain}>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>


                    </div>

                    <div className="mt-4 mb-6">
                        <div className="mb-3 flex justify-between items-center">
                            <h1 className="text-xl font-bold">{title}</h1>
                            <h1>{time}</h1>
                        </div>
                        <div className="text-sm text-neutral-600">{description}</div>
                        <ul className="flex text-xs my-2 gap-2 text-[#00ADB5]">
                            <li>#etiqueta1</li>
                            <li>#etiqueta2</li>
                            <li>#etiqueta3</li>
                            <li>#etiqueta4</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExplainJobOffer;