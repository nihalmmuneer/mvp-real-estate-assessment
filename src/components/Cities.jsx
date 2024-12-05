import React, { useRef, useState, useEffect } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Cities = () => {
  const scrollRef = useRef(null); 
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const images = [
    "/abudhabi-frame.png",
    "/ajman-frame.png",
    "/ras-al-khaima-frame.png",
    "/sharjah-frame.png",
    "/umm-al-quwain-frame.png",
    "/abudhabi-frame.png",
    "/ajman-frame.png",
    "/ras-al-khaima-frame.png",
    "/sharjah-frame.png",
    "/umm-al-quwain-frame.png",
  ];

  const handleSlideChange = (direction) => {
    const itemWidth = scrollRef.current.children[0].offsetWidth; // Get the width of the first image

    if (direction === "next") {
      scrollRef.current.scrollLeft += itemWidth; 
    } else if (direction === "prev") {
      scrollRef.current.scrollLeft -= itemWidth; 
    }
  };

  const checkScrollPosition = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const scrollWidth = scrollRef.current.scrollWidth;
    const offsetWidth = scrollRef.current.offsetWidth;

    setIsPrevDisabled(scrollLeft === 0);
    setIsNextDisabled(scrollLeft >= scrollWidth - offsetWidth);
  };

  const debounceResize = () => {
    clearTimeout(window.debounceResizeTimeout);
    window.debounceResizeTimeout = setTimeout(() => {
      checkScrollPosition(); // Recheck scroll position after resize
    }, 150); // Debounce time to avoid too many recalculations during resize
  };

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(checkScrollPosition);
    };

    // Attach event listeners
    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", debounceResize);

    // Initial check
    checkScrollPosition();

    return () => {
      // Clean up event listeners
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", debounceResize);
    };
  }, []); // Empty dependency array ensures effect runs only once after component mounts

  return (
    <div className="relative min-h-fit bg-white">
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scrollbar-thin pt-2 pb-3 scrollbar-thumb-gray-300"
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`City ${index + 1}`}
            className="h-auto object-cover"
          />
        ))}
      </div>

      <button
        onClick={() => handleSlideChange("prev")}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full ${
          isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isPrevDisabled}
      >
        <MdKeyboardArrowLeft />
      </button>

      <button
        onClick={() => handleSlideChange("next")}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full ${
          isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isNextDisabled}
      >
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
};

export default Cities;
