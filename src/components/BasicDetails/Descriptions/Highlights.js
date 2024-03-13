import React from "react";

export default function Highlights({propertyDetails}) {
  return (
    <div>
      <h3 className="text-[2rem] font-semibold leading-[2.3rem] pb-[0.5rem] border-b-[1px] border-gray-900 inline-block mb-[2.5rem]">
        Highlights
      </h3>
      <p>{propertyDetails?.highlights}</p>
    </div>
  );
}
