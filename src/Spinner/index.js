import React from 'react'
import spinner from '../assets/icons/Spinner.svg'
import './Spinner.css'

function Spinner() {
  return (
    <div className='Spinner'>
      <div class="lds-ripple"><div></div><div></div></div>
    </div>
  )
}

export { Spinner } 
