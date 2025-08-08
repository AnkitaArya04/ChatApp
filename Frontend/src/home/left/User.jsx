import React from 'react'

const User = () => {
  return (
    <div>
        <div className='flex space-x-4 px-6 py-7 hover:bg-slate-600 duration-300 cursor-pointer'>
      <div className='avatar online'>
        <div className='w-14 rounded-full'>
            <img src='https://avatars.githubusercontent.com/u/113823362?s=400&u=30a64db39b6ac2210c229df31ad85b959e2a3bb4&v=4' />
            
        </div>
      </div>
      <div>
        <h1>Ankita Arya</h1>
        <span>ankitaarya12@gmail.com</span>
        </div>
      </div>
      </div>
  )
}

export default User
