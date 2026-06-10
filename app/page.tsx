"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./components/Icons";

// Local inline icons for page sections and cards
const HomeIcons = {
  Briefcase: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="14" x="2" y="6" rx="2" />
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Code: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16" />
    </svg>
  ),
  Target: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  User: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Quote: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a4 4 0 1 0 4 4v-2h-2m-10 2a4 4 0 1 0 4 4v-2H8" />
    </svg>
  ),
  Cpu: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6v6H9z" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
    </svg>
  ),
  Activity: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  Layers: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-10 5 10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Radio: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2" />
      <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
    </svg>
  ),
  Eye: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Navigation: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  ),
  Wrench: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
    </svg>
  ),
  Rocket: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  ChevronRight: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
  ChevronsDown: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="m7 6 5 5 5-5M7 13 5 5 5-5" />
    </svg>
  )
};

const ROLES = [
  "Robotics Engineer",
  "Embedded Systems Specialist",
  "Mechatronics Engineer",
  "Firmware Developer",
  "Sensor Fusion Specialist"
];

const SERVICES = [
  {
    title: "Embedded Firmware",
    description: "Low-overhead C/C++ bare metal & RTOS deployments on Nordic SoC, STM32, and ESP32 with strict power constraints.",
    icon: <HomeIcons.Cpu className="w-5 h-5 text-primary" />
  },
  {
    title: "Control Loops",
    description: "High-precision stabilization using cascaded PID control and real-time Euler orientation Madgwick/Kalman filter estimators.",
    icon: <HomeIcons.Activity className="w-5 h-5 text-primary" />
  },
  {
    title: "Multilayer PCB Design",
    description: "Designing high-density, multi-layer rigid and flexible boards with impedance matching, signal isolation, and sub-15g footprint targets.",
    icon: <HomeIcons.Layers className="w-5 h-5 text-primary" />
  },
  {
    title: "Wearables & Telemetry",
    description: "Integrating IMUs and pressure sensors, processing DSP features on-chip, and streaming telemetry packets via proprietary RF/BLE.",
    icon: <HomeIcons.Radio className="w-5 h-5 text-primary" />
  },
  {
    title: "AI Biomechanical SaaS",
    description: "Co-authoring motion analysis platforms using video-based human pose estimation model tracking and timestamped coordinate feedback.",
    icon: <HomeIcons.Eye className="w-5 h-5 text-primary" />
  },
  {
    title: "Autonomous Flight Systems",
    description: "Designing cascades of PID and Extended Kalman Filters for altitude and flight control stabilization with user-programmable SDK layers.",
    icon: <HomeIcons.Navigation className="w-5 h-5 text-primary" />
  }
];

const SKILLS_CATEGORIES = [
  {
    title: "Control & State Estimation",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-primary">
        <path d="M3 12h18M3 6h18M3 18h18" />
        <circle cx="12" cy="12" r="3" fill="currentColor" className="text-primary/20" />
      </svg>
    ),
    skills: [
      { name: "Cascaded PID", rate: "95%", color: "#e9c349" },
      { name: "EKF / Kalman", rate: "90%", color: "#e9c349" },
      { name: "Orientation", rate: "95%", color: "#e9c349" },
      { name: "MATLAB Models", rate: "85%", color: "#e9c349" }
    ]
  },
  {
    title: "Firmware & RTOS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-primary">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m6 10 2 2-2 2M11 14h5" />
      </svg>
    ),
    skills: [
      { name: "C/C++ Development", rate: "95%", color: "#e9c349" },
      { name: "RTOS Task Scheduling", rate: "90%", color: "#e9c349" },
      { name: "BLE Bluetooth", rate: "90%", color: "#e9c349" },
      { name: "Drivers (SPI / I2C)", rate: "90%", color: "#e9c349" }
    ]
  },
  {
    title: "Hardware & PCB Design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-primary">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    skills: [
      { name: "Multilayer PCB Design", rate: "90%", color: "#e9c349" },
      { name: "High-density Routing", rate: "85%", color: "#e9c349" },
      { name: "Signal Integrity", rate: "85%", color: "#e9c349" },
      { name: "Altium / KiCad", rate: "90%", color: "#e9c349" }
    ]
  },
  {
    title: "AI & Computer Vision",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-primary">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    skills: [
      { name: "Pose Estimation Models", rate: "85%", color: "#e9c349" },
      { name: "Deep Learning Architectures", rate: "80%", color: "#e9c349" },
      { name: "OpenCV Processing", rate: "90%", color: "#e9c349" },
      { name: "NumPy / Pandas DSP", rate: "85%", color: "#e9c349" }
    ]
  }
];

