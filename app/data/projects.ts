export interface Project {
  id: string;
  title: string;
  category: "hardware" | "ai" | "3d" | "mobile";
  categoryLabel: string;
  specs: string;
  description: string;
  images: string[];
  detailedSpecs: Record<string, string>;
  features: string[];
  tags: string[];
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "falcon-tracker",
    title: "Falcon Tracker",
    category: "hardware",
    categoryLabel: "Hardware & IoT",
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
    ],
    link: "https://github.com/Pasindu-Vihangana"
  },
  {
    id: "fitness-tracker",
    title: "BLE Fitness Tracker",
    category: "hardware",
    categoryLabel: "Hardware & IoT",
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
    ],
    link: "https://github.com/Pasindu-Vihangana"
  },
  {
    id: "dance-better",
    title: "DanceBetter AI Coach",
    category: "ai",
    categoryLabel: "AI & Computer Vision",
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
    ],
    link: "https://github.com/Pasindu-Vihangana"
  },
  {
    id: "mocap-3d",
    title: "3D Dancer Motion Sync",
    category: "3d",
    categoryLabel: "3D & Web",
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
    ],
    link: "https://github.com/Pasindu-Vihangana"
  },
  {
    id: "garment-counter",
    title: "Garment Piece Counter",
    category: "ai",
    categoryLabel: "AI & Computer Vision",
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
    ],
    link: "https://github.com/Pasindu-Vihangana"
  },
  {
    id: "shadow-projection",
    title: "Shadow Projection Cylinder",
    category: "3d",
    categoryLabel: "3D & Web",
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
    ],
    link: "https://github.com/Pasindu-Vihangana"
  },
  {
    id: "qr2wallet",
    title: "QR2Wallet",
    category: "mobile",
    categoryLabel: "Mobile & iOS",
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
    ],
    link: "https://github.com/Pasindu-Vihangana"
  }
];
