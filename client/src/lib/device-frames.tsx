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
    <div
      className={cn(
        "device-frame bg-white relative",
        width,
        height,
        className
      )}
    >
      {children}
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
    <div
      className={cn(
        "laptop-frame bg-zinc-800 relative rounded-lg overflow-hidden shadow-lg",
        width,
        height,
        className
      )}
    >
      <div className="laptop-screen bg-white h-[calc(100%-20px)] m-2 overflow-hidden rounded">
        {children}
      </div>
      <div className="laptop-base h-3 bg-zinc-700 absolute -bottom-1 left-0 right-0 mx-auto w-[70%] rounded"></div>
    </div>
  );
}
