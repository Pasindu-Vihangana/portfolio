import React from "react";
import { Icons } from "../components/Icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expertise | Pasindu Vihangana",
  description: "Robotics and Embedded Systems services including control systems, sensor fusion, RTOS firmware development, motion analysis wearables, and custom hardware/PCB design.",
};

// Skill interfaces
interface Skill {
  name: string;
  rate: string;
  color: string;
  svg: React.ReactNode;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    title: "Control & State Estimation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
        <path d="M3 12h18M3 6h18M3 18h18" />
        <circle cx="12" cy="12" r="3" fill="currentColor" className="text-primary/20" />
      </svg>
    ),
    skills: [
      {
        name: "Cascaded PID",
        rate: "95%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12c3-8 5-8 8 0s5 8 8 0" />
            <path d="M3 12h18M12 3v18" strokeDasharray="2 2" strokeWidth="1" />
          </svg>
        )
      },
      {
        name: "EKF / Kalman",
        rate: "90%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <path strokeLinecap="round" d="M3 20c2-1 4-6 6-10s4-7 6-1 4 9 6 11" />
            <path strokeLinecap="round" d="M3 20c3.5 0 5-3 7-5s5 1.5 8 3.5c1 .7 3 1.5 4 1.5" strokeDasharray="2 2" />
          </svg>
        )
      },
      {
        name: "Orientation",
        rate: "95%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2v20M2 12h20" strokeWidth="1" strokeDasharray="3 3" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.24 7.76l-8.48 8.48M7.76 7.76l8.48 8.48" />
          </svg>
        )
      },
      {
        name: "MATLAB Models",
        rate: "85%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M2 19h20v2H2zM4 17h2v-4H4zm4 0h2V9H8zm4 0h2V6h-2zm4 0h2v-8h-2zm4 0h2v-5h-2z" />
          </svg>
        )
      }
    ]
  },
  {
    title: "Firmware & RTOS",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m6 10 2 2-2 2M11 14h5" />
      </svg>
    ),
    skills: [
      {
        name: "C/C++",
        rate: "95%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" d="M15 9a4 4 0 1 0 0 6M18 12h4M20 10v4" />
          </svg>
        )
      },
      {
        name: "RTOS Tasks",
        rate: "90%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
            <path d="M10 6.5h4M6.5 10v4M14 17.5h-4" strokeWidth="1.5" />
          </svg>
        )
      },
      {
        name: "BLE Bluetooth",
        rate: "90%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11" />
          </svg>
        )
      },
      {
        name: "Drivers (SPI)",
        rate: "90%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M4 6h16M4 12h16M4 18h16M8 3v18M16 3v18" strokeWidth="1" />
            <circle cx="8" cy="6" r="1.5" fill="currentColor" />
            <circle cx="16" cy="12" r="1.5" fill="currentColor" />
            <circle cx="8" cy="18" r="1.5" fill="currentColor" />
          </svg>
        )
      }
    ]
  },
  {
    title: "Hardware & PCB Design",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    skills: [
      {
        name: "Multilayer PCB",
        rate: "90%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M2 5h20M2 11h20M2 17h20" />
            <circle cx="6" cy="5" r="1" fill="currentColor" />
            <circle cx="18" cy="11" r="1" fill="currentColor" />
            <circle cx="10" cy="17" r="1" fill="currentColor" />
            <path d="M6 5v6M18 11v6" strokeWidth="1.5" strokeDasharray="2 2" />
          </svg>
        )
      },
      {
        name: "High-density",
        rate: "85%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="12" cy="12" r="3" />
            <path d="M12 3v6M12 15v6M3 12h6M15 12h6" strokeWidth="1.5" />
          </svg>
        )
      },
      {
        name: "Signal Integ.",
        rate: "85%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l3 8 4-16 3 8h4" />
          </svg>
        )
      },
      {
        name: "Altium / KiCad",
        rate: "90%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M3 3h18v18H3z" strokeWidth="1.5" />
            <path d="M17 7L7 17M7 7h6M7 7v6" />
          </svg>
        )
      }
    ]
  },
  {
    title: "AI & Computer Vision",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    skills: [
      {
        name: "Pose Estim.",
        rate: "85%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <circle cx="12" cy="6" r="2.5" />
            <path d="M12 8.5v6M9.5 10h5M8 20l2-5.5M16 20l-2-5.5" />
          </svg>
        )
      },
      {
        name: "Deep Learning",
        rate: "80%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <circle cx="6" cy="6" r="2" />
            <circle cx="6" cy="18" r="2" />
            <circle cx="18" cy="12" r="3" />
            <path d="M8 6l7 4.5M8 18l7-4.5" />
          </svg>
        )
      },
      {
        name: "OpenCV / Image",
        rate: "90%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <circle cx="12" cy="12" r="3" />
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3v3M12 18v3M3 12h3M18 12h3" strokeWidth="1.5" />
          </svg>
        )
      },
      {
        name: "NumPy / Pandas",
        rate: "85%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 3v18M15 3v18M3 9h18M3 15h18" strokeWidth="1" />
            <circle cx="6" cy="6" r="1.5" fill="currentColor" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        )
      }
    ]
  },
  {
    title: "Wireless & Sensors",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
        <path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5zm0 18v-8l4-4 4 4 6-6v14H5z" />
      </svg>
    ),
    skills: [
      {
        name: "Telemetry RF",
        rate: "90%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M12 18v5M12 6c3.5 0 6 2.5 6 6M12 2c5.5 0 10 4.5 10 10M12 10a2 2 0 0 1 0 4" />
          </svg>
        )
      },
      {
        name: "IMU Fusion",
        rate: "95%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M12 22V12M12 12L5 8M12 12l7-4" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <path d="M12 3a9 9 0 0 0 0 18" strokeDasharray="2 2" strokeWidth="1" />
          </svg>
        )
      },
      {
        name: "ToF / Lidar",
        rate: "85%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M3 12h18" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M18 9l3 3-3 3M6 9l-3 3 3 3" />
            <circle cx="12" cy="12" r="3.5" />
          </svg>
        )
      },
      {
        name: "GPS / Nav",
        rate: "80%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        )
      }
    ]
  },
  {
    title: "CAD, Design & Systems",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    skills: [
      {
        name: "SolidWorks CAD",
        rate: "85%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        )
      },
      {
        name: "3D Printing",
        rate: "95%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
            <path d="M16 14H8v8h8v-8z" fill="currentColor" fillOpacity="0.1" />
          </svg>
        )
      },
      {
        name: "Blender 3D",
        rate: "75%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c1.8 0 3.37-.96 4.24-2.4L12 12h5" />
          </svg>
        )
      },
      {
        name: "ROS System",
        rate: "65%",
        color: "#e9c349",
        svg: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2v5M12 17v5M2 12h5M17 12h5" strokeWidth="1.5" />
          </svg>
        )
      }
    ]
  }
];

