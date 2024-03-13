import { Icon } from "@iconify/react";
import React from "react";

export default function Dividends({financialInfo, investDetails}) {
  return (
    <div className="mb-[5rem]">
      <h3 className="text-[2rem] font-semibold leading-[2.3rem] pb-[0.5rem] border-b-[1px] border-gray-900 inline-block mb-[2.5rem]">
        Anticipated Annual Dividends
      </h3>

      <div className="flex md:flex-row flex-col md:gap-0 gap-[2rem] justify-between items-center mb-[2rem]">
        <div className="text-[1.25rem] border-[1px] border-[#E7E7E7] p-[1.5rem] rounded-md">
          <div>
            <p className="flex items-center gap-[0.75rem] mb-[0.5rem]">
              <span>Annual Rent</span>
              <Icon
                className="text-[#B1B1B1]"
                icon="zondicons:exclamation-solid"
              />
            </p>
            <p className="font-bold">₹{financialInfo?.annualRent}</p>
          </div>

          <div className="text-[#B1B1B1] flex items-center my-[2rem]">
            --------------------
            <Icon
              className="text-[#0E0E0E] mx-[5px] text-[1.5rem]"
              icon="zondicons:minus-solid"
            />
            --------------------
          </div>

          <div>
            <p className="flex items-center gap-[0.75rem] mb-[0.5rem]">
              <span>
                Operating, Financing, Legal & <br /> Management Expenses
              </span>
              <Icon
                className="text-[#B1B1B1]"
                icon="zondicons:exclamation-solid"
              />
            </p>
            <p className="font-bold">₹{financialInfo.expenses}</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[0.3rem]">
          <div className="w-[1px] h-[8.25rem] border-dashed border-[#E6E6E6] border-l-[2px]"></div>
          <Icon
            className="text-[#000] text-[1.5rem]"
            icon="akar-icons:equal-fill"
          />
          <div className="w-[1px] h-[8.25rem] border-dashed border-[#E6E6E6] border-l-[2px]"></div>
        </div>

        <div className="text-[1.25rem] border-[1px] border-[#E7E7E7] p-[1.5rem] rounded-md self-stretch flex flex-col justify-center">
          <p className="flex items-center gap-[0.75rem] mb-[0.5rem]">
            <span>Cash Flow / Dividend</span>
            <Icon
              className="text-[#B1B1B1]"
              icon="zondicons:exclamation-solid"
            />
          </p>
          <p className="font-bold">₹{financialInfo?.totalDividend}</p>
        </div>

        <div className="flex flex-col items-center gap-[0.3rem]">
          <div className="w-[1px] h-[8.25rem] border-dashed border-[#E6E6E6] border-l-[2px]"></div>
          <Icon
            className="text-[#000] text-[1.5rem]"
            icon="f7:divide-circle-fill"
          />
          <div className="w-[1px] h-[8.25rem] border-dashed border-[#E6E6E6] border-l-[2px]"></div>
        </div>

        <div className="text-[1.25rem] border-[1px] border-[#E7E7E7] p-[1.5rem] rounded-md self-stretch flex flex-col justify-center">
          <p className="flex items-center gap-[0.75rem] mb-[0.5rem]">
            <span>Raise Amount</span>
            <Icon
              className="text-[#B1B1B1]"
              icon="zondicons:exclamation-solid"
            />
          </p>
          <p className="font-bold">₹{investDetails?.invested}</p>
        </div>
      </div>
      {/* Bottom Border = */}
      <div className="flex items-center">
        <div className="border-b-[2px] border-dashed border-[#c5c3c3] w-[34rem]"></div>
        <Icon
          className="md:text-[1.5rem] text-[3rem] text-[#000] mx-[0.3rem]"
          icon="akar-icons:equal-fill"
        />
        <div className="border-b-[2px] border-dashed border-[#c5c3c3] w-[34rem]"></div>
      </div>

      {/* Result of Calculation  */}
      <div className="bg-[#DEF4E4] rounded-md p-[1.5rem] text-[1.25rem] mt-[1.5rem] mb-[5rem]">
        <p className="flex gap-[0.5rem] items-center mb-[0.5rem]">
          <span>Anticipated Annual Dividend / Cash Flow</span>
          <Icon
            className="text-[#B1B1B1] text-[1.25rem]"
            icon="zondicons:exclamation-solid"
          />
        </p>
        <p className="font-semibold">2.88%</p>
      </div>
    </div>
  );
}
