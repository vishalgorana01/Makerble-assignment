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

function Categories() {
    const [count, setCount] = useState(4);

    return (
        <>
            <section className='flex items-center justify-center w-screen my-5 px-3'>
                <div className='flex items-start justify-center w-full max-w-screen-2xl gap-x-3'>

                    <div className='grid grid-cols-1 gap-x-5 gap-y-5 items-start justify-center w-full sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4'>
                        <Organisations show={true} />
                        <Contacts show={true} />
                        <Projects show={true} />
                        <Albums show={true} />
                        <Events show={true} />
                        <Tasks show={true} />
                        <Progress show={true} />
                        <Boards show={true} />
                        <PeopleYouFollow show={true} />
                        <Followers show={true} />
                        {/* <span className='flex items-center justify-between gap-x-5 font-semibold text-center w-full py-2.5'>
                            <button className={`bg-[#4892e2] ${count >= 10 ? 'hidden' : 'inline-block'} cursor-pointer w-full text-white rounded-sm py-1.5 px-3 text-sm font-semibold`}
                                onClick={() => setCount(count + 4)}>
                                show more
                            </button>
                            <button className={`bg-[#4892e2] ${count <= 4 ? 'hidden' : 'inline-block'} cursor-pointer w-full text-white rounded-sm py-1.5 px-3 text-sm font-semibold`}
                                onClick={() => setCount(count - 4)}>
                                show less
                            </button>
                        </span> */}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Categories