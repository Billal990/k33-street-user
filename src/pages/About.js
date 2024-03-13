import { Icon } from "@iconify/react";
import aboutBannerImg from "../assets/about-banner.jpg";
import aboutImg from "../assets/about.png";
import quotationMark from "../assets/quotation-mark.png"
import clientImg from "../assets/client-picture.jpeg"
import partnerImg from "../assets/partner.svg"
import { Input, Textarea } from "@material-tailwind/react";
export default function About() {
  return (
    <main>
      <section className="pb-[7.5rem]">
        <div
          className="text-center bg-cover min-h-[30rem] text-[#FFFFFF]"
          style={{ backgroundImage: `url(${aboutBannerImg})` }}
        >
          <div className="bg-[#00000086] w-full h-[30rem] flex justify-center items-center">
            <div>
              <h3 className="md:text-[3rem] text-[2rem] font-bold leading-[5rem]">About</h3>
              <p>Unveiling Our Journey in Investment Empowerment</p>
            </div>
          </div>
        </div>

        <div className="md:p-[4rem] p-[1rem] text-justify md:w-[80%] bg-[#FFF] mx-auto md:mt-[-5.5rem]">
          <h3 className="md:text-[2rem] text-[1.5rem] md:leading-[3rem] leading-[2rem] font-semibold border-b-[1.5px] mb-[1.5rem] border-gray-600 inline-block">A Journey of Property Ventures</h3>
          <p className="mb-[1rem]">“Our venture into the dynamic world of real estate began with a passion for property and a vision to redefine the industry. From our roots in property sales to venturing into astute property investments, our trajectory within the real estate landscape has been marked by innovation and a relentless pursuit of investment excellence.</p>
          <p>riven by a vision to transcend traditional property transactions, we swiftly evolved into astute investors, meticulously curating a portfolio that reflects our dedication to identifying assets with unparalleled potential. What transpired was a journey of strategic acquisitions, smart investments, and a growing portfolio of properties—all tailored to offer investors access to promising real estate opportunities. Today, standing at the nexus of real estate innovation and investment empowerment, we continue to pave the way for a new narrative in property ventures, inviting you to join us in this journey of redefining real estate investments.</p>
        </div>
      </section>

       {/* Section 7: About Us  */}
       <section className="pb-[7.5rem] lg:px-[4rem] px-[1rem]">
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-[3rem] items-center">
        <img src={aboutImg}/>
          <div className="bg-[#FFF] p-[2rem] w-full lg:ml-[-130px]">
          <div className="pb-[3rem]">
          <h3 className="md:text-[2rem] text-[1.5rem] font-semibold leading-[2.3rem] pb-[0.5rem] border-b-[1px] border-gray-900 inline-block">
          Our Journey in Investment
          </h3>
          {/* <p className="md:w-[16.8rem] w-[10rem] h-[1px] bg-[#000]"></p> */}
        </div>
        <p 
        className="mb-[1rem] text-justify bg-no-repeat pl-5 pt-5"
        style={{backgroundImage:`url(${quotationMark})`}}
        >“At the heart of our existence lies a profound commitment—to empower dreams, inspire financial growth, and democratize the world of investment. Our story is a tapestry woven with ambition, resilience, and an unwavering belief in inclusivity. Born from the aspirations of visionary investors, we embarked on a transformative expedition, driven by a singular goal—to shatter barriers and offer every individual the keys to prosperity through investment empowerment...</p>
        <p className="text-justify  pl-5">From the first seeds of an idea to the thriving ecosystem we've cultivated today, our narrative reverberates with moments of innovation, trust-building, and the relentless pursuit of excellence. It's a tale etched with the journeys of countless investors who found their path to financial freedom within our platform—a testament to our dedication to fostering a community grounded in trust, transparency, and boundless opportunity. Join us as we continue to script new chapters in the saga of investment democratization and empowerment.”</p>
          </div>
        </div>
      </section>


      {/* Video Testimonials */}
      <section className="mb-[7.5rem] lg:mx-[4rem] mx-[1rem] bg-[#DEF4E4] p-[3rem]">
        <h3 className="md:text-[2rem] text-[1.5rem] font-semibold leading-[2.5rem] border-b-[1.5px] border-gray-500 inline-block mb-[3rem]">Video Testimonials</h3>
         <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[2.5rem]">

          {/* Review - 1  */}
           <div>

           <div className="relative">
           <img className="w-full" src={clientImg}/>
           <div className="absolute bg-[#000000a1] w-full h-full top-0 flex justify-center items-center">
           <Icon className="text-[4rem] text-[#fff] cursor-pointer" icon="gridicons:play" />
           </div>
           </div>

            <div className="p-[1rem]">
            <h3 className="md:text-[2rem] text-[1.5rem] font-semibold">Manikanta</h3>
            <div className="flex gap-[0.2rem]">
            <Icon className="text-[#FFB400] text-[1.5rem]" icon="material-symbols:star" />
            <Icon className="text-[#FFB400] text-[1.5rem]" icon="material-symbols:star" />
            <Icon className="text-[#FFB400] text-[1.5rem]" icon="material-symbols:star" />
            </div>
            </div>
           </div>
          {/* Review - 2  */}
           <div>

           <div className="relative">
           <img className="w-full" src={clientImg}/>
           <div className="absolute bg-[#000000a1] w-full h-full top-0 flex justify-center items-center">
           <Icon className="text-[4rem] text-[#fff] cursor-pointer" icon="gridicons:play" />
           </div>
           </div>

            <div className="p-[1rem]">
            <h3 className="md:text-[2rem] text-[1.5rem] font-semibold">Manikanta</h3>
            <div className="flex gap-[0.2rem]">
            <Icon className="text-[#FFB400] text-[1.5rem]" icon="material-symbols:star" />
            <Icon className="text-[#FFB400] text-[1.5rem]" icon="material-symbols:star" />
            <Icon className="text-[#FFB400] text-[1.5rem]" icon="material-symbols:star" />
            </div>
            </div>
           </div>
          {/* Review - 3  */}
           <div>

           <div className="relative">
           <img className="w-full" src={clientImg}/>
           <div className="absolute bg-[#000000a1] w-full h-full top-0 flex justify-center items-center">
           <Icon className="text-[4rem] text-[#fff] cursor-pointer" icon="gridicons:play" />
           </div>
           </div>

            <div className="p-[1rem]">
            <h3 className="md:text-[2rem] text-[1.5rem] font-semibold">Manikanta</h3>
            <div className="flex gap-[0.2rem]">
            <Icon className="text-[#FFB400] text-[1.5rem]" icon="material-symbols:star" />
            <Icon className="text-[#FFB400] text-[1.5rem]" icon="material-symbols:star" />
            <Icon className="text-[#FFB400] text-[1.5rem]" icon="material-symbols:star" />
            </div>
            </div>
           </div>
          {/* Review - 4  */}
           <div>

           <div className="relative">
           <img className="w-full" src={clientImg}/>
           <div className="absolute bg-[#000000a1] w-full h-full top-0 flex justify-center items-center">
           <Icon className="text-[4rem] text-[#fff] cursor-pointer" icon="gridicons:play" />
           </div>
           </div>

            <div className="p-[1rem]">
            <h3 className="md:text-[2rem] text-[1.5rem] font-semibold">Manikanta</h3>
            <div className="flex gap-[0.2rem]">
            <Icon className="text-[#FFB400] text-[1.5rem]" icon="material-symbols:star" />
            <Icon className="text-[#FFB400] text-[1.5rem]" icon="material-symbols:star" />
            <Icon className="text-[#FFB400] text-[1.5rem]" icon="material-symbols:star" />
            </div>
            </div>
           </div>

         </div>
      </section>


      {/* Partner with us  */}
      <section className="pb-[7.5rem] lg:px-[4rem] px-[1rem]">
         <div className="grid md:grid-cols-2 grid-cols-1">
          <img className="w-full" src={partnerImg}/>
          <div className="lg:p-[2.5rem] md:p-[1rem]">
            <h3 className="lg:text-[3rem] md:text-[2rem] text-[1.5rem] font-semibold leading-[4.5rem]">Partner with Us</h3>
            <p className="text-[#B1B1B1] md:mb-[3.5rem] mb-[1.5rem]">Send us a message and we’ll get back to you.</p>
          <form className="grid md:grid-cols-2 grid-cols-1 gap-[2rem]">
          <Input variant="standard" label="First Name" placeholder="First Name*" />
          <Input variant="standard" label="Last Name" placeholder="Last Name*" />
          <Input variant="standard" label="Mobile Number" placeholder="Mobile Number*" />
          <Input variant="standard" label="Email" placeholder="Email*" />
          <div className="md:col-span-2"><Textarea variant="standard" label="Message*" /></div>
          </form>
          </div>
         </div>
      </section>
    </main>
  );
}
