"use client";

import { LetterGlitch } from "@/components/Backgrounds/LetterGlitch";

interface HeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  height?: string;
}

export function Header({
  title,
  subtitle,
  className = "",
  height = "h-32",
}: HeaderProps) {
  return (
    <div className={`relative ${height} w-full overflow-hidden ${className}`}>
      {/* LetterGlitch Background */}
      <div className="absolute inset-0">
        <LetterGlitch
          glitchColors={["#2b4539", "#61dca3", "#76ca72", "#29752a"]}
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-200 drop-shadow-md max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
