import React from 'react'
import SideBar from './SideBar'
import VideoContainer from './VideoContainer'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'
import Shimmer from './Shimmer'

const Body = () => {
  return (
    <div className='flex'>
      <SideBar />
      <Outlet />
    </div>
  )
}

export default Body