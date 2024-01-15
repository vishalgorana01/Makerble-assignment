import React, { useState, useEffect } from 'react'

// react-icons
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

function Tasks({ show }) {
    const [data, setData] = useState([])
    const [backscreen, setBackScreen] = useState(false)

    const rawData = [
        {
            todo: 'follow up call needed',
            todo_id: 1,
            status: 'pending',
        },
        {
            todo: 'contact the local auth..',
            todo_id: 2,
            status: 'pending',
        },
        {
            todo: 'Book in another meet..',
            todo_id: 3,
            status: 'pending',
        },
        {
            todo: 'Speak to the GP abou...',
            todo_id: 4,
            status: 'pending',
        },
        {
            todo: 'you need to call her..',
            todo_id: 5,
            status: 'pending',
        },
        {
            todo: 'submission deadline',
            todo_id: 6,
            status: 'pending',
        },
        {
            todo: '',
            todo_id: 7,
            status: 'completed',
        },
        {
            todo: '',
            todo_id: 8,
            status: 'completed',
        },
        {
            todo: '',
            todo_id: 9,
            status: 'completed',
        },
        {
            todo: '',
            todo_id: 10,
            status: 'completed',
        },
    ]

    const showSettings = (index) => {
        for (let i in rawData) {
            if (i == index) {
                rawData[i].active = true
                setData(rawData)
                setBackScreen(true)
            }
            else {
                rawData[i].active = false
                setData(rawData)
            }
        }
    }

    const hideSettings = () => {
        for (let i in rawData) {
            rawData[i].active = false
            setData(rawData)
            setBackScreen(false)
        }
    }

    useEffect(() => {
        setData(rawData)
    }, [])

    return (
        <>
            <span className={`fixed top-0 left-0 ${backscreen ? 'inline-block' : 'hidden'} w-screen h-screen bg-[#0000000d]`}
                onClick={() => hideSettings()}>
            </span>
            <span className={`${show ? 'flex' : 'hidden'} flex-col items-start justify-start w-full gap-y-5 pb-3 bg-white rounded-md`} style={{height: '-webkit-fill-available'}}>
                <span className='flex items-center justify-between w-full gap-x-2.5 pl-3 py-2 border-b-2 border-[#0000001a]'>
                    <h3 className='text-base font-semibold text-[#215ce58f] cursor-pointer hover:underline'>Tasks</h3>
                    <span className='flex items-center justify-between w-full px-2.5 py-1.5 text-xs text-white rounded-sm font-semibold cursor-pointer'>
                        <span className='flex items-center justify-center gap-x-1'>
                            <span className='text-xs text-black px-1.5 py-1 border-2 border-[#0000001a] border-solid rounded-sm'>
                                23 To Do
                            </span>
                            <span className='text-2xl text-black -mt-1.5'>|</span>
                            <span className='text-xs bg-gray-400 text-white px-1.5 py-1 border-2 border-gray-400 border-solid rounded-sm'>
                                41 Done
                            </span>
                        </span>

                        <span className='text-xs cursor-pointer bg-green-500 text-white px-1.5 py-1 border-2 border-green-500 border-solid rounded-sm'>
                            filters
                        </span>
                    </span>
                </span>

                <span className='flex items-center justify-center gap-x-2.5 px-3 w-full'>
                    <input type="text"
                        placeholder='add your next to do..'
                        className='outline-[#0000001a] border-[#0000001a] border-2 rounded-sm border-solid w-full text-xs py-1.5 px-2'
                    />
                    <span className='text-xs bg-red-500 text-white px-2.5 py-1.5 border-2 border-red-500 border-solid rounded-sm'>
                        Save
                    </span>
                </span>

                <span className='flex flex-col gap-y-2 items-center justify-center px-3 w-full'>
                    {
                        data != null ?
                            data.filter((ele, idx) => {
                                return ele.status == 'pending'
                            })
                                .map((ele, index) => {
                                    return (
                                        <span key={index} className='flex items-center justify-between w-full rounded-sm border-[#0000001a] border-2 border-solid text-xs py-1 px-2'>
                                            <span className='text-xs'>{ele.todo}</span>
                                            <span className='flex gap-x-1.5 items-center justify-end'>
                                                <input type="checkbox" className='cursor-pointer' />
                                                <IoSettingsSharp className='text-blue-500 text-lg cursor-pointer' />
                                            </span>
                                        </span>
                                    )
                                })
                            :
                            'nothing to show'
                    }
                </span>

                <span className='flex items-center gap-x-3.5 justify-center w-full px-3'>
                    <button className='flex items-center justify-center outline-[#0000001a] border-[#0000001a] border-2 rounded-sm border-solid text-xs py-1.5 px-2'>
                        <IoIosArrowRoundBack className='text-lg mr-1' /> previous
                    </button>
                    <button className='flex items-center justify-center outline-[#0000001a] border-[#0000001a] border-2 rounded-sm border-solid text-xs py-1.5 px-2'>
                        next <IoIosArrowRoundForward className='text-lg ml-1' />
                    </button>
                </span>
            </span>
        </>
    )
}

export default Tasks