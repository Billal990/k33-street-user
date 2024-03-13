

import { Link, useNavigate } from "react-router-dom";
import heroShapeImg from "../../src/assets/hero-shape.png";
import "./Login.css";
import { Icon } from "@iconify/react";
import FormError from "../components/FormError";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signupDetails } from "../store/createUserSlice";
export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const {firstName, lastName, email, password, photo} = useSelector(state => state.createUser.signupDetails)


  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%._-])[A-Za-z\d!@#$%._-]{8,}$/;


  const handleShowHidePwd = () => {
    setVisible(!visible);
  };

  const valid = (id) => {
    const element = document.getElementById(id);
    element.style.color = "#24B24B";
    element.style.borderColor = "#24B24B";
  };

  const inValid = (id) => {
    const element = document.getElementById(id);
    element.style.color = "red";
    element.style.borderColor = "red";
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    //validate password
    if (name === "password") {
      const pwd = e.target.value;
      if (pwd.match(/[A-Z]/) !== null) {
        valid("upper");
      } else {
        inValid("upper");
      }

      if (pwd.match(/[a-z]/) !== null) {
        valid("lower");
      } else {
        inValid("lower");
      }

      if (pwd.match(/[0-9]/) !== null) {
        valid("num");
      } else {
        inValid("num");
      }

      if (pwd.match(/[!@#$%._-]/) !== null) {
        valid("char");
      } else {
        inValid("char");
      }

      if (pwd.length >= 8) {
        valid("more8");
      } else {
        inValid("more8");
      }

      //reset input fields
    }

    if(name === "photo"){
      dispatch(signupDetails({[name]:e.target.files[0]}))
      return;
    }

    if(name === 'email'){
      if (emailRegex.test(value)) {
        setIsEmailValid(true)
     }
     else {
        setIsEmailValid(false)
     }
     dispatch(signupDetails({[name]:value}))
     return;
    }

    if(name === 'password'){
      if (passwordRegex.test(value)) {
        setIsPasswordValid(true)
     }
     else {
      setIsPasswordValid(false)
     }
     dispatch(signupDetails({[name]:value}))
     return;
    }

    dispatch(signupDetails({[name]:value}))
  };


   useEffect(() => {
      if (!(firstName && lastName && email && password && photo)) {
         setError(true);
      } else {
         setError(false);
      }
   }, [firstName, lastName, email, password, photo]);


   const handleSignup = (e)=>{
    e.preventDefault();
    if(error){
      setShowError(true)
      return;
    }

    //Validate password
    if (!passwordRegex.test(password)) {
      setIsPasswordValid(false)
      setShowError(true)
      return;
   }
    navigate('/personal-information')
   }

  return (
    <div>
      {/* hero shape  */}
      <div className="hero-container lg:h-[900px] min-h-screen">
        <img className="w-full" src={heroShapeImg} alt="Hero Shape" />
        {/* hero heading and Form  container*/}
        <div className="flex lg:flex-row flex-col justify-between lg:px-[3.5rem] px-[1rem] relative lg:mt-[-300px]">
          {/* Hero Description  */}
          <div className="text-[#FFFFFF] lg:mt-[-13px] mt-[3rem]">
            <h1 className="lg:text-[3rem] text-[2.5rem] font-bold leading-[3.5rem]">
              Unlock{" "}
              <span className="text-[#24B24B]">Real Estate Investment</span>{" "}
              <br /> Opportunities, Piece by Piece.
            </h1>
            <p className="text-[1.5rem] font-semibold leading-[2.1rem] mt-[1.5rem]">
              Invest in diverse properties, slice by slice. <br /> Your
              portfolio, your way.
            </p>
          </div>

          {/* Form  */}
          <form
            className="bg-[#FFFFFF] h-auto py-[1.5rem] px-[1rem] lg:mt-0 my-[3rem] lg:max-w-[400px] w-full"
            autoComplete="off"
            onSubmit={handleSignup}
          >
            <h3 className="text-[2rem] text-center mb-[1.5rem] font-semibold">
              Sign Up
            </h3>
            <div className="mb-[1.5rem] flex gap-[1.5rem]">
              <div>
                <input
                  className="outline-none border-b-[1px] bg-[#fff] border-[#000] py-[0.3rem] px-[1rem] w-full"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                />
                {/* Display Error  */}
                {showError && !firstName && (
                     <p className="text-sm text-[#E92215]">
                        *This field is required
                     </p>
                  )}
              </div>
              <div>
                <input
                  className="outline-none border-b-[1px] bg-[#fff] border-[#000] py-[0.3rem] px-[1rem] w-full"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                />
                {/* Display Error  */}
                {showError && !lastName && (
                     <p className="text-sm text-[#E92215]">
                        *This field is required
                     </p>
                  )}
              </div>
            </div>
            <div className="mb-[2.5rem]">
              <input
                className="outline-none border-b-[1px] bg-[#fff] border-[#000] py-[0.3rem] px-[1rem] w-full"
                type="email"
                placeholder="Email Id"
                name="email"
                value={email}
                onChange={handleChange}
              />
              {/* Display Error  */}
              {((showError && !email) || !isEmailValid) && <p className="text-[#E92215] text-sm">{(!isEmailValid && showError) ? "Invalid email" : showError ? "*This field is required." : ""}</p>}
            </div>
            {/* Photo Upload  */}
            <>
              <div
                onClick={() => document.getElementById("photo-field").click()}
                className="border-dashed border-[2px] border-gray-300 py-2 h-[80px]"
              >



               <div className="ml-3 text-gray-500">
                  {photo ? (
                    <label className="text-left block w-full pl-1 mt-5">
                      <span className="font-bold">Uploaded:</span> {photo.name}
                    </label>
                  ) : (
                    <div className="inline-block">
                      <Icon
                        className="ml-8 text-[2rem] mb-1"
                        icon="bi:upload"
                      />
                      <label>Upload Photo</label>
                    </div>
                  )}
                </div>




                <input
                  id="photo-field"
                  className="outline-none border-b-[1px] bg-[#fff] border-[#000] px-[1rem] h-full w-full hidden"
                  type="file"
                  placeholder="Upload Photo"
                  name="photo"
                  onChange={handleChange}
                />
              </div>
              {/* Display Error  */}
              {showError && !photo && (
                     <p className="text-sm text-[#E92215]">
                        *This field is required
                     </p>
                  )}
            </>

            <>
              <div className="relative mt-[1.8rem]">
                <input
                  className="outline-none border-b-[1px] bg-[#fff] border-[#24B24B] py-[0.3rem] px-[1rem] w-full"
                  type={visible ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
                {visible ? (
                  <Icon
                    onClick={handleShowHidePwd}
                    className="absolute text-4xl top-0 right-2 text-[#B1B1B1] cursor-pointer"
                    icon="tabler:eye-off"
                  />
                ) : (
                  <Icon
                    onClick={handleShowHidePwd}
                    className="absolute text-4xl top-0 right-2 text-[#B1B1B1] cursor-pointer"
                    icon="mi:eye"
                  />
                )}
              </div>
              {/* Display Error  */}
              {((showError && !password) || !isPasswordValid) && <p className="text-[#E92215] text-sm">{(!isPasswordValid && showError) ? "Invalid password" : showError ? "*This field is required." : ""}</p>}
            </>

            <div className="flex gap-[1rem] flex-wrap mb-[1.5rem] pt-[0.5rem]">
              <p
                id="more8"
                className="text-[0.75rem] text-[#b6b9b7] border-[1px] border-[#b6b9b7] p-[0.25rem]"
              >
                Min 8 Max 15 Characters
              </p>
              <p
                id="upper"
                className="text-[0.75rem] text-[#b6b9b7] border-[#b6b9b7] border-[1px] p-[0.25rem]"
              >
                1 Upper Case
              </p>
              <p
                id="lower"
                className="text-[0.75rem] text-[#b6b9b7] border-[#b6b9b7] border-[1px] p-[0.25rem]"
              >
                1 Lower Case
              </p>
              <p
                id="num"
                className="text-[0.75rem] text-[#b6b9b7] border-[#b6b9b7] border-[1px] p-[0.25rem]"
              >
                1 Number
              </p>
              <p
                id="char"
                className="text-[0.75rem] text-[#b6b9b7] border-[#b6b9b7] border-[1px] p-[0.25rem]"
              >
                1 Special Character
              </p>
            </div>
            <div className="text-center mb-[1.5rem]">
              <button className="bg-[#24B24B] w-full font-semibold py-[1rem]">
                Signup
              </button>
            </div>
            <div className="text-center">
              Already a member of K33 Street?{" "}
              <Link to="/login" className="text-[#24B24B] font-semibold">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
