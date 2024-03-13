import { Icon } from "@iconify/react";
import React from "react";

export default function OfferingDetails({propertyDetails, rafDetails}) {
  return (
    <div className="md:w-[80%] w-[95%] mx-auto">
      <h3 className="text-[2rem] font-semibold leading-[2.3rem] pb-[0.5rem] border-b-[1px] border-gray-900 inline-block mb-[2.5rem]">
        Offering Details
      </h3>

      <div className="border-[1px] border-[#E7E7E7] p-[1.5rem] rounded-md md:space-y-[1.5rem] space-y-[2.5rem] md:text-left text-center">
        <div className="flex md:flex-row flex-col gap-[0.5rem] items-center justify-between">
          <p className="flex items-center gap-[0.5rem] text-[1.25rem]">
            <span>Property Purchase Price</span>
            <Icon
              className="text-[#B1B1B1] text-[1.25rem]"
              icon="zondicons:exclamation-solid"
            />
          </p>
          <p className="font-semibold">₹{propertyDetails?.purchasePrice}</p>
        </div>

        <div className="flex md:flex-row flex-col gap-[0.5rem] items-center justify-between">
          <p className="flex items-center gap-[0.5rem] text-[1.25rem]">
            <span>Closing, Offering & Holding Costs</span>
            <Icon
              className="text-[#B1B1B1] text-[1.25rem]"
              icon="zondicons:exclamation-solid"
            />
          </p>
          <p className="font-semibold">₹{rafDetails?.regHoldingFees}</p>
        </div>

        <div className="flex md:flex-row flex-col gap-[0.5rem] items-center justify-between">
          <p className="flex items-center gap-[0.5rem] text-[1.25rem]">
            <span>Property Improvement and Cash Reserve</span>
            <Icon
              className="text-[#B1B1B1] text-[1.25rem]"
              icon="zondicons:exclamation-solid"
            />
          </p>
          <p className="font-semibold">₹{rafDetails?.reserveCash}</p>
        </div>

        <div className="flex md:flex-row flex-col gap-[0.5rem] items-center justify-between">
          <p className="flex items-center gap-[0.5rem] text-[1.25rem]">
            <span>Asset Management Fee</span>
            <Icon
              className="text-[#B1B1B1] text-[1.25rem]"
              icon="zondicons:exclamation-solid"
            />
          </p>
          <p className="font-semibold">₹{rafDetails?.assetManageFee}</p>
        </div>

        <div className="flex md:flex-row flex-col gap-[0.5rem] items-center justify-between">
          <p className="flex items-center gap-[0.5rem] text-[1.25rem]">
            <span>
              Platform Sourcing Fee{" "}
              <span className="text-gray-500">(one time)</span>{" "}
            </span>
            <Icon
              className="text-[#B1B1B1] text-[1.25rem]"
              icon="zondicons:exclamation-solid"
            />
          </p>
          <p className="font-semibold">₹{rafDetails?.platformFee}</p>
        </div>

        <div className="flex md:flex-row flex-col gap-[0.5rem] items-center justify-between">
          <p className="flex items-center gap-[0.5rem] text-[1.25rem]">
            <span>Hold Period</span>
            <Icon
              className="text-[#B1B1B1] text-[1.25rem]"
              icon="zondicons:exclamation-solid"
            />
          </p>
          <p className="font-semibold">{rafDetails?.holdPeriod}</p>
        </div>
      </div>

      {/* Devider  */}
      <div className="my-[2rem]">
        <div className="border-b-[2px] border-dashed border-[#c5c3c3] w-full"></div>
      </div>

      <div className="border-[1px] border-[#E7E7E7] p-[1.5rem] rounded-md md:space-y-[1.5rem] space-y-[2.5rem] md:text-left text-center mb-[5rem]">
        <div className="flex md:flex-row flex-col gap-[0.5rem] items-center justify-between">
          <p className="flex items-center gap-[0.5rem] text-[1.25rem]">
            <span>Property Loan Amount</span>
            <Icon
              className="text-[#B1B1B1] text-[1.25rem]"
              icon="zondicons:exclamation-solid"
            />
          </p>
          <p className="font-semibold">₹{rafDetails?.loanAmount}</p>
        </div>

        <div className="flex md:flex-row flex-col gap-[0.5rem] items-center justify-between">
          <p className="flex items-center gap-[0.5rem] text-[1.25rem]">
            <span>Interest Rate</span>
            <Icon
              className="text-[#B1B1B1] text-[1.25rem]"
              icon="zondicons:exclamation-solid"
            />
          </p>
          <p className="font-semibold">₹{rafDetails?.interestRate}</p>
        </div>

        <div className="flex md:flex-row flex-col gap-[0.5rem] items-center justify-between">
          <p className="flex items-center gap-[0.5rem] text-[1.25rem]">
            <span>Financing</span>
            <Icon
              className="text-[#B1B1B1] text-[1.25rem]"
              icon="zondicons:exclamation-solid"
            />
          </p>
          <p className="font-semibold">₹{rafDetails?.financing}</p>
        </div>

        <div className="flex md:flex-row flex-col gap-[0.5rem] items-center justify-between">
          <p className="flex items-center gap-[0.5rem] text-[1.25rem]">
            <span>IPO Price per Share</span>
            <Icon
              className="text-[#B1B1B1] text-[1.25rem]"
              icon="zondicons:exclamation-solid"
            />
          </p>
          <p className="font-semibold">₹{rafDetails?.ipo}</p>
        </div>

        <div className="flex md:flex-row flex-col gap-[0.5rem] items-center justify-between">
          <p className="flex items-center gap-[0.5rem] text-[1.25rem]">
            <span>Total Shares</span>
            <Icon
              className="text-[#B1B1B1] text-[1.25rem]"
              icon="zondicons:exclamation-solid"
            />
          </p>
          <p className="font-semibold">₹{rafDetails?.totalShare}</p>
        </div>

        <div className="flex md:flex-row flex-col gap-[0.5rem] items-center justify-between">
          <p className="flex items-center gap-[0.5rem] text-[1.25rem]">
            <span>Equity Raised from Investors</span>
            <Icon
              className="text-[#B1B1B1] text-[1.25rem]"
              icon="zondicons:exclamation-solid"
            />
          </p>
          <p className="font-semibold">₹Demo Amount</p>
        </div>
      </div>
    </div>
  );
}
