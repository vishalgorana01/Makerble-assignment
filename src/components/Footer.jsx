import React from 'react'

function Footer() {
  const colors = [
    'bg-violet-600',
    'bg-indigo-600',
    'bg-blue-600',
    'bg-green-600',
    'bg-yellow-600',
    'bg-orange-600',
    'bg-red-600',
  ]

  return (
    <>
      <section className='flex relative bg-white py-4 items-center justify-center w-screen'>
        <div className='flex items-center justify-center w-full max-w-screen-2xl'>
          <span className='flex absolute -top-1 items-center justify-center w-full overflow-x-clip'>
            {
              colors.map((ele, idx) => {
                return (
                  <span key={idx} className={`w-20 rounded-full py-1 -mx-1 ${ele} opacity-70`}></span>
                )
              })
            }

            <span className='h-14 z-10 text-center py-3 text-lg w-14 font-semibold absolute rounded-full bg-gray-600 text-white'>
              M
            </span>

            {
              colors.reverse().map((ele, idx) => {
                return (
                  <span key={idx} className={`w-20 rounded-full py-1 -mx-1 ${ele} opacity-70`}></span>
                )
              })
            }
          </span>
        </div>
      </section>
    </>
  )
}

export default Footer