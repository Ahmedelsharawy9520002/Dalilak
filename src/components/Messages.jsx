import { useEffect, useState } from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import PageWrapper from "./PageWrapper";
import axios from 'axios';
import { IoTimeOutline } from "react-icons/io5";
import Swal from 'sweetalert2';
import '../styles/messages.css'

function Messages() {

  const [messages, setmessages] = useState([])

  useEffect(()=>{
    axios
    .get("http://localhost:3000/messages")
    .then((res)=>{
      setmessages(res.data.reverse())
    })
    .catch((err)=>console.log(err))
  }, [])

const handleDelete = (id) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "This will be deleted permenantly",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result) => {
    if (result.isConfirmed) {
      axios.delete(`http://localhost:3000/messages/${id}`)
        .then(() => {
          setmessages(prev => prev.filter(msg => msg.id !== id));
          Swal.fire('Deleted!', 'Message has been deleted.', 'success');
        });
    }
  });
};

  return (
    <>
    <PageWrapper>
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
                  <div className='d-flex gap-2 align-items-center'>
                    <IoTimeOutline className='opacity-50 heightfix whitetext' />
                    <p className='opacity-50 heightfix whitetext'>{msg.sentTime}</p>
                  </div>
                </div>
                <div className='trash-icon'>
                  <FaRegTrashCan className='fs-5 text-danger' onClick={()=>handleDelete(msg.id)} />
                </div>
              </div>
              <hr className='heightfix' style={{width:"100%"}}/>
              <p className="fw-bold heightfix whitetext">{msg.subject}</p>
              <p className="opacity-50 whitetext">{msg.message}</p>
            </div>
          ))
        }
      </div>
    </PageWrapper>
    </>
  )
}

export default Messages