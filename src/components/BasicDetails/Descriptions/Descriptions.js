import React from "react";
import About from "./About";
import Highlights from "./Highlights";

export default function Descriptions({propertyDetails}) {
  return (
    <div className="bg-[#DEF4E4]">
      <div className="w-[80%] mx-auto py-[3rem] text-[1.25rem]">
        {/* About  */}
        <About propertyDetails={propertyDetails}/>

        {/* Highlights  */}
        <Highlights propertyDetails={propertyDetails}/>
      </div>
    </div>
  );
}
