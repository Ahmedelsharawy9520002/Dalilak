import "../styles/contact.css";
import {MdOutlineEmail,MdOutlinePhone,MdOutlineLocationOn} from "react-icons/md";


function Contact() {
  return (
    <div className="container contact-container py-5">
      <div className="d-flex flex-column align-items-center justify-content-center mb-5">
        <h1 className="headcontact mb-2">
          Get in <span className="touch">Touch</span>
        </h1>
        <p className="phead">
          Have questions or feedback? We'd love to hear from you. Send us a
          message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="row g-4 align-items-start ms-5">
        
        <div className="col-12 col-md-5 me-4 ms-5">
          <div className="form contact-form p-4 shadow rounded-4">
            <h1 className="mb-4 text-white fw-bold">Send us a Message</h1>

            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Your name" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="your.email@example.com" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" placeholder="How can we help?" required />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="4" placeholder="Your message..."></textarea>
              </div>

              <button type="submit" className="formButton px-4 w-100 mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>

        
        <div className="col-12 col-md-5">
          <div className="form contact-info p-4 shadow rounded-4">
            <h1 className="mb-4 text-white fw-bold">Contact Information</h1>

            <div className="info-item d-flex align-items-center mb-4">
              <div className="icon-box">
                <MdOutlineEmail size={25} color="rgba(74, 44, 124, 1)"/>
              </div>
              <div className="ps-3">
                <h5 className="text-white fw-bold">Email</h5>
                <p className="text-white-50 m-0">support@dalilak.com</p>
              </div>
            </div>

            <div className="info-item d-flex align-items-center mb-4">
              <div className="icon-box">
                <MdOutlinePhone size={25} color="rgba(74, 44, 124, 1)" />
              </div>
              <div className="ps-3">
                <h5 className="text-white fw-bold">Phone</h5>
                <p className="text-white-50 m-0">+20 111 222 333</p>
              </div>
            </div>

            <div className="info-item d-flex align-items-center mb-4">
              <div className="icon-box">
                <MdOutlineLocationOn size={25} color="rgba(74, 44, 124, 1)" />
              </div>
              <div className="ps-3">
                <h5 className="text-white fw-bold">Address</h5>
                <p className="text-white-50 m-0">Damietta, Egypt</p>
              </div>
            </div>
          </div>

          
          <div className="form contact-info p-4 shadow rounded-4 mt-5">
            <h1 className="mb-4 text-white fw-bold">Office Hours</h1>

            
              
              <div className="ps-3">
                <p className="text-white-50 m-0">
                  Monday - Friday: 9:00 AM - 6:00 PM <br />
                  Saturday: 10:00 AM - 4:00 PM <br />
                  Sunday: Closed
                </p>
              </div>
            

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
