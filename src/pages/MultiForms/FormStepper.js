import React from 'react'

export default function FormStepper({color, step}) {
  return (
    <div className='flex md:flex-row flex-col md:items-center md:justify-between md:gap-0 gap-[2rem]  mb-[3rem]'>
        {/* step-1  */}
        <div className='flex items-center gap-2'>
            <p className={`bg-[${step === '1' ? color : '#FFF'}] text-[${step === '1' ? '#FFF' : '#B1B1B1'}] border-[1px] border-[#B1B1B1] w-[40px] h-[40px] rounded-[100%] flex items-center justify-center text-[1.25rem]`}>1</p>
            <p className={`md:text-[1.25rem] text-[1rem] text-[${step === '1' ? color : '#B1B1B1'}]`}>Personal Information</p>
            <p className='text-[#B1B1B1]'>--------------------------</p>
        </div>

        {/* step- 2 */}
        <div className='flex items-center gap-2'>
            <p className={`bg-[${step === '2' ? color : '#FFF'}] text-[${step === '2' ? '#FFF' : '#B1B1B1'}] border-[1px] border-[#B1B1B1] w-[40px] h-[40px] rounded-[100%] flex items-center justify-center text-[1.25rem]`}>2</p>
            <p className={`md:text-[1.25rem] text-[1rem] text-[${step === '2' ? color : '#B1B1B1'}]`}>Financial Information</p>
            <p className='text-[#B1B1B1]'>--------------------------</p>
        </div>

        {/* Step-3  */}
        <div className='flex items-center gap-2'>
            <p className={`bg-[${step === '3' ? color : '#FFF'}] text-[${step === '3' ? '#FFF' : '#B1B1B1'}] border-[1px] border-[#B1B1B1] w-[40px] h-[40px] rounded-[100%] flex items-center justify-center text-[1.25rem]`}>3</p>
            <p className={`md:text-[1.25rem] text-[1rem] text-[${step === '3' ? color : '#B1B1B1'}]`}>Legal Agreements & Disclosures</p>
        </div>
    </div>
  )
}
