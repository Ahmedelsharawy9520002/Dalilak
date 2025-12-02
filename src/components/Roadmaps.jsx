import RoadmapSqr from './RoadmapSqr'
import '../styles/roadmaps.css'


function Roadmaps(){
    const roadmaps = [
                        {
                            id: 1,
                            title: "Data Structures Fundamentals",
                            description: "Learn the basics of arrays, linked lists, stacks, and queues.",
                            level: "Beginner",
                            duration: "4 weeks",
                            steps: "12 steps"
                        },
                        {
                            id: 2,
                            title: "Web Development Basics",
                            description: "Master HTML, CSS, and JavaScript fundamentals for web development.",
                            level: "Beginner",
                            duration: "6 weeks",
                            steps: "15 steps"
                        },
                        {
                            id: 3,
                            title: "Advanced Algorithms",
                            description: "Dive deep into sorting, searching, and graph algorithms.",
                            level: "Intermediate",
                            duration: "8 weeks",
                            steps: "20 steps"
                        },
                        {
                            id: 4,
                            title: "System Design Principles",
                            description: "Learn scalability, load balancing, and distributed systems.",
                            level: "Intermediate",
                            duration: "10 weeks",
                            steps: "18 steps"
                        },
                        {
                            id: 5,
                            title: "Machine Learning Mastery",
                            description: "Explore neural networks, deep learning, and advanced ML techniques.",
                            level: "Expert",
                            duration: "12 weeks",
                            steps: "25 steps"
                        },
                        {
                            id: 6,
                            title: "Compiler Design & Theory",
                            description: "Build compilers and understand formal language theory.",
                            level: "Expert",
                            duration: "14 weeks",
                            steps: "22 steps"
                        },
                        
                    ];

    return(
        <div className="container ">
            
            <h1 className='title'>Computer Science <span className='word'>Roadmaps</span></h1>
            <p className='desc'>Select your skill level and dive into a structured learning path designed to take you from beginner to expert.</p>
            <div className="search">
                <input type="text" className='searchinp' placeholder='        Search roadmaps by title or topic...' />
            </div>
            <div className="levels d-flex gap-3">
                <div className='level'>All Roadmaps</div>
                <div className='level'>Beginner</div>
                <div className='level'>Intermidate</div>
                <div className='level'>Expert</div>
            </div>
            <p>Showing 6 of 6 roadmaps</p>
            <div className='cardscont d-flex flex-wrap gap-4'>
                {
                roadmaps.map((elem)=>(
                    <RoadmapSqr title={elem.title} desc={elem.description} level={elem.level} duration={elem.duration} steps={elem.steps} />
                ))
                }
            </div>
        </div>
    )
}
export default Roadmaps;