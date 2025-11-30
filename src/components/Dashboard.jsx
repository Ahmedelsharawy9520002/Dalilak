import "../styles/dashboard.css";
import startImg from "../images/start.png";
import progressImg from "../images/progress.png";
import completedImg from "../images/complete.png";


function Dashboard() {
  return (
    <div className="dashboard-container">
      
       <div className="top-container d-flex justify-content-between  mb-5 rounded-4 shadow  ">
          
          <div >
            <h1 className="welcome-title">Welcome back, Learner</h1>
            <p className="welcome-sub">
            Track your progress and continue your learning journey
            </p>
         </div>

         <button className="explore-btn px-4 py-2">
            Explore More Roadmaps {<svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>}
         </button>
       </div>


    <div className="container stats-section mb-5 d-flex gap-2">
  <div className="stat-card col-10 col-md-3 d-flex align-items-center shadow rounded-4 justify-content-between me-3 p-4">
       <div className=" ">
         <p className="stat-title">Roadmaps Started</p>
         <h2 className="stat-number">5</h2>
       </div>
       <img 
         src={startImg} 
         alt="progress" 
         className="stat-img"
       />
    </div>
    <div className="stat-card col-10 col-md-3 d-flex align-items-center shadow rounded-4 justify-content-between me-3 p-4">
       <div className=" ">
         <p className="stat-title">In Progress</p>
         <h2 className="stat-number">2</h2>
       </div>
       <img 
         src={progressImg} 
         alt="progress" 
         className="stat-img"
       />
    </div>


    <div className="stat-card col-10 col-md-3 d-flex align-items-center shadow rounded-4 justify-content-between me-3 p-4">
       <div className=" ">
         <p className="stat-title">Compeleted</p>
         <h2 className="stat-number">1</h2>
       </div>
       <img 
         src={completedImg} 
         alt="progress" 
         className="stat-img"
       />
    </div>
  
</div>

       {/* <h4>Your Progress</h4> */}
      <div className="container progress-section">
        <h4>Your Progress</h4><br/>
        <div className="progress-card shadow rounded-4 p-4 mb-4">
          <div className="d-flex justify-content-between">
            <div>
              <h3 className="progress-title">Data Structures</h3>
              <p className="progress-level">Intermediate</p>
            </div>
            <h3 className="progress-percent">65%</h3>
          </div>

          <div className="progress-bar-container">
            <div className="progress-fill" style={{ width: "65%" }}></div>
          </div>
        </div>

        <div className="progress-card shadow rounded-4 p-4">
          <div className="d-flex justify-content-between">
            <div>
              <h3 className="progress-title">Web Development</h3>
              <p className="progress-level">Beginner</p>
            </div>
            <h3 className="progress-percent">40%</h3>
          </div>

          <div className="progress-bar-container">
            <div className="progress-fill" style={{ width: "40%" }}></div>
          </div>
        </div>
        <br/>
        <div className="progress-card shadow rounded-4 p-4">
          <div className="d-flex justify-content-between">
            <div>
              <h3 className="progress-title">Algorithms</h3>
              <p className="progress-level">Intermediate</p>
            </div>
            <h3 className="progress-percent">85%</h3>
          </div>

          <div className="progress-bar-container">
            <div className="progress-fill" style={{ width: "85%" }}></div>
          </div>
        </div>

      </div>

      <div className="bottomDashboard ">
        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="endlogo lucide lucide-zap w-12 h-12 mx-auto mb-4 text-accent"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
        <h4>Keep the momentum going</h4>
        <p>Continue with your next milestone or explore a new roadmap</p>
        <button className="explore-btn learn-btn px-4 py-2">
            Continue Learning 
            {<svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>}
         </button>
      </div>

    </div>
  );
}

export default Dashboard;
