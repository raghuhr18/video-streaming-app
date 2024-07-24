import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
  const toggleMenu = useSelector((store) => store.app.isMenuOpen)
  if(!toggleMenu) return null;
  return (
    <div className='w-52 min-w-52 p-5 shadow-lg border border-gray-300'>
      <ul className='pt-5'>
        <Link to="/">
          <li><h1 className='font-bold'>Home</h1></li>
        </Link>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Trending</li>
      </ul>
      <ul className='pt-5'>
        <li><h1 className='font-bold'>Home</h1></li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Trending</li>
      </ul>
      <ul className='pt-5'>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        <li>Trending</li>
      </ul>
    </div>
  )
}

export default SideBar