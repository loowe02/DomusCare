import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from 'figma:asset/4b44dbe01f0e87f4b8b5c6ebc6f918c7733f954f.png';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#2e0016]/95 backdrop-blur-md text-white shadow-lg z-50 border-b border-[#972d05]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="px-6 py-3 bg-gradient-to-r from-[#972d05]/10 to-[#972d05]/5 rounded-lg border border-[#972d05]/20 flex items-center justify-center backdrop-blur-sm">
              <img src={logoImage} alt="DomusCare" className="h-8 w-auto" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-sm font-medium hover:text-[#ebe2b8] transition-all duration-300 relative group"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#972d05] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('sobre-nosotros')}
              className="text-sm font-medium hover:text-[#ebe2b8] transition-all duration-300 relative group"
            >
              Sobre Nosotros
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#972d05] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-sm font-medium hover:text-[#ebe2b8] transition-all duration-300 relative group"
            >
              Servicios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#972d05] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('reseñas')}
              className="text-sm font-medium hover:text-[#ebe2b8] transition-all duration-300 relative group"
            >
              Reseñas
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#972d05] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-sm font-medium hover:text-[#ebe2b8] transition-all duration-300 relative group"
            >
              Contáctanos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#972d05] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('trabajo')}
              className="text-sm font-medium hover:text-[#ebe2b8] transition-all duration-300 relative group"
            >
              Convocatorias
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#972d05] group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-[#972d05] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#972d05]/90 transition-all duration-300 shadow-lg shadow-[#972d05]/20 hover:shadow-[#972d05]/40"
            >
              Contáctanos
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-white/5 rounded transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#2e0016]/98 backdrop-blur-lg border-t border-[#972d05]/10">
          <div className="px-6 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left py-3 text-sm font-medium hover:text-[#ebe2b8] transition-all duration-300 border-b border-white/5"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('sobre-nosotros')}
              className="block w-full text-left py-3 text-sm font-medium hover:text-[#ebe2b8] transition-all duration-300 border-b border-white/5"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="block w-full text-left py-3 text-sm font-medium hover:text-[#ebe2b8] transition-all duration-300 border-b border-white/5"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('reseñas')}
              className="block w-full text-left py-3 text-sm font-medium hover:text-[#ebe2b8] transition-all duration-300 border-b border-white/5"
            >
              Reseñas
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left py-3 text-sm font-medium hover:text-[#ebe2b8] transition-all duration-300 border-b border-white/5"
            >
              Contáctanos
            </button>
            <button
              onClick={() => scrollToSection('trabajo')}
              className="block w-full text-left py-3 text-sm font-medium hover:text-[#ebe2b8] transition-all duration-300 border-b border-white/5"
            >
              Convocatorias
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="w-full bg-[#972d05] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#972d05]/90 transition-all duration-300 shadow-lg shadow-[#972d05]/20 mt-4"
            >
              Contáctanos
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}