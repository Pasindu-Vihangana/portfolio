import React from 'react';
import './TechMarquee.css';

// { name: '', icon: ''},

const techStack = [
  { name: 'Solidworks', icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/SolidWorks_Logo.svg/2880px-SolidWorks_Logo.svg.png' },
  { name: 'Matlab', icon: 'https://www.svgrepo.com/show/373830/matlab.svg' },
  { name: 'git', icon: 'https://www.svgrepo.com/show/303548/git-icon-logo.svg' },

  { name: 'iOS', icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/67/c9/6c/67c96c86-06f3-1da3-5127-b29ca02c23e9/Xcode-85-220-0-4-0-0-2x-sRGB-0-0.png/1200x630bb.png' },
  { name: 'Android', icon: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/android-studio-icon.png' },
  { name: 'Raspberry Pi', icon: 'https://www.raspberrypi.com/app/uploads/2020/06/raspberrry_pi_logo.png' },

  { name: 'STM32', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ST_logo_2020_blue_V.svg/500px-ST_logo_2020_blue_V.svg.png' },
  { name: 'Espressif', icon: 'https://www.svgrepo.com/show/349355/espressif.svg' },
  { name: 'Nordic Semi', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Nordic_Semiconductor_Company_Logo.svg/500px-Nordic_Semiconductor_Company_Logo.svg.png' },

  { name: 'Arduino', icon: 'https://www.svgrepo.com/show/373441/arduino.svg' },
  { name: 'Zephyr RTOS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Zephyr_RTOS_logo_2015.svg/2880px-Zephyr_RTOS_logo_2015.svg.png' },
  { name: 'PlatformIO', icon: 'https://www.svgrepo.com/show/373979/platformio.svg' },

  { name: 'Embedded C', icon: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png' },
  { name: 'Python', icon: 'https://www.svgrepo.com/show/354238/python.svg' },

  // { name: 'KiCad', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/KiCad-Logo.svg/330px-KiCad-Logo.svg.png' },
  // { name: 'Altium', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Altium_Limited_logo.svg/300px-Altium_Limited_logo.svg.png' },
  // { name: 'EasyEDA', icon: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logos/easyeda-luikng03wc1euj6sie9rh.png/easyeda-jckymszo6kbikxs7n5t29.png' },

  { name: 'MQTT', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mqtt-hor.svg/1024px-Mqtt-hor.svg.png' },
  { name: 'LoRaWAN', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/LoRaWAN_Logo.svg/1024px-LoRaWAN_Logo.svg.png' },
  { name: 'BLE', icon: 'https://www.svgrepo.com/show/353494/bluetooth.svg' },
  { name: 'WiFi', icon: 'https://www.svgrepo.com/show/394564/wifi-logo.svg' },
];

const TechMarquee = () => (
  <div className="tech-marquee-section">
    <div className="tech-marquee-track">
      {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
        <div className="tech-marquee-item" key={idx}>
          <div className="tech-marquee-icon-wrap">
            <img src={tech.icon} alt={tech.name} className="tech-marquee-icon" />
          </div>
          <span className="tech-marquee-label">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default TechMarquee; 