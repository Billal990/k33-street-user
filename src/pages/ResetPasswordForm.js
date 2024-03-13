import { Link, useNavigate } from 'react-router-dom';
import heroShapeImg from '../../src/assets/hero-shape.png';
import './Login.css'
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../store/AuthContext';
export default function ResetPasswordForm() {
  // const {sendResetPasswordEmail} = useContext(AuthContext)
  const {resetPassword} = useAuth()
   const [email, setEmail] = useState('');
    const navigate = useNavigate()
    const handleGoBack = ()=>{
        navigate(-1)
    }
    const handleChange = (e)=>{
      setEmail(e.target.value)
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      if(!email){
       return toast.error('Email is mandatory!', {autoClose:3000})
      }

      //There is no issue. Submit the form now
      resetPassword(email)
      .then(res => {
        toast.success('Sent Reset Email!', {autoClose:3000});
        navigate("/login")
      })
      .catch(error => toast.error(error.message, {autoClose:3000}))
    }
  return (
    <div>
       {/* hero shape  */}
       <div className='hero-container lg:h-[900px] min-h-screen'>
        <img className='w-full' src={heroShapeImg} alt="Hero Shape"/>
        {/* hero heading and Form  container*/}
        <div className='flex lg:flex-row flex-col justify-between lg:px-[3rem] px-[0.5rem] relative lg:mt-[-300px]'>
          {/* Hero Description  */}
        <div className='text-[#FFFFFF] lg:mt-[-13px] mt-[3rem]'>
        <h1 className='lg:text-[3rem] text-[2rem] font-bold md:leading-[3.5rem] leading-[2.5rem]'>Unlock <span className='text-[#24B24B]'>Real Estate Investment</span> <br/> Opportunities, Piece by Piece.</h1>
        <p className='text-[1.5rem] font-semibold leading-[2.1rem] mt-[1.5rem]'>Invest in diverse properties, slice by slice. <br/> Your portfolio, your way.</p>
        </div>

        {/* Form  */}
        <form className='bg-[#FFFFFF] h-auto py-[2.5rem] px-[1rem] lg:mt-[65px] my-[3rem]' onSubmit={handleSubmit}>
         <div className='mb-[2.5rem] flex justify-between items-center'>
         <Icon className='cursor-pointer text-[3rem]' icon="iconamoon:arrow-left-2-bold" onClick={handleGoBack}/>
          <h3 className='md:text-[2rem] text-[1.5rem] font-semibold'>Forgot Password?</h3>
         </div>
          <p className='text-center'>No problem. Enter your email address below and <br/> we will send you a password reset link.</p>
          <div className='mb-[2.5rem]'>
            <input onChange={handleChange} className='outline-none border-b-[1px] bg-[#fff] border-[#000] py-[1.25rem] px-[1rem] w-full' type='email' placeholder='Email Id'/>
          </div>

          <div className='text-center'>
            <button className='bg-[#24B24B] w-full font-semibold py-[1rem]'>Reset</button>
          </div>
        </form>
        </div>
       </div>
    </div>
  )
}

