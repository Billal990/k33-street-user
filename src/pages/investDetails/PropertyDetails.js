import { Progress } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import carouselImg1 from "../../assets/carousel-1.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Carousel.css'
import { NavLink, Outlet, useParams } from "react-router-dom";
import useFetchSingleProperty from "../../hooks/useFetchSingleProperty";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
export default function PropertyDetails() {
  const {propertyId} = useParams();
  const {loading, error, data:property} = useFetchSingleProperty(propertyId);
  
  const onChange = ()=>{}
  const onClickItem = ()=>{}
  const onClickThumb = ()=>{}
 
  const {propertyDetails, financialInfo, rafDetails, markets, investDetails} = property || {};

  // decide what to render 
  if(loading){
    return <Loader/>
  }

  if(error){
    return <Error/>
  }

  return (
    <main className="lg:mx-[5rem] mx-[1rem] bg-[#F7F4F2] pt-[5rem]">
      <div className="bg-[#FFF]">
      <section className="bg-[#0E0E0E] text-[#FFF] py-[2.5rem] md:px-[3rem] px-[2rem] flex md:flex-row flex-col md:gap-0 gap-[2rem] items-center justify-between mb-[5rem]">
         <div>

           <div className="flex md:flex-row flex-col items-center gap-[1rem]">
           <h1 className="md:text-[3rem] text-[2rem] font-bold leading-[3rem]">{propertyDetails?.pName}</h1>
           <p className="h-[4rem] w-[1px] bg-[#B1B1B1] sm:block hidden"></p>
           <p className="text-[1.25rem] text-[#B1B1B1] font-semibold space-x-2">
            <span>{propertyDetails?.location.city}</span>
            <span>{propertyDetails?.location.state}</span>
            <span>{propertyDetails?.location.pinCode}</span>
           </p>
           </div>

           <div className="flex md:flex-row flex-col items-center gap-[1rem] mt-[1.5rem]">
             <div className="flex items-center gap-[0.5rem]">
             <Icon className="text-[2rem]" icon="ion:home" />
             <p>{propertyDetails?.pType}</p>
             </div>
             <Icon icon="ion:ellipse" className="text-[#999999]"/>
             <div className="flex items-center gap-[0.5rem]">
             <Icon className="text-[2rem]" icon="solar:square-arrow-right-up-linear" />
             <p>{propertyDetails?.pArea} SQFT</p>
             </div>
             <Icon icon="ion:ellipse" className="text-[#999999]"/>
             <div className="flex items-center gap-[0.5rem]">
             <Icon className="text-[2rem]" icon="material-symbols:bedroom-child" />
             <p>{propertyDetails?.amenities.beds} BHK</p>
             </div>
           </div>

         </div>

         <button className="py-[1rem] px-[3rem] bg-[#B1B1B1] text-[#000000] font-semibold">Invest</button>
      </section>


        <section>
        <Carousel 
        infiniteLoop axis="horizontal"
        autoPlay={true}
        className="lg:w-[80%] md:w-[90%] w-[100%] mx-auto"
         >
                <div>
                    <img src={carouselImg1} />
                </div>
                <div>
                    <img src={carouselImg1} />
                </div>
                <div>
                    <img src={carouselImg1} />
                </div>
                <div>
                    <img src={carouselImg1} />
                </div>
                <div>
                <img src={carouselImg1} />
                </div>
                <div>
                <img src={carouselImg1} />
                </div>
        </Carousel>
        </section>


        <section className="w-[80%] mx-auto my-[5rem] space-y-[2.5rem]">
          <div className="flex md:flex-row flex-col items-center gap-[2.5rem] justify-between text-[1.25rem] text-center">
          <div className="md:space-y-[1rem] space-y-[1rem]">
            <p>Invested</p>
            <p className="font-semibold">₹{investDetails?.invested}</p>
          </div>

          <div className="md:space-y-[1rem] space-y-[0.3rem]">
            <p>Number of Investors</p>
            <p className="font-semibold">{investDetails?.investors}K</p>
          </div>

          <div className="md:space-y-[1rem] space-y-[0.3rem]">
            <p>Risk Scale</p>
            <p className="text-[#FFA800] font-bold">{rafDetails?.riskScale}</p>
          </div>

          <div className="md:space-y-[1rem] space-y-[0.3rem]">
            <p>Funded</p>
            <p className="font-semibold">{investDetails?.funded}%</p>
          </div>
          </div>

          <div>
            <Progress
              value={investDetails?.funded}
              size="lg"
              className="bg-[#B1B1B1] rounded-none"
              label="Funded"
            />
            </div>
        </section>


        {/* Dynamic Components  */}
        <section>
        <div className="flex justify-center mb-[5rem]">
          <NavLink className="details" to="" end><button className="py-[1rem] md:px-[3rem] px-[1rem] border-[1px] border-gray-500 font-semibold md:text-[1.5rem] text-[1rem]">Basic Details</button></NavLink>
          <NavLink className="details" to="financial-details"><button className="py-[1rem] md:px-[3rem] px-[1rem] border-[1px] border-gray-500 font-semibold md:text-[1.5rem] text-[1rem]">Financial Details</button></NavLink>
        </div>
        <Outlet/>
        </section>
      </div>
    </main>
  )
}
