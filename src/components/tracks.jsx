import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react"
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Clock, BookOpen } from "lucide-react"
import "../styles/tracks.css"
import { roadmapDetails } from "../roadmapsData";
import { useTranslation } from "react-i18next";

export default function RoadmapDetail() {
  const { title } = useParams();
  const { i18n } = useTranslation();

  const lang = i18n.language.startsWith('ar') ? 'ar' : 'en';
  const isRtl = lang === 'ar';

  const [completedSteps, setCompletedSteps] = useState([]);
  const [expandedSteps, setExpandedSteps] = useState([]);

  const roadmap = roadmapDetails[title];

  if (!roadmap) {
    return (
      <>
        
        <div className="container text-center py-5">
           <h2>{lang === 'ar' ? "المسار غير موجود" : "Roadmap not found"}</h2>
        </div>
        
      </>
    );
  }

  const stepsCount = roadmap.steps.length;

  const [openSteps, setOpenSteps] = useState({});
  const toggleStep = (num) => {
    setOpenSteps((prev) => ({ ...prev, [num]: !prev[num] }));
  };

  const [activeStep, setActiveStep] = useState(0);
  const handleCompleteStep = (index) => {
    if (!completedSteps.includes(index)) {
      setCompletedSteps([...completedSteps, index]);
    }
    if (index < roadmap.steps.length - 1) {
      setActiveStep(index + 1);
    }
  };

  return (
    <>
      
      
      <div className="tracksnavbar navbar">
        <div className="navbar container ">
          <Link
            to="/roadmaps"
            style={{ textDecoration: "none" }}
            className="backtoroadmaps"
          >
            <ChevronLeft className={isRtl ? 'rotate-180' : ''} />
            <span>{lang === 'ar' ? "العودة للمسارات" : "Back to roadmaps"}</span>
          </Link>
        </div>
      </div>

      <div className="container containerdetails" level={roadmap.level[lang]}>
        <h1 className="roadmaptitle mb-4">{roadmap.title[lang]}</h1>
        <p className="roadmapdescription mb-4">{roadmap.description[lang]}</p>

        <div className="flex info-row roadmapsstats">
          <div className="flex">
            <BookOpen className="me-2 BookOpen" />
            <span>{roadmap.steps.length} {lang === 'ar' ? "خطوة" : "steps"}</span>
          </div>

          <div className="flex">
            <Clock className="me-2 Clock" />
            <span>{roadmap.duration[lang]}</span>
          </div>

          <div className="flex roadmaplevel" level={roadmap.level[lang]}>
            <span>{roadmap.level[lang]}</span>
          </div>

          <div className="flex roadmapsprogress" level={roadmap.level[lang]}>
            <span>{lang === 'ar' ? "التقدم" : "Progress"}: {completedSteps.length}/{stepsCount}</span>
          </div>
        </div>
      </div>
      
      <div className="container" style={{ padding: "20px" }}>
        <div className="steps">
          {roadmap.steps.map((step, index) => {
            const isCompleted = completedSteps.includes(index);
            const isActive = index === activeStep && !isCompleted;
            const isLocked = index > activeStep;
            return(
            <div
                className={`onestep ${isActive ? "active-step" : ""} ${
                  isCompleted ? "completed-step" : ""
                }`}
                key={step.number}
                style={{ marginBottom: "20px" }}
              >
              <div className="stepNumber">{step.number}</div>

              <div
                className="stepDescription"
                onClick={() => toggleStep(step.number)}
              >
                <div className="containercomplete">
                  <div className="title-wrapper">
                    <h3 style={{ color: "#eee" , fontSize:'24px'}}>{step.title[lang]}</h3>
                    <span style={{ fontSize: "20px", color: "white" }}>
                        {openSteps[step.number] ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6" /></svg>
                        ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                        )}
                    </span>
                  </div>

                  <div className="button-wrapper">
                    {isActive && (
                        <button
                            className="complete"
                            onClick={(e) => {
                            e.stopPropagation();
                            handleCompleteStep(index);
                            }}
                            style={{
                            backgroundColor: "#331b58",
                            border:'none',
                            color: "#9d42ef",
                            }}
                        >
                            {lang === 'ar' ? "إكمال الخطوة" : "Mark Complete"}
                        </button>
                        )}
                  

                        {isCompleted && (
                        <span style={{ color: "#a82a68",backgroundColor: "#491c48" ,border:"1px solid #a82a68",padding: "5px 10px", borderRadius: "10px"}} className="complete">
                            ✓ {lang === 'ar' ? "مكتمل" : "Completed"}
                        </span>
                        )}
                        {isLocked && !isActive && !isCompleted && (
                        <span style={{ color: "#777293",backgroundColor:'#3e365c',border:'1px solid #777293'}} className="complete">
                            {lang === 'ar' ? "أكمل السابق" : "Complete Previous"}
                        </span>
                    )}
                  </div>
                </div>

                <p>{step.description[lang]}</p>
                
                {/* Topics */}
                {step.topics && (
                  <>
                    <div className="topics">
                      {step.topics[lang].map((t, index) => (
                        <div key={index} className="onetopic">
                          {t}
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Resources */}
                {step.resources && (
                  <>
                    {openSteps[step.number] && (
                      <ul type="none">
                        <hr />
                        <h4 style={{ fontSize: "16px" }}>{lang === 'ar' ? "المصادر:" : "Resources:"}</h4>

                        {step.resources.map((r, index) => (
                          <Link
                            to={r.url}
                            target="_blank"
                            className="url"
                            key={index}
                          >
                            <li className="resourse">
                              <div className="type_resource">
                                {r.icon}
                                {r.type}
                              </div>

                              <div className="iconlink">
                                {r.name[lang]}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="19"
                                  height="19"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="svg lucide lucide-external-link w-4 h-4 text-muted group-hover/resource:text-primary transition-colors"
                                >
                                  <path d="M15 3h6v6"></path>
                                  <path d="M10 14 21 3"></path>
                                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                </svg>
                              </div>
                            </li>
                          </Link>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
            </div>
          );
          })}
        </div>
      </div>
      
    </>
  );
}