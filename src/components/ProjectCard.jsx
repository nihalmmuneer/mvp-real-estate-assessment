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
      <img src={projectImage} alt="project" className="w-full h-auto rounded-lg" />
      <img
        src="/shoba.png"
        alt="shoba-icon"
        className="absolute bottom-[-40px] right-0 w-20"
      />
    </div>
    <div className="border-b p-2 flex flex-col gap-1">
      <h2 className="font-semibold text-lg md:text-xl">{projectName}</h2>
      <p className="text-xs text-gray-500">
        By{" "}
        <a href="shoba" className="underline text-teal-500">
          {developer}
        </a>
      </p>
      <p className="text-gray-400 text-xs">Location: {location}</p>
    </div>
    <div className="flex gap-3 p-2 border-b flex-wrap">
      <div className="text-teal-400 flex items-center gap-1">
        <img src="/Apartment.png" alt="apartments" className="w-5 h-5" />
        <span className="text-xs font-semibold">APARTMENTS</span>
      </div>
      <div className="text-teal-400 flex items-center gap-1">
        <img src="/Duplexes.png" alt="duplexes" className="w-5 h-5" />
        <span className="font-semibold text-xs">DUPLEXES</span>
      </div>
      <div className="text-teal-400 flex items-center gap-1">
        <img src="/Penthouse.png" alt="penthouses" className="w-5 h-5" />
        <span className="text-xs font-semibold">PENTHOUSES</span>
      </div>
    </div>
    <div className="flex items-center gap-3 p-2 border-b">
      <div className="flex flex-col text-sm gap-1">
        <div className="flex items-center gap-1">
          <img src="/starting-price.png" alt="starting-price" className="w-5 h-5" />
          <span>Starting Price:</span>
        </div>
        <div className="flex items-center gap-1">
          <img src="/starting-price.png" alt="handover" className="w-5 h-5" />
          <span>Handover:</span>
        </div>
        <div className="flex items-center gap-1">
          <img src="/payment.png" alt="payment-plan" className="w-5 h-5" />
          <span>Payment Plan:</span>
        </div>
        <div className="flex items-center gap-1">
          <img src="/area.png" alt="area" className="w-5 h-5" />
          <span>Area:</span>
        </div>
      </div>
      <div className="flex flex-col gap-1 text-sm">
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
          className="text-white p-3 rounded-xl bg-customBlue flex items-center gap-1"
        >
          <CiMail className="w-6 h-6" />
          <span className="text-sm">Enquire now</span>
        </button>
        <button
          type="button"
          className="text-white p-3 bg-customBlue rounded-xl flex items-center gap-1"
        >
          <MdOutlineWhatsapp className="w-6 h-6" />
          <span className="text-sm">Whatsapp</span>
        </button>
      </div>
    </div>
  </div>
);

export default ProjectCard;
