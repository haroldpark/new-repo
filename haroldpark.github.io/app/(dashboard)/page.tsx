import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Database } from "lucide-react";
import { Terminal } from "./terminal";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutMePreviewSection } from "@/components/sections/AboutMePreviewSection";

export default function HomePage() {
  return (
    <main>
      <div className="">
        <HeroSection />
      </div>

      <AboutMePreviewSection />

      <ServicesSection />

      <section className="py-16 bg-white w-full text-center">
        <div className="text-5xl font-bold font-secondary">
          Client Testimonials
        </div>
        <div className="text-2xl font-bold font-secondary py-16">
          Cloming soon...
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Ready to learn more about my services?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                sdfsdfsfdsdfs
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <a href="https://github.com/nextjs/saas-starter" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg rounded-full"
                >
                  Check out my services
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
