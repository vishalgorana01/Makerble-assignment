import React from 'react'

// react-icons
import { GrClose } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";

function NavSidebar({ show, setShow }) {

    return (
        <>
        <div className={`h-screen w-screen z-10 fixed top-0 left-0 bg-[#00000075] ${show ? 'inline-block' : 'hidden'}`}
        onClick={() => setShow(!show)}>

        </div>
            <div className={`flex z-20 flex-col items-start justify-start px-6 py-12 gap-y-5 text-base fixed top-0 right-0 ease-in-out duration-300 ${show ? 'translate-x-0' : 'translate-x-full'} h-screen w-full border-[#0000001a] border-l-2 shadow-xl overflow-y-scroll bg-white sm:w-96 sm:px-10`}>
                <GrClose className={`absolute top-5 right-5  ease-in-out ${show ? 'rotate-0 duration-700' : 'rotate-45 duration-0'} cursor-pointer text-2xl`}
                    onClick={() => { setShow(!show) }} />


                <span className='flex items-center justify-center'>
                    My Apps
                </span>
                <span className='flex items-center justify-center'>
                    Home
                </span>
                <span className='flex items-center justify-center'>
                    Explore
                </span>
                <span className='flex items-center justify-center'>
                    Your Profile
                </span>
                <span className='flex items-center justify-center'>
                    Chats
                </span>
                <span className='flex items-center justify-center'>
                    Notifications
                </span>
                <span className='flex items-center justify-center px-3.5 py-1.5 text-white font-semibold cursor-pointer rounded-sm w-28 bg-red-400'>
                    <FaPlus />&nbsp;Create
                </span>
                <span className='flex items-center justify-center px-3.5 py-1.5 cursor-pointer rounded-sm w-28 bg-white border-2 border-[#0000001a] border-solid'>
                    <CgDetailsMore />&nbsp;More
                </span>
            </div>
        </>
    )
}

export default NavSidebar