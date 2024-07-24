import React from 'react'

const VideoCard = ({info}) => {
  // console.log(info);

  return (
    <div className='p-2 m-2 w-80 shadow-xl min-h-72'>
      <img src={info?.snippet?.thumbnails?.medium?.url} />
      <p>{info?.snippet?.title}</p>
      <p>{info?.statistics?.viewCount}</p>
   </div>
  )
}

export default VideoCard