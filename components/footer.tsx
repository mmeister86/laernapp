import Link from "next/link";

/**
 * Footer mit neobrutalism Design für LaernApp
 *
 * @example
 * <Footer />
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "/features" },
      { name: "Preise", href: "/pricing" },
      { name: "Demo", href: "/demo" },
      { name: "API", href: "/api" },
    ],
    company: [
      { name: "Über uns", href: "/about" },
      { name: "Karriere", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Presse", href: "/press" },
    ],
    support: [
      { name: "Hilfe", href: "/help" },
      { name: "Kontakt", href: "/contact" },
      { name: "Status", href: "/status" },
      { name: "Community", href: "/community" },
    ],
    legal: [
      { name: "Datenschutz", href: "/privacy" },
      { name: "AGB", href: "/terms" },
      { name: "Impressum", href: "/imprint" },
      { name: "Cookie-Richtlinie", href: "/cookies" },
    ],
  };

  return (
    <footer className="bg-[#662CB7] border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
              <div className="w-12 h-12 bg-[#FFC667] border-4 border-black rounded-[15px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all duration-100">
                <span className="text-2xl font-extrabold text-black">L</span>
              </div>
              <span className="text-3xl font-extrabold text-white">
                LaernApp
              </span>
            </Link>
            <p className="text-lg font-medium text-white/90 mb-6 max-w-md">
              Die gamifizierte Lernplattform für deutsche Schulkinder. Spielend
              bessere Noten erreichen!
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-white border-4 border-black rounded-[15px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-100"
                aria-label="Facebook"
              >
                <span className="text-xl">📘</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white border-4 border-black rounded-[15px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-100"
                aria-label="Instagram"
              >
                <span className="text-xl">📷</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white border-4 border-black rounded-[15px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-100"
                aria-label="Twitter"
              >
                <span className="text-xl">🐦</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white border-4 border-black rounded-[15px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-100"
                aria-label="YouTube"
              >
                <span className="text-xl">📺</span>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-xl font-extrabold text-white mb-4">Produkt</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-lg font-medium text-white/90 hover:text-[#FFC667] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-extrabold text-white mb-4">
              Unternehmen
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-lg font-medium text-white/90 hover:text-[#FFC667] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-xl font-extrabold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-lg font-medium text-white/90 hover:text-[#FFC667] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white border-4 border-black rounded-[15px] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-extrabold text-black mb-2">
              Bleib auf dem Laufenden! 📧
            </h3>
            <p className="text-lg font-medium text-gray-600 mb-6">
              Erhalte Updates zu neuen Features und Lerninhalten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Deine E-Mail-Adresse"
                className="flex-1 px-4 py-3 text-lg font-medium border-4 border-black rounded-[15px] bg-white focus:outline-none focus:ring-4 focus:ring-[#FFC667] placeholder:text-gray-400"
              />
              <button className="px-8 py-3 text-lg font-extrabold text-white border-4 border-black rounded-[15px] bg-[#FFC667] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] transition-all duration-100">
                Abonnieren
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-black pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-lg font-medium text-white/90">
              © {currentYear} LaernApp. Alle Rechte vorbehalten.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-white/90 hover:text-[#FFC667] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
