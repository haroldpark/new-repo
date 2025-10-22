"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ProfileCard } from "@/components/ProfileCard";
import { RotatingText } from "@/components/RotatingText";
import { LetterGlitch } from "@/components/Backgrounds/LetterGlitch";
import { Logo } from "@/components/Logo";
import { ShinyText } from "@/components/TextAnimations/ShinyText";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  rotatingTexts?: string[];
  profileCardProps?: {
    avatarUrl?: string;
    name?: string;
    title?: string;
    handle?: string;
    status?: string;
    contactText?: string;
  };
}

export function HeroSection({
  description = "Launch your SaaS product in record time with our powerful, ready-to-use template. Packed with modern technologies and essential integrations.",
  buttonHref = "https://vercel.com/templates/next.js/next-js-saas-starter",
  rotatingTexts = ["Innovative", "Scalable", "Modern", "Powerful"],
  profileCardProps = {
    name: "Harold Park",
    title: "Full Stack Developer",
    handle: "haroldpark",
    status: "Available for hire",
    contactText: "Get in touch",
  },
}: HeroSectionProps) {
  const avatarUrl =
    "https://private-user-images.githubusercontent.com/14915286/463914970-2ac5f693-8c3d-48f3-9311-c915700a42f7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTIwMTY4MzYsIm5iZiI6MTc1MjAxNjUzNiwicGF0aCI6Ii8xNDkxNTI4Ni80NjM5MTQ5NzAtMmFjNWY2OTMtOGMzZC00OGYzLTkzMTEtYzkxNTcwMGE0MmY3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzA4VDIzMTUzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQwMDdlYjVjNmY3YTYwMTY5OGVhNDE5Y2NlYzgyNjE2MzliMzA1NGQwNTk5NzQ0Yjc1NjA3YmQwZDFiNjMwZTAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Ax3-8uQoucePQw0eFavzUvEFzUxbDcAGQF-u-Ky2234";

  return (
    <section className="py-20 relative">
      {/* LetterGlitch foreground overlay */}
      <div className="absolute inset-0">
        <LetterGlitch
          glitchColors={["#2b4539", "#61dca3", "#76ca72", "#29752a"]}
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>

      {/* Main content */}
      <div className="bg-white/30 backdrop-blur-xs p-6 shadow-lg">
        <div className="flex items-center justify-center">
          <div className="flex flex-col pt-32 pb-20">
            <div className="font-secondary flex flex-row gap-3 font-bold text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-shadow-lg ">
              <div className="text-primary">Tech</div>
              <RotatingText
                texts={["Consulting", "Mentorship", "Learning"]}
                className="text-white font-secondary"
                auto={true}
                loop={true}
                rotationInterval={3000}
                splitBy="characters"
                initial={{ y: "-300%", opacity: 0 }}
              />
            </div>
            <div className="items-center ml-3">
              <RotatingText
                texts={[
                  "resolve business pain-points",
                  "transition into the tech industry",
                  "learn new skills through the socratic method",
                ]}
                className="text-secondary text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl"
                auto={true}
                loop={true}
                rotationInterval={3000}
                splitBy="words"
                initial={{ y: "300%", opacity: 0 }}
                staggerFrom="first"
                staggerDuration={0.05}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mb-10">
          <div className="pb-3">
            <a href={buttonHref} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="default"
                className="text-lg rounded-full"
              >
                <ShinyText
                  text="Check Out My Services"
                  disabled={false}
                  speed={3}
                />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
