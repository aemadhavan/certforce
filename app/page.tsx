import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-salesforce-blue-lighter via-white to-salesforce-cloud">
      <Header />
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-4 lg:py-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-salesforce-blue">Salesforce Certification A-Z</span>{" "}
              <span className="text-salesforce-navy">to be Certified Professionals:</span>{" "}
              <span className="text-salesforce-blue-dark">Pass Your Exam in Weeks, not Months</span>
            </h1>

            <p className="text-xl text-salesforce-navy/80 leading-relaxed">
              Fast-track your Salesforce career, stay ahead in the industry and master the
              Administrator certification with confidence-based learning and adaptive spaced repetition.
            </p>

            <button className="bg-salesforce-blue hover:bg-salesforce-blue-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center gap-2 group shadow-lg shadow-salesforce-blue/20">
              START LEARNING
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* User Avatars */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-salesforce-blue border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-salesforce-sky border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-salesforce-orange border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-salesforce-blue-dark border-2 border-white"></div>
                <div className="w-10 h-10 rounded-full bg-salesforce-navy border-2 border-white"></div>
              </div>
              <p className="text-salesforce-navy">
                <span className="text-salesforce-blue font-bold text-2xl">350+</span>{" "}
                <span className="text-lg">Salesforce professionals</span>
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white">
              <Image
                src="/images/karan.png"
                alt="Salesforce Expert"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
              {/* Overlay Badge */}
              <div className="absolute top-8 left-8">
                <div className="bg-salesforce-blue text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
                  #Certforce
                </div>
              </div>
              {/* Vertical Text Badge */}
              <div className="absolute bottom-0 right-0 h-full flex items-center">
                <div className="bg-gradient-to-t from-salesforce-blue to-salesforce-sky text-white px-8 py-12 transform origin-right">
                  <p className="text-4xl font-bold tracking-wider whitespace-nowrap" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                    #SalesforceExpert
                  </p>
                </div>
              </div>
              {/* Sparkle Effect */}
              <div className="absolute bottom-8 right-24 text-salesforce-orange text-4xl animate-pulse">
                ✨
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
