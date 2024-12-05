import React from "react";
import { CiMail } from "react-icons/ci";
import { MdOutlineWhatsapp } from "react-icons/md";

const ProjectCard = ({
  projectImage,
  projectName,
  developer,
  location,
  startingPrice,
  handoverDate,
  paymentPlan,
  area,
}) => (
  <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
    <div className="relative">
      <img src={projectImage} alt="project" className="w-full h-auto  object-cover rounded-lg" />
      <img
        src="/shoba.png"
        alt="shoba-icon"
        className="absolute bottom-[-40px] right-0 w-20"
      />
    </div>
    <div className="border-b p-2 flex flex-col gap-1">
      <h2 className="font-semibold ">{projectName}</h2>
      <p className="text-xs text-gray-500">
        By{" "}
        <a href="shoba" className="underline text-teal-500 text-xs" >
          {developer}
        </a>
      </p>
      <p className="text-gray-400 text-xs">Location: {location}</p>
    </div>
    <div className="flex gap-3 p-2 border-b xl:flex-nowrap flex-wrap">
      <div className="text-teal-400 flex items-center gap-1">
        <img src="/Apartment.png" alt="apartments" className="w-3 h-3" />
        <span className="text-[11px] font-semibold">APARTMENTS</span>
      </div>
      <div className="text-teal-400 flex items-center gap-1">
        <img src="/Duplexes.png" alt="duplexes" className="w-3 h-3" />
        <span className="font-semibold  text-[11px]">DUPLEXES</span>
      </div>
      <div className="text-teal-400 flex items-center gap-1">
        <img src="/Penthouse.png" alt="penthouses" className="w-3 h-3" />
        <span className="text-[11px]">PENTHOUSES</span>
      </div>
    </div>
    <div className="flex items-center gap-3 p-2 border-b">
      <div className="flex flex-col text-base 2xl:text-2xl gap-1">
        <div className="flex items-center gap-1">
          <img src="/starting-price.png" alt="starting-price" className="w-4 h-4" />
          <span className="text-xs">Starting Price:</span>
        </div>
        <div className="flex items-center gap-1">
          <img src="/starting-price.png" alt="handover" className="w-4 h-4" />
          <span className="text-xs">Handover:</span>
        </div>
        <div className="flex items-center gap-1">
          <img src="/payment.png" alt="payment-plan" className="w-4 h-4" />
          <span className="text-xs">Payment Plan:</span>
        </div>
        <div className="flex items-center gap-1">
          <img src="/area.png" alt="area" className="w-4 h-4" />
          <span className="text-xs">Area:</span>
        </div>
      </div>
      <div className="flex flex-col gap-1 text-xs">
        <h2>{startingPrice}</h2>
        <h2>{handoverDate}</h2>
        <h2>{paymentPlan}</h2>
        <h2>{area}</h2>
      </div>
    </div>
    <div className="pt-5">
      <div className="flex items-center gap-2 flex-wrap">
        <button
          type="button"
          className="text-white justify-center text-center flex-1 px-5 py-4 rounded-lg bg-customBlue flex items-center gap-1"
        >
          <CiMail className="w-4 h-4" />
          <span className="text-xs whitespace-nowrap">Enquire now</span>
        </button>
        <button
          type="button"
          className="text-white text-center justify-center flex-1 px-5 py-4 rounded-lg bg-customBlue flex items-center gap-1"
        >
          <MdOutlineWhatsapp className="w-4 h-4" />
          <span className="text-xs">Whatsapp</span>
        </button>
      </div>
    </div>
  </div>
);

export default ProjectCard;
