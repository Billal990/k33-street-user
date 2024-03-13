import React, { useEffect, useState } from "react";
import FormStepper from "./FormStepper";
import { Option, Select } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { legalDetails } from "../../store/createUserSlice";
import { useAuth } from './../../store/AuthContext';
import { handleFirebaseError } from "../../utils/firebasehandle";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";

const getUploadedUrl = async (file) => {
  if (file) {
    try {
      const storage = getStorage();
      const imageRef = ref(storage, `images/${file.name}`);
      const res = await uploadBytes(imageRef, file);
      const photoUrl = await getDownloadURL(
        ref(storage, res.metadata.fullPath)
      );
      return photoUrl;
    } catch (error) {
      console.log("File uploading error===>", error.message);
    }
  } else {
    console.error("No image selected");
  }
};



export default function LegalForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {signUp, sendVerificationEmail, profileUpdate, logout} = useAuth();


  //Get all informations from redux store
  const { documentType, legalFile } =
    useSelector((state) => state.createUser.legalDetails) || {};

  const { firstName, lastName, email, password, photo } = useSelector((state) => state.createUser.signupDetails) || {};

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

  const { PANNumber, aadharNumber, OTP } = useSelector((state) => state.createUser.personalDetails) || {};


  const [selectImg, setSelectImg] = useState();
  const [error, setError] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (!(documentType && legalFile)) {
      setError(true);
    } else {
      setError(false);
    }
  }, [documentType, legalFile]);

  const handleNavigationPrevious = (e) => {
    e.preventDefault();
    navigate("/financial-information");
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (error) {
      return setShowError(true);
    }
    //Final Data 
    console.log({firstName, lastName, email, password, photo,  PANNumber, aadharNumber, OTP, annualIncome,
      accreditationStatus,
      ACNumber,
      ACType,
      ACHolderName,
      IFSC,
      bankName,
      beneficiaryName, documentType, legalFile})

      try {
      const profilePhotoUrl = await getUploadedUrl(photo)
      const displayName = firstName + ' ' + lastName;
      await signUp(email, password);
      await profileUpdate(displayName, profilePhotoUrl);
      await sendVerificationEmail()
      await logout();
      navigate('/login')
      toast.success('Sent a verification email', {autoClose:3000})
      } catch (error) {
      console.log('Signup Error===>', error.message)
      toast.error(error.message, {autoClose:3000})
      }
  };

  return (
    <div className="pt-[3rem]">
      <div className="lg:w-[90%]  lg:mx-auto mx-[0.5rem] bg-[#FFF] p-[2.5rem]">
        <FormStepper color="#24B24B" step="3" />
        <form>
          <div className="md:w-[50%] w-[100%] mx-auto">
            <div>
              <Select
                variant="static"
                label="Document Type"
                value={documentType}
                onChange={(value) => {
                  dispatch(legalDetails({ documentType: value }));
                }}
              >
                <Option value="PAN Card">PAN Card</Option>
                <Option value="Digital ID Card">Digital ID Card</Option>
                <Option value="Other Document">Other Document</Option>
                <Option value="Bank Account Details">
                  Bank Account Details
                </Option>
                <Option value="Business Licence">Business Licence</Option>
              </Select>
              {/* Display Error  */}
              {showError && !documentType && (
                <p className="text-sm text-[#E92215]">
                  *This field is required
                </p>
              )}
            </div>

            {/* File Upload  */}
            <div className="flex flex-col gap-[0.5rem] mt-[3rem]">
              <div
                className="flex flex-col items-center py-[2rem] px-[1rem] border-2 border-dashed
                         border-[#D9D9D9] rounded-lg"
              >
                {legalFile?.name ? (
                  <>
                    <h2 className="text-[1.1rem] font-semibold text-green-600 my-[1rem]">
                      Uploaded document
                    </h2>
                    <div className="flex gap-[1rem] items-center">
                      <h2 className="text-[1.1rem] text-black font-[500]">
                        {legalFile?.name.length > 30
                          ? legalFile.name.substring(0, 30) + "..."
                          : legalFile.name}
                      </h2>
                      <Icon
                        onClick={() =>
                          dispatch(legalDetails({ legalFile: null }))
                        }
                        icon="akar-icons:cross"
                        className="text-[1.2rem] cursor-pointer hover:bg-[#3D4A5C]/[0.3]"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        document.querySelector(".input-field").click()
                      }
                    >
                      <Icon
                        icon="line-md:cloud-upload-outline-loop"
                        className="text-[#D9D9D9] text-[4rem] mb-[0.5rem]"
                      />
                    </button>
                    <input
                      type="file"
                      // accept="image/*"
                      // value="Image Name"
                      className="input-field"
                      hidden
                      onChange={({ target: { files } }) => {
                        if (files[0]) {
                          dispatch(legalDetails({ legalFile: files[0] }));
                        }
                      }}
                    />
                    <p className="text-[0.9rem] text-[#D9D9D9]">
                      <span className="text-[#24B24B] block text-center">
                        Click to Upload.
                      </span>
                      <span>(Max. File size: 25 MB)</span>
                    </p>
                  </>
                )}
              </div>
            </div>
            {/* Display Error  */}
            {showError && !legalFile && (
              <p className="text-sm text-[#E92215]">*This field is required</p>
            )}
          </div>

          <div className="flex gap-[3rem] justify-end mt-[4rem]">
            <button
              onClick={handleNavigationPrevious}
              className="bg-[#24B24B] px-[4rem] py-[1rem] font-semibold"
            >
              Previous
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[#24B24B] px-[4rem] py-[1rem] font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
