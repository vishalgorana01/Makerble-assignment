import React, { useState, useEffect } from 'react'

// react-icons
import { IoSettingsSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { SiReactivex } from "react-icons/si";

function Albums({show}) {
    const [data, setData] = useState([])
    const [backscreen, setBackScreen] = useState(false)

    const rawData = [
        {
            name: 'Roberstion Trust',
            album_id: 1,
            active: false,
        },
        {
            name: 'FASE Funding 2023',
            album_id: 2,
            active: false,
        },
        {
            name: 'Funding Projects',
            album_id: 3,
            active: false,
        },
        {
            name: 'Social Media',
            album_id: 4,
            active: false,
        },
        {
            name: 'Motivation Project',
            album_id: 5,
            active: false,
        },
        {
            name: 'Be Successful',
            album_id: 6,
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
            <span className={`fixed top-0 left-0 ${backscreen ? 'inline-block' : 'hidden'} w-screen h-screen bg-[#0000000d]`}
                onClick={() => hideSettings()}>
            </span>
            <span className={`${show ? 'flex' : 'hidden'} flex-col items-start justify-start w-full gap-y-5 pb-3 bg-white rounded-md`} style={{height: '-webkit-fill-available'}}>
                <span className='flex items-center justify-between w-full px-3 py-2 border-b-2 border-[#0000001a]'>
                    <h3 className='text-base font-semibold text-[#215ce58f] cursor-pointer hover:underline'>Albums</h3>
                    <span className='flex items-center justify-center px-2.5 py-1.5 text-xs text-white rounded-sm font-semibold cursor-pointer bg-[#215ce58f]'>
                        <FaPlus className='text-md' />&nbsp;New&nbsp;Album
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
                                        <IoSettingsSharp className='text-[#215ce58f] cursor-pointer' 
                                        onClick={() => showSettings(index)} />
                                        <span className={`absolute top-3.5 -right-0.5 translate-x-full ${ele.active ? 'flex' : 'hidden'} flex-col items-center justify-center rounded-sm py-2.5 bg-white w-52 border-2 border-[#0000001a] border-solid`}>
                                            <span className='w-full text-left text-xs px-3 py-0.5 cursor-pointer hover:bg-pink-600 hover:text-white'>
                                                Edit
                                            </span>
                                            <span className='w-full text-left text-xs px-3 py-0.5 cursor-pointer hover:bg-pink-600 hover:text-white'>
                                                Projects
                                            </span>
                                            <span className='w-full text-left text-xs px-3 py-0.5 cursor-pointer hover:bg-pink-600 hover:text-white'>
                                                Prefrences
                                            </span>
                                        </span>
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

export default Albums