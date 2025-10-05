/**
 * Feature-Section mit neobrutalism Design für LaernApp
 *
 * @example
 * <FeatureSection />
 */
export function FeatureSection() {
  const features = [
    {
      icon: "🎮",
      title: "Gamifiziertes Lernen",
      description:
        "Sammle XP, erreiche Level und schalte Erfolge frei. Lernen wird zum Abenteuer!",
      color: "bg-[#FFC667]",
      shadowColor: "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    },
    {
      icon: "📚",
      title: "Alle Fächer",
      description:
        "Mathe, Deutsch, Englisch, Geschichte und mehr. Alles in einer App!",
      color: "bg-[#FB7DA8]",
      shadowColor: "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    },
    {
      icon: "🏆",
      title: "Erfolge & Belohnungen",
      description:
        "Erhalte Abzeichen für deine Fortschritte und teile sie mit Freunden!",
      color: "bg-[#00D9BE]",
      shadowColor: "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    },
    {
      icon: "📊",
      title: "Fortschritt verfolgen",
      description:
        "Sieh deine Lernfortschritte in Echtzeit und erkenne deine Stärken!",
      color: "bg-[#662CB7]",
      shadowColor: "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Eltern-Dashboard",
      description:
        "Eltern können den Lernfortschritt ihrer Kinder verfolgen und unterstützen.",
      color: "bg-[#0CBCD7]",
      shadowColor: "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    },
    {
      icon: "🔒",
      title: "Sicher & DSGVO",
      description:
        "Deine Daten sind sicher. Wir hosten in Deutschland und schützen deine Privatsphäre.",
      color: "bg-[#FC5A46]",
      shadowColor: "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-black mb-6">
            Warum LaernApp?
          </h2>
          <p className="text-xl font-medium text-gray-600 max-w-3xl mx-auto">
            Wir machen Lernen zum Erlebnis. Entdecke, wie deine Kinder spielend
            bessere Noten erreichen!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border-4 border-black rounded-[15px] p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 ${feature.color} border-4 border-black rounded-[15px] ${feature.shadowColor} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-200`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-extrabold text-black mb-4">
                {feature.title}
              </h3>
              <p className="text-lg font-medium text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-[#FFC667] border-4 border-black rounded-[15px] p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-4">
              Bereit für den Lernspaß?
            </h3>
            <p className="text-xl font-medium text-black mb-8">
              Starte noch heute und entdecke, wie viel Spaß Lernen machen kann!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 text-xl font-extrabold text-black border-4 border-black rounded-[15px] bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] transition-all duration-100">
                🚀 Jetzt starten
              </button>
              <button className="px-8 py-4 text-xl font-extrabold text-white border-4 border-black rounded-[15px] bg-[#662CB7] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] transition-all duration-100">
                📞 Demo buchen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
