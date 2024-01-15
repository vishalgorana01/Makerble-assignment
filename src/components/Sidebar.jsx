import React from 'react'

function Sidebar() {
    return (
        <>
            <div className='flex flex-col gap-y-5 items-center justify-center w-full bg-white'>
                <h3 className='text-lg text-left font-semibold px-3 py-3.5 text-[#215ce58f] border-b-2 border-[#0000001a] border-solid cursor-pointer w-full hover:underline'>
                    Services
                </h3>

                <span className='flex flex-col gap-y-2 px-3 py-2.5 items-center justify-center w-full'>
                    <span className='w-full text-left text-base'>Boards</span>
                    <span className='w-full text-left text-base'>Boards</span>
                    <span className='w-full text-left text-base'>Boards</span>
                    <span className='w-full text-left text-base'>Boards</span>
                    <span className='w-full text-left text-base'>Boards</span>
                    <span className='w-full text-left text-base'>Boards</span>
                    <span className='w-full text-left text-base'>Boards</span>
                    <span className='w-full text-left text-base'>Boards</span>
                    <span className='w-full text-left text-base'>Boards</span>
                </span>
            </div>
        </>
    )
}

export default Sidebar