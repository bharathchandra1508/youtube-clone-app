import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const buttonList = ["All", "New to you", "Music", "Thrillers", "Telugu Cinema", "News", "JavaScript", "Web Series", "Live", "Cricket", "Gaming"];

  return (
    <div className='flex'>
      {buttonList.map((button, index) => <Button key={index} name={button}/>)}
    </div>
  )
}

export default ButtonList