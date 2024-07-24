import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const names = ["New", "Shorts", "News", "Mantras", "Live", "Music", "T-Series", "Watched"]
  return (
    <div className='flex'>
       { names.map((name,index) => (
        <Button key={index} name={" " + name+" " } />))}
    </div>
  )
}

export default ButtonList;