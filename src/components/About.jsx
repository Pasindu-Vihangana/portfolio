import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach((item) => observer.observe(item));

    // Set timeline line height dynamically
    const updateTimelineHeight = () => {
      if (timelineRef.current) {
        const timelineLine = timelineRef.current.querySelector('.timeline-line');
        const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
        if (timelineLine && timelineItems.length > 0) {
          const lastItem = timelineItems[timelineItems.length - 1];
          const lastItemBottom = lastItem.offsetTop + lastItem.offsetHeight;
          timelineLine.style.height = `${lastItemBottom}px`;
        }
      }
    };

    // Update height after a short delay to ensure all content is rendered
    setTimeout(updateTimelineHeight, 100);

    // Update height on window resize
    window.addEventListener('resize', updateTimelineHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateTimelineHeight);
    };
  }, []);

  return (
    <>
      <section id="about" className="about">
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h3>Who I Am</h3>
              <p>
                I'm an Embedded Systems Engineer with a passion for building innovative hardware and firmware solutions. My expertise spans microcontroller programming, IoT device development, PCB design, and Digital Signal Processing. I thrive on solving real-world problems using electronics and software.
              </p>

              <h3>What I Do</h3>
              <p>
                I specialize in embedded firmware development, PCB layout design, and IoT integration. From low-level C/C++ programming to cross-platform application developing and debugging, I bring ideas to life by combining deep technical knowledge with creativity and attention to detail.
              </p>

              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">+3</span>
                  <span className="stat-label">Years Experience</span>
                </div>

                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Certifications</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
              </div>
            </div>

            <div className="about-image">
              <div className="image-container">
                <div className="portrait-image">
                <img src="assets/about/portrait.jpg" alt="Pasindu Vihangana"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="timeline-section">
        <div className="about-container">
          <div className="section-header">
            <h2 className="section-title">My Journey</h2>
            <p className="section-subtitle">Professional Experience and Educational Milestones</p>
          </div>

          <div className="timeline-container" ref={timelineRef}>
            <div className="timeline-line"></div>

            <div className="timeline-item left">
              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <h4>Vanquish Muay Thai & Fitness<p>Aug 2023 - Present · 2 years</p></h4>
                  <h5>Trainning Fighter <p>Apprenticeship</p></h5>
                  <p>2025 Muay Thai National Champion (48kg)</p>
                </div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <h4>SRQ Robotics<p>Aug 2022 - Present · 3 years</p></h4>
                  <h5>Embedded Systems Engineer <p>Full-time</p></h5>
                </div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <h4>MAS Holdings <p>Apr 2021 - Dec 2021 · 9 months</p></h4>
                  <h5>Mechatronics Engineering Intern</h5>
                  <p>Grade: 3.64 GPA (Second Upper Class)</p>
                </div>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <h4>University of Sri Jayewardenepura<p>Jan 2018 - Jun 2022</p></h4>
                  <h5>Bachelor of Engineering Technology (Honours)<p>in Mechatronics</p></h5>
                  <p>Grade: 3.64 GPA (Second Upper Class)</p>
                </div>
              </div>
            </div>

            <div className="timeline-item right">
              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <h4>People's Bank <p>Jan 2017 - Nov 2017</p></h4>
                  <h5>Bank Teller</h5>
                </div>
              </div>
            </div>

            <div className="timeline-item left">
              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <h4>Ananda College<p>Aug 2014 - Aug 2016</p></h4>
                  <h5>G.C.E. Advance Level, Engineering Technology</h5>
                  <p>Grade: 2.4318 Z-Score</p>
                  <p>18th in Colombo District & 89th in All Island</p>
                </div>
              </div>
            </div>


            <div className="timeline-item left">
              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <h4>Asoka College<p>Jan 2003 - Dec 2013</p></h4>
                  <h5>G.C.E. Ordinary Level</h5>
                  <p>Grade: 7 A passes & 2 B passes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-values">
            <h3>My Values</h3>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">🎯</div>
                <h4>Quality</h4>
                <p>I believe in delivering high-quality work that is clean, maintainable, and scalable.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🚀</div>
                <h4>Innovation</h4>
                <p>Always experiment with new technologies and approaches to solve problems creatively.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">📈</div>
                <h4>Strategic Thinking</h4>
                <p>Every action is purposeful; anticipated, planed & executed with intent.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h4>Collaboration</h4>
                <p>Working closely with teams and clients to ensure the best possible outcomes.</p>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About; 