// Tools list (11 tools)
interface Tool {
  name: string;
  color: string;
  svg: React.ReactNode;
}

const TOOLS_LIST: Tool[] = [
  {
    name: "Altium",
    color: "#a51d24",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.25 15h-2.5v-2h2.5v2zm2.25-5.25c0 1.24-1.01 2.25-2.25 2.25h-2.5V8.5h2.5c1.24 0 2.25 1.01 2.25 2.25v1zm-2.25-1.25h-1v2h1c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25z" />
      </svg>
    )
  },
  {
    name: "KiCad",
    color: "#2f6ba9",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 16.5H7.75v-9H9.5v3.25L13 7.5h2.25l-4 4.25 4.5 4.75h-2.5L9.5 12.5v4z" />
      </svg>
    )
  },
  {
    name: "SolidWorks",
    color: "#dc2626",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
      </svg>
    )
  },
  {
    name: "MATLAB",
    color: "#e15b13",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14H7.5v-2H10c.83 0 1.5-.67 1.5-1.5S10.83 11 10 11H7.5V9H10c1.93 0 3.5 1.57 3.5 3.5 0 .95-.38 1.81-1 2.44.62.63 1 1.49 1 2.44 0 .83-.67 1.5-1.5 1.5h-1v-1.12z" />
      </svg>
    )
  },
  {
    name: "PyTorch",
    color: "#ee4c2c",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3 13.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5V11H10v-2h4v6.5z" />
      </svg>
    )
  },
  {
    name: "STM32Cube",
    color: "#03234b",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M7 7h4v4H7zm6 0h4v4h-4zm-6 6h4v4H7zm6 0h4v4h-4z" fill="#fff" />
      </svg>
    )
  },
  {
    name: "VS Code",
    color: "#007acc",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M23.984 6.742a.586.586 0 0 0-.156-.375L20.6 3.195a.593.593 0 0 0-.832.008l-9.066 8.324-4.81-3.66a.591.591 0 0 0-.742.02L.266 11.23a.586.586 0 0 0 0 .895l4.884 3.738a.591.591 0 0 0 .742.02l4.81-3.66 9.066 8.324a.593.593 0 0 0 .832.008l3.228-3.172c.106-.104.156-.242.156-.375V6.742z" />
      </svg>
    )
  },
  {
    name: "Xcode",
    color: "#147efb",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 13.5l-3-3V9h3v6.5zm-5-3h-2.5v-2H11.5v2z" />
      </svg>
    )
  },
  {
    name: "Blender",
    color: "#ea7600",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 11a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
      </svg>
    )
  },
  {
    name: "Git",
    color: "#f05032",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M23.384 11.41L12.59 2.616a1.677 1.677 0 0 0-2.378 0l-2.09 2.083 3.018 3.018a2.535 2.535 0 0 1 3.232.062 2.54 2.54 0 0 1 .061 3.232l-3.003 3.004a2.542 2.542 0 0 1-3.27.02l-2.617-2.617a2.535 2.535 0 0 1 .02-3.232l3.018-3.018L9.006.316a1.677 1.677 0 0 0-2.378 0L.616 6.326a1.677 1.677 0 0 0 0 2.378l10.794 8.794a1.677 1.677 0 0 0 2.378 0l9.596-9.596a1.677 1.677 0 0 0 0-2.378z" />
      </svg>
    )
  },
  {
    name: "Arduino",
    color: "#00979d",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 13.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm-7 0C6.57 15.5 5 13.93 5 12s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm7-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
      </svg>
    )
  }
];

