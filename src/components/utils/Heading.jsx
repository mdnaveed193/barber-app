import React from 'react'
import './Heading.css'
function Heading({heading}) {
  return (
    <div className='heading'>
    <span className='heading-text'>{heading}</span>
    </div>
  )
}

export default Heading