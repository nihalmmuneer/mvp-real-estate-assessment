import React, { useRef, useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const projects = [
  {
    projectImage: "/project-one.png",
    projectName: "Project Name 1",
    developer: "SOBHA Reality",
    location: "city, area",
    startingPrice: "AED 37,000,000",
    handoverDate: "AUG 2023",
    paymentPlan: "30:40:30",
    area: "4k - 10k Sqft",
  },
  {
    projectImage: "/project-two.png",
    projectName: "Project Name 2",
    developer: "SOBHA Reality",
    location: "city, area",
    startingPrice: "AED 37,000,000",
    handoverDate: "AUG 2023",
    paymentPlan: "30:40:30",
    area: "4k - 10k Sqft",
  },
  {
    projectImage: "/project-three.png",
    projectName: "Project Name 3",
    developer: "SOBHA Reality",
    location: "city, area",
    startingPrice: "AED 37,000,000",
    handoverDate: "AUG 2023",
    paymentPlan: "30:40:30",
    area: "4k - 10k Sqft",
  },
  {
    projectImage: "/project-one.png",
    projectName: "Project Name 4",
    developer: "SOBHA Reality",
    location: "city, area",
    startingPrice: "AED 37,000,000",
    handoverDate: "AUG 2023",
    paymentPlan: "30:40:30",
    area: "4k - 10k Sqft",
  },
  {
    projectImage: "/project-two.png",
    projectName: "Project Name 2",
    developer: "SOBHA Reality",
    location: "city, area",
    startingPrice: "AED 37,000,000",
    handoverDate: "AUG 2023",
    paymentPlan: "30:40:30",
    area: "4k - 10k Sqft",
  },
];

const Projects = () => {
  const scrollRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  useEffect(() => {
    if (scrollRef.current && scrollRef.current.children.length > 0) {
      setItemWidth(scrollRef.current.children[0].offsetWidth);
    }
  }, []);

  const handleSlideChange = (direction) => {
    if (direction === "next") {
      scrollRef.current.scrollLeft += itemWidth; 
    } else if (direction === "prev") {
      scrollRef.current.scrollLeft -= itemWidth; 
    }
  };

  const updateButtonState = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;

      setIsPrevDisabled(scrollLeft === 0);
      setIsNextDisabled(scrollLeft >= scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    updateButtonState();
    scrollRef.current.addEventListener("scroll", updateButtonState);

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", updateButtonState);
      }
    };
  }, [itemWidth]);

  return (
    <div className="min-h-fit p-6 ">
      <div>
        <div className="flex md:flex-row flex-col md:gap-0 gap-4 justify-between items-center">
          <h1 className="text-xl ">New Projects</h1>
          <p className="text-xs  text-black/50">
            We have a magnificent selection of upcoming and new projects that
            will open your <br /> eyes to the future’s potential. These
            properties make tomorrow worth waiting for.
          </p>
        </div>

        <div className="relative pt-5">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-thin pt-2 pb-6 scrollbar-thumb-gray-300"
            style={{ scrollBehavior: "smooth", width: "100%" }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-none w-full sm:w-[calc(90%-16px)] md:w-[calc(50%-10px)] lg:w-[calc(28%-16px)]" // Adjust widths based on screen size
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          <button
            onClick={() => handleSlideChange("prev")}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full ${isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isPrevDisabled}
          >
            <MdKeyboardArrowLeft />
          </button>

          <button
            onClick={() => handleSlideChange("next")}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full ${isNextDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isNextDisabled}
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>

        <div className="flex md:flex-row flex-col md:gap-0 gap-2 items-center justify-between mt-6">
          <p>Don’t miss out, browse all of our new projects now and see what your future could look like!</p>
          <button type="button" className="border bg-transparent py-2 px-5 rounded-full text-sm border-customBlue">See More</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
