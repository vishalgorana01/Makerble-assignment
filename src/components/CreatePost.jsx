import React, { useState } from 'react'

// react-icons
import { GiProgression } from "react-icons/gi";
import { GrAttachment } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarCheck } from "react-icons/fa6";
import { act } from 'react-dom/test-utils';

function CreatePost() {
    const [state, setState] = useState('')
    const [active, setActive] = useState(false)

    const [postDetails, setPostDetails] = useState({
        progress: true,
        attachment: false,
        location: false,
        date: false,
    })

    const [postDetailsContainer, setPostDetailsContainer] = useState(
        <>
        </>
    )

    const handleChange = (val) => {
        if (val != '') {
            setState(val)
            setActive(true)
        }
        else {
            setState(val)
            setActive(false)
        }
    }

    const handlePostDetails = (value) => {
        if (value == 1 && !postDetails.progress) {
            setPostDetails({
                progress: true,
                attachment: false,
                location: false,
                date: false,
            })
        }
        else if (value == 2 && !postDetails.attachment) {
            setPostDetails({
                progress: false,
                attachment: true,
                location: false,
                date: false,
            })
        }
        else if (value == 3 && !postDetails.location) {
            setPostDetails({
                progress: false,
                attachment: false,
                location: true,
                date: false,
            })
        }
        else if (value == 4 && !postDetails.date) {
            setPostDetails({
                progress: false,
                attachment: false,
                location: false,
                date: true,
            })
        }
    }

    return (
        <>
            <div className={`flex flex-col ${active ? 'gap-y-5' : ''} items-center justify-center w-full px-3 py-2 bg-white rounded-md`}>
                <span className={`${active ? 'flex' : 'hidden'} items-center justify-between pb-3.5 w-full border-b-2 border-[#0000001a] border-solid`}>
                    <h3 className='text-base font-semibold text-blue-400'>Post An Update</h3>
                    <span className='flex items-center gap-x-2 justify-end'>
                        <button className='cursor-pointer text-sm px-3.5 py-1 text-white bg-black'
                            onClick={() => handleChange('')}>
                            cancel
                        </button>
                        <button className='cursor-pointer text-sm px-5 py-1 text-white bg-red-400'>post</button>
                    </span>
                </span>

                <span className='flex gap-x-3 items-start justify-center w-full'>
                    <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1705170404~exp=1705171004~hmac=945c574fca1858e15ac7ed4a0c28d57a6f1bd44a5ebbf8b881a99db25d03ff9c" alt="loading error" className={`${active ? 'inline-block' : 'hidden'} h-24 w-24 rounded-md`} />
                    <span className={`flex gap-x-3 gap-y-2.5 ${active ? 'flex-col items-start' : 'flex-row items-center'}  justify-center w-full`}>
                        <textarea type="text" rows={active ? '3' : '1'}
                            placeholder='Yael Adamson-Brown share some progress'
                            className='outline-[#0000001a] border-[#0000001a] border-2 text-xs border-solid px-3 py-1 rounded-md w-full lg:text-sm'
                            value={state}
                            onChange={(ele) => handleChange(ele.currentTarget.value)}
                        />
                        <button className={`${active ? 'hidden' : 'inline-block'} cursor-pointer text-sm px-5 py-1.5 text-white bg-red-400`}>post</button>

                        <span className={`${active ? 'flex' : 'hidden'} gap-x-3 items-center justify-center w-full`}>
                            <h4 className='text-sm font-semibold'>project&nbsp;:</h4>
                            <select name="" id="" className='w-full cursor-pointer py-0.5 rounded-md px-2.5 outline-[#0000001a] border-[#0000001a] border-2 border-solid'>
                                <option className='cursor-pointer' value="abc project">abc project</option>
                                <option className='cursor-pointer' value="Antiracism">Antiracism</option>
                                <option className='cursor-pointer' value="Cohort">cohort</option>
                                <option className='cursor-pointer' value="Community Development">Community Development</option>
                                <option className='cursor-pointer' value="Continuous Professional Development">Continuous Professional Development</option>
                                <option className='cursor-pointer' value="Emplyoability">Emplyoability</option>
                                <option className='cursor-pointer' value="Experimentation - Module 1">Experimentation - Module 1</option>
                                <option className='cursor-pointer' value="London CLT">London CLT</option>
                                <option className='cursor-pointer' value="Mentoring">Mentoring</option>
                                <option className='cursor-pointer' value="Mixed Netball">Mixed Netball</option>
                                <option className='cursor-pointer' value="PPJ Onboarding Project">PPJ Onboarding Project</option>
                                <option className='cursor-pointer' value="Relationships">Relationships</option>
                                <option className='cursor-pointer' value="Using football to teach life skills to children">Using football to teach life skills to children</option>
                                <option className='cursor-pointer' value="Using music to deliver positive outcomes for vulnerable young people">Using music to deliver positive outcomes for vulnerable young people</option>
                            </select>
                        </span>

                        <span className={`${active ? 'flex' : 'hidden'} gap-x-3 items-center justify-start w-full`}>
                            <span className='text-sm font-semibold'>How long did you spend on this ?</span>
                            <input type="time"
                                className='outline-[#0000001a] border-2 border-[#0000001a] px-1.5 py-0.5 cursor-pointer rounded-sm'
                            />
                        </span>
                    </span>
                </span>

                <span className={`${active ? 'grid' : 'hidden'} grid-cols-1 gap-x-2.5 gap-y-3 items-center justify-between w-full sm:grid-cols-2 md:grid-cols-4`}>
                    <span className={`flex items-center justify-between ${postDetails.progress ? 'bg-purple-500 text-white' : 'bg-gray-200 text-black'} cursor-pointer gap-x-5 w-full px-3 py-2 hover:bg-purple-500 hover:text-white`}
                        onClick={() => handlePostDetails(1)}>
                        <GiProgression className='text-xl' />
                        <span className='w-full pl-2.5 text-sm xl:text-base'>Add Progress</span>
                    </span>

                    <span className={`flex items-center justify-between ${postDetails.attachment ? 'bg-purple-500 text-white' : 'bg-gray-200 text-black'} cursor-pointer gap-x-5 w-full px-3 py-2 hover:bg-purple-500 hover:text-white`}
                        onClick={() => handlePostDetails(2)}>
                        <GrAttachment className='text-xl' />
                        <span className='w-full pl-2.5 text-sm xl:text-base'>Attachment</span>
                    </span>

                    <span className={`flex items-center justify-between ${postDetails.location ? 'bg-purple-500 text-white' : 'bg-gray-200 text-black'} cursor-pointer gap-x-5 w-full px-3 py-2 hover:bg-purple-500 hover:text-white`}
                        onClick={() => handlePostDetails(3)}>
                        <FaLocationDot className='text-xl' />
                        <span className='w-full pl-2.5 text-sm xl:text-base'>Location</span>

                    </span>

                    <span className={`flex items-center justify-between ${postDetails.date ? 'bg-purple-500 text-white' : 'bg-gray-200 text-black'} cursor-pointer gap-x-5 w-full px-3 py-2 hover:bg-purple-500 hover:text-white`}
                        onClick={() => handlePostDetails(4)}>
                        <FaCalendarCheck className='text-xl' />
                        <span className='w-full pl-2.5 text-sm xl:text-base'>Date</span>
                    </span>
                </span>

                <span className='flex items-center justify-center w-full'>

                </span>
            </div>
        </>
    )
}

export default CreatePost