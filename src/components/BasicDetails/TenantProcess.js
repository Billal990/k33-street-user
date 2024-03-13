import { Icon } from "@iconify/react";
import moment from "moment";

export default function TenantProcess({propertyDetails}) {
  return (
    <div className="w-[80%] mx-auto my-[5rem]">
      <h3 className="text-[2rem] font-semibold leading-[2.3rem] pb-[0.5rem] border-b-[1px] border-gray-900 inline-block mb-[2.5rem]">
        Tenant Leasing Process
      </h3>
      <p>{propertyDetails?.rentalProcess}</p>
      <p className="pb-[2.5rem]">
        For more details on each status,{" "}
        <span className="text-[#24B24B] underline">
          check out the different rental statuses here.
        </span>{" "}
      </p>

      <div className="flex md:flex-row flex-col items-center lg:gap-[5rem] md:gap-[2rem] gap-[1rem] border-[1px] border-[#e4e2e2] p-[2.5rem] rounded-md lg:w-[70%] md:w-[90%] w-full md:text-left text-center">
        <div>
          <p className="flex items-center gap-[0.75rem] mb-[1rem]">
            <span>Rental Status</span>
            <Icon
              className="text-[#B1B1B1]"
              icon="zondicons:exclamation-solid"
            />
          </p>
          <p className="text-[1.25rem] font-semibold">
            {propertyDetails?.rentStatus}
          </p>
        </div>
        <div className="bg-[#E6E6E6] h-[5rem] w-[1px] md:block hidden"></div>
        <div>
          <p className="flex items-center gap-[0.75rem] mb-[1rem]">
            <span>Anticipated First Dividend Rate</span>
            <Icon
              className="text-[#B1B1B1]"
              icon="zondicons:exclamation-solid"
            />
          </p>
          <p className="text-[1.25rem] font-semibold">
            {moment(propertyDetails?.dividendDate).format("MMM Do YY")}
          </p>
        </div>
      </div>
    </div>
  );
}
