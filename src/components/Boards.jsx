import React, { useState, useEffect } from 'react'

// react-icons
import { IoSettingsSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { SiReactivex } from "react-icons/si";

function Boards({show}) {
    const [data, setData] = useState([])
    const [backscreen, setBackScreen] = useState(false)

    const rawData = [
        {
            name: '3515',
            board_id: 1,
            active: false,
        },
        {
            name: 'Angala Production',
            board_id: 2,
            active: false,
        },
        {
            name: 'Attendance Reporting',
            board_id: 3,
            active: false,
        },
        {
            name: 'Social Media',
            board_id: 4,
            active: false,
        },
        {
            name: 'Motivation Project',
            board_id: 5,
            active: false,
        },
        {
            name: 'Be Successful',
            board_id: 6,
            active: false,
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
            <span className={`${show ? 'flex' : 'hidden'} flex-col items-start justify-start w-full gap-y-5 pb-3 bg-white rounded-md`} style={{height: '-webkit-fill-available'}}>
                <span className='flex items-center justify-between w-full px-3 py-2 border-b-2 border-[#0000001a]'>
                    <h3 className='text-base font-semibold text-[#215ce58f] cursor-pointer hover:underline'>Boards</h3>
                    <span className='flex items-center justify-center px-2.5 py-1.5 text-xs text-white rounded-sm font-semibold cursor-pointer bg-[#215ce58f]'>
                        <FaPlus className='text-md' />&nbsp;New&nbsp;Board
                    </span>
                </span>

                {
                    data.filter((element, idx) => {
                        return idx < 3
                    })
                        .map((ele, index) => {
                            return (
                                <span key={index} className='flex items-center justify-start gap-x-2.5 px-3 w-full'>
                                    <span className='flex items-center justify-center p-2 cursor-pointer rounded-md border-2 mb-1 border-[#215ce58f] border-solid'>
                                        <SiReactivex className='text-xl' />
                                    </span>
                                    <span className='flex relative items-center justify-between w-full'>
                                        <h5 className='text-sm font-semibold text-[#215ce58f] cursor-pointer hover:underline'>{ele.name}</h5>
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

export default Boards