import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Cities from "../components/Cities";
import Plan from "../components/Plan";
import Map from "../components/Map";
import Projects from "../components/Projects";
import Experts from "../components/Experts";
import Info from "../components/Info";

const Home = () => {
  const [observer, setObserver] = useState(null);

  // Function to add animation class when an element enters the viewport
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(entry.target.dataset.animation);
        observer.unobserve(entry.target); // Stop observing after animation is triggered
      }
    });
  };

  useEffect(() => {
    // Create a new IntersectionObserver instance
    const newObserver = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    // Set the observer to state to use it for future updates
    setObserver(newObserver);

    // Cleanup on component unmount
    return () => {
      newObserver.disconnect();
    };
  }, []);

  // Re-observe all elements if the window is resized
  useEffect(() => {
    if (observer) {
      // Re-observe all sections on resize
      const sections = document.querySelectorAll(".animate-on-scroll");

      sections.forEach((section) => {
        observer.observe(section);
      });
    }

    // Listen for window resize event and force observer to recheck visibility
    const handleResize = () => {
      const sections = document.querySelectorAll(".animate-on-scroll");

      sections.forEach((section) => {
        observer.observe(section); // Re-observe sections on resize
      });
    };

    // Attach the resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup the resize event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [observer]);

  return (
    <div className="bg-white overflow-hidden">
      {/* Banner Section */}
      <div className="w-full animate-on-scroll" data-animation="animate-fade-in-slow">
        <Banner />
      </div>

      {/* Cities Section */}
      <div className="w-full animate-on-scroll" data-animation="animate-slide-in-right">
        <Cities />
      </div>

      {/* Plan Section */}
      <div className="w-full animate-on-scroll" data-animation="animate-slide-in-left">
        <Plan />
      </div>

      {/* Map Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 animate-on-scroll" data-animation="animate-slide-in-right">
        <Map />
      </div>

      {/* Projects Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 animate-on-scroll">
        <Projects />
      </div>

      {/* Experts Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 animate-on-scroll" data-animation="animate-slide-in-right">
        <Experts />
      </div>

      {/* Info Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 animate-on-scroll" data-animation="animate-fade-in-slow">
        <Info />
      </div>
    </div>
  );
};

export default Home;
