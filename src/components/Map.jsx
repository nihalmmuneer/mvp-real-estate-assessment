import React from "react";

const Map = () => {
  return (
    <div className="min-h-fit p-4 sm:p-6 md:p-8 pt-10 sm:pt-14">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 md:gap-8">
          <h1 className="text-xl  md:text-xl font-davidLibre">
            Explore Properties By Map
          </h1>
          <p className="text-sm md:text-sm font-santoshi text-black/50 text-left sm:text-right">
            Find the perfect spot in your perfect place using our Aqar Market
            map, showing you <br />
            all of our most popular listings, top picks, and hidden gems.
          </p>
        </div>

        <div className="relative">
          <img
            src="/map-img.png"
            alt="map"
            className="w-full relative object-cover shadow-lg rounded-xl"
          />
          <div className="absolute bg-black/50 top-0 w-full h-full rounded-xl"></div>
          <button className="bg-white  px-8 py-2 font-davidLibre text-lg  rounded-lg absolute  left-[38%] top-[32%] md:left-[48%] md:top-[50%]  shadow-md">
            Show Map
          </button>
        </div>

        {/* <div className="relative">
          <img
            src="/advertisement.png"
            alt="advertisement"
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover sm:rounded-lg shadow-lg"
          />
        </div> */}

        {/* <div className="text-center text-sm font-semibold sm:text-base md:text-2xl text-black/50 mt-4">
          <p>
            Check out our latest offers and listings in the advertisement above!
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Map;
