import { Icon } from "@iconify/react";
import React from "react";

export default function Documents() {
  return (
    <div className="w-[80%] mx-auto mb-[5rem]">
      <h3 className="text-[2rem] font-semibold leading-[2.3rem] pb-[0.5rem] border-b-[1px] border-gray-900 inline-block mb-[2.5rem]">
        Documents
      </h3>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-[2.5rem] gap-y-[1.5rem]">
        <div className="flex justify-between items-center">
          <p className="text-[1.25rem] leading-[1.75rem]">Legal Documents</p>
          <p className="flex items-center gap-[1rem] text-[1.5rem] text-[#24B24B]">
            <Icon className="cursor-pointer" icon="ph:eye-fill" />
            <Icon className="cursor-pointer" icon="f7:arrow-down-to-line-alt" />
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-[1.25rem] leading-[1.75rem]">
            Disclosure Documents
          </p>
          <p className="flex items-center gap-[1rem] text-[1.5rem] text-[#24B24B]">
            <Icon className="cursor-pointer" icon="ph:eye-fill" />
            <Icon className="cursor-pointer" icon="f7:arrow-down-to-line-alt" />
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-[1.25rem] leading-[1.75rem]">
            Property Management Agreement
          </p>
          <p className="flex items-center gap-[1rem] text-[1.5rem] text-[#24B24B]">
            <Icon className="cursor-pointer" icon="ph:eye-fill" />
            <Icon className="cursor-pointer" icon="f7:arrow-down-to-line-alt" />
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-[1.25rem] leading-[1.75rem]">
            Financial Statements
          </p>
          <p className="flex items-center gap-[1rem] text-[1.5rem] text-[#24B24B]">
            <Icon className="cursor-pointer" icon="ph:eye-fill" />
            <Icon className="cursor-pointer" icon="f7:arrow-down-to-line-alt" />
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-[1.25rem] leading-[1.75rem]">
            Property Valuation Reports
          </p>
          <p className="flex items-center gap-[1rem] text-[1.5rem] text-[#24B24B]">
            <Icon className="cursor-pointer" icon="ph:eye-fill" />
            <Icon className="cursor-pointer" icon="f7:arrow-down-to-line-alt" />
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-[1.25rem] leading-[1.75rem]">
            Property Inspection Reports
          </p>
          <p className="flex items-center gap-[1rem] text-[1.5rem] text-[#24B24B]">
            <Icon className="cursor-pointer" icon="ph:eye-fill" />
            <Icon className="cursor-pointer" icon="f7:arrow-down-to-line-alt" />
          </p>
        </div>
      </div>
    </div>
  );
}
