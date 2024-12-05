import React from "react";

const Experts = () => {
  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row items-center justify-between text-sm">
        <h1 className="text-2xl font-santoshi mb-2 md:mb-0">Insights From Experts</h1>
        <p className="font-santoshi text-black/50 text-xs">
          Stay up to date on the latest news and analysis in real estate! Aqar
          Market offers
          <br /> many articles and reports to help you with your property hunt.
        </p>
      </div>

      <div className="pt-5 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <img
            src="/experts-one.png"
            alt="experts-one"
            className="shadow-xl rounded-lg w-full  object-cover" // Increased heights for better visual impact
          />
          <div className="flex flex-col gap-4 absolute top-24 left-6 p-4  bg-opacity-50 rounded-lg">
            <h2 className="font-davidLibre text-xl text-white">
              Finding Your Perfect <br /> Home Design
            </h2>
            <p className="text-xs text-white font-montserrat">
              Exploring The Top <br />
              Architectural Styles <br />
              Of Luxury
            </p>
            <button className="border px-3 py-2 text-xs max-w-fit rounded-lg text-white">
              Read Article
            </button>
          </div>
        </div>

        <div className="relative flex-1">
          <img
            src="/experts-two.png"
            alt="experts-two"
            className="shadow-xl rounded-lg w-full object-cover" // Consistent height across all images
          />
          <div className="flex flex-col gap-4 absolute top-24 left-6 p-4  bg-opacity-50 rounded-lg">
            <h2 className="font-davidLibre text-xl text-white">
              The Best Locations
              <br /> To Live In UAE
            </h2>
            <p className="text-xs text-white font-montserrat">
              Exploring The UAE <br />
              With Star Agent <br />
              Sally Bowles
            </p>
            <button className="border px-3 py-2 text-xs max-w-fit rounded-lg text-white">
              Read Article
            </button>
          </div>
        </div>

        <div className="relative flex-1">
          <img
            src="/experts-three.png"
            alt="experts-three"
            className="shadow-xl rounded-lg w-full  object-cover" // Maintains height consistency
          />
          <div className="flex flex-col gap-4 absolute top-24 left-6 p-4  bg-opacity-50 rounded-lg">
            <h2 className="font-davidLibre text-xl text-white">
              Top Features Of <br /> Modern Properties
            </h2>
            <p className="text-xs text-white font-montserrat">
              Discover What To Look For <br />
              In Your Dream Home
            </p>
            <button className="border px-3 py-2 text-xs max-w-fit rounded-lg text-white">
              Read Article
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-6">
        <p className="text-center md:text-left text-sm">
          Don’t miss out, browse our articles now and find out the latest in
          real estate!
        </p>
        <button
          type="button"
          className="border bg-transparent py-2 px-6 rounded-full text-xs border-customBlue mt-4 md:mt-0"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default Experts;
