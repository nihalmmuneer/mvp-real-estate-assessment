import React, { useRef, useState, useEffect } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Plan = () => {
  const scrollRef = useRef(null); 
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const items = [
    { src: "/off-plan.png", label: "Off-Plan" },
    { src: "/commercial.png", label: "Commercial" },
    { src: "/communities.png", label: "Communities" },
    { src: "/rent.png", label: "For Rent" },
    { src: "/sale.png", label: "For Sale" },
    { src: "/scale.png", label: "Locations" },
    { src: "/off-plan.png", label: "Off-Plan" },
    { src: "/commercial.png", label: "Commercial" },
    { src: "/communities.png", label: "Communities" },
    { src: "/rent.png", label: "For Rent" },
    { src: "/sale.png", label: "For Sale" },
    { src: "/scale.png", label: "Locations" },
  ];

  const handleSlideChange = (direction) => {
    const itemWidth = scrollRef.current.children[0].offsetWidth; 

    if (direction === "next") {
      scrollRef.current.scrollLeft += itemWidth; 
    } else if (direction === "prev") {
      scrollRef.current.scrollLeft -= itemWidth; 
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollLeft = scrollRef.current.scrollLeft;
      const scrollWidth = scrollRef.current.scrollWidth;
      const offsetWidth = scrollRef.current.offsetWidth;

      setIsPrevDisabled(scrollLeft === 0);
      setIsNextDisabled(scrollLeft >= scrollWidth - offsetWidth);
    };

    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative mt-6  bg-white">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 pt-2 pb-10 scrollbar-thin scrollbar-thumb-gray-300 
          md:overflow-x-auto md:gap-6 2xl:flex 2xl:justify-center 2xl:gap-12"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center flex-col shadow-md p-6 whitespace-nowrap"
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-12 sm:w-14 md:w-16 lg:w-18 xl:w-20 2xl:w-24"
            />
            <span className="font-davidLibre text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-center">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() => handleSlideChange("prev")}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-3 rounded-full 
          ${isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""} md:block 2xl:hidden`}  
        disabled={isPrevDisabled}
      >
        <MdKeyboardArrowLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
      </button>

      <button
        onClick={() => handleSlideChange("next")}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-3 rounded-full 
          ${isNextDisabled ? "opacity-50 cursor-not-allowed" : ""} md:block 2xl:hidden`}  
        disabled={isNextDisabled}
      >
        <MdOutlineKeyboardArrowRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
      </button>
    </div>
  );
};

export default Plan;
