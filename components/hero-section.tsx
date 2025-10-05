import Link from "next/link";

/**
 * Hero-Section mit neobrutalism Design für LaernApp
 *
 * @example
 * <HeroSection />
 */
export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#FFC667] via-[#FB7DA8] to-[#00D9BE] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-6 leading-tight">
            Spielend bessere
            <br />
            <span className="text-white">Noten</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-medium text-black mb-8 max-w-3xl mx-auto leading-relaxed">
            Die gamifizierte Lernplattform für deutsche Schulkinder. Lerne mit
            Spaß, sammle XP und erreiche deine Ziele!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link
              href="/register"
              className="px-12 py-6 text-2xl font-extrabold text-black border-4 border-black rounded-[15px] bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] transition-all duration-100"
            >
              🚀 Kostenlos starten
            </Link>
            <Link
              href="/demo"
              className="px-12 py-6 text-2xl font-extrabold text-white border-4 border-black rounded-[15px] bg-[#662CB7] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] transition-all duration-100"
            >
              🎮 Demo ansehen
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border-4 border-black rounded-[15px] p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-4xl font-extrabold text-[#FFC667] mb-2">
                10.000+
              </div>
              <div className="text-lg font-medium text-black">
                Aktive Schüler
              </div>
            </div>
            <div className="bg-white border-4 border-black rounded-[15px] p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-4xl font-extrabold text-[#FB7DA8] mb-2">
                95%
              </div>
              <div className="text-lg font-medium text-black">
                Verbesserte Noten
              </div>
            </div>
            <div className="bg-white border-4 border-black rounded-[15px] p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="text-4xl font-extrabold text-[#00D9BE] mb-2">
                4.8/5
              </div>
              <div className="text-lg font-medium text-black">Bewertung</div>
            </div>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 bg-white border-4 border-black rounded-[15px] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">📚</div>
                <div className="text-2xl font-extrabold text-black">
                  Lernspaß
                </div>
                <div className="text-lg font-medium text-gray-600">
                  kommt bald!
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FB7DA8] border-4 border-black rounded-[15px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-2xl animate-bounce">
              🎯
            </div>
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#00D9BE] border-4 border-black rounded-[15px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-2xl animate-bounce"
              style={{ animationDelay: "0.5s" }}
            >
              ⭐
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
