import React, { useRef, useState, useEffect } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Plan = () => {
  const scrollRef = useRef(null); 
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

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

    const checkOverflow = () => {
      const scrollWidth = scrollRef.current.scrollWidth;
      const offsetWidth = scrollRef.current.offsetWidth;
      setIsOverflowing(scrollWidth > offsetWidth); // Check if the content overflows
    };

    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkOverflow);

    checkOverflow(); // Initial check

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  return (
    <div className="relative mt-6 bg-white">
      <div
        ref={scrollRef}
        className={`flex overflow-x-auto pt-2 pb-10 scrollbar-thin scrollbar-thumb-gray-300 gap-10 ${
          !isOverflowing ? "justify-center" : ""
        }`}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center flex-col gap-3 shadow-md py-3 px-8 rounded-lg whitespace-nowrap"
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-8"
            />
            <span className="font-davidLibre text-xs text-center text-black/50">
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
