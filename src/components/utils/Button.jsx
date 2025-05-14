import React from 'react'
import './btn.css'
function Button({text}) {
  return (
    <div className='btn text-white bg-yellow-500' >
        {text}
    </div>
  )
}

export default Button