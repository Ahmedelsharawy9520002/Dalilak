import RoadmapSqr from './RoadmapSqr'
import '../styles/roadmaps.css'
import { useState } from 'react';


function Roadmaps(){
    const roadmaps = [
                        {
                            id: "Data Structures Fundamentals",
                            title: "Data Structures Fundamentals",
                            description: "Learn the basics of arrays, linked lists, stacks, and queues.",
                            level: "Beginner",
                            duration: "4 weeks",
                            steps: "12 steps"
                        },
                        {
                            id: "Web Development Basics",
                            title: "Web Development Basics",
                            description: "Master HTML, CSS, and JavaScript fundamentals for web development.",
                            level: "Beginner",
                            duration: "6 weeks",
                            steps: "6 steps"
                        },
                        {
                            id: "Advanced Algorithms",
                            title: "Advanced Algorithms",
                            description: "Dive deep into sorting, searching, and graph algorithms.",
                            level: "Intermediate",
                            duration: "8 weeks",
                            steps: "20 steps"
                        },
                        {
                            id: "System Design Principles",
                            title: "System Design Principles",
                            description: "Learn scalability, load balancing, and distributed systems.",
                            level: "Intermediate",
                            duration: "10 weeks",
                            steps: "18 steps"
                        },
                        {
                            id: "Machine Learning Mastery",
                            title: "Machine Learning Mastery",
                            description: "Explore neural networks, deep learning, and advanced ML techniques.",
                            level: "Expert",
                            duration: "12 weeks",
                            steps: "25 steps"
                        },
                        {
                            id: "Compiler Design & Theory",
                            title: "Compiler Design & Theory",
                            description: "Build compilers and understand formal language theory.",
                            level: "Expert",
                            duration: "14 weeks",
                            steps: "22 steps"
                        },
                        
                    ];
    const levels = ["All Roadmaps", "Beginner", "Intermediate", "Expert"];

    const [activeIndex, setActiveIndex] = useState(0);

    return(
        <div className="container ">
            
            <h1 className='title'>Computer Science <span className='word'>Roadmaps</span></h1>
            <p className='desc'>Select your skill level and dive into a structured learning path designed to take you from beginner to expert.</p>
            <div className="search">
                <input type="text" className='searchinp' placeholder='        Search roadmaps by title or topic...' />
            </div>
            <div className="levels d-flex gap-3">
                {levels.map((item, index) => (
                    <div
                        key={index}
                        className={activeIndex === index ? "level active" : "level"}
                        onClick={() => setActiveIndex(index)}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <p>Showing 6 of 6 roadmaps</p>
            <div className='cardscont d-flex flex-wrap gap-4'>
                {
                roadmaps.map((elem)=>(
                    <RoadmapSqr id={elem.id} title={elem.title} desc={elem.description} level={elem.level} duration={elem.duration} steps={elem.steps} />
                ))
                }
            </div>
        </div>
    )
}
export default Roadmaps;