import React, { useState } from 'react';
import './Expertise.css';

const expertise = [
  {
    icon: '👨🏻‍💻',
    title: 'Firmware Development',
    desc: 'Development of robust, efficient, and maintainable embedded firmware using C/C++. Expertise in debugging, optimization, and hardware integration.',
    tags: ['C/C++', 'Debugging', 'Optimization', 'Arduino', 'Nordic Semiconductors', 'STM', 'ESP', 'PlatformIO'],
    image: 'assets/expertise/firmware-dev.gif',
  },
  {
    icon: '📈',
    title: 'Digital Signal Processing',
    desc: 'Design and implementation of advanced signal processing algorithms for real-time embedded systems, including filtering, estimation, and sensor fusion.',
    tags: ['Kalman Filter', 'Mahony Filter', 'IIR', 'FIR'],
    image: 'assets/expertise/dsp.gif',
  },
  {
    icon: '🫆',
    title: 'Computer Vision Algorithms',
    desc: 'Development of computer vision solutions for object detection, tracking, and augmented/virtual reality applications, leveraging iterative prototyping and R&D.',
    tags: ['AR', 'VR', 'R&D', 'Proof of Concept', 'Iterative Refinement'],
    image: 'assets/expertise/computer-vision.gif',
  },
  {
    icon: '📲',
    title: 'IoT Solutions',
    desc: 'Comprehensive IoT device development, including sensor integration, wireless communication (BLE, WiFi, LoRaWAN), and seamless cloud connectivity.',
    tags: ['BLE', 'WiFi', 'LoRaWAN', 'MQTT', 'Cloud'],
    image: 'assets/expertise/iot-solutions.gif',
  },
  {
    icon: '⚙️',
    title: 'Hardware Systems Designing',
    desc: 'Design and prototyping of hardware systems from proof-of-concept to mass production, including PCB design, 3D modeling, and rapid prototyping.',
    tags: ['3D Modeling', '3D Printing', 'PCB Designing', 'Soldering', 'Wiring', 'Prototyping', 'Crafting'],
    image: 'assets/expertise/hardware.gif',
  },
  {
    icon: '🧠',
    title: 'AI Assisted Solutions',
    desc: 'Integrating AI and large language models to automate workflows, enhance productivity, and deliver intelligent, context-aware solutions.',
    tags: ['LLM', 'Prompt Engineering', 'GPT Wrappers'],
    image: 'assets/expertise/ai-solutions.gif',
  },
];

const Expertise = () => {
  const [activeExpertise, setActiveExpertise] = useState(null);
  const [tileHeight, setTileHeight] = useState(500);
  const [isHovering, setIsHovering] = useState(false);
  const [autoIndex, setAutoIndex] = useState(0);

  // Auto-cycle effect
  React.useEffect(() => {
    if (isHovering) return; // Pause cycling on hover
    const interval = setInterval(() => {
      setAutoIndex(prev => (prev + 1) % expertise.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovering]);

  // When not hovering, show autoIndex; when hovering, show hovered
  const currentIdx = activeExpertise !== null ? activeExpertise : autoIndex;
  const currentExpertise = expertise[currentIdx];

  const handleExpertiseHover = (index) => {
    setActiveExpertise(index);
    setIsHovering(true);
  };

  const handleExpertiseLeave = () => {
    setActiveExpertise(null);
    setIsHovering(false);
  };

  // Update tile height to match list height
  React.useEffect(() => {
    const updateTileHeight = () => {
      const listElement = document.querySelector('.expertise-list');
      if (listElement) {
        const listHeight = listElement.offsetHeight;
        setTileHeight(Math.max(listHeight, 500)); // Minimum 500px
      }
    };

    updateTileHeight();
    window.addEventListener('resize', updateTileHeight);
    return () => window.removeEventListener('resize', updateTileHeight);
  }, []);

  return (
    <section id="expertise" className="expertise-section">
      <div className="expertise-header">
        <span className="expertise-badge">My Expertise</span>
        <h2 className="expertise-title">Bringing ideas to reality</h2>
        <p className="expertise-subtitle">Strategic thinking and technical excellence for embedded, IoT, and firmware projects</p>
      </div>
      <div className="expertise-container">
        <div className="expertise-list">
          {expertise.map((item, idx) => (
            <div
              className={`expertise-list-item ${currentIdx === idx ? 'active' : ''}`}
              key={idx}
              onMouseEnter={() => handleExpertiseHover(idx)}
              onMouseLeave={handleExpertiseLeave}
            >
              <div className="expertise-list-icon">{item.icon}</div>
              <div className="expertise-list-content">
                <h3 className="expertise-list-title">{item.title}</h3>
                <div className="expertise-list-tags">
                  {item.tags.slice(0, 2).map((tag, i) => (
                    <span className="expertise-list-tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="expertise-detail-tile" style={{ height: `${tileHeight}px` }}>
          {currentExpertise ? (
            <div className="expertise-detail-content">
              <div className="expertise-detail-image">
                <img
                  src={currentExpertise.image}
                  alt={currentExpertise.title}
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = 'assets/expertise/default-expertise.jpg';
                  }}
                />
              </div>
              <div className="expertise-detail-info">
                {/* <h3 className="expertise-detail-icon">{currentExpertise.icon}</h3> */}
                <h3 className="expertise-detail-title">{currentExpertise.icon} {currentExpertise.title}</h3>
                <p className="expertise-detail-desc">{currentExpertise.desc}</p>
                <div className="expertise-detail-tags">
                  {currentExpertise.tags.map((tag, i) => (
                    <span className="expertise-detail-tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="expertise-default-content">
              <div className="expertise-default-image">
                <img
                  src="assets/expertise/default-expertise.jpg"
                  alt="Expertise Overview"
                  onError={e => {
                    e.target.onerror = null;
                    e.target.src = 'assets/expertise/default-expertise.jpg';
                  }}
                />
              </div>
              <div className="expertise-default-text">
                <h3>Explore my technical skills and experience areas</h3>
                <p>Hover over an expertise to see details</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Expertise; 