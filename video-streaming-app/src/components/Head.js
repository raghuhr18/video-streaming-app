import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';


const Head = () => {

  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleMenu())
  };
  return (
    <div className='flex items-center p-5'>
      <div className='w-[10%]'>
        <img className="bg-white w-10 cursor-pointer" onClick={() => handleToggle()} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYDexRzmr_fP8kMSVywAt2ybB7dgmXbvirUA&s" alt="hamberger menu"/>
      </div>
      <div className='w-[15%]'>
        <a href="/">
        <img className="bg-white w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlJ3kOM0NGvy0RDy2UrPjAcpGNmUD6XBi7g&s" alt='logo' />
        </a>
      </div>
      <div className='text-xl w-2/4'>
        <input type='search' placeholder='Search' className='border border-black rounded-l-full p-2 px-5 w-[85%]' />
        <button className='border border-black rounded-r-full p-2 px-4 w-[15%]' > Search</button>
      </div>
      <div className='w-1/4'>
        <img className='w-12 float-right' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZHZkZFOA8sW0MCEom45CGwmnJdl-RsK5n6-vEbSyqcYBvLBwkLTaYB8gjBXAO9ABhVs&usqp=CAU" alt="userIcon"/>
      </div>
    </div>
  )
}

export default Head