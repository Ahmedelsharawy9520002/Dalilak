import React from "react";
import "../styles/about.css";
import { FiBookOpen } from "react-icons/fi";
import { Award, Users} from "lucide-react"
import { GoGoal } from "react-icons/go";
// import { FaMedal } from "react-icons/fa6";
// import { BsPeopleFill } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (

    <div className="aboutpage">
      <div className="contbox container">
        <header className="header">
          <h1 className="title home-title-text">
            {t('aboutPage.title')} <span className="imp">{t('brandName')}</span>
          </h1>
          <p className="subt">
             {t('aboutPage.subtitle')}
          </p>
        </header>

        <section className="mission">
          <h2 className="sectitle">{t('aboutPage.missionTitle')}</h2>
          <p>
            {t('aboutPage.missionP1')}
          </p>
          <p>
            {t('aboutPage.missionP2')}
          </p>
        </section>

        <h2 className="sectitle cvalstitle">{t('aboutPage.valuesTitle')}</h2>

        <section className="cvals">
          <article className="corecard">
            <div className="icon">
              <FiBookOpen />
            </div>
            <h3 className="infosqr-h">{t('aboutPage.val1.title')}</h3>
            <p>
              {t('aboutPage.val1.desc')}
            </p>
          </article>

          <article className="corecard">
            <div className="icon">
              <GoGoal />
            </div>
            <h3 className="infosqr-h">{t('aboutPage.val2.title')}</h3>
            <p>
              {t('aboutPage.val2.desc')}
            </p>
          </article>

          <article className="corecard">
            <div className="icon">
              <Users />
            </div>
            <h3 className="infosqr-h">{t('aboutPage.val3.title')}</h3>
            <p>
              {t('aboutPage.val3.desc')}
            </p>
          </article>

          <article className="corecard">
            <div className="icon">
              <Award />
            </div>
            <h3 className="infosqr-h"> {t('aboutPage.val4.title')}</h3>
            <p>
              {t('aboutPage.val4.desc')}
            </p>
          </article>
        </section>

        <section className="stats">
          <div className="statcard">
            <h2>50+</h2>
            <p>{t('aboutPage.stats.roadmaps')}</p>
          </div>
          <div className="statcard">
            <h2>10K+</h2>
            <p>{t('aboutPage.stats.learners')}</p>
          </div>
          <div className="statcard">
            <h2>100+</h2>
            <p>{t('aboutPage.stats.experts')}</p>
          </div>
          <div className="statcard">
            <h2>95%</h2>
            <p>{t('aboutPage.stats.satisfaction')}</p>
          </div>
        </section>
      </div>
    </div>

  );
}
