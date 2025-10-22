import React from "react";
import Image from "next/image";

interface LogoAvatarProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  alt?: string;
}

export function LogoAvatar({
  size = "md",
  className = "",
  alt = "Logo",
}: LogoAvatarProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
  };

  return (
    <div
      className={`relative rounded-full overflow-hidden bg-white shadow-md border border-gray-200 ${sizeClasses[size]} ${className}`}
    >
      <Image
        src="/logo.png"
        alt={alt}
        fill
        className="object-contain p-1"
        sizes={`(max-width: 768px) ${
          size === "sm"
            ? "32px"
            : size === "md"
            ? "48px"
            : size === "lg"
            ? "64px"
            : "80px"
        }, ${
          size === "sm"
            ? "32px"
            : size === "md"
            ? "48px"
            : size === "lg"
            ? "64px"
            : "80px"
        }`}
      />
    </div>
  );
}

export default LogoAvatar;
