//create a page component for the about me page
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import { Button } from "@/components/ui/button";
import { LetterGlitch } from "@/components/Backgrounds/LetterGlitch";
import { Logo } from "@/components/Logo";
import { ShinyText } from "@/components/TextAnimations/ShinyText";
import { RotatingText } from "@/components/RotatingText";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";

export default function AboutMe() {
  const rotatingTexts = ["Innovative", "Scalable", "Modern", "Powerful"];
  const buttonHref = "/services";
  const profileCardProps = {
    name: "Harold Park",
    title: "Full Stack Developer",
    handle: "haroldpark",
    status: "Available for hire",
    contactText: "Get in touch",
    avatarUrl:
      "https://private-user-images.githubusercontent.com/14915286/463914970-2ac5f693-8c3d-48f3-9311-c915700a42f7.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTIwMTY4MzYsIm5iZiI6MTc1MjAxNjUzNiwicGF0aCI6Ii8xNDkxNTI4Ni80NjM5MTQ5NzAtMmFjNWY2OTMtOGMzZC00OGYzLTkzMTEtYzkxNTcwMGE0MmY3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzA4VDIzMTUzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQwMDdlYjVjNmY3YTYwMTY5OGVhNDE5Y2NlYzgyNjE2MzliMzA1NGQwNTk5NzQ0Yjc1NjA3YmQwZDFiNjMwZTAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.Ax3-8uQoucePQw0eFavzUvEFzUxbDcAGQF-u-Ky2234",
  };
  return (
    <div className="relative">
      <Header
        title="About Me"
        subtitle="Full Stack Developer & Tech Enthusiast"
        height="h-40"
      />
      {/* <div className="relative z-0 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:max-w-7xl md:mx-auto lg:col-span-6 bg-white/20 backdrop-blur-xs rounded-lg p-6 shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                <Logo size="lg" />
                <div className="flex items-center gap-4">
                  <span className="text-orange-500">
                    <RotatingText
                      texts={rotatingTexts}
                      className="text-orange-500"
                      auto={true}
                      loop={true}
                      rotationInterval={3000}
                      splitBy="words"
                    />
                  </span>
                  <div className="pb-3">
                    <a
                      href={buttonHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="text-lg rounded-full"
                      >
                        <ShinyText
                          text="My Services"
                          disabled={false}
                          speed={3}
                        />
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </div>
              </h1>
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center lg:justify-center">
            <ProfileCard
              avatarUrl={profileCardProps.avatarUrl}
              name={profileCardProps.name}
              title={profileCardProps.title}
              handle={profileCardProps.handle}
              status={profileCardProps.status}
              contactText={profileCardProps.contactText}
              showUserInfo={false}
              enableTilt={true}
              className="w-full"
              rotatingTexts={rotatingTexts}
              useRotatingTitle={true}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}
