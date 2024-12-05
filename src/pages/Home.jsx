import React from "react";
import Banner from "../components/Banner";
import Cities from "../components/Cities";
import Plan from "../components/Plan";
import Map from "../components/Map";
import Projects from "../components/Projects";
import Experts from "../components/Experts";
import Info from "../components/Info";

const Home = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* Banner Section */}
      <div className="w-full">
        <Banner />
      </div>

      {/* Cities Section */}
      <div className="w-full">
        <Cities />
      </div>

      {/* Plan Section */}
      <div className="w-full">
        <Plan />
      </div>

      {/* Map Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
        <Map />
      </div>

      {/* Projects Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
        <Projects />
      </div>

      {/* Experts Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
        <Experts />
      </div>

      {/* Info Section */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
        <Info />
      </div>
    </div>
  );
};

export default Home;
