import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Cities from "../components/Cities";
import Plan from "../components/Plan";
import Map from "../components/Map";
import Projects from "../components/Projects";
import Experts from "../components/Experts";
import Info from "../components/Info";

const Home = () => {
  // Function to add animation class when an element enters the viewport
  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(entry.target.dataset.animation); // Add animation class based on data-animation
        observer.unobserve(entry.target); // Stop observing after animation is triggered
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    // Get all sections that should have the animation
    const sections = document.querySelectorAll(".animate-on-scroll");
    
    sections.forEach((section) => {
      observer.observe(section); // Observe each section
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

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
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 animate-on-scroll" data-animation="animate-slide-in-left">
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
