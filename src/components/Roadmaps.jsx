import RoadmapSqr from './RoadmapSqr'
import '../styles/roadmaps.css'
import { useState } from 'react';


function Roadmaps(){
    const roadmaps = [
                        {
                            id: 1,
                            title: "Data Structures Fundamentals",
                            description: "Learn the basics of arrays, linked lists, stacks, and queues.",
                            level: "Beginner",
                            duration: "4 weeks",
                            steps: "12 steps",
                            category: 1
                        },
                        {
                            id: 2,
                            title: "Web Development Basics",
                            description: "Master HTML, CSS, and JavaScript fundamentals for web development.",
                            level: "Beginner",
                            duration: "6 weeks",
                            steps: "6 steps",
                            category: 1                        
                        },
                        {
                            id: 3,
                            title: "Advanced Algorithms",
                            description: "Dive deep into sorting, searching, and graph algorithms.",
                            level: "Intermediate",
                            duration: "8 weeks",
                            steps: "20 steps",
                            category: 2
                        },
                        {
                            id: 4,
                            title: "System Design Principles",
                            description: "Learn scalability, load balancing, and distributed systems.",
                            level: "Intermediate",
                            duration: "10 weeks",
                            steps: "18 steps",
                            category: 2
                        },
                        {
                            id: 5,
                            title: "Machine Learning Mastery",
                            description: "Explore neural networks, deep learning, and advanced ML techniques.",
                            level: "Expert",
                            duration: "12 weeks",
                            steps: "25 steps",
                            category: 3
                        },
                        {
                            id: 6,
                            title: "Compiler Design & Theory",
                            description: "Build compilers and understand formal language theory.",
                            level: "Expert",
                            duration: "14 weeks",
                            steps: "22 steps",
                            category: 3
                        },
                        
                    ];
    const levels = [{name:"All Roadmaps", category:0}, {name:"Beginner", category:1}, {name:"Intermediate", category:2}, {name:"Expert", category:3}];

    const [activeIndex, setActiveIndex] = useState(0);

    const [inputdata, setinputdata] = useState("")

    const [displayed, setdisplayed] = useState(roadmaps)

    const handleSearch = (e)=>{
        var newdisplayed = !e.target.value? roadmaps : displayed.filter((rm)=>rm.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setdisplayed(newdisplayed)
    }

    const handleFilter = (selectedCategory)=>{
        selectedCategory === 0? setdisplayed(roadmaps) : setdisplayed(roadmaps.filter((rm)=>rm.category === selectedCategory))
    }
    return(
        <div className="container ">
            
            <h1 className='title'>Computer Science <span className='word'>Roadmaps</span></h1>
            <p className='desc'>Select your skill level and dive into a structured learning path designed to take you from beginner to expert.</p>
            <div className="search">
                <input type="text"
                className='searchinp'
                onChange={(e)=>{
                    setinputdata(e.target.value),
                    handleSearch(e)
                }}
                placeholder='Search roadmaps by title or topic...'
                />
            </div>
            <div className="levels d-flex gap-3">
                {levels.map((item, index) => (
                    <div
                        key={index}
                        className={activeIndex === index ? "level active" : "level"}
                        onClick={() =>{
                            setActiveIndex(index),
                            handleFilter(item.category)
                        }}
                    >
                        {item.name}
                    </div>
                ))}
            </div>
            <p>Showing {displayed.length} of {roadmaps.length} roadmaps</p>
            <div className='cardscont d-flex flex-wrap gap-4'>
                {
                displayed.map((elem)=>(
                    <RoadmapSqr id={elem.id} title={elem.title} desc={elem.description} level={elem.level} duration={elem.duration} steps={elem.steps} />
                ))
                }
            </div>
        </div>
    )
}
export default Roadmaps;