import { useState } from 'react'
import Button from '@mui/material/Button';
import '../styles/home.css'
import Infosqr from './Infosqr'
import RepeatedComponent from './RepeatedComponent';
import { FiBookOpen } from "react-icons/fi";
import { SlEnergy } from "react-icons/sl";
import { FiTarget } from "react-icons/fi";

function Home() {
    const elements = [
        {icon:< FiBookOpen className='myicon fs-4'/>, header:"Structured Learning Paths", p:"Follow carefully designed roadmaps that break down complex topics into manageable steps."},
        {icon:< SlEnergy className='myicon fs-4'/>, header:"Three Difficulty Levels", p:"Choose your path: Beginner, Intermediate, or Expert. Progress at your own pace."},
        {icon:< FiTarget className='myicon fs-4'/>, header:"Goal-Oriented Learning", p:"Track your progress and achieve your learning objectives with detailed guidance."}
    ]

    return (
    <>
        <div className='cont container'>
            <div className='first-part d-flex flex-column align-items-center'>
                <h1 className='header1'><span className='text-light'>Master</span> <span className='mycolor'>Computer Science</span></h1>
                <h4 className='header2 text-light opacity-75'>Navigate your learning journey with expertly crafted roadmaps.
                    From beginner fundamentals to expert mastery—find your path to success.</h4>
                <span className='buttons d-flex gap-4'>
                    <Button variant="contained" className='butn1 d-flex justify-content-evenly'><span>Get Started</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-5 h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></Button>
                    <Button variant="outlined" className='butn2 d-flex justify-content-evenly'><span>Contact Us</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-5 h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></Button>
                </span>
                
            </div>
            <div className='sec-part d-flex gap-4 justify-content-center'>
                {
                    elements.map((val)=>(
                        <Infosqr icon={val.icon} header={val.header} p={val.p}  />
                    ))
                }            
            </div>
            <div className='third-part d-flex justify-content-center'>
                <RepeatedComponent 
                header="Ready to start your journey?" 
                p="Choose your skill level and begin
                mastering computer science concepts today."
                btntxt="explore all roadmaps"
                mysvg={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>}
                />
                
            </div>
        </div>
    </>
    )
}

export default Home