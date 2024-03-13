import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import k33StreetLogo from "../assets/k33-logo.png";
import { useState } from "react";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import { useAuth } from "../store/AuthContext";
import Swal from "sweetalert2";
import { Avatar } from "@material-tailwind/react";

export default function Header() {
  const navigate = useNavigate()
  const {currentUser, logout} = useAuth();
  const [visible, setVisible] = useState(false);
  const handleShowHide = ()=>{
    setVisible(!visible)
  }
  const handleLogoutUser = ()=>{
    setVisible(!visible)
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You will be logged out!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Logout!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Logged out!",
            text: "You have been logged out.",
            icon: "success"
          });
          await logout();
          navigate("/login")
        }
      });
    } catch (error) {
      toast.error(error.message, {autoClose:2000})
    }
  }

  return (
    <header className="flex justify-between items-center lg:flex-row flex-col bg-[#0E0E0E] py-[3rem] lg:px-[3rem] px-[1rem]">
      {/* logo SVG  Container*/}
      <div>
        <Link to="/">
          <img className="w-[15.5rem] h-[3.5rem]" src={k33StreetLogo} />
        </Link>
      </div>

      {/* Navbar Links Container*/}
        <ul className="flex items-center lg:flex-row flex-col lg:gap-[4rem] gap-[1.5rem] text-[#FFFFFF] text-[1.25rem] lg:py-0 py-5">
          <li>
            <NavLink to="home">Home</NavLink>
          </li>
          <li>
            <NavLink to="invest">Invest</NavLink>
          </li>
          {/* Dropdown  Study*/}
          <li className="md:mt-[0.5rem] relative dropdown-container">
              <div className="flex items-center">
              <span>Study</span>
              <Icon className="text-[1.5rem]" icon="iconamoon:arrow-down-2-thin" />
              </div>
              <ul className="dropdown absolute z-50 top-[1.8rem] bg-[#0E0E0E] w-[12.5rem] p-2 leading-[3rem] border-[1px] border-[#353333]">
                <Link to="/study"><li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">Study Center</li></Link>
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">FAQ</li>
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">How It Works</li>
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">K33Street Guide</li>
                <Link to="/blog"><li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">Blog</li></Link>
              </ul>
          </li>
         {/* Dropdown  => About*/}
         <li className="md:mt-[0.5rem] relative dropdown-container">
              <div className="flex items-center">
              <span>About</span>
              <Icon className="text-[1.5rem]" icon="iconamoon:arrow-down-2-thin" />
              </div>
              <ul className="dropdown absolute z-50 top-[1.7rem] bg-[#0E0E0E] min-w-[15.5rem] p-2 leading-[3rem] border-[1px] border-[#353333]">
                <Link to="/about"><li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">About Us</li></Link>
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">Sell Us Your Property</li>
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">Testimonials</li>
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">Contact us</li>
                <li className="hover:bg-[#24B24B] hover:text-white px-1 cursor-pointer">Partner With Us</li>
              </ul>
          </li>
        </ul>

      {/* Authentication Buttons Container */}
      {currentUser ? (
        <>
        <div className="flex items-center text-[#fff] gap-[0.5rem]">
      <img onClick={handleShowHide} className="w-[40px] h-[40px] rounded-[100%] border-2 border-[#fff] cursor-pointer" src={currentUser?.photoURL}/>
      <p className="cursor-pointer" onClick={handleShowHide}>{currentUser?.displayName}</p>
      <div className="relative">
      <Icon onClick={handleShowHide} icon="uim:angle-down" className="text-[1.8rem] cursor-pointer"/>
      <ul className={`${visible ? 'block' : 'hidden'} absolute bg-[#fff] text-[#000] py-[0.8rem] px-[0.3rem] w-[160px] space-y-4 rounded-sm left-[-85px]`}>
        <li className="cursor-pointer hover:bg-gray-200 px-3 py-1 rounded-md flex items-center gap-1"><Icon className="text-[1.3rem]" icon="gg:profile" /> My Profile</li>
        <li className="cursor-pointer hover:bg-gray-200 px-3 py-1 rounded-md flex items-center gap-1"><Icon className="text-[1.3rem]" icon="ant-design:setting-twotone" /> Edit Profile</li>
        <li onClick={handleLogoutUser} className="cursor-pointer hover:bg-gray-200 px-3 py-1 rounded-md flex items-center gap-1"><Icon className="text-[1.3rem]" icon="mynaui:logout" />Logout</li>
      </ul>
      </div>
        </div>
        </>
      ) : (
        <div className="lg:space-x-[2.5rem] lg:mt-0 mt-[2rem] space-x-[1rem]">
          <NavLink to="login">
            <button className="lg:px-[3rem] px-[1.5rem] bg-[#24B24B] font-semibold text-[#FFFFFF] lg:py-[1rem] py-[0.5rem]">
              Login
            </button>
          </NavLink>
          <NavLink to="signup">
            <button className="lg:px-[3rem] px-[1.5rem] bg-[#24B24B] font-semibold text-[#FFFFFF] lg:py-[1rem] py-[0.5rem]">
              Signup
            </button>
          </NavLink>
        </div>
      )}
    </header>
  );
}
