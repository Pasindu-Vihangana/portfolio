export interface ProjectSection {
  type: "text" | "specs-table" | "highlights-grid" | "mermaid" | "math-block" | "steps-list" | "info-box";
  title?: string;
  content?: string;
  items?: string[] | { label: string; value: string }[] | { title: string; text: string }[];
}

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
  sections: ProjectSection[];
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
      "/projects/Falcon Tracker/hero.jpeg",
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
    link: "https://github.com/Pasindu-Vihangana",
    sections: [
      {
        type: "specs-table",
        title: "RF Configuration & Performance Parameters",
        items: [
          { label: "RF Transceiver", value: "Semtech SX1268 (High-efficiency sub-GHz)" },
          { label: "Tx Output Power", value: "27 dBm (enhanced via integrated Power Amplifier)" },
          { label: "Rx Front-End Gain", value: "20 dBm (boosted via Low Noise Amplifier)" },
          { label: "Bandwidth (BW)", value: "500 kHz (optimized for sensitivity vs rate)" },
          { label: "Spreading Factor", value: "SF9 (balances packet airtime & link budget)" },
          { label: "Whip Antenna (Tx)", value: "Thin omnidirectional metal rod (~20 cm)" },
          { label: "Ground Antenna (Rx)", value: "High-gain whip antenna (~80 cm) with magnetic base" }
        ]
      },
      {
        type: "highlights-grid",
        title: "Mechanical Enclosure & Assembly Specs",
        items: [
          { title: "Metric Threads", text: "ISO Metric battery cap threads featuring a 0.5 mm pitch, 3.2 mm depth, and a 120° internal relief angle." },
          { title: "SMA Port Offset", text: "Enclosure body designed with a female SMA port offset of 0.5 mm and 3.8 mm depth matching 1/4\"-36UNS specs." },
          { title: "Waterproof Integrity", text: "Integrated O-ring seal track with a textured cap edge allowing manual tightening to IP67 standards." },
          { title: "Charger Integration", text: "Multi-charger PCB tracks 3 batteries with overcharge protection and status indicators." }
        ]
      },
      {
        type: "text",
        title: "VNA Tuning Field Notes",
        content: "To guarantee operational telemetry, Vector Network Analyzers (VNAs) were deployed to tune the antennas to exact resonance. Off-the-shelf whip antennas frequently degrade from nominal sub-GHz resonance when placed in proximity to metallic avionics, requiring customized matching circuits to achieve a receiver sensitivity floor of -120 dBm."
      }
    ]
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
      "/projects/Fitness Tracker/hero.jpeg",
      "/projects/Fitness Tracker/prototype_v2_2.png",
      "/projects/Fitness Tracker/prototype_v2_1.png",
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
    link: "https://github.com/Pasindu-Vihangana",
    sections: [
      {
        type: "specs-table",
        title: "Hardware Architecture Details",
        items: [
          { label: "Core MCU", value: "Nordic nRF52840 (ARM Cortex-M4 @ 64MHz)" },
          { label: "IMU Tracking", value: "6-DoF Motion Sensor (Tri-axial Accel + Gyro)" },
          { label: "Altimeter", value: "Digital Barometric Pressure Sensor" },
          { label: "Form Factor", value: "Ultra-compact 15 mm × 25 mm footprint" },
          { label: "Power System", value: "LiPo charging via PMIC with low-dropout regulators" }
        ]
      },
      {
        type: "mermaid",
        title: "Signal Processing & Communication Data Flow",
        content: `graph TD
  A[Raw IMU & Barometer Data] --> B[On-Device DSP & Sensor Fusion]
  B --> C[Compressed Packets Generation]
  C --> D[100Hz BLE Wireless Stream]
  D --> E[Python Client Dashboard]
  E --> F[Feature Extraction & Real-time Classification]`
      },
      {
        type: "highlights-grid",
        title: "Exercise Telemetry Indicators",
        items: [
          { title: "Displacement (m)", text: "Tracks cumulative spatial displacement of the repetition cycle using fused acceleration integration." },
          { title: "Velocity Curves", text: "Extracts average and peak velocity of repetitions to evaluate kinetic power output." },
          { title: "On-Device Filtering", text: "C++ implementation of digital Butterworth bandpass filters directly on the nRF52 ARM core." },
          { title: "MATLAB Modeling", text: "Original filter coefficients and sensor fusion state-space matrices modeled in MATLAB before flashing hardware." }
        ]
      }
    ]
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
      "/projects/DanceBetter/hero.jpeg",
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
    link: "https://github.com/Pasindu-Vihangana",
    sections: [
      {
        type: "highlights-grid",
        title: "Platform Scale & Ingestion Capabilities",
        items: [
          { title: "1,000+ Active Users", text: "Experimental deployment supporting a global community of dancers." },
          { title: "12,000+ Video Jobs", text: "Successfully processed and analyzed asynchronous video uploads." },
          { title: "Signed URL Transfers", text: "Direct-to-cloud file uploads to Google Cloud Storage (GCS) to bypass server memory limits." },
          { title: "Client FFmpeg Crop", text: "In-browser video trimming via WebAssembly FFmpeg for efficient bandwidth utilization." }
        ]
      },
      {
        type: "mermaid",
        title: "Asynchronous Cloud Analysis Workflow",
        content: `sequenceDiagram
  Dancer->>NextJS: Request Upload URL
  NextJS->>GCS: Generate Signed URL
  Dancer->>GCS: Direct Video Binary Upload
  Dancer->>NextJS: Trigger Video Analysis Job
  NextJS->>Redis: Queue Job (Pending)
  par Parallel Processing
    NextJS->>YOLO Service: Process skeletal coordinates (10fps)
    NextJS->>Gemini API: Qualitative multimodal posture analysis
  end
  YOLO Service-->>Database: Write joint landmark JSON
  Gemini API-->>Database: Write text feedback JSON
  NextJS->>Dancer: Display real-time progress dashboard`
      },
      {
        type: "highlights-grid",
        title: "Algorithmic Landmarks",
        items: [
          { title: "Left-to-Right Sorting", text: "Identifies multiple dancers in a frame and locks tracking IDs based on shoulder/hip centroids to prevent ID swap errors." },
          { title: "Temporal Warp Alignment", text: "Aligns the cover video timeline to the coach video timeline based on joint coordinate velocity curves." },
          { title: "Vertex AI Integration", text: "Harnesses Vertex AI models to review styling, arm curves, posture, and rhythm dynamics." },
          { title: "Interactive Schedules", text: "Compiles workout routines directly targeting specific body movements with custom timestamp links." }
        ]
      }
    ]
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
      "/projects/Skeleton Mocap 3D/hero.jpeg",
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
    link: "https://github.com/Pasindu-Vihangana",
    sections: [
      {
        type: "mermaid",
        title: "Joint-to-Bone Processing Pipeline",
        content: `graph LR
  Input[Source Dance Video] --> MP[MediaPipe 3D Landmark Extractor]
  MP --> Vector[Joint Coordinate Vectors]
  Vector --> Solve[Inverse Kinematics / FK Rotation Solver]
  Solve --> SkinnedMesh[Three.js SkinnedMesh Bone Matrix]
  SkinnedMesh --> Render[Real-time WebGL Canvas Render]`
      },
      {
        type: "highlights-grid",
        title: "WebGL Rendering Features",
        items: [
          { title: "Forward Kinematics (FK)", text: "Translates absolute 3D Cartesian coordinates into parent-child joint rotation quaternions." },
          { title: "Interactive Timeline", text: "Allows manual and automatic keyframe adjustment to calibrate coordinate sync anomalies." },
          { title: "GLTF Bone Alignment", text: "Normalizes coordinate scale to align target rigs with varying default bone lengths." },
          { title: "Performance Tuning", text: "Maintains 60 FPS in-browser WebGL rendering using optimized vector reuse." }
        ]
      }
    ]
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
    link: "https://github.com/Pasindu-Vihangana",
    sections: [
      {
        type: "mermaid",
        title: "Factory Conveyor Data Pipeline",
        content: `graph TD
  A[Conveyor Belt / Light Table] --> B[Industrial Camera Stream]
  B --> C[Edge Detection & Contour Segmentation]
  C --> D[Geometric Feature Vector Extraction]
  D --> E[Logistic Regression Classifier]
  E -->|Accept| F[Update Dashboard Counter]
  E -->|Reject / Deformed| G[Trigger Alarm & Log Error]`
      },
      {
        type: "math-block",
        title: "Segmentation & Classification Logic",
        content: `### 1. Shape Segmentation (Adaptive Thresholding)
$$I_{bin}(x, y) = \\begin{cases} 255 & \\text{if } I(x, y) > T_{adaptive}(x, y) \\\\ 0 & \\text{otherwise} \\end{cases}$$

### 2. Feature Vector Extraction
$$\\mathbf{x} = [x_1, x_2]^T$$
* $x_1$: Normalized Area to Perimeter ratio (Roundness / Eccentricity)
* $x_2$: Aspect Ratio (width / height of bounding box)

### 3. Logistic Regression Classifier Probability
$$P(Y=1 | \\mathbf{x}) = \\sigma(\\mathbf{w}^T \\mathbf{x} + b) = \\frac{1}{1 + e^{-(\\mathbf{w}^T \\mathbf{x} + b)}}$$
* If $P(Y=1 | \\mathbf{x}) \\ge 0.5 \\implies$ **Accept** (Correct cut piece)
* If $P(Y=1 | \\mathbf{x}) < 0.5 \\implies$ **Reject** (Deformed or incorrect cutout)`
      },
      {
        type: "info-box",
        title: "Industrial Tuning Recommendations",
        items: [
          { title: "High-Contrast Backlighting", text: "Using a light table background eliminates shadows, stabilizing the contour algorithm against factory floor lighting shifts." },
          { title: "GPU Acceleration", text: "For fast-moving conveyors (>2 m/s), porting pre-processing to C++ with CUDA drops classification latency below 5ms." },
          { title: "HSV Features", text: "Appending color histograms to the feature vector allows simultaneous garment color sorting." }
        ]
      }
    ]
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
    link: "https://github.com/Pasindu-Vihangana",
    sections: [
      {
        type: "specs-table",
        title: "Physics & Ray Tracing Parameters",
        items: [
          { label: "Binarization", value: "Otsu's Adaptive Image Thresholding" },
          { label: "Light Model", value: "Point Light Source Radial Propagation" },
          { label: "Magnification Range", value: "M = 1.0 (base floor) to M → ∞ (adjacent to light)" },
          { label: "Usable Aperture Range", value: "z = [0, 71mm] (95% of total light height)" },
          { label: "File Exports", value: "DXF/SVG (flat sheets), STL (solid cylindrical mesh)" }
        ]
      },
      {
        type: "steps-list",
        title: "Mathematical Processing Pipeline",
        items: [
          { label: "Phase 1: Image Binarization", value: "Loads the silhouette image, converts to grayscale, applies Otsu thresholding, and detects boundaries." },
          { label: "Phase 2: Geometry Modeling", value: "Simulates the 2D cross-section paths of light rays from the point source through cylinder coordinates." },
          { label: "Phase 3: Distortion Pre-Correction", value: "Pre-warps the image to cancel out non-linear height scaling. Top sections near the light are heavily compressed, while bottom sections are stretched." },
          { label: "Phase 4: Ray-Trace Simulation", value: "Forward ray-traces the pre-distorted template coordinates to verify resulting shadow accuracy." },
          { label: "Phase 5: Template Generation", value: "Unrolls the warped cylindrical coordinates onto a flat 2D template ready for laser cutter pathing." },
          { label: "Phase 6: 3D STL Mesh Export", value: "Generates a complete 3D printable mesh with correct wall thicknesses and custom cylinder supports." }
        ]
      }
    ]
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
      "/projects/QR2Wallet/hero.jpeg",
      "/projects/QR2Wallet/dashboard_grid_styled.png",
      "/projects/QR2Wallet/pass_detail_styled.png",
      "/projects/QR2Wallet/create_pass.png",
      "/projects/QR2Wallet/pass_theme.png",
      "/projects/QR2Wallet/pass_customization.png",
      "/projects/QR2Wallet/dashboard_empty_dark.png"
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
    link: "https://github.com/Pasindu-Vihangana",
    sections: [
      {
        type: "mermaid",
        title: "Swift-to-C Bridging Architecture",
        content: `graph TD
  UI[SwiftUI Interface] --> Swift[PassSigner.swift Logic]
  Swift --> Bridge[Objective-C++ Bridging Header]
  Bridge --> C[C PassSigner Wrapper]
  C --> OpenSSL[Embedded C-compiled OpenSSL Library]
  OpenSSL --> PKCS7[Generate PKCS#7 Signature]
  PKCS7 --> PKPASS[Compile Signed .pkpass Bundle]`
      },
      {
        type: "highlights-grid",
        title: "Cryptographic & Security Features",
        items: [
          { title: "Offline PKCS#7", text: "Signs manifest.json files directly on the iPhone, avoiding remote servers and protecting private user keys." },
          { title: "Keychain Storage", text: "Stores developer certificates (.p12) and passwords within the hardware-backed iOS System Keychain." },
          { title: "Level H Error Correction", text: "Generates high-contrast barcodes to ensure immediate read success under scanning hardware." },
          { title: "Layout Configurations", text: "Supports Apple Pass layouts: Generic, Boarding Pass, Event Ticket, Coupon, and Store Card." }
        ]
      },
      {
        type: "steps-list",
        title: "Apple Wallet Offline Sign Setup Guide",
        items: [
          { label: "Step 1: Register Pass Type ID", value: "Log in to the Apple Developer portal, create a new Pass Type ID identifier (e.g. pass.com.domain.app)." },
          { label: "Step 2: Download Pass Certificate", value: "Create a Pass Type ID Certificate, generate a Certificate Signing Request (CSR) on your Mac, upload it, and download the resulting .cer file." },
          { label: "Step 3: Export as .p12 File", value: "Import the certificate into Mac Keychain Access, right-click and select export as Personal Information Exchange (.p12) with a password." },
          { label: "Step 4: Import into QR2Wallet", value: "Transfer the .p12 file to your iPhone, choose select certificate inside the settings tab, type the password, and verify the details." }
        ]
      }
    ]
  }
];
