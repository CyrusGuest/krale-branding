import React from "react";
import { Link } from "react-router-dom";
import MobileProductCard from "./MobileProductCard";

const DesktopExplore = () => {
  return (
    <div className="hidden md:flex py-20 pl-6">
      <div className="my-auto max-w-3xl w-2/5 mx-auto">
        <h1 className="text-5xl md:text-4xl lg:text-5xl leading-normal gradient-text mr-4">
          Explore all the different advertising and brand services we offer.
        </h1>
        <h3 className="text-2xl leading-normal text-[#999999] mr-16 mt-8">
          Social media,{" "}
          <span className="gradient-text font-bold">brand identity</span>,
          advertisement, and more! We've got it all.
        </h3>

        <Link to="/packages">
          <button className="text-2xl mobile-btn mt-8 gradient-background text-white glow-on-hover bg-white">
            view more packages
          </button>
        </Link>
      </div>
      <div className="mx-auto flex flex-col justify-center">
        <MobileProductCard topCard={true} />
        <MobileProductCard />
      </div>
    </div>
  );
};

export default DesktopExplore;
