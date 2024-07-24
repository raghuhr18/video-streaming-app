import React from 'react'

const Shimmer = () => {
  return (
    <div className=' flex flex-wrap'>
        {Array(18).fill("").map((e,index) =>
        <div key={index} 
        className="w-80 h-60 p-5 m-5 border border-gray-300 bg-gray-200"> 
        </div>
        )}
    </div>
  )
}

export default Shimmer;