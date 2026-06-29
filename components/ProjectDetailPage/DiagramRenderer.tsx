import React from "react";

interface DiagramRendererProps {
  content: string;
  projectId: string;
}

export default function DiagramRenderer({ content, projectId }: DiagramRendererProps) {
  // Renders custom designed SVG/CSS diagrams instead of raw text flowcharts for a premium, styled look
  if (projectId === "fitness-tracker") {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-[#131313]/60 rounded-xl border border-white/5 backdrop-blur-sm w-full gap-4 font-sans relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg justify-between">
          <div className="flex flex-col items-center p-3 rounded-lg border border-white/10 bg-[#0d0d0d] w-full sm:w-32 text-center shadow-lg">
            <span className="text-[10px] text-primary font-bold tracking-wider font-mono">STEP 1</span>
            <span className="text-xs font-semibold text-foreground mt-1">IMU & Barometer</span>
            <span className="text-[9px] text-muted-foreground mt-0.5">Raw telemetry data</span>
          </div>

          <div className="text-primary animate-pulse rotate-90 sm:rotate-0">➔</div>

          <div className="flex flex-col items-center p-3 rounded-lg border border-primary/20 bg-[#0d0d0d] w-full sm:w-36 text-center shadow-lg shadow-primary/5">
            <span className="text-[10px] text-primary font-bold tracking-wider font-mono">STEP 2</span>
            <span className="text-xs font-semibold text-foreground mt-1">On-Device DSP</span>
            <span className="text-[9px] text-muted-foreground mt-0.5">nRF52840 Filtering</span>
          </div>

          <div className="text-primary animate-pulse rotate-90 sm:rotate-0">➔</div>

          <div className="flex flex-col items-center p-3 rounded-lg border border-white/10 bg-[#0d0d0d] w-full sm:w-32 text-center shadow-lg">
            <span className="text-[10px] text-primary font-bold tracking-wider font-mono">STEP 3</span>
            <span className="text-xs font-semibold text-foreground mt-1">100Hz BLE Stream</span>
            <span className="text-[9px] text-muted-foreground mt-0.5">Low-latency packets</span>
          </div>
        </div>

        <div className="text-primary animate-pulse rotate-90 my-1">➔</div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md justify-between">
          <div className="flex flex-col items-center p-3 rounded-lg border border-white/10 bg-[#0d0d0d] w-full sm:w-40 text-center shadow-lg">
            <span className="text-[10px] text-primary font-bold tracking-wider font-mono">STEP 4</span>
            <span className="text-xs font-semibold text-foreground mt-1">Python Dashboard</span>
            <span className="text-[9px] text-muted-foreground mt-0.5">Live UI metrics</span>
          </div>

          <div className="text-primary animate-pulse rotate-90 sm:rotate-0">➔</div>

          <div className="flex flex-col items-center p-3 rounded-lg border border-primary/20 bg-[#0d0d0d] w-full sm:w-40 text-center shadow-lg shadow-primary/5">
            <span className="text-[10px] text-primary font-bold tracking-wider font-mono">STEP 5</span>
            <span className="text-xs font-semibold text-foreground mt-1">Activity Classifier</span>
            <span className="text-[9px] text-muted-foreground mt-0.5">Real-time stats</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "dance-better") {
    return (
      <div className="flex flex-col p-6 bg-[#131313]/60 rounded-xl border border-white/5 backdrop-blur-sm w-full gap-4 font-sans text-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-start pb-2 border-b border-white/5">
            <span className="text-[10px] text-primary font-bold tracking-widest font-mono">STAGE</span>
            <span className="text-[10px] text-primary font-bold tracking-widest font-mono">FLOW DESCRIPTION</span>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex items-center justify-center w-6 h-6 rounded-full border border-primary/30 text-xs font-bold text-primary font-mono shrink-0">1</div>
            <div>
              <p className="font-semibold text-foreground">Secure Ingestion</p>
              <p className="text-xs text-muted-foreground mt-0.5">Dancer requests upload ticket → Next.js fetches Google Cloud Storage signed URL → Video binary uploads directly to GCS bucket.</p>
            </div>
          </div>

          <div className="w-px h-4 bg-primary/20 ml-3" />

          <div className="flex gap-4 items-start">
            <div className="flex items-center justify-center w-6 h-6 rounded-full border border-primary/30 text-xs font-bold text-primary font-mono shrink-0">2</div>
            <div>
              <p className="font-semibold text-foreground">Asynchronous Redis Queue</p>
              <p className="text-xs text-muted-foreground mt-0.5">Job pushed to memory store as PENDING status; client receives HTTP 202 to keep connection light.</p>
            </div>
          </div>

          <div className="w-px h-4 bg-primary/20 ml-3" />

          <div className="flex gap-4 items-start">
            <div className="flex items-center justify-center w-6 h-6 rounded-full border border-primary/30 text-xs font-bold text-primary font-mono shrink-0">3</div>
            <div>
              <p className="font-semibold text-foreground">Parallel AI Pipelines</p>
              <p className="text-xs text-muted-foreground mt-0.5">YOLOv8 microservice extracts 3D coordinates frame-by-frame while Vertex AI Gemini evaluates qualitative posture, rhythm, and styling.</p>
            </div>
          </div>

          <div className="w-px h-4 bg-primary/20 ml-3" />

          <div className="flex gap-4 items-start">
            <div className="flex items-center justify-center w-6 h-6 rounded-full border border-primary/30 text-xs font-bold text-primary font-mono shrink-0">4</div>
            <div>
              <p className="font-semibold text-foreground">Database Sync</p>
              <p className="text-xs text-muted-foreground mt-0.5">Telemetry coordinate records and multimodal feedback JSON stored via Prisma, updating dashboard state to COMPLETE.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "mocap-3d") {
    return (
      <div className="flex flex-col sm:flex-row items-stretch justify-center p-6 bg-[#131313]/60 rounded-xl border border-white/5 backdrop-blur-sm w-full gap-4 font-sans text-center relative overflow-hidden">
        <div className="flex flex-col justify-between items-center p-3 rounded-lg border border-white/10 bg-[#0d0d0d] flex-1">
          <span className="text-[10px] text-primary font-bold tracking-wider font-mono">INPUT</span>
          <span className="text-xs font-semibold text-foreground mt-1">Source Video Feed</span>
          <p className="text-[9px] text-muted-foreground mt-1 leading-relaxed">Raw dance frame sequence</p>
        </div>

        <div className="flex items-center justify-center text-primary font-mono rotate-90 sm:rotate-0">➔</div>

        <div className="flex flex-col justify-between items-center p-3 rounded-lg border border-primary/20 bg-[#0d0d0d] flex-1 shadow-lg shadow-primary/5">
          <span className="text-[10px] text-primary font-bold tracking-wider font-mono">PROCESS</span>
          <span className="text-xs font-semibold text-foreground mt-1">MediaPipe Extract</span>
          <p className="text-[9px] text-muted-foreground mt-1 leading-relaxed">Joint coordinates tracking</p>
        </div>

        <div className="flex items-center justify-center text-primary font-mono rotate-90 sm:rotate-0">➔</div>

        <div className="flex flex-col justify-between items-center p-3 rounded-lg border border-white/10 bg-[#0d0d0d] flex-1">
          <span className="text-[10px] text-primary font-bold tracking-wider font-mono">SOLVER</span>
          <span className="text-xs font-semibold text-foreground mt-1">FK Rotation Solver</span>
          <p className="text-[9px] text-muted-foreground mt-1 leading-relaxed">Calculates Euler angles</p>
        </div>

        <div className="flex items-center justify-center text-primary font-mono rotate-90 sm:rotate-0">➔</div>

        <div className="flex flex-col justify-between items-center p-3 rounded-lg border border-primary/20 bg-[#0d0d0d] flex-1 shadow-lg shadow-primary/5">
          <span className="text-[10px] text-primary font-bold tracking-wider font-mono">OUTPUT</span>
          <span className="text-xs font-semibold text-foreground mt-1">Three.js Mesh</span>
          <p className="text-[9px] text-muted-foreground mt-1 leading-relaxed">Character animation sync</p>
        </div>
      </div>
    );
  }

  if (projectId === "garment-counter") {
    return (
      <div className="flex flex-col items-center justify-center p-6 bg-[#131313]/60 rounded-xl border border-white/5 backdrop-blur-sm w-full gap-4 font-sans text-center relative overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-xl">
          <div className="p-3 rounded-lg border border-white/10 bg-[#0d0d0d]">
            <span className="text-[10px] text-primary font-bold tracking-wider font-mono">1. CAPTURE</span>
            <p className="text-xs font-semibold text-foreground mt-1">Industrial Camera</p>
            <span className="text-[9px] text-muted-foreground block mt-0.5">Conveyor belt feed stream</span>
          </div>

          <div className="p-3 rounded-lg border border-primary/20 bg-[#0d0d0d]">
            <span className="text-[10px] text-primary font-bold tracking-wider font-mono">2. SEGMENT</span>
            <p className="text-xs font-semibold text-foreground mt-1">Edge Segmentation</p>
            <span className="text-[9px] text-muted-foreground block mt-0.5">Adaptive thresholding</span>
          </div>

          <div className="p-3 rounded-lg border border-white/10 bg-[#0d0d0d]">
            <span className="text-[10px] text-primary font-bold tracking-wider font-mono">3. CHARACTERIZE</span>
            <p className="text-xs font-semibold text-foreground mt-1">Feature Extraction</p>
            <span className="text-[9px] text-muted-foreground block mt-0.5">Area & aspect ratio vectors</span>
          </div>
        </div>

        <div className="text-primary animate-pulse rotate-90 my-1">➔</div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-xl">
          <div className="p-3 rounded-lg border border-primary/20 bg-[#0d0d0d] sm:col-span-2">
            <span className="text-[10px] text-primary font-bold tracking-wider font-mono">4. CLASSIFY</span>
            <p className="text-xs font-semibold text-foreground mt-1">Logistic Regression Classifier</p>
            <span className="text-[9px] text-muted-foreground block mt-0.5">Calculates Cut Piece acceptability probability</span>
          </div>

          <div className="p-3 rounded-lg border border-white/10 bg-[#0d0d0d]">
            <span className="text-[10px] text-primary font-bold tracking-wider font-mono">5. DISPATCH</span>
            <p className="text-xs font-semibold text-foreground mt-1">GUI & Alert Sync</p>
            <span className="text-[9px] text-muted-foreground block mt-0.5">Counter / Alarm Log</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === "qr2wallet") {
    return (
      <div className="flex flex-col items-center p-6 bg-[#131313]/60 rounded-xl border border-white/5 backdrop-blur-sm w-full gap-4 font-sans relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
        <div className="flex flex-col gap-2 w-full max-w-lg">
          <div className="flex justify-between items-center p-3 rounded-lg border border-white/10 bg-[#0d0d0d] shadow-lg">
            <span className="text-[10px] text-primary font-bold tracking-wider font-mono">LAYER 1</span>
            <span className="text-xs font-semibold text-foreground">SwiftUI Interface</span>
            <span className="text-[9px] text-muted-foreground">User scanner & inputs</span>
          </div>
          
          <div className="text-primary font-mono text-center">▼</div>

          <div className="flex justify-between items-center p-3 rounded-lg border border-primary/20 bg-[#0d0d0d] shadow-lg">
            <span className="text-[10px] text-primary font-bold tracking-wider font-mono">LAYER 2</span>
            <span className="text-xs font-semibold text-foreground">PassSigner.swift Handler</span>
            <span className="text-[9px] text-muted-foreground">Coordinates signing job</span>
          </div>

          <div className="text-primary font-mono text-center">▼</div>

          <div className="flex justify-between items-center p-3 rounded-lg border border-white/10 bg-[#0d0d0d] shadow-lg">
            <span className="text-[10px] text-primary font-bold tracking-wider font-mono">LAYER 3</span>
            <span className="text-xs font-semibold text-foreground">Obj-C++ Bridging Interface</span>
            <span className="text-[9px] text-muted-foreground">C interface bindings wrapper</span>
          </div>

          <div className="text-primary font-mono text-center">▼</div>

          <div className="flex justify-between items-center p-3 rounded-lg border border-primary/20 bg-[#0d0d0d] shadow-lg">
            <span className="text-[10px] text-primary font-bold tracking-wider font-mono">CRYPT</span>
            <span className="text-xs font-semibold text-foreground">Embedded C OpenSSL API</span>
            <span className="text-[9px] text-muted-foreground">On-device PKCS#7 manifest signature</span>
          </div>
        </div>
      </div>
    );
  }

  // Fallback
  return (
    <pre className="p-4 bg-[#131313] border border-white/5 rounded-lg text-xs font-mono overflow-auto text-muted-foreground">
      {content}
    </pre>
  );
}
