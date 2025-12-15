import "../styles/contact.css";
import {MdOutlineEmail,MdOutlinePhone,MdOutlineLocationOn} from "react-icons/md";
import { useTranslation } from 'react-i18next';
import PageWrapper from "./PageWrapper";
import axios from "axios";



function Contact() {
  const { t } = useTranslation(); 

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios
    .post("http://localhost:3000/messages", {
        name: e.target.name.value,
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value
      })
    .then((res)=>console.log(res))
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

      <div className="row g-4 align-items-start ms-5">
        
        <div className="col-12 col-md-5 me-4 ms-5">
          <div className="form contact-form p-4 shadow rounded-4">
            <h1 className="mb-4 contact-form-h fw-bold">{t('contact.formTitle')}</h1>

            <form onSubmit={(e)=>handleSubmit(e)}>
              <div className="mb-3">
                <label className="form-label">{t('contact.name')}</label>
                <input type="text" name="name" className="form-control contact-input" placeholder={t('contact.phName')} required />
              </div>

              <div className="mb-3">
                <label className="form-label">{t('contact.email')}</label>
                <input type="email" name="email" className="form-control contact-input" placeholder="your.email@example.com" required />
              </div>

              <div className="mb-3">
                <label className="form-label">{t('contact.subject')}</label>
                <input type="text" name="subject" className="form-control contact-input" placeholder={t('contact.phSubject')} required />
              </div>

              <div className="mb-3">
                <label className="form-label">{t('contact.message')}</label>
                <textarea name="message" className="form-control contact-textarea" rows="4" placeholder={t('contact.phMessage')}></textarea>
              </div>

              <button type="submit" className="formButton px-4 w-100 mt-4">
                {t('contact.sendBtn')}
              </button>
            </form>
          </div>
        </div>

        
        <div className="col-12 col-md-5">
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
