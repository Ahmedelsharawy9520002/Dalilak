import "../styles/contact.css";
import {MdOutlineEmail,MdOutlinePhone,MdOutlineLocationOn} from "react-icons/md";
import { useTranslation } from 'react-i18next';
import PageWrapper from "./PageWrapper";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";


function Contact() {
  const { t } = useTranslation(); 

  const [data, setData] = useState({name:"", email:"", subject:"", message:""})

  const handleChange = (e)=>{
    setData({...data, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    const now = new Date();
    const formattedTime = now.toLocaleString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).replace(",", " at");

    axios
    .post("http://localhost:3000/messages", {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        sentTime: formattedTime,
      })
    .then((res)=>{
      setData({name:"", email:"", subject:"", message:""})
      toast.info("message sent successfully")
    })
    .catch((err)=>console.log(err))
  }

  return (
    <PageWrapper>
    <div className="container contact-container py-5">
      <div className="d-flex flex-column align-items-center justify-content-center mb-5">
        <h1 className="headcontact mb-2">
          {t('contact.title')} <span className="touch">{t('contact.titleSpan')}</span>
        </h1>
        <p className="phead">
          {t('contact.sub')}
        </p>
      </div>

      <div className="row g-4 justify-content-center mx-0 ms-lg-5">
        
        <div className="col-12 col-md-10 col-lg-5 me-lg-4 ms-lg-5">
          <div className="form contact-form p-4 shadow rounded-4">
            <h1 className="mb-4 contact-form-h fw-bold">{t('contact.formTitle')}</h1>

            <form onSubmit={(e)=>handleSubmit(e)}>
              <div className="mb-3">
                <label className="form-label">{t('contact.name')}</label>
                <input type="text" name="name" value={data.name} onChange={(e)=>handleChange(e)} className="form-control contact-input" placeholder={t('contact.phName')} required />
              </div>

              <div className="mb-3">
                <label className="form-label">{t('contact.email')}</label>
                <input type="email" name="email" value={data.email} onChange={(e)=>handleChange(e)} className="form-control contact-input" placeholder="your.email@example.com" required />
              </div>

              <div className="mb-3">
                <label className="form-label">{t('contact.subject')}</label>
                <input type="text" name="subject" value={data.subject} onChange={(e)=>handleChange(e)} className="form-control contact-input" placeholder={t('contact.phSubject')} required />
              </div>

              <div className="mb-3">
                <label className="form-label">{t('contact.message')}</label>
                <textarea name="message" value={data.message} onChange={(e)=>handleChange(e)} className="form-control contact-textarea" rows="4" placeholder={t('contact.phMessage')}></textarea>
              </div>

              <button type="submit" className="formButton px-4 w-100 mt-4">
                {t('contact.sendBtn')}
              </button>
            </form>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-5">
          <div className="form contact-info p-4 shadow rounded-4">
            <h1 className="mb-4 fw-bold contact-info-h">{t('contact.infoTitle')}</h1>

            <div className="info-item d-flex align-items-center mb-4">
              <div className="icon-box">
                <MdOutlineEmail size={25} color="black"/>
              </div>
              <div className="ps-3">
                <h5 className="info-item-h fw-bold">{t('contact.email')}</h5>
                <p className="info-item-desc m-0">support@dalilak.com</p>
              </div>
            </div>

            <div className="info-item d-flex align-items-center mb-4">
              <div className="icon-box">
                <MdOutlinePhone size={25} color="black" />
              </div>
              <div className="ps-3">
                <h5 className="info-item-h fw-bold">Phone</h5>
                <p className="info-item-desc m-0">+20 111 222 333</p>
              </div>
            </div>

            <div className="info-item d-flex align-items-center mb-4">
              <div className="icon-box">
                <MdOutlineLocationOn size={25} color="black" />
              </div>
              <div className="ps-3">
                <h5 className="info-item-h  fw-bold">Address</h5>
                <p className="info-item-desc m-0">Damietta, Egypt</p>
              </div>
            </div>
          </div>

          
          <div className="form contact-info p-4 shadow rounded-4 mt-5">
            <h1 className="mb-4 office-hours-h fw-bold">{t('contact.officeTitle')}</h1>

            
              
              <div className="ps-3">
                <p className=" m-0">
                  {t('contact.days')} <br />
                  {t('contact.sat')} <br />
                  {t('contact.sun')}
                </p>
              </div>
            

          </div>
        </div>
      </div>
    </div>
    </PageWrapper>
  );
}

export default Contact;
