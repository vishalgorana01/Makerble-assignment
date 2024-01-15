import React from 'react'

// react-icons
import { IoSettingsSharp } from "react-icons/io5";

function Events({show}) {
  return (
    <span className={`${show ? 'flex' : 'hidden'} flex-col items-start justify-start w-full gap-y-5 pb-3 bg-white rounded-md`} style={{height: '-webkit-fill-available'}}>
        <h3 className='text-base font-semibold w-full py-2.5 px-3 border-b-2 border-[#0000001a] text-[#215ce58f]'>Events</h3>
        <span className='flex flex-col items-start justify-center px-3 gap-y-1 w-full'>
            <span className='flex items-center justify-between w-full mb-1'>
                <h5 className='text-sm font-semibold text-[#215ce58f] cursor-pointer'>Youth Panel</h5>
                <IoSettingsSharp className='text-[#215ce58f] cursor-pointer'/>
            </span>
            <span className='text-xs'>13:00 02/03/2023 - 15:30 02/02/2023</span>
            <span className='text-xs'>1 Manager, 0 Workers, 0 Guests</span>
        </span>

        <span className='flex flex-col items-start justify-center px-3 gap-y-1 w-full'>
            <span className='flex items-center justify-between w-full mb-1'>
                <h5 className='text-sm font-semibold text-[#215ce58f] cursor-pointer'>Youth Panel</h5>
                <IoSettingsSharp className='text-[#215ce58f] cursor-pointer'/>
            </span>
            <span className='text-xs'>13:00 02/03/2023 - 15:30 02/02/2023</span>
            <span className='text-xs'>1 Manager, 0 Workers, 0 Guests</span>
        </span>

        <span className='flex flex-col items-start justify-center px-3 gap-y-1 w-full'>
            <span className='flex items-center justify-between w-full mb-1'>
                <h5 className='text-sm font-semibold text-[#215ce58f] cursor-pointer'>Youth Panel</h5>
                <IoSettingsSharp className='text-[#215ce58f] cursor-pointer'/>
            </span>
            <span className='text-xs'>13:00 02/03/2023 - 15:30 02/02/2023</span>
            <span className='text-xs'>1 Manager, 0 Workers, 0 Guests</span>
        </span>
    </span>
  )
}

export default Events