// Professional skills (4 cards)
interface ProfessionalSkill {
  name: string;
  rate: string;
  svg: React.ReactNode;
}

const PROFESSIONAL_SKILLS: ProfessionalSkill[] = [
  {
    name: "Technical Leadership",
    rate: "90%",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    name: "Research & Writing",
    rate: "85%",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 6h10M6 10h10M6 14h10" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: "Client Collaboration",
    rate: "95%",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    )
  },
  {
    name: "Rapid Prototyping",
    rate: "95%",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    )
  }
];

export default function ExpertisePage() {
  return (
    <div className="flex-1 bg-background text-foreground py-16 sm:py-24 font-sans animate-fade-in-up">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Page Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-primary mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary animate-pulse-slow">
              <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
              <path d="M20 2v4M22 4h-4" />
              <circle cx="4" cy="20" r="2" />
            </svg>
            <span className="text-xs uppercase tracking-widest font-bold">
              Expertise
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">
            My Expertise
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            A comprehensive overview of my technical expertise and professional capabilities, built over 3+ years shipping wearables, drones, and AI motion analysis solutions for international clients.
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-24">
          
          {/* Technical Skills Section */}
          <section className="scroll-mt-32">
            <h2 className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-12 font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16" />
              </svg>
              Technical Skills
            </h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-16">
              {SKILLS_CATEGORIES.map((category, idx) => (
                <div key={idx} className="space-y-6">
                  <h3 className="flex items-center gap-2 text-sm font-medium text-foreground mb-6">
                    {category.icon}
                    {category.title}
                  </h3>
                  
                  <div className="grid grid-cols-4 gap-6">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex flex-col items-center gap-2 group hover:translate-y-[-2px] transition-transform duration-300">
                        <div className="w-10 h-10 rounded-lg bg-muted/40 border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-colors">
                          {skill.svg}
                        </div>
                        <span className="text-[9px] text-muted-foreground group-hover:text-foreground text-center uppercase tracking-wider font-semibold line-clamp-2 h-7 flex items-center justify-center px-0.5">
                          {skill.name}
                        </span>
                        <div className="w-full h-[1px] bg-border/50 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-1000 bg-primary" 
                            style={{ width: skill.rate }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Tools & Frameworks */}
            <div className="mt-20 pt-16 border-t border-border/40">
              <h3 className="flex items-center gap-2 text-sm font-medium text-foreground mb-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
                </svg>
                Tools &amp; Frameworks
              </h3>
              
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 xl:grid-cols-11 gap-6">
                {TOOLS_LIST.map((tool, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 group hover:translate-y-[-2px] transition-transform duration-300">
                    <div className="w-10 h-10 rounded-lg bg-muted/40 border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-colors">
                      {tool.svg}
                    </div>
                    <span className="text-[9px] text-muted-foreground group-hover:text-foreground text-center uppercase tracking-wider font-semibold truncate w-full px-0.5">
                      {tool.name}
                    </span>
                    <div className="w-full h-[1px] bg-border/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 bg-primary/80" 
                        style={{ width: "85%" }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Professional Skills Section */}
          <section id="soft-skills" className="scroll-mt-32 border-t border-border/40 pt-20">
            <h2 className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary mb-6 font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              Professional Skills
            </h2>
            <p className="text-muted-foreground mb-10 max-w-2xl text-sm leading-relaxed">
              Beyond technical expertise, these professional qualities enable me to lead product designs, collaborate internationally, and deploy complete robust systems successfully.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {PROFESSIONAL_SKILLS.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/20 transition-all duration-300">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    {skill.svg}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-semibold text-foreground block truncate">
                      {skill.name}
                    </span>
                    <div className="mt-2">
                      <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-primary" style={{ width: skill.rate }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
