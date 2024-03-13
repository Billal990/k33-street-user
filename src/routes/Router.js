import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import About from "../pages/About";
import Study from "../pages/Study";
import Home from "../pages/Home/Home";
import ResetPasswordForm from "../pages/ResetPasswordForm";
import PersonalInfoForm from "../pages/MultiForms/PersonalInfoForm";
import LegalForm from "../pages/MultiForms/LegalForm";
import FinancialInfoForm from "../pages/MultiForms/FinancialInfoForm";
import Blog from "../pages/Blog";
import NotFound from "../pages/NotFound";

import PropertiesList from "../pages/invest/PropertiesList";
import PropertyDetails from "../pages/investDetails/PropertyDetails";
import PropertyLayout from "../layouts/PropertyLayout";
import BasicDetails from "../components/BasicDetails/BasicDetails";
import FinancialDetails from "../components/FinancialDetails/FinancialDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path:'',
            element:<Login/>
        },
        {
            path:'login',
            element:<Login/>
        },
        {
            path:'reset-password',
            element:<ResetPasswordForm/>
        },
        {
            path:'signup',
            element:<Signup/>
        },
        {
            path:'personal-information',
            element:<PersonalInfoForm/>
        },
        {
            path:'financial-information',
            element:<FinancialInfoForm/>
        },
        {
            path:'legal-information',
            element:<LegalForm/>
        },
        {
            path:'home',
            element:<Home/>
        },
        {
            path:'about',
            element:<About/>
        },
        {
            path:'blog',
            element:<Blog/>
        },
        {
            path:'invest',
            element:<PropertyLayout/>,
            children:[
                {
                    path:'',
                    element:<PropertiesList/>
                },
                {
                    path:'property-details/:propertyId',
                    element:<PropertyDetails/>,
                    children:[
                        {
                            path:'',
                            element:<BasicDetails/>
                        },
                        {
                            path:'financial-details',
                            element:<FinancialDetails/>
                        },
                    ]
                }
            ]
        },

        {
            path:'study',
            element:<Study/>
        },
        {
            path:'*',
            element:<NotFound/>
        }
      ]
    },
]);