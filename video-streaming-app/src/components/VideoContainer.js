import React, { useEffect, useState } from 'react';
import ButtonList from './ButtonList';
import { YOUTUBE_VIDEOS_API } from '../utils/constants.js';
import VideoCard from './VideoCard.js';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer.js';


const VideoContainer = () => {
const [videos, setVideos] = useState([])

  useEffect(() => {
    getVideos();
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json?.items);
  }
  return (videos.length == 0 ) ? <Shimmer />: (

    <div>

      <ButtonList />
      <div className='flex flex-wrap'>
        {videos.map((video) =>
           <Link to={"/watch?v="+ video?.id} key={video?.id}>
            <VideoCard info={video} />
          </Link>
        )}
      </div>

    </div>
  )
}

export default VideoContainer