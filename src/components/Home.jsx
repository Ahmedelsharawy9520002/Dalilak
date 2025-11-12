import React, { useState, useRef } from "react";
import "../styles/home.css";
import Button from "react-bootstrap/Button";
import { PiTelegramLogoThin } from "react-icons/pi";
import { Link } from "react-router";


function Home() {
  const [steps] = useState([
    {
      id: "1",
      title: "Explore the Basics",
      desc: "Learn what Computer Science is all about. Understand how programming works, what developers do, and get familiar with fundamental concepts like algorithms and logic.",
    },
    {
      id: "2",
      title: "Choose Your Track",
      desc: "Decide which path suits you best: Web Development, Data Science, Cybersecurity, or Artificial Intelligence.",
    },
    {
      id: "3",
      title: "Learn the Fundamentals",
      desc: "Study the core programming languages (like Python, JavaScript, or C++), data structures, and problem-solving techniques.",
    },
    {
      id: "4",
      title: "Advance and Specialize",
      desc: "Move into advanced topics related to your chosen track. Learn frameworks, tools, and best practices used by professionals.",
    },
    {
      id: "5",
      title: "Contribute & Network",
      desc: "Join open-source projects, collaborate with others, and start building your professional network.",
    },
  ]);

  const [currentStep, setCurrentStep] = useState(0);
  const stepRefs = useRef([]);

  const goNext = () => {
    setCurrentStep((prev) => {
      const next = prev < steps.length ? prev + 1 : prev;
      scrollToStep(next);
      return next;
    });
  };

  const goPrev = () => {
    setCurrentStep((prev) => {
      const prevStep = prev > 0 ? prev - 1 : prev;
      scrollToStep(prevStep);
      return prevStep;
    });
  };

  const scrollToStep = (stepIndex) => {
    const stepElement = stepRefs.current[stepIndex - 1];
    if (stepElement) {
      stepElement.scrollIntoView({
        behavior: "smooth",
        inline: "end",
        block: "nearest",
      });
    }
  };

  const totalDots = 5;
  const progressPercent = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className='body'>
    <div className="afterNavBar">
      <h1>ROADMAP</h1>
      <Link to='Roadmap'><button>Roadmap</button></Link>
    </div>
    <div className="mt-5">
      <h6 className="head text-center fs-5">Road Map</h6>
      <h2 className="text-white mb-5 text-center fs-2">The Journey of Dalilak</h2>

      <div className="progress-container">
        <div className="progress-background">
          <div
            className="progress-foreground"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        <div className="progress-dots">
          {[...Array(totalDots)].map((_, index) => {
            const stepPerDot = steps.length / totalDots;
            const isActive = currentStep >= Math.ceil((index + 1) * stepPerDot);
            return (
              <div
                key={index}
                className={`progress-dot ${isActive ? "active" : ""}`}
              ></div>
            );
          })}
        </div>
      </div>

      <div className="steps-container me-5">
        {steps.map((step, i) => (
          <div
            key={step.id}
            ref={(el) => (stepRefs.current[i] = el)}
            className={`step-card p-3 mt-4 ms-5 ${
              currentStep === Number(step.id) ? "active-step" : ""
            }`}
          >
            <h5>Step {step.id}</h5>
            <h6 className="fw-bold mb-2">{step.title}</h6>
            <p className="small desc">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        <Button className="Buttonsteps m-1" onClick={goPrev}>
          {"<"}
        </Button>
        <Button className="Buttonsteps m-1" onClick={goNext}>
          {">"}
        </Button>
      </div>
    </div>

    {/* Dareen */}
    <div className='cont'>
        <div className='outline' >
            <h1 className='myheader'>Get Updated with tips and tricks</h1>
            <p className='myp text-p text-light opacity-50'>Your guide to learn anything step by step</p>
            <div className="search d-flex justify-content-center justify-content-between" style={{ width: "285px", height: "200px" }}> 
                <input type="none" id="inp" placeholder="Email Here"></input>
                <div className="search-i-border">
                  <div className='square'>
                    <i className="fa-solid fa-magnifying-glass text-light d-flex align-items-center" ></i>
                    <PiTelegramLogoThin className='msg text-light'/>
                  </div>
                </div>
            </div>
        </div>
        <img src='/src/images/mail.png' className='img'></img>
      </div>


    </div>
  );
}

export default Home;
