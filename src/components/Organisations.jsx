import React, { useEffect, useState } from 'react'

// react-icons
import { IoSettingsSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { SiReactivex } from "react-icons/si";

function Organisations({show}) {
    const [data, setData] = useState([])
    const [backscreen, setBackScreen] = useState(false)

    const rawData = [
        {
            src: 'https://img.freepik.com/free-photo/team-business-people-stacking-hands_53876-119699.jpg?w=996&t=st=1705168407~exp=1705169007~hmac=41a42a2c605b07e059f32fd4fdefb861fd89c6bc47215a54465eccf923ae3042',
            name: 'An Organisation Demo',
            title: 'Admin',
        },
        {
            src: 'https://img.freepik.com/free-photo/female-hands-writing-plan-notepad-holding-coffee-wooden-background_1268-17466.jpg?w=1380&t=st=1705168426~exp=1705169026~hmac=5d27379eebceed50e9c1c7eedf04c3e37393b9b919a1225889a94b1febdd631d',
            name: 'A Showcase International Development Education Charity',
            title: 'Member',
        },
        {
            src: 'https://img.freepik.com/free-photo/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2386.jpg?w=1380&t=st=1705168421~exp=1705169021~hmac=90c9a415dfdd8f7dc50826c42e587d459400676597c02a256fb903e9a304941b',
            name: 'Oak Tree Secondary School',
            title: 'Admin',
        },
        {
            src: 'https://img.freepik.com/free-photo/team-business-people-stacking-hands_53876-119699.jpg?w=996&t=st=1705168407~exp=1705169007~hmac=41a42a2c605b07e059f32fd4fdefb861fd89c6bc47215a54465eccf923ae3042',
            name: 'An Organisation Demo',
            title: 'Admin',
        },
        {
            src: 'https://img.freepik.com/free-photo/female-hands-writing-plan-notepad-holding-coffee-wooden-background_1268-17466.jpg?w=1380&t=st=1705168426~exp=1705169026~hmac=5d27379eebceed50e9c1c7eedf04c3e37393b9b919a1225889a94b1febdd631d',
            name: 'A Showcase International Development Education Charity',
            title: 'Member',
        },
        {
            src: 'https://img.freepik.com/free-photo/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2386.jpg?w=1380&t=st=1705168421~exp=1705169021~hmac=90c9a415dfdd8f7dc50826c42e587d459400676597c02a256fb903e9a304941b',
            name: 'Oak Tree Secondary School',
            title: 'Admin',
        },
        {
            src: 'https://img.freepik.com/free-photo/team-business-people-stacking-hands_53876-119699.jpg?w=996&t=st=1705168407~exp=1705169007~hmac=41a42a2c605b07e059f32fd4fdefb861fd89c6bc47215a54465eccf923ae3042',
            name: 'An Organisation Demo',
            title: 'Admin',
        },
        {
            src: 'https://img.freepik.com/free-photo/female-hands-writing-plan-notepad-holding-coffee-wooden-background_1268-17466.jpg?w=1380&t=st=1705168426~exp=1705169026~hmac=5d27379eebceed50e9c1c7eedf04c3e37393b9b919a1225889a94b1febdd631d',
            name: 'A Showcase International Development Education Charity',
            title: 'Member',
        },
        {
            src: 'https://img.freepik.com/free-photo/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office_7861-2386.jpg?w=1380&t=st=1705168421~exp=1705169021~hmac=90c9a415dfdd8f7dc50826c42e587d459400676597c02a256fb903e9a304941b',
            name: 'Oak Tree Secondary School',
            title: 'Admin',
        }
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
                    <h3 className='text-base font-semibold  text-[#215ce58f] cursor-pointer hover:underline'>Organisation</h3>
                    <span className='flex items-center justify-center px-2.5 py-1.5 text-xs text-white rounded-sm font-semibold cursor-pointer bg-[#215ce58f]'>
                        <FaPlus className='text-md' />&nbsp;New&nbsp;Organisation
                    </span>
                </span>

                {
                    data.filter((element, index) => {
                        return index < 3
                    })
                        .map((ele, idx) => {
                            return (
                                <span key={idx} className='flex items-start justify-start gap-x-2.5 px-3 w-full'>
                                    <img src={ele.src} alt="loading error" className='h-10 w-10 object-cover' />
                                    <span className='flex relative items-center justify-between w-full'>
                                        <span className='flex flex-col items-start justify-center w-auto max-w-48'>
                                            <h5 className='text-xs font-semibold text-[#215ce58f] cursor-pointer text-left hover:underline'>{ele.name}</h5>
                                            <span className='text-xs'>{ele.title}</span>
                                        </span>
                                        <IoSettingsSharp className={`text-lg ${ele.title == 'Admin' ? 'inline-block' : 'hidden'} cursor-pointer text-[#215ce58f]`}
                                            onClick={() => showSettings(idx)} />
                                        <span className={`absolute top-3.5 -right-0.5 translate-x-full ${ele.active ? 'flex' : 'hidden'} flex-col items-center justify-center rounded-sm py-2.5 bg-white w-52 border-2 border-[#0000001a] border-solid`}>
                                            <span className='w-full text-left text-xs px-3 py-0.5 cursor-pointer hover:bg-pink-600 hover:text-white'>
                                                Close Projects
                                            </span>
                                            <span className='w-full text-left text-xs px-3 py-0.5 cursor-pointer hover:bg-pink-600 hover:text-white'>
                                                Contacts
                                            </span>
                                            <span className='w-full text-left text-xs px-3 py-0.5 cursor-pointer hover:bg-pink-600 hover:text-white'>
                                                Control Panel
                                            </span>
                                            <span className='w-full text-left text-xs px-3 py-0.5 cursor-pointer hover:bg-pink-600 hover:text-white'>
                                                Edit
                                            </span>
                                            <span className='w-full text-left text-xs px-3 py-0.5 cursor-pointer hover:bg-pink-600 hover:text-white'>
                                                Impact Dashboard
                                            </span>
                                            <span className='w-full text-left text-xs px-3 py-0.5 cursor-pointer hover:bg-pink-600 hover:text-white'>
                                                Prefrences
                                            </span>
                                            <span className='w-full text-left text-xs px-3 py-0.5 cursor-pointer hover:bg-pink-600 hover:text-white'>
                                                Project Categories
                                            </span>
                                            <span className='w-full text-left text-xs px-3 py-0.5 cursor-pointer hover:bg-pink-600 hover:text-white'>
                                                Surveys
                                            </span>
                                            <span className='w-full text-left text-xs px-3 py-0.5 cursor-pointer hover:bg-pink-600 hover:text-white'>
                                                Manage Users
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            )
                        })
                }

                <span className='flex items-center justify-end w-full px-3'>
                    <button className='outline-none border-none cursor-pointer text-sm text-[#215ce58f]'>show all</button>
                </span>
            </span>
        </>
    )
}

export default Organisations