const PROJECTS = [
  {
    title: "Falcon Tracker",
    category: "Hardware & IoT",
    specs: "Semtech SX1268 LoRa | 27 dBm Tx Power | >250 km Air Range",
    description: "An autonomous falconry tracking transmitter utilizing the Semtech SX1268 LoRa transceiver. Designed for range-critical applications, it integrates a power-amplified transmitter, low-noise receiver, custom 3D-printed enclosure, and precision-engineered mechanical components.",
    tags: ["Semtech SX1268", "LoRa RF", "RTOS", "3D CAD (SolidWorks)", "PCB Design"],
    images: [
      "/projects/Falcon Tracker/Transmitter-Assembly.png",
      "/projects/Falcon Tracker/Transmitter-Assembly-X-Ray.png",
      "/projects/Falcon Tracker/receiver_close_up.jpg",
      "/projects/Falcon Tracker/Battery Cap POV.png",
      "/projects/Falcon Tracker/prototype 1.png",
      "/projects/Falcon Tracker/Charger PCB.png"
    ],
    detailedSpecs: {
      "RF Transceiver": "Semtech SX1268 (sub-GHz LoRa)",
      "Transmit Power": "27 dBm (via integrated Power Amplifier)",
      "Receiver Gain": "20 dBm (via Low Noise Amplifier)",
      "Air-to-Ground Range": "> 250 km (field tested)",
      "Ground-to-Ground Range": "~ 12 km",
      "Battery Chamber Threads": "0.5 mm pitch ISO Metric profile",
      "Antenna Port": "Female SMA (1/4\"-36UNS)"
    },
    features: [
      "Achieved verified 250km air-to-ground telemetry range.",
      "Custom 3-way multi-charger PCB with overcharge protection.",
      "O-ring sealed waterproof battery compartment with textured tightening cap.",
      "Ultra-lightweight (<15g) enclosure design optimized for avian payloads."
    ]
  },
  {
    title: "BLE Fitness Tracker",
    category: "Hardware & IoT",
    specs: "15×25 mm | 4-Layer PCB | 6-DoF IMU | BLE 100Hz Stream",
    description: "A state-of-the-art, power-efficient wearable fitness tracker designed to capture intricate motion metrics, track velocity curves, and measure displacement of specific physical activities in real-time.",
    tags: ["PCB Design", "Sensor Fusion", "DSP Filtering", "Bluetooth Low Energy", "MATLAB"],
    images: [
      "/projects/Fitness Tracker/prototype_v2_2.png",
      "/projects/Fitness Tracker/prototype_v2_1.png",
      "/projects/Fitness Tracker/live_demo.png"
    ],
    detailedSpecs: {
      "Form Factor": "15 mm x 25 mm ultra-compact",
      "PCB Design": "4-Layer Impedance Matched High-Density",
      "Telemetry rate": "100 Hz real-time streaming",
      "Sensors": "6-DoF IMU (Accelerometer & Gyroscope)",
      "Interface": "Bluetooth Low Energy (BLE) custom profile"
    },
    features: [
      "Developed high-precision on-device DSP filters to isolate workout noise.",
      "Streams real-time motion metrics to a Python dashboard at 100Hz.",
      "Optimized battery profile for low duty cycle power consumption.",
      "Designed compact 4-layer PCB layout verifying signal integrity."
    ]
  },
  {
    title: "DanceBetter AI Coach",
    category: "AI & Computer Vision",
    specs: "Pose Estimation | Landmark Tracking | Dynamic Assessment",
    description: "An experimental, premium AI-powered dance coaching platform designed to help dancers of all levels analyze, understand, and refine their techniques. Integrates real-time pose estimation and movement coordination assessment.",
    tags: ["PyTorch", "OpenCV", "Pose Estimation", "React SaaS", "MediaPipe"],
    images: [
      "/projects/DanceBetter/upload.png",
      "/projects/DanceBetter/skeleton-view.jpeg",
      "/projects/DanceBetter/analysis.png",
      "/projects/DanceBetter/comparison.jpeg",
      "/projects/DanceBetter/Schedule.png"
    ],
    detailedSpecs: {
      "Model Framework": "MediaPipe Pose & PyTorch Classifier",
      "Accuracy": "98.4% Pose Landmark Calibration",
      "Framerate": "60.0 FPS Processing Rate",
      "Feedback System": "Dynamic coordinate distance scoring"
    },
    features: [
      "Extracts and tracks 33 critical skeletal joints from video uploads.",
      "Compares user performance against reference coaches frame-by-frame.",
      "Generates interactive performance curves highlighting timing discrepancies.",
      "Dashboard includes personalized scheduling and progress tracking telemetry."
    ]
  },
  {
    title: "3D Dancer Motion Sync",
    category: "3D & Web",
    specs: "Three.js | MediaPipe Pose | 3D GLTF Character Sync",
    description: "A high-performance web dashboard that extracts 3D skeleton joints from video footage using MediaPipe Tasks and maps them in real-time onto a 3D GLTF character model (dancer.glb) in a Three.js scene.",
    tags: ["Three.js", "MediaPipe Tasks", "GLTF Animation", "WebGL", "TypeScript"],
    images: [
      "/projects/Skeleton Mocap 3D/Mocap.png",
      "/projects/Skeleton Mocap 3D/auto-align.png"
    ],
    detailedSpecs: {
      "3D Engine": "Three.js (WebGL)",
      "Model Format": "GLTF / GLB Character Rig",
      "Joint Solver": "Custom Euler / Quaternion keypoint mapping",
      "Video Sync": "Interactive video frame-by-frame alignment"
    },
    features: [
      "Developed custom keypoint mapping to translate 2D/3D landmarks to bone angles.",
      "Integrates MediaPipe Pose estimation directly inside the web browser.",
      "Provides auto-alignment controls to calibrate scale and offsets between characters.",
      "Smooth character rendering using standard WebGL shaders."
    ]
  },
  {
    title: "Garment Piece Counter",
    category: "AI & Computer Vision",
    specs: "Real-time YOLO | Count Validation | MAS Holdings POC",
    description: "A real-time computer vision and machine learning system designed to automate garment piece counting and quality control, developed in partnership with MAS Holdings as a high-accuracy inventory tracking solution.",
    tags: ["YOLO", "OpenCV", "Python", "Machine Learning", "Industrial Automation"],
    images: [
      "/projects/Garment Piece Counter/GPC-Screenshot.png"
    ],
    detailedSpecs: {
      "Partner": "MAS Holdings (Industrial Pilot)",
      "Core Models": "YOLO Object Detection & custom CNN classifier",
      "Functions": "Counting, defect check, color sorting",
      "Lighting": "Illumination-invariant classification layers"
    },
    features: [
      "Automates counting of stacked and folded fabric panels in real-time.",
      "Reduces manual audit times by over 80% on the factory floor.",
      "Deploys custom post-processing to ignore overlapping tags/labels.",
      "Includes a dashboard to flag counts deviating from batch orders."
    ]
  },
  {
    title: "Shadow Projection Cylinder",
    category: "Design & Prototyping",
    specs: "Inverse Ray-Tracing | STL Template Export | Light Simulation",
    description: "A complete Python tool that takes a silhouette image and generates a laser-cuttable cylinder template. When the cylinder is placed over a point light, the shadow it casts onto a floor surface reproduces the original image.",
    tags: ["Python", "3D Geometry", "STL Export", "Image Binarization", "Ray Tracing Simulation"],
    images: [
      "/projects/Shadow Projection/output/phase6_3d_preview.png",
      "/projects/Shadow Projection/output/phase4_simulation.png",
      "/projects/Shadow Projection/output/phase1_binarization.png",
      "/projects/Shadow Projection/output/phase2_cross_section.png",
      "/projects/Shadow Projection/output/phase3_distortion.png",
      "/projects/Shadow Projection/output/phase5_template.png",
      "/projects/Shadow Projection/output/phase7_stl_export.png"
    ],
    detailedSpecs: {
      "Projection Type": "Inverse Radial Light Ray Projection",
      "Template Format": "DXF / SVG Flat Sheet & 3D STL Cylinder",
      "Binarization": "Otsu's Adaptive Image Thresholding",
      "Light Ray Engine": "Custom Vector-based Ray Casting Simulator"
    },
    features: [
      "Calculates nonlinear distortion corrections for point light expansion.",
      "Generates flat patterns ready for paper folding or laser engraving.",
      "Generates 3D STL mesh with correct hollow thickness for 3D printing.",
      "Simulates the projected shadow intensity before fabrication."
    ]
  },
  {
    title: "QR2Wallet",
    category: "Mobile & iOS",
    specs: "100% Serverless | On-Device OpenSSL PKCS#7 | Apple Wallet",
    description: "A standalone, offline-capable iOS application designed to scan any QR code or barcode (such as movie tickets, event passes, national fuel cards) and compile and sign them into official Apple Wallet passes (.pkpass) directly on your device.",
    tags: ["Swift", "iOS SDK", "Cryptography", "OpenSSL", "Apple Wallet Passes"],
    images: [
      "/projects/QR2Wallet/Screenshots/dashboard_grid_styled.png",
      "/projects/QR2Wallet/Screenshots/pass_detail_styled.png",
      "/projects/QR2Wallet/Screenshots/create_pass.png",
      "/projects/QR2Wallet/Screenshots/pass_theme.png",
      "/projects/QR2Wallet/Screenshots/pass_customization.png",
      "/projects/QR2Wallet/Screenshots/dashboard_empty_dark.png"
    ],
    detailedSpecs: {
      "Privacy Model": "100% Standalone & Offline signing",
      "Signing Engine": "Embedded OpenSSL for iOS (C-layer)",
      "Signature Type": "PKCS#7 cryptographic signing",
      "Pass Format": "Standard Apple pkpass bundle (JSON + Signatures)"
    },
    features: [
      "Bypasses standard cloud signing requirements, ensuring complete privacy.",
      "Dynamically styles passes with user-selected colors, labels, and icons.",
      "Performs real-time barcode translation (PDF417, Aztec, QR, Code 128).",
      "Integrates fully with Apple's standard Add to Wallet prompt."
    ]
  }
];

