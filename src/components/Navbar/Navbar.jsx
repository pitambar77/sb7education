import React, { useState } from 'react'
import { NavItems } from '../../mockData/data'
import {MdComputer,MdMenu} from 'react-icons/md'
import {motion} from "framer-motion"
import ResponsiveMenu from './ResponsiveMenu'
import { Link, NavLink } from 'react-router-dom'
import sb7Logo from '../../assets/sb.png'


const Navbar = () => {

    const [isOpen,setIsOpen] = useState(false);

  return (
    <>
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.5, delay:0.5}}
        >
            <div className=' container flex justify-between items-center py-6'>
                {/*logo section */}
                <div>
                    <Link to = '/' className=' text-2xl flex items-center gap-2 font-bold'>
                        {/* <MdComputer className=' text-3xl text-secondary'/>
                        <p>SB7</p> */}
                        <img
                            src={sb7Logo}
                            className="mr-3 h-16"
                            alt="Logo"
                        />
                    </Link>
                    
                </div>

                {/*menu section */}

                <div className=' hidden lg:block'>
                    <ul className=' flex items-center gap-6'>
                        {
                            NavItems.map((item)=>{
                                return(
                                    <li key={item.id}>
                                        <NavLink to={item.link} className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} font-semibold border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    } >{item.title}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                {/*CTA Button section */}

                <div className=' hidden lg:block space-x-4'>
                    <button className=' font-semibold'> Sign in</button>
                    <button className=' text-white bg-secondary font-semibold rounded-full px-6 py-2'>Register</button>
                </div>
                {/*mobile hamburger menu */}

                <div className=' lg:hidden' onClick={()=>setIsOpen(!isOpen)}>
                    <MdMenu className=' text-4xl'/>
                </div>

            </div>
        </motion.div>
        <ResponsiveMenu isOpen={isOpen}/>
    </>
  )
}

export default Navbar