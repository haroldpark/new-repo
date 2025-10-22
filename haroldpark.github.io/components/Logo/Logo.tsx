"use client";
import React from "react";
import { LogoAvatar } from "@/components/Logo/LogoAvatar";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showText?: boolean;
}

export function Logo({ size = "lg", className = "", showText }: LogoProps) {
  return (
    <div className={`font-secondary flex items-center font-bold ${className}`}>
      <LogoAvatar size={size} className="mr-3" />
      {showText && (
        <span className={`text-secondary font-${size}`}>SOLUTIONS</span>
      )}
    </div>
  );
}

export default Logo;
