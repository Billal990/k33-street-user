import { Icon } from "@iconify/react";
import React from "react";

export default function PropertyMetrics({propertyDetails}) {
  return (
    <div className="flex md:flex-row flex-col md:gap-0 gap-[2rem] justify-between items-center mb-[5rem] border-[1px] border-[#E6E6E6] p-[1.5rem] rounded-md">
      <div className="text-[1.25rem]">
        <p className="flex items-center gap-[0.75rem] mb-[0.5rem]">
          <span>Purchase Price</span>
          <Icon className="text-[#B1B1B1]" icon="zondicons:exclamation-solid" />
        </p>
        <p className="font-bold">₹{propertyDetails?.purchasePrice}</p>
      </div>

      <div className="w-[1px] h-[4.25rem] bg-[#E6E6E6]"></div>

      <div className="text-[1.25rem]">
        <p className="flex items-center gap-[0.75rem] mb-[0.5rem]">
          <span>Anticipated Rent / Mo</span>
          <Icon className="text-[#B1B1B1]" icon="zondicons:exclamation-solid" />
        </p>
        <p className="font-bold">{propertyDetails?.anticipatedRent}</p>
      </div>

      <div className="w-[1px] h-[4.25rem] bg-[#E6E6E6]"></div>

      <div className="text-[1.25rem]">
        <p className="flex items-center gap-[0.75rem] mb-[0.5rem]">
          <span>Property Leverage</span>
          <Icon className="text-[#B1B1B1]" icon="zondicons:exclamation-solid" />
        </p>
        <p className="font-bold">
          0% <span className="text-[0.75rem]">Refinance Candidate</span>
        </p>
      </div>
    </div>
  );
}
