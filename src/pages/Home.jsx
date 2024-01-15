import React, { useState } from 'react'
import Events from '../components/Events'
import Contacts from '../components/Contacts'
import Projects from '../components/Projects'
import Albums from '../components/Albums'
import Organisations from '../components/Organisations'
import Followers from '../components/Followers'
import PeopleYouFollow from '../components/PeopleYouFollow'
import Boards from '../components/Boards'
import Progress from '../components/Progress'
import CreatePost from '../components/CreatePost'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'
import Tasks from '../components/Tasks'

function Home() {
  const [count, setCount] = useState(3);
  return (
    <>
      <section className='flex items-center justify-center w-screen my-5 px-3'>
        <div className='flex items-start justify-center w-full max-w-screen-2xl gap-x-3'>

          {/* <div className='flex flex-col gap-y-5 items-center justify-center w-[28rem] xl:hidden'>
            <Sidebar />
          </div> */}

          <div className='hidden flex-col gap-y-5 items-center justify-center w-[32rem] lg:flex'>
            <Events show={count >= 1 ? true : false} />
            <Contacts show={count >= 2 ? true : false} />
            <Projects show={count >= 3 ? true : false} />
            <Albums show={count >= 4 ? true : false} />
            <Organisations show={count >= 5 ? true : false} />
            <Followers show={count >= 6 ? true : false} />
            <PeopleYouFollow show={count >= 7 ? true : false} />
            <Boards show={count >= 8 ? true : false} />
            <Progress show={count >= 9 ? true : false} />
            <Tasks show={count >= 10 ? true : false} />
            <span className='flex items-center justify-between gap-x-5 font-semibold text-center w-full py-2.5 xl:hidden'>
              <button className={`bg-[#4892e2] ${count >= 10 ? 'hidden' : 'inline-block'} cursor-pointer w-full text-white rounded-sm py-1.5 px-3 text-sm font-semibold`}
                onClick={() => setCount(count + 3)}>
                show more
              </button>
              <button className={`bg-[#4892e2] ${count <= 3 ? 'hidden' : 'inline-block'} cursor-pointer w-full text-white rounded-sm py-1.5 px-3 text-sm font-semibold`}
                onClick={() => setCount(count - 3)}>
                show less
              </button>
            </span>
          </div>

          <div className='flex flex-col gap-y-5 items-center justify-center w-full'>
            <CreatePost />
            <Posts />
          </div>

          <div className='hidden flex-col gap-y-5 items-center justify-center w-[32rem] xl:flex'>
            <Boards show={true} />
            <Progress show={true} />
            <Tasks show={true} />
          </div>

        </div>
      </section>
    </>
  )
}

export default Home