const PRINCIPLES = [
  {
    title: "Mathematical Rigor",
    description: "Prototyping dynamic control loops, Kalman noise variance matrices, and digital signal filter coefficients in MATLAB/Python before committing a single byte to hardware flash memory.",
    category: "code",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-primary">
        <path d="M3 3v18h18M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </svg>
    )
  },
  {
    title: "RTOS Task Boundaries",
    description: "Structuring resource-constrained firmware with clear priority scheduling, event flags, DMA transfers, and deep sleep registers to ensure sub-1ms critical loop deadlines.",
    category: "code",
    icon: <HomeIcons.Cpu className="w-5 h-5 text-primary" />
  },
  {
    title: "Signal Integrity Design",
    description: "Routing critical high-frequency traces with trace impedance matching, solid ground return paths, analog isolation barrier lines, and optimized decoupling placement.",
    category: "design",
    icon: <HomeIcons.Activity className="w-5 h-5 text-primary" />
  },
  {
    title: "Mechanical Footprint Integration",
    description: "Designing PCBs as co-dependent structural parts. Sensor placements, antenna keepouts, trace vias, and 3D housing tolerances are calculated inside SolidWorks modeling early.",
    category: "design",
    icon: <HomeIcons.Layers className="w-5 h-5 text-primary" />
  },
  {
    title: "Field Range Validation",
    description: "Software simulators are useful abstractions, but physical hardware must be stress-tested inside its deployment envelope. Physical telemetry trials (like 70km RF runs) are mandatory.",
    category: "deliver",
    icon: <HomeIcons.Radio className="w-5 h-5 text-primary" />
  },
  {
    title: "Sydney Accord Compliance",
    description: "Documenting systems, validation reports, calculations, and code files to the global mutual recognition standard (IESL / ABET signatory status) for clean validation.",
    category: "deliver",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-primary">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    title: "Modular Abstractions",
    description: "Decoupling peripheral driver interactions from primary control algorithms. Changing a Nordic BLE chip to an ESP32 shouldn't require rewriting core kinematic math logic.",
    category: "code",
    icon: <HomeIcons.Code className="w-5 h-5 text-primary" />
  },
  {
    title: "Thermal & ESD Hardening",
    description: "Integrating TVS diodes, isolated power regulation circuits, decoupling loops, and copper thermal vias to protect sensitive digital cores from inductive kickbacks or discharges.",
    category: "design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-primary">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    )
  },
  {
    title: "User-Centered APIs",
    description: "Empowering developers by delivering abstract communication SDKs (Python/Arduino flight sequences) and graphical drag-and-drop netlist compiler interfaces.",
    category: "deliver",
    icon: <HomeIcons.Navigation className="w-5 h-5 text-primary" />
  }
];

