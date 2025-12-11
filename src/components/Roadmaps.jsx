import RoadmapSqr from './RoadmapSqr'
import '../styles/roadmaps.css'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';


function Roadmaps(){
    const { t } = useTranslation();
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

const levels = [
        {name: t('roadmapsPage.levels.all'), category:0}, 
        {name: t('roadmapsPage.levels.beg'), category:1}, 
        {name: t('roadmapsPage.levels.int'), category:2}, 
        {name: t('roadmapsPage.levels.exp'), category:3}
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const [displayed, setdisplayed] = useState(roadmaps)

    const [category, setcategory] = useState(0);

    const handleSearch = (e)=>{
        !e.target.value? handleFilter(category) : setdisplayed(displayed.filter((rm)=>rm.title.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    const handleFilter = (selectedCategory)=>{
        selectedCategory === 0? setdisplayed(roadmaps) : setdisplayed(roadmaps.filter((rm)=>rm.category === selectedCategory))
        setcategory(selectedCategory)
    }
    return(
        <div className="container">
            
            <h1 className='title'>{t('roadmapsPage.title')} <span className='word'>{t('roadmapsPage.titleSpan')}</span></h1>
            <p className='desc'> {t('roadmapsPage.desc')}</p>
            <div className="search">
                <input type="text"
                className='searchinp'
                onChange={(e)=>{
                    handleSearch(e)
                }}
                placeholder={t('roadmapsPage.searchPh')}
                />
            </div>
            <div className="levels d-flex flex-wrap gap-3">
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
            <p>{t('roadmapsPage.showing')} {displayed.length} {t('roadmapsPage.of')}  {roadmaps.length} {t('roadmapsPage.items')}</p>
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