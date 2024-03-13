import React from 'react'
import { Link } from 'react-router-dom'
import k33StreetLogo from "../assets/k33-logo.png"
export default function Footer() {
  return (
    <div className='bg-[#0E0E0E] lg:px-[3rem]  px-[1rem] pt-[7.5rem]'>
      <div className='flex flex-col lg:flex-row justify-between text-[#FFFFFF]'>
      <div>
        {/* Logo SVG  */}
        <div><Link to="/"><img className="w-[15.5rem] h-[3.5rem]" src={k33StreetLogo}/></Link></div>
        <p className='pt-[2.5rem] pb-[1.5rem] lg:text-[1.5rem] text-[1rem] font-semibold'>A Division of KAQ SYS LLP</p>
        <address className='not-italic text-[1.5rem'>
        <span>1-57, Chagantipadu </span><br/>
        <span>Thotlavalluru</span><br/>
        <span>Krishna</span><br/>
        <span>521163</span><br/>
        <span>Andhra Pradesh</span>
        </address>
      </div>

      <div>
        <p className='lg:text-[2rem] lg:pt-0 pt-8 text-[1.5rem] font-bold'>Links <span className='w-[10rem] h-[1px] pb-[1px] bg-[#FFFFFF] block'></span></p>
        <ul className='lg:space-y-[1.5rem] space-y-[0.6rem] lg:pt-[2.5rem] pt-[1rem]'>
          <li><Link to="">About</Link></li>
          <li><Link to="">Sell us your Property</Link></li>
          <li><Link to="">Study Center</Link></li>
          <li><Link to="">Blog</Link></li>
        </ul>
      </div>

      <div>
        <p className='lg:text-[2rem] lg:pt-0 pt-8 text-[1.5rem] font-bold'>Other <span className='w-[10rem] h-[1px] pb-[1px] bg-[#FFFFFF] block'></span></p>
        <ul className='lg:space-y-[1.5rem] space-y-[0.6rem] lg:pt-[2.5rem] pt-[1rem]'>
          <li><Link to="">Terms of Service</Link></li>
          <li><Link to="">Privacy Policy</Link></li>
        </ul>
      </div>

      <div>
        <p className='lg:text-[2rem] lg:pt-0 pt-8 text-[1.5rem] font-bold'>Contact <span className='w-[10rem] h-[1px] pb-[1px] bg-[#FFFFFF] block'></span></p>
        <ul className='lg:space-y-[1.5rem] space-y-[0.6rem] lg:pt-[2.5rem] pt-[1rem]'>
          <li><Link to="">+91 9391992262</Link></li>
          <li><Link to="">info@K33Street.com</Link></li>
        </ul>
      </div>
      </div>
      <div className='pt-[3rem]'>
        <div className='bg-[#4d4b4b] w-full h-[1px]'></div>
         <p className='text-[#beb8b8] text-center py-[3rem]'>© K33Street</p>
        </div>
    </div>
  )
}
