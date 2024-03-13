import homeBannerImg from "../../assets/home-banner.png"
import howWorksImg1 from "../../assets/HIW-1.png";
import howWorksImg2 from "../../assets/HIW-2.png";
import howWorksImg3 from "../../assets/HIW-3.png";
import howWorksImg4 from "../../assets/HIW-4.png";

import workingMethodImg1 from "../../assets/method-1.svg";
import workingMethodImg2 from "../../assets/method-2.svg";
import workingMethodImg3 from "../../assets/method-3.svg";
import workingMethodImg4 from "../../assets/method-4.svg";


import propertyImg1 from "../../assets/property-1.png";
import propertyImg2 from "../../assets/property-2.png";
import propertyImg3 from "../../assets/property-3.png";

import investImg1 from "../../assets/invest-1.png";
import investImg2 from "../../assets/invest-2.png";
import investImg3 from "../../assets/invest-3.png";

import aboutImg from "../../assets/about.png";

import quotationImg from "../../assets/quotation.png";

import clientImg from "../../assets/client-1.png";

import { Progress } from "@material-tailwind/react";
import "./Home.css";
import { Icon } from "@iconify/react";
import { AccordionCustomIcon } from './Accordion';
export default function Home() {
  return (
    <div>
      {/* section - 1 */}
      <section>
        <div className="flex lg:flex-row flex-col-reverse justify-between items-center lg:px-[3rem] py-[7.5rem]  px-[1rem]">
          <div className="lg:mt-[-13px] mt-[3rem]">
            <h1 className="lg:text-[2.5rem] md:text-[2.5rem] text-[1.5rem] font-bold md:leading-[3.5rem] leading-[2rem]">
              <span className="h-[43px] w-[4px] bg-[#24B24B] inline-block ml-[-17px]"></span>{" "}
              Unlock{" "}
              <span className="text-[#24B24B]">Real Estate Investment</span>{" "}
              <br /> Opportunities, Piece by Piece.
            </h1>
            <p className="md:text-[1.5rem] text-[1rem] font-semibold md:leading-[2.1rem] leading-[2rem] mt-[1.5rem]">
              Invest in diverse properties, slice by slice. <br /> Your
              portfolio, your way.
            </p>
            <div className="mb-[1.5rem]">
              <button className="bg-[#24B24B] font-semibold py-[1rem] px-[4rem] mt-[2.5rem]">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <img
              className="lg:max-w-[600px] w-full"
              src={homeBannerImg}
              alt="home-banner"
            />
          </div>
        </div>
      </section>

      {/* section - 2  */}
      <section className="flex md:flex-row flex-col lg:gap-0 gap-10 justify-between items-center text-center text-[#FFFFFF] bg-[#24B24B] px-[5rem] py-[5rem] mb-[7.5rem]">
        <div>
          <h3 className="font-semibold lg:text-[4rem] text-[3rem] lg:mb-[1.5rem] mb-[0rem]">
            ₹5L
          </h3>
          <p className="text-[1.5rem]">Dividends Paid</p>
        </div>

        <div>
          <h3 className="font-semibold lg:text-[4rem] text-[3rem] lg:mb-[1.5rem] mb-[0rem]">
            10K
          </h3>
          <p className="text-[1.5rem]">Registered Investors</p>
        </div>

        <div>
          <h3 className="font-semibold lg:text-[4rem] text-[3rem] lg:mb-[1.5rem] mb-[0rem]">
            ₹5Cr
          </h3>
          <p className="text-[1.5rem]">Assets under Value</p>
        </div>
      </section>

      {/* section 3  */}
      <section className="bg-[#FFF] lg:mx-[4rem] mx-[1rem] lg:p-[2.5rem] p-[1rem] mb-[7.5rem]">
        <div className="pb-[3rem]">
          <h3 className="text-[2rem] font-semibold leading-[2.3rem] pb-[0.5rem] border-b-[1px] border-gray-900 inline-block">
            How it Works
          </h3>
          {/* <p className="w-[16.8rem] h-[1px] bg-[#000]"></p> */}
        </div>

        {/* working methods container  */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[2.5rem]">
          <div>
            <img
              className="w-full h-[10rem]"
              src={workingMethodImg1}
              alt="how works"
            />
            <div className="pt-[1.5rem] pb-[1rem]">
              <h3 className="text-[1.5rem] font-semibold leading-[2.3rem] pb-[0.5rem] border-b-[1px] border-gray-900 inline-block">
                Sign Up for Access
              </h3>
              {/* <p className="w-[16.8rem] h-[1px] bg-[#000]"></p> */}
            </div>
            <p>
              Begin your investment journey by creating an account. Simply fill
              in basic details to register and gain access to our platform's
              wealth of investment opportunities.
            </p>
          </div>

          <div>
            <img
              className="w-full h-[10rem]"
              src={workingMethodImg2}
              alt="how works"
            />
            <div className="pt-[1.5rem] pb-[1rem]">
              <h3 className="text-[1.5rem] font-semibold leading-[2.3rem] pb-[0.5rem] border-b-[1px] border-gray-900 inline-block">
                KYC Verification
              </h3>
              {/* <p className="w-[15.75rem] h-[1px] bg-[#000]"></p> */}
            </div>
            <p>
              Complete your Know Your Customer (KYC) verification process
              seamlessly. Provide necessary identification details and financial
              information securely for compliance and start exploring
              investments.
            </p>
          </div>

          <div>
            <img
              className="w-full h-[10rem]"
              src={workingMethodImg3}
              alt="how works"
            />
            <div className="pt-[1.5rem] pb-[1rem]">
              <h3 className="text-[1.5rem] font-semibold leading-[2.3rem] pb-[0.5rem] border-b-[1px] border-gray-900 inline-block">
                Browse Properties
              </h3>
              {/* <p className="w-[16.8rem] h-[1px] bg-[#000]"></p> */}
            </div>
            <p>
              Dive into our curated selection of properties. Browse through a
              range of real estate offerings, from residential to commercial,
              and discover investment options tailored to your preferences.
            </p>
          </div>

          <div>
            <img
              className="w-full h-[10rem]"
              src={workingMethodImg4}
              alt="how works"
            />
            <div className="pt-[1.5rem] pb-[1rem]">
              <h3 className="text-[1.5rem] font-semibold leading-[2.3rem] pb-[0.5rem] border-b-[1px] border-gray-900 inline-block">
                Invest
              </h3>
              {/* <p className="w-[8.87rem] h-[1px] bg-[#000]"></p> */}
            </div>
            <p>
              Choose your preferred property and invest confidently. Utilize our
              user-friendly platform to make secure investments, ensuring your
              financial future aligns with your investment goals.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4  */}
      <section className="lg:px-[5.5rem] px-[1rem] mb-[7.5rem]">
        <div>
          <div className="pb-[1.5rem] flex md:flex-row flex-col justify-between items-center">
            <h3 className="text-[2rem] font-semibold leading-[2.37rem] md:mb-0 mb-[1rem]">
              Property Listings
            </h3>
            <button className="bg-[#24B24B] px-[3rem] py-[1rem] font-semibold">
              Browse all
            </button>
          </div>
          <p className="text-[1.25rem]">
            Our listings are spread across Bangalore, Mumbai, Hyderabad and
            Pune.
          </p>
        </div>

        {/* Property list container  */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-[2rem] mt-[3.68rem]">
          {/* ========Property-1========= */}
          <div className="space-y-[1.5rem] bg-[#FFF] pb-[1rem]">
            <img className="h-[200px] w-full" src={propertyImg1} alt="Property" />
            <div className="flex justify-between items-center px-[1rem]">
              <div>
                <h3 className="text-[1rem] font-semibold">Hallmark Skyrena</h3>
                <p className="text-[10px] text-[#B1B1B1] leading-[1rem]">Narsingi, Hyderabad, Telangana 500075</p>
              </div>
              <div>
                <h3 className="text-[1rem] font-semibold">₹1,50,00,000</h3>
                <p className="text-[10px] text-[#B1B1B1] leading-[1rem]">₹10,190 per SQ FT</p>
              </div>
            </div>

            <div className="flex justify-between items-center px-[1rem]">
              <div>
                <h3 className="text-[10px] text-[#B1B1B1] leading-[1rem]">Type</h3>
                <p className="text-[14px] font-semibold leading-[22px]">Apartment</p>
              </div>
              <div className="bg-[#B1B1B1] h-[3rem] w-[1px]"></div>
              <div>
                <h3 className="text-[10px] text-[#B1B1B1] leading-[1rem]">Floor Area</h3>
                <p className="text-[14px] font-semibold leading-[22px]">1472 SQ FT</p>
              </div>
              <div className="bg-[#B1B1B1] h-[3rem] w-[1px]"></div>
              <div>
                <h3 className="text-[10px] text-[#B1B1B1] leading-[1rem]">Apartment</h3>
                <p className="text-[14px] font-semibold leading-[22px]">2 BHK</p>
              </div>
            </div>

            <div className="px-[1rem]">
            <Progress
              value={90}
              size="lg"
              className="bg-[#B1B1B1] rounded-none"
              label="Funded"
            />
            </div>
          </div>

          {/* ========Property-2========= */}
          <div className="space-y-[1.5rem] bg-[#FFF] pb-[1rem]">
            <img className="h-[200px] w-full" src={propertyImg2} alt="Property" />
            <div className="flex justify-between items-center px-[1rem]">
              <div>
                <h3 className="text-[1rem] font-semibold">Hallmark Skyrena</h3>
                <p className="text-[10px] text-[#B1B1B1] leading-[1rem]">Narsingi, Hyderabad, Telangana 500075</p>
              </div>
              <div>
                <h3 className="text-[1rem] font-semibold">₹1,50,00,000</h3>
                <p className="text-[10px] text-[#B1B1B1] leading-[1rem]">₹10,190 per SQ FT</p>
              </div>
            </div>

            <div className="flex justify-between items-center px-[1rem]">
              <div>
                <h3 className="text-[10px] text-[#B1B1B1] leading-[1rem]">Type</h3>
                <p className="text-[14px] font-semibold leading-[22px]">Apartment</p>
              </div>
              <div className="bg-[#B1B1B1] h-[3rem] w-[1px]"></div>
              <div>
                <h3 className="text-[10px] text-[#B1B1B1] leading-[1rem]">Floor Area</h3>
                <p className="text-[14px] font-semibold leading-[22px]">1472 SQ FT</p>
              </div>
              <div className="bg-[#B1B1B1] h-[3rem] w-[1px]"></div>
              <div>
                <h3 className="text-[10px] text-[#B1B1B1] leading-[1rem]">Apartment</h3>
                <p className="text-[14px] font-semibold leading-[22px]">2 BHK</p>
              </div>
            </div>

            <div className="px-[1rem]">
            <Progress
              value={90}
              size="lg"
              className="bg-[#B1B1B1] rounded-none"
              label="Funded"
            />
            </div>
          </div>

          {/* ========Property-3========= */}
          <div className="space-y-[1.5rem] bg-[#FFF] pb-[1rem]">
            <img className="h-[200px] w-full" src={propertyImg3} alt="Property" />
            <div className="flex justify-between items-center px-[1rem]">
              <div>
                <h3 className="text-[1rem] font-semibold">Hallmark Skyrena</h3>
                <p className="text-[10px] text-[#B1B1B1] leading-[1rem]">Narsingi, Hyderabad, Telangana 500075</p>
              </div>
              <div>
                <h3 className="text-[1rem] font-semibold">₹1,50,00,000</h3>
                <p className="text-[10px] text-[#B1B1B1] leading-[1rem]">₹10,190 per SQ FT</p>
              </div>
            </div>

            <div className="flex justify-between items-center px-[1rem]">
              <div>
                <h3 className="text-[10px] text-[#B1B1B1] leading-[1rem]">Type</h3>
                <p className="text-[14px] font-semibold leading-[22px]">Apartment</p>
              </div>
              <div className="bg-[#B1B1B1] h-[3rem] w-[1px]"></div>
              <div>
                <h3 className="text-[10px] text-[#B1B1B1] leading-[1rem]">Floor Area</h3>
                <p className="text-[14px] font-semibold leading-[22px]">1472 SQ FT</p>
              </div>
              <div className="bg-[#B1B1B1] h-[3rem] w-[1px]"></div>
              <div>
                <h3 className="text-[10px] text-[#B1B1B1] leading-[1rem]">Apartment</h3>
                <p className="text-[14px] font-semibold leading-[22px]">2 BHK</p>
              </div>
            </div>

            <div className="px-[1rem]">
            <Progress
              value={90}
              size="lg"
              className="bg-[#B1B1B1] rounded-none"
              label="Funded"
            />
            </div>
          </div>
        </div>
      </section>


       {/* section 5  */}
       <section className="bg-[#FFF] lg:mx-[4rem] mx-[1rem] p-[2.5rem] mb-[7.5rem]">
        <div className="pb-[3rem]">
          <h3 className="text-[2rem] font-semibold leading-[2.3rem] pb-[0.5rem] border-b-[1px] border-gray-900 inline-block">
          Why Invest?
          </h3>
          {/* <p className="w-[16.8rem] h-[1px] bg-[#000]"></p> */}
        </div>

        {/* working methods container  */}
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-[4rem] gap-3">
          <div>
            <img className="w-full" src={investImg1}/>
          </div>
          <div>
            <img className="w-full" src={investImg2}/>
          </div>
          <div>
            <img className="w-full" src={investImg3}/>
          </div>
        </div>
      </section>


      {/* Section 7: About Us  */}
      <section className="mb-[7.5rem] lg:px-[4rem] px-[1rem]">
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-[3rem] items-center">
        <img src={aboutImg}/>
          <div className="bg-[#FFF] p-[4rem] w-full lg:ml-[-130px]">
          <div className="pb-[3rem]">
          <h3 className="text-[2rem] font-semibold leading-[2.3rem] pb-[0.5rem] border-b-[1px] border-gray-900 inline-block">
          About Us
          </h3>
          {/* <p className="md:w-[16.8rem] w-[10rem] h-[1px] bg-[#000]"></p> */}
        </div>
        <p className="pb-[2.5rem]">“At the heart of our existence lies a profound commitment—to empower dreams, inspire financial growth, and democratize the world of investment. Our story is a tapestry woven with ambition, resilience, and an unwavering belief in inclusivity. Born from the aspirations of visionary investors, we embarked on a transformative expedition, driven by a singular goal—to shatter barriers and offer every individual the keys to prosperity through investment empowerment...</p>
        <button className="bg-[#24B24B] px-[3rem] py-[1rem] font-semibold">
              Learn More
        </button>
          </div>
        </div>
      </section>


       {/* Section 6:  Testimonials */}
       <section className="mb-[7.5rem] lg:mx-2">
         <div className="flex lg:flex-row flex-col items-center gap-[0.5rem]">
          <div 
          className="flex justify-center items-center md:min-w-[25rem] w-full min-h-[300px] bg-cover bg-center"
          style={{backgroundImage: `url(${quotationImg})`}}
          >
            <div className="text-center space-y-[1.5rem] text-[#FFF] px-[3.1rem]">
              <h3 className="text-[2rem] font-semibold">Testimonials</h3>
              <p>Experience success stories that showcase how fractional investment has transformed portfolios on our platform.</p>
            </div>
          </div>
          {/* Client Reviews Container  */}
          <div className="flex lg:flex-row flex-col gap-[3rem]">
            {/* Review -1  */}
          <div className="flex lg:flex-row flex-col-reverse items-center gap-[1.5rem] p-[2.5rem] bg-[#FFF] lg:h-[250px]">
             <div className="space-y-[1rem]">
             <Icon icon="ri:double-quotes-l" className="text-[3rem] text-[#24B24B]"/>
             <p className="leading-[1.37rem]">"Absolutely impressed with the opportunities this platform provides. Fractional investments made entering the real estate market seamless. A great way to build a varied portfolio."</p>
             <h3 className="text-[1.25rem] font-bold">James K.</h3>
             </div>
             <img className="w-[5.75rem] h-[5.75rem]" src={clientImg} alt="client image"/>
          </div>
            {/* Review -2  */}
          <div className="flex lg:flex-row flex-col-reverse items-center gap-[1.5rem] p-[2.5rem] bg-[#FFF] lg:h-[250px]">
             <div className="space-y-[1rem]">
             <Icon icon="ri:double-quotes-l" className="text-[3rem] text-[#24B24B]"/>
             <p className="leading-[1.37rem]">"Absolutely impressed with the opportunities this platform provides. Fractional investments made entering the real estate market seamless. A great way to build a varied portfolio."</p>
             <h3 className="text-[1.25rem] font-bold">James K.</h3>
             </div>
             <img className="w-[5.75rem] h-[5.75rem]" src={clientImg} alt="client image"/>
          </div>
          </div>

         </div>
      </section>


      {/* Section 7: Common Questions  */}
      <section className="lg:px-[3rem] px-[1rem] pb-[7.5rem]">
      <div className="pb-[3rem]">
          <h3 className="text-[2rem] font-semibold leading-[2.3rem] pb-[0.5rem] border-b-[1px] border-gray-900 inline-block">
          Common Questions
          {/* <p className="w-[100%] h-[1px] bg-[#000]"></p> */}
          </h3>
        </div>
        <AccordionCustomIcon/>
      </section>
    </div>
  );
}
