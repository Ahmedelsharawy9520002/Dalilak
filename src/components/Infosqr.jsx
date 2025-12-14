import { useState } from 'react'
import '../styles/infosqr.css'
import PageWrapper from "./PageWrapper";

function Infosqr(props) {

  return (
    <>
    <PageWrapper>
      <div className='outer-box p-4 d-flex flex-column gap-2'>
        <div className='icon-bg d-flex justify-content-center align-items-center'>
            {props.icon}
        </div>
        <h5 className='infosqr-h fw-bold'>{props.header}</h5>
        <p className='infosqr-p'>{props.p}</p>
      </div>
      </PageWrapper>
    </>
  )
}

export default Infosqr