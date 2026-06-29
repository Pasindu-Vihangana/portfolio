import type { Metadata } from "next";
import "./globals.css";
import "katex/dist/katex.min.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";

export const metadata: Metadata = {
  title: "Pasindu Vihangana | Robotics & Embedded Systems Engineer",
  description: "Robotics & Embedded Systems Engineer with 3+ years building real-world products for international clients. Specialist in sensor fusion, motion analysis, control systems, and wearable hardware.",
  keywords: "embedded systems, robotics, sensor fusion, Kalman filter, wearable tech, drone control, RTOS, Nordic nRF52, ESP32, BLE, mechatronics, PCB design, AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased dark"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Noto+Serif:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <FloatingBanner />
      </body>
    </html>
  );
}