const TESTIMONIALS = [
  {
    quote: "Pasindu's engineering on the Falcon Tracker was outstanding. He packed Nordic low-power RTOS and RF logic onto a sub-15g footprint while achieving an incredible 70km ground transmission range.",
    author: "Lead Robotics Architect, SRQ Robotics LLC"
  },
  {
    quote: "His biomechanical model prototyping and computer vision pipeline formed the core of our dance alignment tracking system, scaling movement coordinates accurately for thousands of active users.",
    author: "Technology Director, DanceBetter AI SaaS"
  },
  {
    quote: "The Madgwick stabilization filters and EKF altitude estimators Pasindu optimized directly on the ESP32 flight controller made our STEM programmable drone platform SLASSCOM national winners.",
    author: "UAV Project Director, QubeBots STEM Drones"
  }
];

const AWARDS = [
  { name: "SLASSCOM National Winner 2024" },
  { name: "APICTA Merit Award 2023" },
  { name: "NICTA Gold Medal 2023" },
  { name: "ICIET Best Presentation 2021" },
  { name: "IICE Safety IoT Finalist 2020" }
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const [activeTab, setActiveTab] = useState<"all" | "code" | "design" | "deliver">("all");

  const [projectFilter, setProjectFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  // Typewriter effect logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = ROLES[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          setTypingSpeed(100);
          return;
        }
      }
      setTypingSpeed(isDeleting ? 50 : 100);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const filteredPrinciples = PRINCIPLES.filter(
    (p) => activeTab === "all" || p.category === activeTab
  );

  return (
    <div className="flex-1 flex flex-col font-sans">
      
      {/* Hero Section */}
      <section className="min-h-dvh flex items-center relative overflow-hidden select-none">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-xs opacity-5" style={{ backgroundImage: "url('/hero-bg.jpg')" }} />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />

        <div className="container mx-auto px-6 relative z-10 w-full -mt-12 sm:mt-0 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <p className="animate-fade-in-up text-lg md:text-xl text-primary font-medium mb-4">
                Hi, Pasindu here! 👋
              </p>

              <h1 className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-foreground leading-[1.1] mb-8">
                I am a<br />
                <span className="font-mono text-primary inline-block min-h-[1.5em] mt-2 relative">
                  {currentText}
                  <span className="w-1.5 h-8 bg-primary absolute right-[-12px] bottom-[4px] animate-pulse"></span>
                </span>
              </h1>

              <p className="animate-fade-in-up delay-100 text-base sm:text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl">
                I translate mathematical modeling (Kalman filters, cascaded loops) and low-power RTOS boundaries directly into highly compact, production-ready physical hardware. 
              </p>

              <div className="animate-fade-in-up delay-200 flex flex-wrap gap-4 w-full sm:w-auto">
                <Link 
                  href="/resume" 
                  className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] cursor-pointer"
                >
                  <Icons.FileText className="w-4 h-4 text-primary-foreground" />
                  Résumé
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border-2 border-border hover:border-primary hover:text-primary font-bold text-sm tracking-wider uppercase transition-all duration-300 active:scale-[0.98] bg-background cursor-pointer"
                >
                  <Icons.MessageSquare className="w-4 h-4" />
                  Contact
                </Link>
              </div>

              {/* Mobile scroll indicator */}
              <button 
                onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: "smooth" })}
                className="animate-fade-in-up delay-300 mt-12 sm:hidden flex justify-center w-full text-muted-foreground/40 hover:text-primary transition-colors cursor-pointer" 
                aria-label="Scroll down"
              >
                <HomeIcons.ChevronsDown className="w-6 h-6 animate-bounce" />
              </button>
            </div>

            {/* Circular Glowing Portrait Schematic Card */}
            <div className="lg:col-span-5 hidden lg:flex justify-center items-center">
              <div className="relative w-64 xl:w-80 aspect-square group">
                <div className="absolute -inset-4 rounded-full border border-primary/15 animate-pulse-slow"></div>
                <div className="absolute -inset-2 rounded-full bg-[conic-gradient(from_0deg,transparent_0%,var(--color-primary)_25%,transparent_50%)] opacity-15 group-hover:opacity-30 animate-spin-slow transition-opacity duration-500"></div>
                <div className="absolute -inset-2 rounded-full border border-primary/10"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-full blur-md group-hover:from-primary/35 group-hover:to-primary/20 transition-all duration-500"></div>
                <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-primary/30 animate-pulse-slow"></div>
                <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-primary/25 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
                
                <div className="relative rounded-full w-full h-full ring-4 ring-[#131313] overflow-hidden shadow-2xl bg-[#131313]/60">
                  <Image 
                    alt="Pasindu Vihangana Schematic Portrait" 
                    fill 
                    className="relative object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500" 
                    src="/assets/hero_mechatronics.png"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="border-t border-border bg-[#0a0a0a]">
        <div className="container mx-auto px-6 py-24 sm:py-32 max-w-6xl">
          <div className="mb-16 animate-fade-in-up">
            <div className="flex items-center gap-2 text-primary mb-4">
              <HomeIcons.Briefcase className="w-4 h-4 text-primary" />
              <h2 className="text-xs uppercase tracking-widest font-bold">
                Services
              </h2>
            </div>
            <p className="text-2xl sm:text-3xl font-serif text-foreground">
              My skills, applied.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {SERVICES.map((srv, idx) => (
              <div key={idx} className="space-y-3 group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/15 group-hover:border-primary/25 transition-all duration-300">
                    {srv.icon}
                  </div>
                  <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {srv.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-t border-border bg-[#0d0d0d]/40">
        <div className="container mx-auto px-6 py-24 sm:py-32 max-w-6xl">
          <div className="mb-16">
            <div className="flex items-center gap-2 text-primary mb-4">
              <HomeIcons.Code className="w-4 h-4 text-primary" />
              <h2 className="text-xs uppercase tracking-widest font-bold">
                Skills
              </h2>
            </div>
            <p className="text-2xl sm:text-3xl font-serif text-foreground">
              My technical expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-x-12 gap-y-16">
            {SKILLS_CATEGORIES.map((category, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-4">
                  {category.icon}
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-4 gap-6">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex flex-col items-center gap-2 group hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="w-10 h-10 rounded-lg bg-muted/40 border border-border flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-colors text-xs font-bold font-mono">
                        {skill.name.substring(0,2).toUpperCase()}
                      </div>
                      <span className="text-[9px] text-muted-foreground group-hover:text-foreground text-center uppercase tracking-wider font-semibold line-clamp-2 h-7 flex items-center justify-center px-0.5">
                        {skill.name}
                      </span>
                      <div className="w-full h-[1.5px] bg-border/50 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-primary" 
                          style={{ width: skill.rate }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section (Redesigned with sleek category filtering grid and detailed drawer modal) */}
      <section className="relative border-t border-border bg-[#0a0a0a]">
        <div className="container mx-auto px-6 py-24 sm:py-32 max-w-6xl">
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-primary mb-4">
                <HomeIcons.Briefcase className="w-4 h-4 text-primary" />
                <h2 className="text-xs uppercase tracking-widest font-bold">Featured Projects</h2>
              </div>
              <p className="text-2xl sm:text-3xl font-serif text-foreground font-medium tracking-tight">Featured Work</p>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {["All", "Hardware & IoT", "AI & Computer Vision", "3D & Web", "Mobile & iOS"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setProjectFilter(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-300 cursor-pointer ${
                    projectFilter === cat
                      ? "bg-primary text-primary-foreground border-primary font-bold shadow-md shadow-primary/10"
                      : "bg-[#131313]/50 text-muted-foreground border-border hover:text-foreground hover:border-muted-foreground/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.filter(p => projectFilter === "All" || p.category === projectFilter).map((proj, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setSelectedProject(proj);
                  setActiveImageIndex(0);
                }}
                className="group relative rounded-2xl bg-[#131313]/60 border border-border/80 overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:translate-y-[-6px] hover:border-primary/20"
              >
                {/* Background glow on hover */}
                <div className="absolute -inset-px bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Image container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <Image
                    src={proj.images[0]}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out brightness-[0.85] group-hover:brightness-[0.95]"
                  />
                  {/* Spec overlay */}
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-border px-2.5 py-1 rounded-md text-[9px] font-mono text-primary font-bold uppercase tracking-wider">
                    {proj.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-1">
                      {proj.title}
                    </h3>
                    <p className="text-[10px] font-mono text-muted-foreground/80 font-semibold uppercase tracking-wider line-clamp-1 border-l border-primary/40 pl-2">
                      {proj.specs.split("|")[0]}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {proj.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 bg-muted/85 border border-border/50 rounded text-[9px] font-semibold text-muted-foreground uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                    {proj.tags.length > 3 && (
                      <span className="px-2 py-0.5 bg-muted/85 border border-border/50 rounded text-[9px] font-semibold text-muted-foreground uppercase">
                        +{proj.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Explore Trigger Button */}
                  <div className="flex items-center gap-1.5 text-xs text-primary font-bold tracking-wider uppercase pt-4 border-t border-border/40 group-hover:text-foreground transition-colors duration-300">
                    Explore Project
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
            {/* Backdrop Click */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedProject(null)} />

            {/* Modal Card */}
            <div className="relative w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] bg-[#111111] border border-border rounded-2xl overflow-y-auto shadow-2xl flex flex-col z-10 animate-scale-up">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 hover:bg-primary/20 border border-border text-foreground hover:text-primary transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid md:grid-cols-12 gap-0 flex-1">
                
                {/* Left Column: Image Gallery & Carousel */}
                <div className="md:col-span-7 bg-black/30 flex flex-col justify-between p-6 border-b md:border-b-0 md:border-r border-border min-h-[300px] md:min-h-0">
                  
                  {/* Main Image View */}
                  <div className="relative flex-1 w-full aspect-[16/10] rounded-xl overflow-hidden border border-border bg-black/40">
                    <Image
                      src={selectedProject.images[activeImageIndex]}
                      alt={`${selectedProject.title} screenshot ${activeImageIndex + 1}`}
                      fill
                      className="object-contain"
                      priority
                    />
                    
                    {/* Carousel Navigation Arrows */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveImageIndex(prev => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
                          }}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-primary/20 border border-border text-foreground hover:text-primary transition-colors cursor-pointer"
                          aria-label="Previous image"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveImageIndex(prev => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
                          }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-primary/20 border border-border text-foreground hover:text-primary transition-colors cursor-pointer"
                          aria-label="Next image"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnail Indicators */}
                  {selectedProject.images.length > 1 && (
                    <div className="flex flex-wrap gap-2 mt-4 justify-center">
                      {selectedProject.images.map((img, iIdx) => (
                        <button
                          key={iIdx}
                          onClick={() => setActiveImageIndex(iIdx)}
                          className={`relative w-14 aspect-[16/10] rounded overflow-hidden border transition-all cursor-pointer ${
                            activeImageIndex === iIdx ? "border-primary scale-105" : "border-border opacity-60 hover:opacity-100"
                          }`}
                        >
                          <Image
                            src={img}
                            alt="Thumbnail"
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Column: Details & Technical Notes */}
                <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
                  
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest block mb-1">
                        {selectedProject.category}
                      </span>
                      <h3 className="text-2xl font-bold font-serif text-foreground leading-tight">
                        {selectedProject.title}
                      </h3>
                    </div>

                    <p className="text-xs font-mono text-muted-foreground/80 leading-normal border-l border-primary/40 pl-3">
                      {selectedProject.specs}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-xs uppercase font-bold tracking-widest text-foreground">Project Overview</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    {selectedProject.features && (
                      <div className="space-y-2">
                        <h4 className="text-xs uppercase font-bold tracking-widest text-foreground">Key Highlights</h4>
                        <ul className="list-none space-y-2">
                          {selectedProject.features.map((feat, fIdx) => (
                            <li key={fIdx} className="text-xs text-muted-foreground flex items-start gap-2">
                              <span className="text-primary select-none mt-0.5">▪</span>
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Detailed Tech Specifications */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs uppercase font-bold tracking-widest text-foreground">Technical Specifications</h4>
                      <div className="border border-border/80 rounded-xl overflow-hidden text-xs bg-black/20">
                        {Object.entries(selectedProject.detailedSpecs).map(([key, val], sIdx) => (
                          <div
                            key={sIdx}
                            className={`grid grid-cols-12 p-2.5 ${
                              sIdx % 2 === 0 ? "bg-[#131313]/30" : "bg-transparent"
                            } ${sIdx !== 0 ? "border-t border-border/40" : ""}`}
                          >
                            <span className="col-span-5 font-mono text-[10px] uppercase text-muted-foreground">{key}</span>
                            <span className="col-span-7 text-foreground font-medium">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="space-y-3 pt-4 border-t border-border/40">
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-muted border border-border/40 rounded text-[9px] font-semibold text-muted-foreground uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}
      </section>

      {/* Principles Section */}
      <section className="border-t border-border bg-[#0a0a0a]">
        <div className="container mx-auto px-6 py-24 sm:py-32 max-w-6xl">
          <div className="mb-12">
            <div className="flex items-center gap-2 text-primary mb-4">
              <HomeIcons.Target className="w-4 h-4 text-primary" />
              <h2 className="text-xs uppercase tracking-widest font-bold">
                Principles
              </h2>
            </div>
            <p className="text-2xl sm:text-3xl font-serif text-foreground">
              How I build hardware.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-12">
            <button 
              onClick={() => setActiveTab("all")}
              className={`flex items-center gap-2 px-4.5 py-2 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
                activeTab === "all" ? "bg-primary text-primary-foreground font-bold" : "bg-muted text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              <HomeIcons.Layers className="w-3.5 h-3.5" />
              All
            </button>
            <button 
              onClick={() => setActiveTab("code")}
              className={`flex items-center gap-2 px-4.5 py-2 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
                activeTab === "code" ? "bg-primary text-primary-foreground font-bold" : "bg-muted text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              <HomeIcons.Code className="w-3.5 h-3.5" />
              How I Code / Model
            </button>
            <button 
              onClick={() => setActiveTab("design")}
              className={`flex items-center gap-2 px-4.5 py-2 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
                activeTab === "design" ? "bg-primary text-primary-foreground font-bold" : "bg-muted text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              <HomeIcons.Wrench className="w-3.5 h-3.5" />
              How I Design / Build
            </button>
            <button 
              onClick={() => setActiveTab("deliver")}
              className={`flex items-center gap-2 px-4.5 py-2 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
                activeTab === "deliver" ? "bg-primary text-primary-foreground font-bold" : "bg-muted text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              <HomeIcons.Rocket className="w-3.5 h-3.5" />
              How I Deliver / Support
            </button>
          </div>

          {/* Filtered Principles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrinciples.map((p, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/20 transition-all duration-300 flex flex-col space-y-4 animate-fade-in-up"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    {p.icon}
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {p.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section (Split column style) */}
      <section className="border-t border-border bg-[#0d0d0d]/40">
        <div className="container mx-auto px-6 py-24 sm:py-32 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-primary">
                <HomeIcons.User className="w-4 h-4 text-primary" />
                <h2 className="text-xs uppercase tracking-widest font-bold">
                  About
                </h2>
              </div>
              <p className="text-2xl sm:text-3xl font-serif text-foreground leading-snug">
                Driven by mechatronic precision — bridging mathematical systems and physical deployments.
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">
              <p>
                I am a mechatronics engineer with 3+ years of experience shipping production-grade embedded and robotic systems for international clients. I specialize in low-power firmware development, multilayer high-density PCB layouts, sensor fusion (IMUs, GPS-denied environments), and biomechanical motion analysis.
              </p>
              <p>
                Outside of core mathematics and electronics, I train in martial arts (fighter by night) and write code with a focus on simplicity. I call myself a realistic perfectionist: I have a clear view of physical hardware limitations and deliver optimized, highly reliable systems that win awards and perform in the field.
              </p>
              <a 
                href="/resume" 
                className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors font-semibold hover-underline"
              >
                View my background
                <HomeIcons.ChevronRight className="w-3.5 h-3.5 mt-0.5" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Reviews & Awards Section */}
      <section className="border-t border-border bg-[#0a0a0a]">
        <div className="container mx-auto px-6 py-24 sm:py-32 max-w-6xl">
          <div className="mb-16">
            <div className="flex items-center gap-2 text-primary mb-4">
              <HomeIcons.Quote className="w-4 h-4 text-primary" />
              <h2 className="text-xs uppercase tracking-widest font-bold">
                Reviews
              </h2>
            </div>
            <p className="text-2xl sm:text-3xl font-serif text-foreground">
              What others say.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid sm:grid-cols-3 gap-8 mb-16">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-card border border-border flex flex-col justify-between space-y-4 hover:border-primary/10 transition-colors"
              >
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-border/60 pt-3">
                  <span className="text-[10px] sm:text-xs font-bold text-foreground block">
                    {t.author}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Awards Logo Slider/Grid */}
          <div className="pt-12 border-t border-border/40">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-6 text-center">
              Recognition & National Awards
            </span>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
              {AWARDS.map((aw, idx) => (
                <div 
                  key={idx} 
                  className="px-4 py-2 border border-border/60 rounded-full text-xs font-semibold text-muted-foreground bg-[#131313]/20 hover:text-primary hover:border-primary/20 transition-all cursor-default"
                >
                  🏆 {aw.name}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
