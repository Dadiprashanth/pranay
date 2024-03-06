import React from 'react'
import { useSelector } from 'react-redux';

function Footer() {
  const state = useSelector(state => state)

  return (
    <div className='footer'>
   <p>Active Items -- {state.checked.length}</p>
    </div>
  )
}

export default Footer