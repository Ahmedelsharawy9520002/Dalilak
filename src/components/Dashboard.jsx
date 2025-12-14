import "../styles/dashboard.css";
import startImg from "../images/start.png";
import progressImg from "../images/progress.png";
import completedImg from "../images/complete.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import PageWrapper from "./PageWrapper";


function Dashboard(props) {
  const { t, i18n } = useTranslation(); 
  const isRtl = i18n.dir() === 'rtl';
  
  const stats = [
    { title: t('dashboard.started'), number: 6, img: startImg },
    { title: t('dashboard.progress'), number: 6, img: progressImg },
    { title: t('dashboard.completed'), number: 0, img: completedImg },
  ];

  const progressItems = [
    { title: "Data Structures", level: "Intermediate", percent: 80},
    { title: "Web Development", level: "Beginner", percent: 65},
    { title: "Algorithms", level: "Intermediate", percent: 30},
    { title: "System Design", level: "Intermediate", percent: 45},
    { title: "Machine Learning", level: "Expert", percent:20 },
    { title: "Compiler Design", level: "Expert", percent: 0},
  ];

  return (
    <PageWrapper>
    <div className="dashboard-container">

      <div className="top-container d-flex justify-content-between mb-5 rounded-4 shadow">
        <div className="container d-flex justify-content-between">
          <div>
            <h1 className="welcome-title">{t('dashboard.welcome')} {props.currentUser}</h1>
            <p className="welcome-sub">
              {t('dashboard.sub')}
            </p>
          </div>

          <div>
            <Link to="/Roadmaps">
              <button className="explore-btn px-4 py-2 mt-3">
                {t('dashboard.explore')} 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right w-4 h-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container stats-section mb-5 d-flex gap-2">
        {stats.map((item, index) => (
          <div
            key={index}
            className="stat-card col-10 col-md-3 d-flex align-items-center shadow rounded-4 justify-content-between me-3 p-4"
          >
            <div>
              <p className="stat-title">{item.title}</p>
              <h2 className="stat-number">{item.number}</h2>
            </div>
            <img src={item.img} alt="stat" className="stat-img" />
          </div>
        ))}
      </div>

      <div className="container progress-section">
        <h4 className="progress-h">{t('dashboard.yourProgress')}</h4>
        <br />

        {progressItems.map((p, index) => (
          <div key={index} className="progress-card shadow rounded-4 p-4 mb-4">
            <div className="d-flex justify-content-between">
              <div>
                <h3 className="progress-title">{p.title}</h3>
                <p className="progress-level">{p.level}</p>
              </div>
              <h3 className="progress-percent">{Math.round(p.percent)}%</h3>
            </div>

            <div className="progress-bar-container">
              <div
                className="progress-fill"
                style={{ width: `${p.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="bottomDashboard mb-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="41"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="endlogo lucide lucide-zap w-12 h-12 mx-auto mb-4 text-accent"
        >
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>
        </svg>

        <h4 className="progress-h">{t('dashboard.keepGoing')}</h4>
        <p className="welcome-sub">{t('dashboard.keepGoingSub')}</p>

        <Link to="/Roadmaps">
          <button className="explore-btn learn-btn px-4 py-2">
            {t('dashboard.continueBtn')} 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right w-4 h-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </Link>
      </div>

    </div>
    </PageWrapper>
  );
}

export default Dashboard;
