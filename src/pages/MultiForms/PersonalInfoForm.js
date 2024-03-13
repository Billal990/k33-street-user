import React, { useEffect, useRef, useState } from "react";
import FormStepper from "./FormStepper";
import { Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { personalDetails } from "../../store/createUserSlice";

export default function PersonalInfoForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRefs = useRef([]); // Refs for input fields

  const [error, setError] = useState(false);
  const [showError, setShowError] = useState(false);

  const { PANNumber, aadharNumber, OTP } =
    useSelector((state) => state.createUser.personalDetails) || {};

  useEffect(() => {
    if (!(PANNumber && aadharNumber && OTP)) {
      setError(true);
    } else {
      setError(false);
    }
  }, [PANNumber, aadharNumber, OTP]);

  // Function to handle input change
  const handleChange = (index, e) => {
    const { name, value } = e.target;

    // OTP Input Field
    if (name === "OTP") {
      const newOTP = [...OTP];
      newOTP[index] = value;
      dispatch(personalDetails({ OTP: newOTP }));
      // Move focus to the next input field
      if (value !== "" && index < 5) {
        inputRefs.current[index + 1].focus();
      }
      return;
    }

    // Other Input Fields
    dispatch(personalDetails({ [name]: value }));
  };

  // Function to handle backspace key press
  const handleBackspace = (index, e) => {
    if (e.key === "Backspace" && index > 0 && OTP[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  // Function to handle paste
  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("Text").slice(0, 6);
    const newOTP = [...OTP];
    for (let i = 0; i < pastedData.length; i++) {
      newOTP[i] = pastedData[i];
    }
    // setOTP(newOTP);
    dispatch(personalDetails({ OTP: newOTP }));
  };

  // const handleNavigatePrevious = (e) => {
  //   e.preventDefault();
  //   navigate('/signup');
  // };

  const handleNavigateNext = (e) => {
    e.preventDefault();
    if(error){
      setShowError(true);
      return;
    }
    navigate("/financial-information");
  };

  return (
    <div className="pt-[3rem]">
      <div className="lg:w-[90%]  lg:mx-auto mx-[0.5rem] bg-[#FFF] p-[2.5rem]">
        <FormStepper color="#24B24B" step="1" />
        <form>
          <div className="flex md:flex-row flex-col mx-auto  gap-[4rem]">
            <div className="w-full">
              <Input
                type="text"
                variant="standard"
                label="PAN Number*"
                placeholder="PAN Number*"
                name="PANNumber"
                value={PANNumber}
                onChange={(e)=>handleChange(null, e)}
              />
              {/* Display Error  */}
              {showError && !PANNumber && (
                <p className="text-sm text-[#E92215]">
                  *This field is required
                </p>
              )}
            </div>
            <div className="w-full">
              <div>
                <Input
                  type="number"
                  variant="standard"
                  label="Aadhaar Number*"
                  placeholder="Aadhaar Number*"
                  name="aadharNumber"
                  value={aadharNumber}
                  onChange={(e)=>handleChange(null, e)}
                />
                {/* Display Error  */}
                {showError && !aadharNumber && (
                  <p className="text-sm text-[#E92215]">
                    *This field is required
                  </p>
                )}
              </div>
              <p className="text-right mt-[1rem]">
                <span>Didn’t receive OTP?</span>{" "}
                <span className="text-[#24B24B] font-semibold cursor-pointer">
                  Send Again
                </span>
              </p>
            </div>
          </div>

          {/* OTP Input Fields  */}
          <div className="flex justify-end mt-[2rem] mx-auto">
            {OTP.map((digit, index) => (
              <input
                key={index}
                className="md:w-12 w-7 h-12 text-center mx-2 border-b-[1px] border-[#000000] focus:outline-none focus:border-[#24B24B]"
                type="text"
                maxLength="1"
                name="OTP"
                value={digit}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleBackspace(index, e)}
                onPaste={handlePaste}
                ref={(ref) => (inputRefs.current[index] = ref)}
              />
            ))}
          </div>

          <p className="text-[#B1B1B1] md:text-[1.25rem] text-[1rem] mt-[3rem]">
            All the personal details will be fetched from your Aadhaar details
          </p>

          <div className="flex justify-end mt-[2rem] gap-[3rem]">
            {/* <button
              onClick={handleNavigatePrevious}
              className="bg-[#24B24B] px-[4rem] py-[1rem] font-semibold"
            >
              Previous
            </button> */}
            <button
              onClick={handleNavigateNext}
              className="bg-[#24B24B] px-[4rem] py-[1rem] font-semibold"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
