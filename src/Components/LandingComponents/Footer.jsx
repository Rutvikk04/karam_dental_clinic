import React from "react";
import Logo from "../../assets/images/Logo.png"
import {
    MapPin, Mail, Smartphone
} from "feather-icons-react"

const Footer = () => {
    const menuItems = ["HOME", "SERVICES", "ABOUT", "CONTACT"];
    const services = ["Routine Checkup", "Smile Customization", "Dental X-Ray", "Tooth Implant", "Root Canal", "Tooth Extraction"]
    return (
        <footer className=" bg-gradient-to-br from-black via-blue-800 to-black border-t text-white max-sm:p-2 p-5">

            <section className="grid max-w-[1440px] mx-auto grid-cols-4 max-sm:grid-cols-2 p-5 text-left">

                <img className="w-auto shadow-lg shadow-gray-300 bg-white h-36 max-md:h-28 border border-gray-400 rounded-md p-1" src={Logo} />


                <div className="max-sm:mb-4">
                    <h1 className="text-lg  font-semibold text-sky-500">Browse</h1>
                    <ul className="flex flex-col">

                        {
                            menuItems.map((item, index) => (
                                <a href={`#${item}`} className="font-medium w-fit hover:scale-105 duration-200 hover:text-blue-400" key={index}>{item}</a>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h1 className="text-lg  font-semibold text-sky-500">Services</h1>
                    <ul className="flex flex-col">

                        {
                            services.map((item, index) => (
                                <h1 className="font-medium duration-200 " key={index}>{item}</h1>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h1 className="text-lg  font-semibold text-sky-500">Contact Me</h1>
                    <section className="space-y-2 max-sm:space-y-4">

                        <div className="flex items-center max-sm:items-start"><MapPin className="mr-2 w-5 h-5" />Vallabhipur, Gujarat, India</div>
                        <div className="flex items-center"><Mail className="mr-2 w-5 h-5" />r.amarcholi@gmail.com</div>
                        <div className="flex items-center"><Smartphone className="mr-2 w-5 h-5" />+91 80000 97420</div>
                    </section>
                </div>
            </section>
            <section className="text-center border-t py-2 font-bold text-sm">
                ©Karam Dental Clinic || Created By: Rutvik Amarcholi 2023-24
            </section>
        </footer>
    );
};

export default Footer;
