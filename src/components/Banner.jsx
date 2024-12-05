import { Button } from "flowbite-react";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Banner = () => {
  const [tabs, setTabs] = useState(1);
  const [isOpen, setIsOpen] = useState(false); 
  const [openDropdown, setOpenDropdown] = useState(null); 
  const [selectedItem, setSelectedItem] = useState(null); 
  const [price, setPrice] = useState(0); 
  const [text, setText] = useState(""); 
  const [selectedBeds, setSelectedBeds] = useState([]); 
  const [selectedBaths, setSelectedBaths] = useState([]); 

  const PropertyTypeMenu = [
    "Shop",
    "Commercial Villa",
    "Office",
    "Residential Floor",
    "Residential Plot",
    "Hotel Apartment",
    "Villa Compound",
    "Penthouse",
    "Town House",
    "Apartment",
    "Villa",
  ];

  const bedroomsOptions = ["Studio", "1", "2", "3", "4", "5", "6", "7+"];

  const bathroomsOptions = ["1", "2", "3", "4", "5", "6", "7+"];

  const toggleDropdown = (dropdownType) => {
    setOpenDropdown((prev) => (prev === dropdownType ? null : dropdownType));
    setIsOpen(true); 
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setOpenDropdown(null); 
    setIsOpen(false); 
  };

  const handleSelectBeds = (item) => {
    setSelectedBeds((prev) =>
      prev.includes(item)
        ? prev.filter((bed) => bed !== item) 
        : [...prev, item]
    );
  };

  const handleSelectBaths = (item) => {
    setSelectedBaths((prev) =>
      prev.includes(item)
        ? prev.filter((bath) => bath !== item) 
        : [...prev, item]
    );
  };

  const reorderBedrooms = (beds) => {
    const studioIndex = beds.indexOf("Studio");
    if (studioIndex > -1 && studioIndex !== 0) {
      const reordered = ["Studio", ...beds.filter((bed) => bed !== "Studio")];
      return reordered;
    }
    return beds;
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClear = () => {
    setText("");
  };

  const handleSliderChange = (e) => {
    setPrice(e.target.value);
  };

  const formatPrice = (value) => {
    return value >= 1000000
      ? `${(value / 1000000).toFixed(1)} M`
      : value >= 20
      ? `${value / 1000} K`
      : "0";
  };

  return (
    <div className="min-h-screen bg-gray-200 relative">
      <video
        src="banner-video.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 w-full h-full object-cover"
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>
      <div className="absolute md:left-24 md:top-40  left-10 top-20">
        <div className="flex flex-col gap-4 md:gap-20">
          <h1 className="md:text-4xl sm:text-3xl text-lg font-davidLibre font-semibold text-white">
            Discover a wide selection of home <br />
            listings in the UAE with Aqarmarket.
          </h1>

          <div className="">
            <div className="relative bg-white hidden text-black max-w-fit font-montserrat lg:flex rounded-lg text-sm md:text-lg lg:text-xl ml-6 border-b-2 border-gray-500">
              <button
                type="button"
                className={`max-w-fit p-3 rounded-tl-lg flex-1 ${
                  tabs === 1 ? "bg-teal-500 text-white" : "bg-white text-black"
                }`}
                onClick={() => setTabs(1)}
              >
                New Projects
              </button>
              <button
                type="button"
                className={`max-w-fit p-3 flex-1 ${
                  tabs === 2 ? "bg-teal-500 text-white" : "bg-white text-black"
                }`}
                onClick={() => setTabs(2)}
              >
                Buy
              </button>
              <button
                type="button"
                className={`max-w-fit p-3 flex-1 rounded-tr-lg ${
                  tabs === 3 ? "bg-teal-500 text-white" : "bg-white text-black"
                }`}
                onClick={() => setTabs(3)}
              >
                Rent
              </button>
            </div>
            <div className="flex  text-center lg:hidden rounded-full justify-center gap-2">
              <button
                type="button"
                className={`max-w-fit rounded-full px-3 py-2  flex-1 ${
                  tabs === 1 ? "bg-teal-500 text-white" : "bg-white text-black"
                }`}
                onClick={() => setTabs(1)}
              >
                New Projects
              </button>
              <button
                type="button"
                className={`max-w-fit px-5 flex-1 py-2 rounded-full ${
                  tabs === 2 ? "bg-teal-500 text-white" : "bg-white text-black"
                }`}
                onClick={() => setTabs(2)}
              >
                Buy
              </button>
              <button
                type="button"
                className={`max-w-fit px-5 py-2 rounded-full flex-1  ${
                  tabs === 3 ? "bg-teal-500 text-white" : "bg-white text-black"
                }`}
                onClick={() => setTabs(3)}
              >
                Rent
              </button>{" "}
            </div>

            <div className="bg-white hidden lg:flex items-center px-5 py-1 rounded-full">
              <div>
                <div className="flex flex-col items-start relative">
                  <span className="font-davidLibre font-semibold text-sm md:text-lg lg:text-xl pl-3">
                    Location
                  </span>
                  <input
                    type="text"
                    value={text}
                    onChange={handleChange}
                    placeholder="City, Community or Project"
                    className="text-sm md:text-lg lg:text-xl placeholder:text-base outline-none focus:outline-none border-none focus:ring-0"
                  />
                  {text && (
                    <button
                      type="button"
                      onClick={handleClear}
                      className="text-xs absolute right-0 top-1/2"
                    >
                      &#10005;
                    </button>
                  )}
                </div>
              </div>

              <div className="relative inline-block text-left w-40">
                <div
                  onClick={() => toggleDropdown("property")}
                  className="flex items-center justify-between cursor-pointer w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md  hover:bg-gray-100 focus:outline-none border-none"
                >
                  <div className="flex w-full justify-between items-center">
                    <div className="flex flex-col items-start">
                      <span className="font-davidLibre font-semibold text-sm md:text-lg lg:text-xl">
                        Type
                      </span>
                      <div className=" py-2  text-base text-gray-500 font-davidLibre">
                        {selectedItem ? selectedItem : "Property Type"}
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        openDropdown === "property" ? "-rotate-90" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {openDropdown === "property" && isOpen && (
                  <div className="absolute right-0 z-10 w-full bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-20 focus:outline-none">
                    <div className="py-1 max-h-48 overflow-y-auto custom-scrollbar">
                      {PropertyTypeMenu.map((item, index) => (
                        <div key={index}>
                          <button
                            onClick={() => handleSelect(item)}
                            className="block text-base px-4 py-2 text-gray-800 hover:bg-teal-400 w-full text-left"
                            role="menuitem"
                          >
                            {item}
                          </button>
                          <hr className="border-gray-300 my-1" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="relative inline-block text-left w-40 ">
                <div
                  onClick={() => toggleDropdown("price")}
                  className="flex items-center justify-between cursor-pointer w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md  hover:bg-gray-100 focus:outline-none border-none"
                >
                  <div className="flex w-full justify-between items-center">
                    <div className="flex flex-col items-start">
                      <span className="font-davidLibre font-semibold text-sm md:text-lg lg:text-xl">
                        Price
                      </span>
                      <div className="text-base py-2">{formatPrice(price)}</div>
                    </div>
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        openDropdown === "price" ? "-rotate-90" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {openDropdown === "price" && isOpen && (
                  <div className="absolute right-0 pb-7 z-10 w-full bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-20 focus:outline-none p-4">
                    <div className="flex justify-between items-center text-base">
                      <span>0</span>
                      <span className="text-sm font-semibold">5M</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="5000000"
                      step="20000"
                      value={price}
                      onChange={handleSliderChange}
                      className="w-full mt-2"
                    />
                    <div className="flex justify-center mt-2  relative">
                      <span
                        className="text-teal-500 text-sm"
                        style={{
                          position: "absolute text-xs",
                          left: `${(price / 5000000) * 100}%`,
                          transform: "translateX(-50%)",
                        }}
                      >
                        {formatPrice(price)}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative inline-block text-left w-48 ">
                <div
                  onClick={() => toggleDropdown("bedsAndBaths")}
                  className="flex items-center justify-between cursor-pointer w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md  hover:bg-gray-100 focus:outline-none border-none"
                >
                  <div className="flex w-full justify-between items-center">
                    <div className="flex flex-col items-start">
                      <span className="font-davidLibre font-semibold text-sm md:text-lg lg:text-xl">
                        Beds & Baths
                      </span>
                      <div className="text-base py-2">
                        {selectedBeds.length > 0
                          ? `Beds: ${selectedBeds.join(", ")}`
                          : "Beds: None"}{" "}
                        |{" "}
                        {selectedBaths.length > 0
                          ? `Baths: ${selectedBaths.join(", ")}`
                          : "Baths: None"}
                      </div>
                    </div>
                    <svg
                      className={`w-5 h-5 transform transition-transform duration-300 ${
                        openDropdown === "bedsAndBaths" ? "-rotate-90" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {openDropdown === "bedsAndBaths" && isOpen && (
                  <div className="absolute right-0 z-10 w-full bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-20 focus:outline-none">
                    <div className="py-1">
                      <div className="px-4 py-2 text-xs font-semibold">
                        Bedrooms
                      </div>
                      <div className="flex overflow-x-auto gap-2 scrollbar-thin p-2">
                        {reorderBedrooms(bedroomsOptions).map((bed, index) => (
                          <button
                            key={index}
                            onClick={() => handleSelectBeds(bed)}
                            className={`text-xs px-4 py-2 rounded-lg border ${
                              selectedBeds.includes(bed)
                                ? "bg-teal-400 text-white"
                                : "bg-gray-200"
                            }`}
                          >
                            {bed}
                          </button>
                        ))}
                      </div>

                      <div className="px-4 py-2 text-xs font-semibold">
                        Bathrooms
                      </div>
                      <div className="flex overflow-x-auto scrollbar-thin gap-1 p-2">
                        {bathroomsOptions.map((bath, index) => (
                          <button
                            key={index}
                            onClick={() => handleSelectBaths(bath)}
                            className={`text-xs px-4 py-2 rounded-lg border ${
                              selectedBaths.includes(bath)
                                ? "bg-teal-400 text-white"
                                : "bg-gray-200"
                            }`}
                          >
                            {bath}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <Button className="bg-teal-400 rounded-full px-2">
                  <CiSearch className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div className="bg-white mt-5 w-full flex justify-between rounded-full lg:hidden ">
              <input
                type="text"
                placeholder="City,Community or Project"
                className="text-xs placeholder:text-xs rounded-full outline-none focus:outline-none border-none focus:ring-0"
              />
              <Button className="bg-teal-400 rounded-full px-2">
                <CiSearch className="w-7 h-7" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
