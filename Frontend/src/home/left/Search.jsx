import React from 'react'
import {IoSearch} from "react-icons/io5"
const Search = () => {
  return (
    <div className="px-6 py-4">
     <form action="">
        <div className="flex space-x-3">
        <label className="border-[1px] rounded-lg flex items-center gap-2 w-[80%] p-3">
        <input type="text" className="grow outline-none" placeholder="Search"/>

        </label>
        <button>
            <IoSearch className='text-5xl p-2 hover:bg-gray-600 rounded-full' />
        </button>
        </div>
     </form>
    </div>
    
  )
}

export default Search
