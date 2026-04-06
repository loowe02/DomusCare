import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import logoImage from 'figma:asset/4b44dbe01f0e87f4b8b5c6ebc6f918c7733f954f.png';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#2e0016] via-[#3d0020] to-[#2e0016] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#972d05]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#972d05]/5 rounded-full blur-3xl"></div>
      
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#972d05]/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="px-6 py-3 bg-gradient-to-r from-[#972d05]/10 to-[#972d05]/5 rounded-lg border border-[#972d05]/20 flex items-center justify-center mb-8 backdrop-blur-sm inline-block">
              <img src={logoImage} alt="DomusCare" className="h-8 w-auto" />
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm">
              Servicios profesionales para el hogar con personal verificado y confiable.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="group w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-[#972d05]/20 border border-white/10 hover:border-[#972d05]/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="group-hover:text-[#ebe2b8] transition-colors duration-300" strokeWidth={2} />
              </a>
              <a
                href="#"
                className="group w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-[#972d05]/20 border border-white/10 hover:border-[#972d05]/30 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={16} className="group-hover:text-[#ebe2b8] transition-colors duration-300" strokeWidth={2} />
              </a>
              <a
                href="#"
                className="group w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-[#972d05]/20 border border-white/10 hover:border-[#972d05]/30 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} className="group-hover:text-[#ebe2b8] transition-colors duration-300" strokeWidth={2} />
              </a>
              <a
                href="#"
                className="group w-10 h-10 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-[#972d05]/20 border border-white/10 hover:border-[#972d05]/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} className="group-hover:text-[#ebe2b8] transition-colors duration-300" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-6 font-bold">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-400 hover:text-[#ebe2b8] transition-colors duration-300 text-sm"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre-nosotros')}
                  className="text-gray-400 hover:text-[#ebe2b8] transition-colors duration-300 text-sm"
                >
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-400 hover:text-[#ebe2b8] transition-colors duration-300 text-sm"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('trabajo')}
                  className="text-gray-400 hover:text-[#ebe2b8] transition-colors duration-300 text-sm"
                >
                  Convocatorias
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-6 font-bold">
              Servicios
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#ebe2b8] transition-colors duration-300 text-sm">
                  Aseo del Hogar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#ebe2b8] transition-colors duration-300 text-sm">
                  Niñeras
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#ebe2b8] transition-colors duration-300 text-sm">
                  Cuidado de Adulto Mayor
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#ebe2b8] transition-colors duration-300 text-sm">
                  Profesores Particulares
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-6 font-bold">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Mail size={16} className="text-[#ebe2b8] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                <div className="text-sm">
                  <p className="text-gray-400">info@domuscare.com</p>
                  <p className="text-gray-400">contacto@domuscare.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone size={16} className="text-[#ebe2b8] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                <div className="text-sm">
                  <p className="text-gray-400">+57 321 9229064</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin size={16} className="text-[#ebe2b8] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                <div className="text-sm">
                  <p className="text-gray-400">Medellín, Colombia</p>
                  
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} DomusCare. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#ebe2b8] transition-colors duration-300 text-sm">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ebe2b8] transition-colors duration-300 text-sm">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}