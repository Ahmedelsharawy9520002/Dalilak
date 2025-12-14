import { useState } from 'react'
import Button from '@mui/material/Button';
import '../styles/home.css'
import Infosqr from './Infosqr'
import RepeatedComponent from './RepeatedComponent';
import { FiBookOpen } from "react-icons/fi";
import { SlEnergy } from "react-icons/sl";
import { FiTarget } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import PageWrapper from "./PageWrapper";


function Home() {
    const { t, i18n } = useTranslation(); 
    const isRtl = i18n.dir() === 'rtl';
    const elements = [
        {icon:< FiBookOpen className='myicon fs-4'/>, header:t('home.cards.structHeader'), p: t('home.cards.structP')},
        {icon:< SlEnergy className='myicon fs-4 '/>, header:t('home.cards.levelsHeader'), p: t('home.cards.levelsP')},
        {icon:< FiTarget className='myicon fs-4 '/>, header:t('home.cards.goalHeader'), p:t('home.cards.goalP')}]

    return (

    <>
        <PageWrapper>
        <div className='cont container'>
            <div className='first-part d-flex flex-column align-items-center'>
                <h1 className='header1'><span className='home-title-text'>{t('home.heroTitle')}</span> <span className='mycolor'>{t('home.heroTitleSpan')}</span></h1>
                <h5 className='header2 home-desc-text'>{t('home.heroSub')}
                    </h5>
                <span className='buttons d-flex gap-4'>
                    <Link to="/Roadmaps" className='homeroutes'>
                        <Button variant="contained" className='butn1 d-flex justify-content-evenly'><span>{t('home.getStarted')} </span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-5 h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></Button>
                    </Link>
                    <Link to="/Contact" className='homeroutes'>
                        <Button variant="outlined" className='butn2 d-flex justify-content-evenly'><span> {t('home.contactUs')}</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-5 h-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></Button>
                    </Link>
                </span>
                
            </div>

            <div className='sec-part d-flex gap-4 justify-content-center '>
                {
                    elements.map((val)=>(
                        <Infosqr icon={val.icon} header={val.header} p={val.p}  />
                    ))
                }            
            </div>
            
            <div className='third-part d-flex justify-content-center readydiv'>
                <RepeatedComponent 
                header={t('home.readyHeader')}  
                p={t('home.readyP')}
                btntxt={t('home.exploreBtn')}
                mysvg={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>}
                />
                
            </div>
        </div>
        </PageWrapper>
    </>
    )
}

export default Home