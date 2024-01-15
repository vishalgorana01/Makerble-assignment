import React from 'react'

// react-icons
import { IoSettingsSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { SiReactivex } from "react-icons/si";

function Contacts({show}) {
    return (
        <span className={`${show ? 'flex' : 'hidden'} flex-col items-start justify-start w-full gap-y-5 pb-3 bg-white rounded-md`} style={{height: '-webkit-fill-available'}}>
            <span className='flex items-center justify-between w-full px-3 py-2 border-b-2 border-[#0000001a]'>
                <h3 className='text-base font-semibold w-full text-[#215ce58f]'>Contacts</h3>
                <span className='flex items-center justify-center px-2.5 py-1.5 text-xs text-white rounded-sm font-semibold cursor-pointer bg-[#215ce58f]'>
                    <FaPlus className='text-md' />&nbsp;New&nbsp;Contact
                </span>
            </span>

            <span className='flex items-start justify-start gap-x-2.5 px-3 w-full'>
                <span className='flex items-center justify-center p-2 cursor-pointer rounded-md border-2 mb-1 border-[#215ce58f] border-solid'>
                    <SiReactivex className='text-xl' />
                </span>
                <span className='flex flex-col items-start justify-center w-auto'>
                    <h5 className='text-xs font-semibold text-[#215ce58f] cursor-pointer'>A11 Frank</h5>
                    <span className='text-xs'>Your last update was 6 days ago</span>
                </span>
            </span>

            <span className='flex items-start justify-start gap-x-2.5 px-3 w-full'>
                <span className='flex items-center justify-center p-2 cursor-pointer rounded-md border-2 mb-1 border-[#215ce58f] border-solid'>
                    <SiReactivex className='text-xl' />
                </span>
                <span className='flex flex-col items-start justify-center w-auto'>
                    <h5 className='text-xs font-semibold text-[#215ce58f] cursor-pointer'>A1 Adam android online</h5>
                    <span className='text-xs'></span>
                </span>
            </span>

            <span className='flex items-start justify-start gap-x-2.5 px-3 w-full'>
                <span className='flex items-center justify-center p-2 cursor-pointer rounded-md border-2 mb-1 border-[#215ce58f] border-solid'>
                    <SiReactivex className='text-xl' />
                </span>
                <span className='flex flex-col items-start justify-center w-auto'>
                    <h5 className='text-xs font-semibold text-[#215ce58f] cursor-pointer'>A1 demo referral contact</h5>
                    <span className='text-xs'>Your last update was 6 days ago</span>
                </span>
            </span>

            <span className='flex items-center justify-end w-full px-3'>
                <button className='outline-none border-none cursor-pointer text-sm text-[#215ce58f]'>show all</button>
            </span>
        </span>
    )
}

export default Contacts