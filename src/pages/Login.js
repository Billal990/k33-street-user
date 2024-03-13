import { Link, useNavigate } from 'react-router-dom';
import heroShapeImg from '../../src/assets/hero-shape.png';
import './Login.css'
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../store/AuthContext';
export default function Login() {
  const {currentUser, login} = useAuth();
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState(false);

  const [visible, setVisible] = useState(false);
  const handleShowHidePwd = ()=>{
    setVisible(!visible)
  }

  const handleEmailChange = (e)=>{
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e)=>{
    setPassword(e.target.value)
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setPasswordErr(false)
    //Validate empty field
    if(!email || !password){
      return toast.error('Both Email and Password are required!', {autoClose:2000})
    }

    //There is no issue. Now submit the form
    try {
      const response = await login(email, password)
      console.log('Logged in user from login page=====>', response)
      toast.success('Login success!', {autoClose:2000})
      navigate('/home')
    } catch (error) {
      console.log('Error For Login Page==>', error)
      if(error.code === 'auth/invalid-credential'){
        setPasswordErr(true)
      }
    }
  }
  return (
    <div>
       {/* hero shape  */}
       <div className='hero-container lg:h-[900px] min-h-screen'>
        <img className='w-full' src={heroShapeImg} alt="Hero Shape"/>
        {/* hero heading and Form  container*/}
        <div className='flex lg:flex-row flex-col justify-between lg:px-[3rem] px-[1rem] relative lg:mt-[-300px]'>
          {/* Hero Description  */}
        <div className='text-[#FFFFFF] lg:mt-[-13px] mt-[3rem]'>
        <h1 className='lg:text-[3rem] text-[2.5rem] font-bold leading-[3.5rem]'>Unlock <span className='text-[#24B24B]'>Real Estate Investment</span> <br/> Opportunities, Piece by Piece.</h1>
        <p className='text-[1.5rem] font-semibold leading-[2.1rem] mt-[1.5rem]'>Invest in diverse properties, slice by slice. <br/> Your portfolio, your way.</p>
        </div>

        {/* Form  */}
        <form className='bg-[#FFFFFF] lg:h-[535px] h-auto py-[2.5rem] px-[1rem] lg:mt-0 my-[3rem]' onSubmit={handleSubmit}>
          <h3 className='text-[2rem] text-center mb-[2.5rem] font-semibold'>Login</h3>
          
          <div className='mb-[3rem]'>
            <input onChange={handleEmailChange} className='outline-none border-b-[1px] bg-[#fff] border-[#000] py-[1.25rem] px-[1rem] w-full' type='email' placeholder='Email Id'/>
          </div>

          <>
          <div className='relative'>
            <input onChange={handlePasswordChange} className={`outline-none border-b-[1px] ${passwordErr ? 'bg-[#f0caca] border-[#F00]' : 'bg-[#fff] border-[#24B24B]'} py-[1.25rem] px-[1rem] w-full`} type={visible ? 'text' : 'password'} placeholder='Password'/>
            {visible ? <Icon onClick={handleShowHidePwd} className='absolute text-4xl top-4 right-2 text-[#B1B1B1] cursor-pointer' icon="tabler:eye-off" /> : <Icon onClick={handleShowHidePwd} className='absolute text-4xl top-4 right-2 text-[#B1B1B1] cursor-pointer' icon="mi:eye" />}
          </div>
          {/* Display error message  */}
          {passwordErr && <p className='text-[#F00] text-[14px] py-[0.1rem]'>Wrong password. Try again or click Forgot password to reset it.</p>}
          </>

          <div className='flex justify-between items-center mb-[2.5rem] pt-[1.5rem]'>
            <p className='flex items-center gap-[1rem]'><Icon icon="carbon:checkbox-checked-filled" className='text-[1.5rem] cursor-pointer text-[#24B24B]'/> Remember Me</p>
            <p><Link to="/reset-password">Forgot Password?</Link></p>
          </div>
          <div className='text-center mb-[1.5rem]'>
            <button className='bg-[#24B24B] w-full font-semibold py-[1rem]'>Login</button>
          </div>
          <div>Not a member of K33 Street? <Link to="/signup" className='text-[#24B24B] font-semibold'>Start investing now</Link></div>
        </form>
        </div>
       </div>
    </div>
  )
}
