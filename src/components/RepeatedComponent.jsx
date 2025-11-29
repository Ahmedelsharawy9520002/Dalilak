import React from "react"
import Button from '@mui/material/Button';
import '../styles/RepeatedComponent.css'

function RepeatedComponent(props) {

  return (
    <>
      <div className='rep-comp-container d-flex flex-column gap-2 justify-content-center align-items-center'>
        {/* <i></i>  لو فيه ايكون */}
        <h2 className="text-light fw-bold">{props.header}</h2>
        <p className="text-light opacity-50">{props.p}</p>
        <Button variant="contained" className='mybutn'><span className="mytxt">{props.btntxt}</span>{props.mysvg}</Button>{/*هنا انا عاملة السهم svg ممكن تتعمل ايكون او اي حاجه وتتبعت كprops (او تتشال لو مش موجود)*/}
      </div>
    </>
  )
}

export default RepeatedComponent