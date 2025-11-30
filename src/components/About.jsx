import React from "react";
import "../styles/about.css";

import { FaBookOpen, FaMedal } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { BsPeopleFill } from "react-icons/bs";

export default function About() {
  return (

    <div className="aboutpage">
      <div className="contbox">
        <header className="header">
          <h1 className="title">
            About <span className="imp">Dalilak</span>
          </h1>
          <p className="subt">
            Empowering learners worldwide with personalized learning paths and comprehensive roadmaps to achieve their goals.
          </p>
        </header>

        <section className="mission">
          <h2 className="sectitle">Our Mission</h2>
          <p>
            At Dalilak, we believe that everyone deserves access to quality education and clear learning paths. Our mission is to democratize learning by providing structured roadmaps that guide you from beginner to expert in your chosen field.
          </p>
          <p>
            We combine expert knowledge with modern technology to create personalized learning experiences that adapt to your pace and style, helping you achieve your goals faster and more effectively.
          </p>
        </section>

        <h2 className="sectitle cvalstitle">Our Core Values</h2>

        <section className="cvals">
          <article className="corecard">
            <div className="icon">
              <FaBookOpen />
            </div>
            <h3>Accessible Learning</h3>
            <p>
              We believe education should be accessible to everyone, regardless of background or resources. Our platform is designed to be free and inclusive.
            </p>
          </article>

          <article className="corecard">
            <div className="icon">
              <GoGoal />
            </div>
            <h3>Goal-Oriented</h3>
            <p>
              Every roadmap is designed with clear milestones and objectives, helping you stay focused and motivated throughout your learning journey.
            </p>
          </article>

          <article className="corecard">
            <div className="icon">
              <BsPeopleFill />
            </div>
            <h3>Community-Driven</h3>
            <p>
              Our roadmaps are created and refined by experts and learners alike, ensuring they reflect real-world needs and best practices.
            </p>
          </article>

          <article className="corecard">
            <div className="icon">
              <FaMedal />
            </div>
            <h3>Quality Content</h3>
            <p>
              We curate and verify all learning resources to ensure you’re getting the most up-to-date and effective educational content available.
            </p>
          </article>
        </section>

        <section className="stats">
          <div className="statcard">
            <h2>50+</h2>
            <p>Learning Roadmaps</p>
          </div>
          <div className="statcard">
            <h2>10K+</h2>
            <p>Active Learners</p>
          </div>
          <div className="statcard">
            <h2>100+</h2>
            <p>Expert Contributors</p>
          </div>
          <div className="statcard">
            <h2>95%</h2>
            <p>Satisfaction Rate</p>
          </div>
        </section>
      </div>
    </div>

  );
}
