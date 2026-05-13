import React from 'react'
import Image from 'next/image'


const Comments = () => {
  return (
    <div className='comments my-[150px] relative top-0 left-0'>
      <div className="rounded-full absolute -top-12 left-[20%] bg-neutral-200 w-[100px] h-[100px] flex justify-center items-center font-bold text-3xl">
        <div className="p-1 px-3.5 bg-black text-white rounded-full">&lt;</div>
      </div>
      <div className="mx-auto hero-bg w-[40%] p-12 rounded-lg">
        <h3 className='w-1/3 font-bold my-12'>Great quality and fast delivery. Everything arrived exactly as described!</h3>
        <div className="comments-profile  w-[40%] ml-auto flex items-center gap-3">
            <div className="rounded-full w-[100px] h-[100px] bg-neutral-300"></div>
            <div className="comments-profile-content">
                <h3 className='text-sm font-bold'>John Doe</h3>
                <p className='text-sm'>IT Specialist</p>
            </div>
        </div>
      </div>
      <div className="rounded-full absolute -bottom-12 right-[20%] bg-neutral-200 w-[100px] h-[100px] flex justify-center items-center font-bold text-3xl">
        <div className="p-1 px-3.5 bg-black text-white rounded-full">&gt;</div>
      </div>
    </div>
  )
}

export default Comments
