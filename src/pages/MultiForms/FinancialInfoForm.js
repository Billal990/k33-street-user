import React, { useEffect, useState } from "react";
import { Input, Option, Select } from "@material-tailwind/react";
import FormStepper from "./FormStepper";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { financialDetails } from "../../store/createUserSlice";

export default function FinancialInfoForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState(false);
  const [showError, setShowError] = useState(false);

  const {
    annualIncome,
    accreditationStatus,
    ACNumber,
    ACType,
    ACHolderName,
    IFSC,
    bankName,
    beneficiaryName,
  } = useSelector((state) => state.createUser.financialDetails) || {};

  useEffect(() => {
    if (
      !(
        annualIncome &&
        accreditationStatus &&
        ACNumber &&
        ACType &&
        ACHolderName &&
        IFSC &&
        bankName &&
        beneficiaryName
      )
    ) {
      setError(true);
    } else {
      setError(false);
    }
  }, [
    annualIncome,
    accreditationStatus,
    ACNumber,
    ACType,
    ACHolderName,
    IFSC,
    bankName,
    beneficiaryName,
  ]);

  const handleNavigationPrevious = (e) => {
    e.preventDefault();
    navigate("/personal-information");
  };

  const handleNavigationNext = (e) => {
    e.preventDefault();
    if(error){
      return setShowError(true);
    }
    navigate("/legal-information");
  };

  return (
    <div className="pt-[3rem]">
      <div className="lg:w-[90%]  lg:mx-auto mx-[0.5rem] bg-[#FFF] p-[2.5rem]">
        <FormStepper color="#24B24B" step="2" />
        <form>
          <div className="grid md:grid-cols-2 grid-cols-1  gap-[2rem]">
            <div className="md:mb-0 mb-[1rem]">
              <Input
                type="text"
                variant="standard"
                label="Annual Income*"
                placeholder="Annual Income*"
                name="annualIncome"
                value={annualIncome}
                onChange={(e) => {
                  dispatch(financialDetails({ annualIncome: e.target.value }));
                }}
              />
              {/* Display Error  */}
              {showError && !annualIncome && (
                  <p className="text-sm text-[#E92215]">
                    *This field is required
                  </p>
                )}
            </div>

            <div>
            <Select
              onChange={(value) => {
                dispatch(financialDetails({accreditationStatus:value}))
              }}
              variant="static"
              label="Accreditation Status*"
              value={accreditationStatus}
            >
              <Option value="Material Tailwind HTML">
                Material Tailwind HTML
              </Option>
              <Option value="Material Tailwind React">
                Material Tailwind React
              </Option>
              <Option value="Material Tailwind Vue">
                Material Tailwind Vue
              </Option>
              <Option value="Material Tailwind Angular">
                Material Tailwind Angular
              </Option>
              <Option value="Material Tailwind Svelte">
                Material Tailwind Svelte
              </Option>
            </Select>
            {/* Display Error  */}
            {showError && !accreditationStatus && (
                  <p className="text-sm text-[#E92215]">
                    *This field is required
                  </p>
                )}
            </div>
            <h3 className="font-semibold text-[2rem]">Bank Account</h3>
            <h3 className="font-semibold text-[2rem] opacity-0 md:block hidden">
              Bank Account
            </h3>

            <div className="md:mb-0 mb-[1rem]">
              <Input
                type="text"
                variant="standard"
                label="A/C Number*"
                placeholder="A/C Number*"
                name="ACNumber"
                value={ACNumber}
                onChange={(e) => {
                  dispatch(financialDetails({ ACNumber: e.target.value }));
                }}
              />
              {/* Display Error  */}
            {showError && !ACNumber && (
                  <p className="text-sm text-[#E92215]">
                    *This field is required
                  </p>
                )}
            </div>

            <div>
            <Select
              onChange={(value) => {
                dispatch(financialDetails({ACType:value}))
              }}
              variant="static"
              label="A/C Type*"
              value={ACType}
            >
              <Option value="Material Tailwind HTML">
                Material Tailwind HTML
              </Option>
              <Option value="Material Tailwind React">
                Material Tailwind React
              </Option>
              <Option value="Material Tailwind Vue">
                Material Tailwind Vue
              </Option>
              <Option value="Material Tailwind Angular">
                Material Tailwind Angular
              </Option>
              <Option value="Material Tailwind Svelte">
                Material Tailwind Svelte
              </Option>
            </Select>
            {/* Display Error  */}
            {showError && !ACType && (
                  <p className="text-sm text-[#E92215]">
                    *This field is required
                  </p>
                )}
            </div>

            <div>
            <Input
              type="text"
              variant="standard"
              label="A/C Holder Name*"
              placeholder="A/C Holder Name*"
              name="ACHolderName"
              value={ACHolderName}
              onChange={(e) => {
                dispatch(financialDetails({ ACHolderName: e.target.value }));
              }}
            />
            {/* Display Error  */}
            {showError && !ACHolderName && (
                  <p className="text-sm text-[#E92215]">
                    *This field is required
                  </p>
                )}
            </div>

            <div>
            <Input
              type="text"
              variant="standard"
              label="IFSC*"
              placeholder="IFSC*"
              name="IFSC"
              value={IFSC}
              onChange={(e) => {
                dispatch(financialDetails({ IFSC: e.target.value }));
              }}
            />
            {/* Display Error  */}
            {showError && !IFSC && (
                  <p className="text-sm text-[#E92215]">
                    *This field is required
                  </p>
                )}
            </div>

            <div>
            <Input
              type="text"
              variant="standard"
              label="Bank Name"
              placeholder="Bank Name"
              name="bankName"
              value={bankName}
              onChange={(e) => {
                dispatch(financialDetails({ bankName: e.target.value }));
              }}
            />
            {/* Display Error  */}
            {showError && !bankName && (
                  <p className="text-sm text-[#E92215]">
                    *This field is required
                  </p>
                )}
            </div>

            <div>
            <Input
              type="text"
              variant="standard"
              label="Beneficiary Nickname (optional)"
              placeholder="Beneficiary Nickname (optional)"
              name="beneficiaryName"
              value={beneficiaryName}
              onChange={(e) => {
                dispatch(financialDetails({ beneficiaryName: e.target.value }));
              }}
            />
            {/* Display Error  */}
            {showError && !beneficiaryName && (
                  <p className="text-sm text-[#E92215]">
                    *This field is required
                  </p>
                )}
            </div>
          </div>

          <div className="flex md:gap-[3rem] gap-[1rem] justify-end mt-[2rem]">
            <button
              onClick={handleNavigationPrevious}
              className="border-[1px] border-[#24B24B] hover:bg-[#24B24B] duration-300 md:px-[4rem] px-[1rem] md:py-[1rem] py-[0.5rem] font-semibold"
            >
              Previous
            </button>
            <button
              onClick={handleNavigationNext}
              className="bg-[#24B24B] md:px-[4rem] px-[1rem] md:py-[1rem] py-[0.5rem] font-semibold"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
