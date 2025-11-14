import { useState } from 'react'
import '../styles/infosqr.css'

function Infosqr(props) {

  return (
    <>
      <div className='outer-box p-4 d-flex flex-column gap-2'>
        <div className='icon-bg d-flex justify-content-center align-items-center'>
            {props.icon}
        </div>
        <h5 className='text-light fw-bold'>{props.header}</h5>
        <p className='text-light opacity-50'>{props.p}</p>
      </div>
    </>
  )
}

export default Infosqr