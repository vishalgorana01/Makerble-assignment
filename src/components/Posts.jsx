import React, { useEffect, useState } from 'react'

// react icons
import { IoSettingsSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { SiReactivex } from "react-icons/si";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";

function Posts() {
  var [data, setData] = useState([
    {
      profile: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1705170404~exp=1705171004~hmac=945c574fca1858e15ac7ed4a0c28d57a6f1bd44a5ebbf8b881a99db25d03ff9c',
      name: 'Yael Adamson-Brown',
      posted_date: '18th Febraury 2023',
      posted_time: '9:00 pm',
      labels: ['update'],
      desc: `<a className="text-blue-400 cursor-pointer" href="">1</a> by <a className="text-blue-400 cursor-pointer" href="">Yael Adamson-Brown</a> working at <a className="text-blue-400 cursor-pointer" href="">Harvesting</a> starting at 10:00 on 18th Febraury on <a className="text-blue-400 cursor-pointer" href="">Ceral Farming</a> project for <a className="text-blue-400 cursor-pointer" href="">Farming Test.</a>`,
      comments: [],
      no_of_comments: 0,
      favourites: [],
      no_of_favourites: 0,
      like: false,
    },

    {
      profile: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1705170404~exp=1705171004~hmac=945c574fca1858e15ac7ed4a0c28d57a6f1bd44a5ebbf8b881a99db25d03ff9c',
      name: 'Yael Adamson-Brown',
      posted_date: '18th Febraury 2023',
      posted_time: '9:00 pm',
      labels: ['update'],
      desc: `<a className="text-blue-400 cursor-pointer" href="">1</a> by <a className="text-blue-400 cursor-pointer" href="">Yael Adamson-Brown</a> working at <a className="text-blue-400 cursor-pointer" href="">Harvesting</a> starting at 10:00 on 18th Febraury on <a className="text-blue-400 cursor-pointer" href="">Ceral Farming</a> project for <a className="text-blue-400 cursor-pointer" href="">Farming Test.</a>`,
      comments: [],
      no_of_comments: 0,
      favourites: [],
      no_of_favourites: 0,
      like: false,
    },

    {
      profile: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1705170404~exp=1705171004~hmac=945c574fca1858e15ac7ed4a0c28d57a6f1bd44a5ebbf8b881a99db25d03ff9c',
      name: 'Yael Adamson-Brown',
      posted_date: '18th Febraury 2023',
      posted_time: '9:00 pm',
      labels: ['update'],
      desc: `<a className="text-blue-400 cursor-pointer" href="">1</a> by <a className="text-blue-400 cursor-pointer" href="">Yael Adamson-Brown</a> working at <a className="text-blue-400 cursor-pointer" href="">Harvesting</a> starting at 10:00 on 18th Febraury on <a className="text-blue-400 cursor-pointer" href="">Ceral Farming</a> project for <a className="text-blue-400 cursor-pointer" href="">Farming Test.</a>`,
      comments: [],
      no_of_comments: 0,
      favourites: [],
      no_of_favourites: 0,
      like: false,
    },
  ])

  const rawData = [
    {
      profile: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1705170404~exp=1705171004~hmac=945c574fca1858e15ac7ed4a0c28d57a6f1bd44a5ebbf8b881a99db25d03ff9c',
      name: 'Yael Adamson-Brown',
      posted_date: '18th Febraury 2023',
      posted_time: '9:00 pm',
      labels: ['update'],
      desc: `<a className="text-blue-400 cursor-pointer" href="">1</a> by <a className="text-blue-400 cursor-pointer" href="">Yael Adamson-Brown</a> working at <a className="text-blue-400 cursor-pointer" href="">Harvesting</a> starting at 10:00 on 18th Febraury on <a className="text-blue-400 cursor-pointer" href="">Ceral Farming</a> project for <a className="text-blue-400 cursor-pointer" href="">Farming Test.</a>`,
      comments: [],
      no_of_comments: 0,
      favourites: [],
      no_of_favourites: 0,
      like: false,
    },

    {
      profile: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1705170404~exp=1705171004~hmac=945c574fca1858e15ac7ed4a0c28d57a6f1bd44a5ebbf8b881a99db25d03ff9c',
      name: 'Yael Adamson-Brown',
      posted_date: '18th Febraury 2023',
      posted_time: '9:00 pm',
      labels: ['update'],
      desc: `<a className="text-blue-400 cursor-pointer" href="">1</a> by <a className="text-blue-400 cursor-pointer" href="">Yael Adamson-Brown</a> working at <a className="text-blue-400 cursor-pointer" href="">Harvesting</a> starting at 10:00 on 18th Febraury on <a className="text-blue-400 cursor-pointer" href="">Ceral Farming</a> project for <a className="text-blue-400 cursor-pointer" href="">Farming Test.</a>`,
      comments: [],
      no_of_comments: 0,
      favourites: [],
      no_of_favourites: 0,
      like: false,
    },

    {
      profile: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1705170404~exp=1705171004~hmac=945c574fca1858e15ac7ed4a0c28d57a6f1bd44a5ebbf8b881a99db25d03ff9c',
      name: 'Yael Adamson-Brown',
      posted_date: '18th Febraury 2023',
      posted_time: '9:00 pm',
      labels: ['update'],
      desc: `<a className="text-blue-400 cursor-pointer" href="">1</a> by <a className="text-blue-400 cursor-pointer" href="">Yael Adamson-Brown</a> working at <a className="text-blue-400 cursor-pointer" href="">Harvesting</a> starting at 10:00 on 18th Febraury on <a className="text-blue-400 cursor-pointer" href="">Ceral Farming</a> project for <a className="text-blue-400 cursor-pointer" href="">Farming Test.</a>`,
      comments: [],
      no_of_comments: 0,
      favourites: [],
      no_of_favourites: 0,
      like: false,
    },

  ]

  const like = (val, index) => {
   for(let i in data){
    if(i == index){
      data[i].name = 'vishla'
    }
    }

    setData(data)
    console.log(data)
  }

  useEffect(() => {

  }, [data])

  return (
    <>
      <div className='flex flex-col items-center justify-center w-full'>
        <span className='flex items-center justify-end w-full mb-1 text-xs italic px-3 text-blue-500 cursor-pointer hover:underline'>
          story filters
        </span>

        <span className='flex flex-col items-start justify-center w-full gap-y-3 mb-3.5 rounded-md bg-white px-3 py-2.5'>
          <h1 className='text-lg font-semibold tracking-wide w-full pb-2.5 border-[#0000001a]  border-solid border-b-2 sm:text-xl lg:text-2xl'>NEWSFEED</h1>
          <span className='flex flex-col items-center gap-y-3 justify-center w-full'>
            <span className='flex items-center gap-x-2.5 justify-center w-full'>
              <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1705170404~exp=1705171004~hmac=945c574fca1858e15ac7ed4a0c28d57a6f1bd44a5ebbf8b881a99db25d03ff9c" alt="loading error" className='w-16 h-16 object-cover rounded-sm' />
              <span className='flex items-start justify-between w-full lg:items-center'>
                <span className='flex flex-col items-start justify-center'>
                  <h4 className='text-sm cursor-pointer text-blue-500 lg:text-base hover:underline'>Yael Adamson-Brown</h4>
                  <span className='text-xs lg:text-sm'>Posted at 8:00 pm on 16th Febraury 2023</span>
                  <span className='px-2.5 py-0.5 text-xs bg-green-500 rounded-md font-semibold text-white'>update</span>
                </span>
                <span className='flex items-center justify-center gap-x-10'>
                  <span className='text-sm hidden lg:inline-block'>posted 3 days ago</span>
                  <IoSettingsSharp className='text-blue-400 cursor-pointer' />
                </span>
              </span>
            </span>

            <span className='text-left text-sm w-full'>
              <a className="text-blue-400 cursor-pointer" href="">1</a> by <a className="text-blue-400 cursor-pointer" href="">Yael Adamson-Brown</a> working at <a className="text-blue-400 cursor-pointer" href="">Harvesting</a> starting at 10:00 on 18th Febraury on <a className="text-blue-400 cursor-pointer" href="">Ceral Farming</a> project for <a className="text-blue-400 cursor-pointer" href="">Farming Test.</a>
            </span>

            <span className='flex items-center justify-center w-full px-3 py-2.5'>
              <button className='cursor-pointer px-3.5 py-1.5 rounded-sm text-white bg-green-500'>Expand story</button>
            </span>

            <span className='flex items-center justify-between w-full'>
              {
                true ?
                  <IoIosHeart className='text-3xl text-red-500 cursor-pointer' onClick={() => like()} />
                  :
                  <IoIosHeartEmpty className='text-3xl text-red-500 cursor-pointer' onClick={() => like()} />
              }

              <span className='flex items-center justify-end gap-x-5 text-sm font-semibold text-gray-500'>
                <span>0 comments</span>
                <span>0 Favourites</span>
              </span>
            </span>

            <span className='flex items-center gap-x-3 justify-center w-full'>
              <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1705170404~exp=1705171004~hmac=945c574fca1858e15ac7ed4a0c28d57a6f1bd44a5ebbf8b881a99db25d03ff9c" alt="loaading error" className='h-8 w-8 object-cover rounded-sm' />
              <input type="text"
                placeholder='Yael Adamson-Brown share some progress'
                className='outline-[#0000001a] border-[#0000001a] border-2 border-solid px-3 py-1.5 text-sm rounded-full w-full'
              />
              <button className='px-3 py-1 rounded-sm bg-red-400 text-white cursor-pointer'>Post</button>
            </span>
          </span>
        </span>

        {
          data != null ?
            data.map((ele, index) => {
              return (
                <span key={index} className='flex flex-col items-center bg-white my-3.5 px-3 py-2.5 rounded-md gap-y-3 justify-center w-full'>
                  <span className='flex items-center gap-x-2.5 justify-center w-full'>
                    <img src={ele.profile} alt="loading error" className='w-16 h-16 object-cover rounded-sm' />
                    <span className='flex items-start justify-between w-full lg:items-center'>
                      <span className='flex flex-col items-start justify-center'>
                        <h4 className='text-sm cursor-pointer text-blue-500 lg:text-base hover:underline'>{ele.name}</h4>
                        <span className='text-xs lg:text-sm'>Posted at 8:00 pm on 16th Febraury 2023</span>
                        <span className='px-2.5 py-0.5 text-xs bg-green-500 rounded-md font-semibold text-white'>update</span>
                      </span>
                      <span className='flex items-center justify-center gap-x-10'>
                        <span className='text-sm hidden lg:inline-block'>posted 3 days ago</span>
                        <IoSettingsSharp className='text-blue-400 cursor-pointer' />
                      </span>
                    </span>
                  </span>

                  <span className='text-left text-sm w-full'>
                    <a className="text-blue-400 cursor-pointer" href="">1</a> by <a className="text-blue-400 cursor-pointer" href="">Yael Adamson-Brown</a> working at <a className="text-blue-400 cursor-pointer" href="">Harvesting</a> starting at 10:00 on 18th Febraury on <a className="text-blue-400 cursor-pointer" href="">Ceral Farming</a> project for <a className="text-blue-400 cursor-pointer" href="">Farming Test.</a>
                  </span>

                  <span className='flex items-center justify-center w-full px-3 py-2.5'>
                    <button className='cursor-pointer px-3.5 py-1.5 rounded-sm text-white bg-green-500'>Expand story</button>
                  </span>

                  <span className='flex items-center justify-between w-full'>
                    {
                      ele.like ?
                        <IoIosHeart className='text-3xl text-red-500 cursor-pointer' onClick={() => like(false, index)} />
                        :
                        <IoIosHeartEmpty className='text-3xl text-red-500 cursor-pointer' onClick={() =>like(true, index)} />
                    }

                    <span className='flex items-center justify-end gap-x-5 text-sm font-semibold text-gray-500'>
                      <span>0 comments</span>
                      <span>0 Favourites</span>
                    </span>
                  </span>

                  <span className='flex items-center gap-x-3 justify-center w-full'>
                    <img src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1705170404~exp=1705171004~hmac=945c574fca1858e15ac7ed4a0c28d57a6f1bd44a5ebbf8b881a99db25d03ff9c" alt="loaading error" className='h-8 w-8 object-cover rounded-sm' />
                    <input type="text"
                      placeholder='Yael Adamson-Brown share some progress'
                      className='outline-[#0000001a] border-[#0000001a] border-2 border-solid px-3 py-1.5 text-sm rounded-full w-full'
                    />
                    <button className='px-3 py-1 rounded-sm bg-red-400 text-white cursor-pointer'>Post</button>
                  </span>
                </span>
              )
            })
            :
            'Nothing to show'
        }

      </div>
    </>
  )
}

export default Posts