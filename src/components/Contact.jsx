import "../styles/contact.css";
import {MdOutlineEmail,MdOutlinePhone,MdOutlineLocationOn} from "react-icons/md";
import { useTranslation } from 'react-i18next';




function Contact() {
  const { t } = useTranslation(); 
  return (
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
            <h1 className="mb-4 text-white fw-bold">{t('contact.formTitle')}</h1>

            <form>
              <div className="mb-3">
                <label className="form-label">{t('contact.name')}</label>
                <input type="text" className="form-control contact-input" placeholder={t('contact.phName')} required />
              </div>

              <div className="mb-3">
                <label className="form-label">{t('contact.email')}</label>
                <input type="email" className="form-control contact-input" placeholder="your.email@example.com" required />
              </div>

              <div className="mb-3">
                <label className="form-label">{t('contact.subject')}</label>
                <input type="text" className="form-control contact-input" placeholder={t('contact.phSubject')} required />
              </div>

              <div className="mb-3">
                <label className="form-label">{t('contact.message')}</label>
                <textarea className="form-control contact-textarea" rows="4" placeholder={t('contact.phMessage')}></textarea>
              </div>

              <button type="submit" className="formButton px-4 w-100 mt-4">
                {t('contact.sendBtn')}
              </button>
            </form>
          </div>
        </div>

        
        <div className="col-12 col-md-5">
          <div className="form contact-info p-4 shadow rounded-4">
            <h1 className="mb-4 text-white fw-bold">{t('contact.infoTitle')}</h1>

            <div className="info-item d-flex align-items-center mb-4">
              <div className="icon-box">
                <MdOutlineEmail size={25} color="black"/>
              </div>
              <div className="ps-3">
                <h5 className="text-white fw-bold">{t('contact.email')}</h5>
                <p className="text-white-50 m-0">support@dalilak.com</p>
              </div>
            </div>

            <div className="info-item d-flex align-items-center mb-4">
              <div className="icon-box">
                <MdOutlinePhone size={25} color="black" />
              </div>
              <div className="ps-3">
                <h5 className="text-white fw-bold">Phone</h5>
                <p className="text-white-50 m-0">+20 111 222 333</p>
              </div>
            </div>

            <div className="info-item d-flex align-items-center mb-4">
              <div className="icon-box">
                <MdOutlineLocationOn size={25} color="black" />
              </div>
              <div className="ps-3">
                <h5 className="text-white fw-bold">Address</h5>
                <p className="text-white-50 m-0">Damietta, Egypt</p>
              </div>
            </div>
          </div>

          
          <div className="form contact-info p-4 shadow rounded-4 mt-5">
            <h1 className="mb-4 text-white fw-bold">{t('contact.officeTitle')}</h1>

            
              
              <div className="ps-3">
                <p className="text-white-50 m-0">
                  {t('contact.days')} <br />
                  {t('contact.sat')} <br />
                  {t('contact.sun')}
                </p>
              </div>
            

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
