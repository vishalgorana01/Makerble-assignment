import React, { useState } from 'react'

// react icons
import { SiReactivex } from "react-icons/si";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { BiMenuAltRight } from "react-icons/bi";

// images
import profile from '../assests/images/VishalGorana.jpg'
import NavSidebar from './NavSidebar';

function Navbar() {
    const [show, setShow] = useState(false);
    return (
        <>
            <section className='flex flex-col items-center bg-white justify-center w-screen border-[#0000001a] border-b-2 shadow-2xl'>
                <div className='flex relative items-center justify-center w-full max-w-screen-2xl'>
                    <div className='flex relative items-center justify-center text-sm w-full'>
                        <span className='flex items-center justify-center px-3.5 py-3.5 sm:w-40'>
                            <SiReactivex className='text-2xl cursor-pointer' />
                        </span>

                        <span className='flex items-center justify-between py-3.5 px-2.5 gap-x-5 border-solid border-[#0000001a] border-l-2 border-r-2 w-full xl:hidden'>
                            <input type="text" placeholder='search for contacts and projects' className='px-2.5 py-1 border-2 border-[#0000001a] outline-[#0000001a] rounded-md w-full md:w-3/5' />
                            <span className='flex items-center justify-center gap-x-3'>
                                <span className='flex items-center justify-center'>
                                    <IoMdNotifications className=' text-xl cursor-pointer' />
                                </span>
                                <span className='flex items-center justify-center gap-x-1.5'>
                                    <span className='rounded-sm text-xs h-8 w-8 cursor-pointer'>
                                        <img src={profile} alt="loading error" className='h-full w-full object-cover' />
                                    </span>
                                </span>
                            </span>
                        </span>

                        <span className='hidden items-center justify-center border-[#0000001a] border-l-2 border-r-2 border-solid w-full xl:flex'>
                            <a href='/' className='flex items-center justify-center py-5 px-7 border-solid border-[#0000001a] border-r-2 cursor-pointer'>
                                My&nbsp;apps
                            </a>
                            <a href='/' className='flex items-center justify-center py-5 px-7 border-solid border-[#0000001a] border-r-2 cursor-pointer'>
                                Home
                            </a>
                            <a href='/' className='flex items-center justify-center py-5 px-7 border-solid border-[#0000001a] border-r-2 cursor-pointer'>
                                Explore
                            </a>
                            <span className='flex items-center justify-between py-3.5 px-2.5 gap-x-5 border-solid border-[#0000001a] border-r-2 w-full'>
                                <input type="text" placeholder='search for contacts and projects' className='px-2.5 py-1 border-2 border-[#0000001a] outline-[#0000001a] rounded-md w-3/5' />

                                <span className='flex items-center justify-center gap-x-3'>
                                    <span className='flex items-center justify-center'>
                                        <IoMdNotifications className='cursor-pointer' />
                                        <span className='bg-black rounded-sm text-xs px-1 py-0.5 text-cyan-300'>79</span>
                                    </span>
                                    <MdOutlineMessage className='text-xl cursor-pointer' />
                                    <span className='flex items-center justify-center gap-x-1.5'>
                                        <span className='rounded-sm text-xs h-8 w-8 cursor-pointer'>
                                            <img src={profile} alt="loading error" className='h-full w-full object-cover' />
                                        </span>
                                        <span className='text-xs cursor-pointer'>Yael Adamson-Brown</span>
                                    </span>
                                </span>
                            </span>
                        </span>

                        <span className='flex items-center justify-between gap-x-2.5 px-3.5'>
                            <BiMenuAltRight className='inline-block text-2xl cursor-pointer xl:hidden'
                                onClick={() => setShow(!show)} />

                            <button className='hidden items-center justify-center px-3.5 py-1.5 text-white font-semibold cursor-pointer rounded-sm bg-red-500 xl:flex'>
                                <FaPlus />&nbsp;Create
                            </button>
                            <button className='hidden items-center justify-center px-3.5 py-1.5 cursor-pointer rounded-sm bg-white border-2 border-[#0000001a] border-solid xl:flex'>
                                <CgDetailsMore />&nbsp;More
                            </button>
                        </span>

                        {/* sidebar */}
                        <NavSidebar show={show} setShow={setShow} />
                    </div>
                </div>
            </section>

            <section className='flex items-center justify-center w-screen mt-5'>
                <div className='flex items-center justify-start gap-x-5 px-3 w-full max-w-screen-2xl'>
                    <a className='border-[#0000001a] border-2 cursor-pointer rounded-md bg-white border-solid px-5 py-1.5 text-sm' href='/'>
                        Posts
                    </a>
                    <a className='hidden border-[#0000001a] border-2 cursor-pointer rounded-md bg-white border-solid px-5 py-1.5 text-sm sm:inline-block' href='/'>
                        Boards
                    </a>
                    <a className='hidden border-[#0000001a] border-2 cursor-pointer rounded-md bg-white border-solid px-5 py-1.5 text-sm sm:inline-block' href='/'>
                        Events
                    </a>
                    <a className='hidden border-[#0000001a] border-2 cursor-pointer rounded-md bg-white border-solid px-5 py-1.5 text-sm md:inline-block' href='/'>
                        Organisations
                    </a>
                    <a className='hidden border-[#0000001a] border-2 cursor-pointer rounded-md bg-white border-solid px-5 py-1.5 text-sm md:inline-block' href='/'>
                        Contacts
                    </a>
                    <a className='hidden border-[#0000001a] border-2 cursor-pointer rounded-md bg-white border-solid px-5 py-1.5 text-sm md:inline-block' href='/'>
                        Projects
                    </a>
                    <a className='border-[#0000001a] border-2 cursor-pointer rounded-md bg-white border-solid px-5 py-1.5 text-sm' href='/categories'>
                        All
                    </a>
                </div>
            </section>
        </>
    )
}

export default Navbar