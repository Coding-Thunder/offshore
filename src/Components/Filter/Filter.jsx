import React from "react";
import LandingFilter from "../LandingFilter/LandingFilter";
import LaunchFilter from "../LaunchFilter/LaunchFilter";
import YearFilter from "../YearFilter/YearFilter";

const Filter = () => {
  return (
    <div className="md:w-11/12 lg:w-4/12 lg:mt-3   xl:w-60 sm:w-11/12 h-fit bg-white p-3 mb-4">
      <YearFilter />
      <LaunchFilter />
      <LandingFilter />
    </div>
  );
};

export default Filter;
