import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoKey = searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    closeToggleMenu();
  },[])

  const closeToggleMenu = () => {
    dispatch(closeMenu())
  }
  return (
    <div>
      <iframe 
      width="1000"
      height="500" 
      src={"https://www.youtube.com/embed/" + videoKey}
      title="YouTube video player" 
      allow="accelerometer; autoplay;
          clipboard-write; encrypted-media; gyroscope;
          picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
        </iframe>
    </div>
  )
}

export default WatchPage