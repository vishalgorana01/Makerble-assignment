import React, { useState, useEffect } from 'react'

// react-icons
import { IoSettingsSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { SiReactivex } from "react-icons/si";

function Followers({show}) {
    const [data, setData] = useState([])
    const rawData = [
        {
            src: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1705170382~exp=1705170982~hmac=f7dc4aa1349f990511d864c863882d70636a84d9de6a9192807028bc7afcb1c8',
            name: 'Follower 1',
            id: '2',
        },
        {
            src: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=996&t=st=1705170387~exp=1705170987~hmac=66a0ba723a2982313ce86ce4d8d699276533a6b1aedd9bd04e95fe7ccd863402',
            name: 'Follower 2',
            id: '2',
        },
        {
            src: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1705170404~exp=1705171004~hmac=945c574fca1858e15ac7ed4a0c28d57a6f1bd44a5ebbf8b881a99db25d03ff9c',
            name: 'Follower 3',
            id: '3',
        },
        {
            src: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1705170382~exp=1705170982~hmac=f7dc4aa1349f990511d864c863882d70636a84d9de6a9192807028bc7afcb1c8',
            name: 'Follower 4',
            id: '4',
        },
        {
            src: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=996&t=st=1705170387~exp=1705170987~hmac=66a0ba723a2982313ce86ce4d8d699276533a6b1aedd9bd04e95fe7ccd863402',
            name: 'Follower 5',
            id: '5',
        },
        {
            src: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1705170404~exp=1705171004~hmac=945c574fca1858e15ac7ed4a0c28d57a6f1bd44a5ebbf8b881a99db25d03ff9c',
            name: 'Follower 6',
            id: '6',
        },
        {
            src: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1705170382~exp=1705170982~hmac=f7dc4aa1349f990511d864c863882d70636a84d9de6a9192807028bc7afcb1c8',
            name: 'Follower 7',
            id: '7',
        },
        {
            src: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=996&t=st=1705170387~exp=1705170987~hmac=66a0ba723a2982313ce86ce4d8d699276533a6b1aedd9bd04e95fe7ccd863402',
            name: 'Follower 8',
            id: '8',
        },
        {
            src: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1705170404~exp=1705171004~hmac=945c574fca1858e15ac7ed4a0c28d57a6f1bd44a5ebbf8b881a99db25d03ff9c',
            name: 'Follower 9',
            id: '9',
        },
        {
            src: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1705170382~exp=1705170982~hmac=f7dc4aa1349f990511d864c863882d70636a84d9de6a9192807028bc7afcb1c8',
            name: 'Follower 10',
            id: '10',
        },
        {
            src: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=996&t=st=1705170387~exp=1705170987~hmac=66a0ba723a2982313ce86ce4d8d699276533a6b1aedd9bd04e95fe7ccd863402',
            name: 'Follower 11',
            id: '11',
        },
        {
            src: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1705170404~exp=1705171004~hmac=945c574fca1858e15ac7ed4a0c28d57a6f1bd44a5ebbf8b881a99db25d03ff9c',
            name: 'Follower 12',
            id: '12',
        },
    ]

    useEffect(() => {
        setData(rawData)
    }, [])
    
    return (
        <span className={`${show ? 'flex' : 'hidden'} flex-col items-start justify-start w-full gap-y-5 pb-3 bg-white rounded-md xl:flex`} style={{height: '-webkit-fill-available'}}>
            <span className='flex items-center justify-between w-full px-3 py-2 border-b-2 border-[#0000001a]'>
                <h3 className='text-base font-semibold text-[#215ce58f] cursor-pointer hover:underline'>Followers</h3>
            </span>

            <span className='flex items-center justify-start gap-x-3 gap-y-5 w-full flex-wrap px-3'>
                {
                    data.filter((element, index) => {
                        return index < 8
                    })
                        .map((ele, idx) => {
                            return (
                                <img key={idx} src={ele.src} alt="loading error" className='cursor-pointer h-10 w-10 rounded-full object-cover' />
                            )
                        })
                }
            </span>

            <span className='flex items-center justify-end w-full px-3'>
                <button className='outline-none border-none cursor-pointer text-sm text-[#215ce58f]'>show all</button>
            </span>
        </span>
    )
}

export default Followers