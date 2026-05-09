import { ReactNode } from "react";
import { cn } from "./utils";

interface DeviceFrameProps {
  children: ReactNode;
  className?: string;
  width?: string;
  height?: string;
}

export function DeviceFrame({
  children,
  className,
  width = "w-[140px]",
  height = "h-[280px]",
}: DeviceFrameProps) {
  return (
    <div className={cn("relative", width, height, className)}>
      {/* Phone body */}
      <div className="absolute inset-0 bg-black rounded-[2rem] shadow-2xl">
        {/* Screen */}
        <div className="absolute top-[12px] left-[8px] right-[8px] bottom-[12px] bg-white rounded-[1.5rem] overflow-hidden shadow-inner">
          {children}
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-[8px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black rounded-full opacity-20"></div>
        {/* Speaker */}
        <div className="absolute top-[6px] left-1/2 transform -translate-x-1/2 w-12 h-1 bg-black rounded-full opacity-30"></div>
        {/* Camera */}
        <div className="absolute top-[8px] right-[20px] w-2 h-2 bg-black rounded-full opacity-40"></div>
      </div>
    </div>
  );
}

export function FloatingDeviceFrame({
  children,
  className,
  width = "w-[250px]",
  height = "h-[500px]",
}: DeviceFrameProps) {
  return (
    <div
      className={cn(
        "device-frame floating-device bg-white relative",
        width,
        height,
        className
      )}
    >
      {children}
    </div>
  );
}

export function LaptopFrame({
  children,
  className,
  width = "w-[320px]",
  height = "h-[220px]",
}: DeviceFrameProps) {
  return (
    <div className={cn("relative", width, height, className)}>
      {/* Laptop base */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] h-3 bg-zinc-700 rounded-b-lg shadow-lg"></div>

      {/* Laptop body */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-[85%] h-4 bg-zinc-600 rounded-b-lg"></div>

      {/* Screen and keyboard area */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-[calc(100%-12px)] bg-zinc-800 rounded-lg shadow-xl overflow-hidden">
        {/* Screen bezel */}
        <div className="h-[calc(100%-20px)] m-2 bg-black rounded overflow-hidden">
          {/* Screen */}
          <div className="h-full mx-1 mt-1 mb-2 bg-white rounded overflow-hidden">
            {children}
          </div>
        </div>
        {/* Keyboard area */}
        <div className="h-4 bg-zinc-700 mx-2 mb-2 rounded-b"></div>
      </div>
    </div>
  );
}
