import { useEffect, useState } from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import '../styles/messages.css'
import PageWrapper from "./PageWrapper";
import axios from 'axios';

function Messages() {

  const [messages, setmessages] = useState([])

  useEffect(()=>{
    axios
    .get("http://localhost:3000/messages")
    .then((res)=>{
      setmessages(res.data.reverse())
      console.log(messages);
    })
    .catch((err)=>console.log(err))
  }, [])

  return (
    <>
    {/* <PageWrapper> */}
      <div className='messagescont container'>
        <h1 className='msgheader'>Messages</h1>
        <p className='opacity-75 fs-5 whitetext'>View and manage messages from your contact form.</p>
        {
          messages.map((msg)=>(
            <div className='msgcont mb-3'>
              <div className='d-flex justify-content-between'>
                <div>
                  <h5 className='fw-bold heightfix whitetext'>{msg.name}</h5>
                  <p className='opacity-50 heightfix whitetext'>{msg.email}</p>
                </div>
                <div className='trash-icon'>
                  <FaRegTrashCan className='fs-5 text-danger' />
                </div>
              </div>
              <hr className='heightfix' style={{width:"100%"}}/>
              <p className="fw-bold heightfix whitetext">{msg.subject}</p>
              <p className="opacity-50 whitetext">{msg.message}</p>
            </div>
          ))
        }
      </div>
    {/* </PageWrapper> */}
    </>
  )
}

export default Messages