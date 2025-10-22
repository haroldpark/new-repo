import { Header } from "@/components/Header";

export default function Services() {
  return (
    <div className="relative">
      <Header title="Services" subtitle="What I can do for you" height="h-40" />

      {/* Main content */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              My Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive solutions for your digital needs
            </p>
          </div>

          {/* Services grid will go here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service cards will be added here */}
          </div>
        </div>
      </div>
    </div>
  );
}
