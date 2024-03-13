import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signupDetails: {
        firstName: "",
        lastName: "",
        email: "",
        password:"",
        photo:"",
    },
    financialDetails: {
        annualIncome:"",
        accreditationStatus:"",
        ACNumber:"",
        ACType:"",
        ACHolderName:"",
        IFSC:"",
        bankName:"",
        beneficiaryName:""
    },
    personalDetails:{
        PANNumber:"",
        aadharNumber:"",
        OTP:["", "", "", "", "", ""]
    },
    legalDetails:{
        documentType:"",
        legalFile:"",
    },
}

const createUserSlice = createSlice({
    name: "createUser",
    initialState: initialState,
    reducers: {
        signupDetails(state, action) {
            state.signupDetails = { ...state.signupDetails, ...action.payload }
        },
        financialDetails(state, action) {
            state.financialDetails = { ...state.financialDetails, ...action.payload }
        },
        personalDetails(state, action) {
            state.personalDetails = { ...state.personalDetails, ...action.payload }
        },
        legalDetails(state, action) {
            state.legalDetails = { ...state.legalDetails, ...action.payload }
        },
    }
})

export const { signupDetails, financialDetails, personalDetails, legalDetails } = createUserSlice.actions;

export default createUserSlice.reducer;
