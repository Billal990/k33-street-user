import { Icon } from "@iconify/react";

export default function Amenities({propertyDetails}) {
  return (
    <div className="w-[80%] mx-auto mb-[5rem]">
      <h3 className="text-[2rem] font-semibold leading-[2.3rem] pb-[0.5rem] border-b-[1px] border-gray-900 inline-block mb-[2.5rem]">
        Amenities
      </h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[1.5rem]">
        {/* Amenitiy - 1  */}
        <div className="bg-[#DEF4E4] px-[1rem] py-[1.5rem] space-y-[1rem]">
          <h3 className="text-[2rem] font-semibold leading-[2.3rem] text-center">
            {propertyDetails?.amenities.beds}
          </h3>
          <div className="flex items-center justify-center gap-[0.75rem]">
            <Icon
              className="text-[1.5rem] text-[#24B24B]"
              icon="ic:baseline-bed"
            />
            <span>Beds</span>
          </div>
        </div>

        {/* Amenitiy - 2  */}
        <div className="bg-[#DEF4E4] px-[1rem] py-[1.5rem] space-y-[1rem]">
          <h3 className="text-[2rem] font-semibold leading-[2.3rem] text-center">
            {propertyDetails?.amenities.baths}
          </h3>
          <div className="flex items-center justify-center gap-[0.75rem]">
            <Icon className="text-[1.5rem] text-[#24B24B]" icon="fa:bath" />
            <span>Baths</span>
          </div>
        </div>

        {/* Amenitiy - 3  */}
        <div className="bg-[#DEF4E4] px-[1rem] py-[1.5rem] space-y-[1rem]">
          <h3 className="text-[2rem] font-semibold leading-[2.3rem] text-center">
            {propertyDetails?.amenities.parking}
          </h3>
          <div className="flex items-center justify-center gap-[0.75rem]">
            <Icon
              className="text-[1.5rem] text-[#24B24B]"
              icon="fluent-mdl2:parking-mirrored-solid"
            />
            <span>Parking</span>
          </div>
        </div>

        {/* Amenitiy - 4  */}
        <div className="bg-[#DEF4E4] px-[1rem] py-[1.5rem] space-y-[1rem]">
          <h3 className="text-[2rem] font-semibold leading-[2.3rem] text-center">
            {propertyDetails?.amenities.beds}
          </h3>
          <div className="flex items-center justify-center gap-[0.75rem]">
            <Icon
              className="text-[1.5rem] text-[#24B24B]"
              icon="ic:baseline-bed"
            />
            <span>Bedrooms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
