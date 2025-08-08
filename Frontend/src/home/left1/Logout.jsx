import React from 'react'
import {IoSearch} from "react-icons/io5"
const Logout = () => {
  return (
     <>
      <div className="w-[4%]   bg-slate-950 text-white  flex flex-col justify-end ">
        <div className="p-3  align-bottom ">
          <button>
            <IoSearch className='text-5xl p-2 hover:bg-gray-600 ounded-full duration-full' />
          </button>
        </div>
      </div>
    </>
  )
}

export default Logout
