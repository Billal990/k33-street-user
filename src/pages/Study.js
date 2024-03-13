import { Icon } from "@iconify/react"
import studyBannerImg from "../assets/study-banner.svg"
import clientImg from "../assets/client-picture.jpeg"
import studyCenterImg from "../assets/study-center.png"
import workingMethodImg1 from "../assets/method-1.svg";
import workingMethodImg2 from "../assets/method-2.svg";
import workingMethodImg3 from "../assets/method-3.svg";
import workingMethodImg4 from "../assets/method-4.svg";
import { AccordionCustomIcon } from "./Home/Accordion";


export default function Study() {
  return (
    <main>
       {/* section - 1 */}
       <section className="lg:px-[4rem] px-[0.5rem] pt-[4rem] pb-[4rem]">
        <div className="bg-[#FFF] mx-auto grid lg:grid-cols-2 grid-cols-1 lg:px-[3rem] lg:py-[7.5rem] py-[1rem] gap-[3rem]  px-[1rem]">
          <div className="flex items-center">
          <div className="lg:mt-[-13px] mt-[3rem]">
            <h1 className="lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] font-bold md:leading-[3.5rem] leading-[2rem]">
              Explore and Expand Your 
              <br/>
              <span className="text-[#24B24B]">Real Estate Expertise.</span>
            </h1>
            <p className="md:text-[1.5rem] text-[1rem] font-semibold md:leading-[2.1rem] leading-[2rem] mt-[1.5rem]">
            Elevate your real estate journey with our expert insights, fostering continuous learning for property investment excellence.
            </p>
          </div>
          </div>
          <div>
            <img
              className="lg:max-w-[600px] w-full"
              src={studyBannerImg}
              alt="home-banner"
            />
          </div>
        </div>
      </section>


       {/* Study Center */}
       <section className="mb-[4rem] lg:mx-[4rem] mx-[1rem] bg-[#FFF] md:p-[3rem] p-[1rem]">
        <h3 className="md:text-[2rem] text-[1.5rem] font-semibold leading-[2.5rem] border-b-[1.5px] border-gray-500 inline-block mb-[3rem]">Study Center</h3>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2.5rem]">

          {/* Study - 1  */}
           <div>
           <div className="relative">
           <img className="w-full" src={studyCenterImg}/>
           <Icon className=" text-[#24B24B] bg-[#fff] rounded-[100%] w-[3rem] h-[3rem] cursor-pointer absolute right-[1.5rem] bottom-[-1.5rem]" icon="majesticons:play-circle" />
           </div>

            <div className="p-[1rem]">
            <h3 className="text-[1.5rem] font-semibold">Basics of Investment</h3>
            <div className="flex items-center gap-[0.5rem] text-[#B1B1B1]">
            <Icon icon="mdi:clock" />
            <span>30 Mins</span>
            </div>
            </div>
           </div>
          {/* Study - 2  */}
           <div>
           <div className="relative">
           <img className="w-full" src={studyCenterImg}/>
           <Icon className=" text-[#24B24B] bg-[#fff] rounded-[100%] w-[3rem] h-[3rem] cursor-pointer absolute right-[1.5rem] bottom-[-1.5rem]" icon="majesticons:play-circle" />
           </div>
            <div className="p-[1rem]">
            <h3 className="text-[1.5rem] font-semibold">Basics of Investment</h3>
            <div className="flex items-center gap-[0.5rem] text-[#B1B1B1]">
            <Icon icon="mdi:clock" />
            <span>30 Mins</span>
            </div>
            </div>
           </div>
          {/* Study - 3  */}
           <div>
           <div className="relative">
           <img className="w-full" src={studyCenterImg}/>
           <Icon className=" text-[#24B24B] bg-[#fff] rounded-[100%] w-[3rem] h-[3rem] cursor-pointer absolute right-[1.5rem] bottom-[-1.5rem]" icon="majesticons:play-circle" />
           </div>
            <div className="p-[1rem]">
            <h3 className="text-[1.5rem] font-semibold">Basics of Investment</h3>
            <div className="flex items-center gap-[0.5rem] text-[#B1B1B1]">
            <Icon icon="mdi:clock" />
            <span>30 Mins</span>
            </div>
            </div>
           </div>

         </div>
      </section>


      {/* section 3 => How it works */}
      <section className="bg-[#FFF] lg:mx-[4rem] mx-[1rem] lg:p-[2.5rem] p-[1rem] mb-[4rem]">
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


      {/* Section 7: Common Questions  */}
      <section className="lg:px-[3rem] px-[1rem] pb-[7.5rem] bg-[#FFF] md:mx-[4rem] mx-[1rem] py-[4rem]">
      <div className="pb-[3rem]">
          <h3 className="text-[2rem] font-semibold leading-[2.3rem] pb-[0.5rem] border-b-[1px] border-gray-900 inline-block">
          FAQ
          {/* <p className="w-[100%] h-[1px] bg-[#000]"></p> */}
          </h3>
        </div>
        <AccordionCustomIcon/>
      </section>

      <div className="py-[1rem]"></div>
    </main>
  )
}
