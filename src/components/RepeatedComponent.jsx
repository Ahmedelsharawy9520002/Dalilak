import React from "react"
import Button from '@mui/material/Button';
import '../styles/RepeatedComponent.css'
import { Link } from "react-router-dom";

function RepeatedComponent(props) {

  return (
    <>
      <div className='rep-comp-container d-flex flex-column gap-2 justify-content-center align-items-center'>
        {/* <i></i>  لو فيه ايكون */}
        <h2 className="infosqr-h fw-bold">{props.header}</h2>
        <p className="infosqr-p">{props.p}</p>
        <Link to='/Roadmaps'><Button variant="contained" className='mybutn'><span className="mytxt">{props.btntxt}</span>{props.mysvg}</Button>
        </Link>
      </div>
    </>
  )
}

export default RepeatedComponent