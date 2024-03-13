import React from 'react'
import { ThreeDots } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function StepperController({ currentStep, error, setShowError, handleClick, steps }) {
   const navigate = useNavigate();

   const { loaderBtn } = useSelector((store) => store.createAgent)

   const nextButtonHandler = (e) => {
      e.preventDefault();
      if (error) {
         setShowError(true);
         return;
      }
      handleClick(steps.length === currentStep ? "create" : "next")
   }

   const backButtonHandler = (e) => {
      if (currentStep === 1) {
         navigate("/admin/agents");
         return;
      }
      e.preventDefault();
      handleClick("back");
   }

   return (
      <div>
         <div className="flex gap-[2rem] items-center justify-end">
            <button onClick={backButtonHandler}
               className={`text-[1.2rem] font-semibold text-primary bg-white border
                border-primary py-[0.4rem] w-[12rem] rounded-[8px]`}
               type="button"
            >
               Back
            </button>

            {loaderBtn ? (
               <ThreeDots
                  height="50"
                  width="50"
                  radius="9"
                  color="#9FB947"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
               />
            ) :
               (<button onClick={nextButtonHandler}
                  className="text-[1.2rem] font-semibold text-white bg-primary py-[0.5rem] w-[12rem] 
                  rounded-[8px]"
                  type="submit"
               >
                  {steps.length === currentStep ? "Create" : "Next"}
               </button>)}
         </div>
      </div>
   )
}
