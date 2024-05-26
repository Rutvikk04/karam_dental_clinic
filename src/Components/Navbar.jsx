import React, { useState } from "react";
import Logo from "../assets/images/Logo.png"
import { Menu , X } from "feather-icons-react/build/IconComponents"; 
const Navbar = () => {
  const [menuSidebar, setMenuSidebar] = useState(false);
  const menuItems = ["HOME", "SERVICES", "ABOUT", "CONTACT"];
  return (
    <>
      <nav className="flex absolute w-full max-w-[1440px]  z-50 justify-between items-center px-4 py-2  text-white ">
        <div className="flex items-center space-x-4">
    <img className="w-auto shadow-md shadow-black bg-white h-14 border border-gray-400 rounded-md p-1" src={Logo}/>
  <span className="text-3xl max-md:text-xl bg-gradient-to-r from-red-500 via-black to-blue-600 font-medium bg-clip-text text-transparent">KARAM DENTAL CLINIC</span>

        </div>
        <ul className="flex space-x-20 flex-row font-semibold  max-sm:hidden max-md:hidden">
          {menuItems.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => window.location.replace(window.location.href + `#${item}`)}
                className=" text-gray-200 font-semibold hover:text-white duration-300 hover:scale-110 cursor-pointer "
              >
                <a href={`#${item}`} >{item}</a>


              </li>
            );
          })}
        </ul>
        <button className=" max-md:block hidden text-blue-900  hover:border-none hover:outline-none" onClick={() => setMenuSidebar(!menuSidebar)}>
          {
            !menuSidebar ? <Menu/>: <X/> //add icons Here
          }
        </button>
      </nav>

      {menuSidebar && (
        <div className="max-md:block z-50 hidden ">
          <ul className=" transition-opacity text-lg h-screen flex flex-col justify-evenly py-3  space-y-3 bg-blue-200 text-center text-white">
            {menuItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-blue-900 font-bold"
                  onClick={() => setMenuSidebar(false)}
                >
                  <a href={`#${item}`} >{item}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
