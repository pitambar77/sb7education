import React from 'react'
import footerImage from '../../assets/footr.jpg'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {HiLocationMarker} from "react-icons/hi"
import {MdComputer} from "react-icons/md"
import { Link, NavLink } from 'react-router-dom'

const FooterBg = {
    backgroundImage:`url(${footerImage})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"bottom center"
}

const Footer = () => {
  return (
    <div style={FooterBg} className=' rounded-t-3xl'>
        <div className=' bg-stone-300/15'>
            <div className=' container'>
                <div className=' grid md:grid-cols-4 md:gap-4 py-5 border-t-2 border-gray-300/10 text-black '>
                    {/* brand info */}
                    <div className=' py-8 px-4 space-y-4'>
                        <div className=' text-2xl flex items-center gap-2 font-bold uppercase'>
                            <MdComputer className=' text-secondary text-4xl'/>
                            <p className=''>SB7 ACCADEMY</p>

                        </div>
                        <p>
                            THE CONCEPTS OF THIS INSTITUTION IS KNOWN FOR – • Modern Infrastructure •
                            Interactive and Project learning •
                            Experienced faculties available for 24*7 • Well- ...
                        </p>
                        <div className=' flex items-center justify-start gap-5 !mt-6'>
                            <Link to="" className=' hover:text-secondary duration-200'>
                                <HiLocationMarker className=' text-3xl'/>
                            </Link>
                            <Link to="" className=' hover:text-secondary duration-200'>
                                <FaFacebook className=' text-3xl'/>
                            </Link>
                            <Link to="" className=' hover:text-secondary duration-200'>
                                <FaInstagram className=' text-3xl'/>
                            </Link>
                            <Link to="" className=' hover:text-secondary duration-200'>
                                <FaLinkedin className=' text-3xl'/>
                            </Link>
                        </div>
                        
                    </div>
                {/* footer link */}
                <div className=' grid grid-cols-2 md:grid-cols-3 md:col-span-3 md:ml-14'>
                        <div className=' py-8 px-4'>
                            <h1 className=' sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>
                                Important Links
                            </h1>
                            <ul className=' flex flex-col gap-3'>
                            <li>
                            <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            <li>
                                <Link className=' hover:text-secondary duration-200'>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link className=' hover:text-secondary duration-200'>
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                        </div>
                        
                        <div className=' py-8 px-4'>
                            <h1 className=' sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>
                                Resources
                            </h1>
                            <ul className=' flex flex-col gap-3'>
                            <li>
                                <Link className=' hover:text-secondary duration-200'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className=' hover:text-secondary duration-200'>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className=' hover:text-secondary duration-200'>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link className=' hover:text-secondary duration-200'>
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                        </div>

                        
                        <div className=' py-8 px-4'>
                            <h1 className=' sm:text-xl text-xl font-bold sm:text-left text-justify mb-5'>
                                Company Links
                            </h1>
                            <ul className=' flex flex-col gap-3'>
                            <li>
                                <Link className=' hover:text-secondary duration-200'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className=' hover:text-secondary duration-200'>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className=' hover:text-secondary duration-200'>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link className=' hover:text-secondary duration-200'>
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                        </div>
                </div>
                    {/* copyright section */}
                    <div className=' mt-8'>
                            <div className=' text-center py-6 border-t-2 border-gray-800/10'>
                                <span className=' text-sm text-black/60'>
                                    {" "}
                                    @copyright 2024 sb7 
                                </span>

                            </div>
                        </div>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Footer

