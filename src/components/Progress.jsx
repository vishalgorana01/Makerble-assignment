import React, { useState, useEffect } from 'react'

// react icons
import { IoSettingsSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { SiReactivex } from "react-icons/si";
import { FaCircle } from "react-icons/fa";

function Progress({show}) {
    const [data, setData] = useState([])
    const [backscreen, setBackScreen] = useState(false)

    const rawData = [
        {
            name: 'Are either of your parents living?',
            progress_id: 1,
            active: false,
            progress: 7,
            out_off: 10,
            color: 'red',
        },
        {
            name: 'Do you belongs to any group in which...',
            progress_id: 2,
            active: false,
            progress: 6,
            out_off: 10,
            color: 'blue',

        },
        {
            name: '1-2-1 Events',
            progress_id: 3,
            active: false,
            progress: 23,
            out_off: 100,
            color: 'green',
        },
        {
            name: 'Social Media',
            progress_id: 4,
            active: false,
            progress: 7,
            out_off: 10,
            color: 'yellow',
        },
        {
            name: 'Motivation Project',
            progress_id: 5,
            active: false,
            progress: 6,
            out_off: 10,
            color: 'brown',
        },
        {
            name: 'Be Successful',
            progress_id: 6,
            active: false,
            progress: 47,
            out_off: 100,
            color: 'pink',
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
                <span className='flex items-center justify-between w-full px-3 py-2 border-b-2 border-[#0000001a]'>
                    <h3 className='text-base font-semibold text-[#215ce58f] cursor-pointer hover:underline'>Progress</h3>
                    <span className='flex items-center justify-center px-2.5 py-1.5 text-xs text-white rounded-sm font-semibold cursor-pointer bg-[#215ce58f]'>
                        Go&nbsp;To&nbsp;Board
                    </span>
                </span>

                {
                    data.filter((element, idx) => {
                        return idx < 3
                    })
                        .map((ele, index) => {
                            return (
                                <span key={index} className='flex items-start justify-start gap-x-2.5 px-3 w-full'>
                                    <span className='flex items-center justify-center p-1 cursor-pointer rounded-md mb-1'>
                                        <FaCircle className={`text-4xl`} style={{ color: ele.color }} />
                                    </span>
                                    <span className='flex flex-col gap-y-1 relative items-center justify-between w-full'>
                                        <h5 className='text-xs font-semibold text-[#215ce58f] cursor-pointer hover:underline'>{ele.name}</h5>
                                        <span className='flex items-center justify-center gap-x-3.5 w-full'>
                                            <span className='flex items-center justify-start bg-[#0000001a] w-full rounded-sm'>
                                                <span className='text-center h-3 text-[0.575rem] text-white bg-black' style={{ width: `${(ele.progress / ele.out_off) * 100}%` }}>
                                                    {ele.progress}
                                                </span>
                                            </span>
                                            <FaPlus className='text-sm cursor-pointer' />
                                        </span>
                                        {/* <span className={`absolute top-3.5 -right-0.5 translate-x-full ${ele.active ? 'flex' : 'hidden'} flex-col items-center justify-center rounded-sm py-2.5 bg-white w-52 border-2 border-[#0000001a] border-solid`}>
                                            <span className='w-full text-left text-xs px-3 py-0.5 cursor-pointer hover:bg-pink-600 hover:text-white'>
                                                Edit
                                            </span>
                                            <span className='w-full text-left text-xs px-3 py-0.5 cursor-pointer hover:bg-pink-600 hover:text-white'>
                                                Projects
                                            </span>
                                            <span className='w-full text-left text-xs px-3 py-0.5 cursor-pointer hover:bg-pink-600 hover:text-white'>
                                                Prefrences
                                            </span>
                                        </span> */}
                                    </span>
                                </span>
                            )
                        })
                }

                <span className='flex items-center justify-end w-full px-3'>
                    <button className='outline-none border-none cursor-pointer text-sm text-[#215ce58f] hover:underline'>show all</button>
                </span>
            </span>
        </>
    )
}

export default Progress