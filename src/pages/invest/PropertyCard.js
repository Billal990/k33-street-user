import propertyImg1 from "../../assets/property-1.png";
import { Progress } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function PropertyCard({property}) {
  const {slugId, images, propertyDetails, investDetails} = property || {};
  return (
    <Link to={`property-details/${slugId}`}>
      <div className="space-y-[1.5rem] bg-[#FFF] pb-[1rem]">
        <img className="h-[200px] w-full" src={images.thumbnail} alt="Property" />
        <div className="flex justify-between items-center px-[1rem]">
          <div>
            <h3 className="text-[1rem] font-semibold">{propertyDetails.pName}</h3>
            <p className="text-[10px] text-[#B1B1B1] leading-[1rem]">
              <span>{propertyDetails?.location.city}</span>, <span>{propertyDetails?.location.state}</span> <span>{propertyDetails?.location.pinCode}</span>
            </p>
          </div>
          <div>
            <h3 className="text-[1rem] font-semibold">₹{propertyDetails?.purchasePrice}</h3>
            <p className="text-[10px] text-[#B1B1B1] leading-[1rem]">
              ₹{propertyDetails?.purchasePrice / propertyDetails?.pArea} per SQ FT
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center px-[1rem]">
          <div>
            <h3 className="text-[10px] text-[#B1B1B1] leading-[1rem]">Type</h3>
            <p className="text-[14px] font-semibold leading-[22px]">
              {propertyDetails?.pType}
            </p>
          </div>
          <div className="bg-[#B1B1B1] h-[3rem] w-[1px]"></div>
          <div>
            <h3 className="text-[10px] text-[#B1B1B1] leading-[1rem]">
              Floor Area
            </h3>
            <p className="text-[14px] font-semibold leading-[22px]">
              {propertyDetails?.pArea} SQ FT
            </p>
          </div>
          <div className="bg-[#B1B1B1] h-[3rem] w-[1px]"></div>
          <div>
            <h3 className="text-[10px] text-[#B1B1B1] leading-[1rem]">
              Apartment
            </h3>
            <p className="text-[14px] font-semibold leading-[22px]">{propertyDetails?.amenities.beds} BHK</p>
          </div>
        </div>

        <div className="px-[1rem]">
          <Progress
            value={investDetails?.funded}
            size="lg"
            className="bg-[#B1B1B1] rounded-none"
            label="Funded"
          />
        </div>
      </div>
    </Link>
  );
}
