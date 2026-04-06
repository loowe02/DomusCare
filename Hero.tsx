import { ImageWithFallback } from './figma/ImageWithFallback';
import bannerImage from 'figma:asset/13f4e2ba6088ad6cb0c0fc5c434f1c4ca8e78ef4.png';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-[#2e0016] via-[#3d0020] to-[#2e0016] text-white pt-32 pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#972d05]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#972d05]/5 rounded-full blur-3xl"></div>
      
      {/* Elegant border pattern */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#972d05]/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Banner con animación */}
          <div className="mb-12 w-full h-[240px] lg:h-[360px] rounded-2xl overflow-hidden relative group shadow-2xl">
            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-2xl z-10 pointer-events-none">
              <div className="absolute inset-0 rounded-2xl border-2 border-[#972d05]/30"></div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-transparent via-[#ebe2b8]/60 to-transparent bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]" style={{
                  backgroundImage: 'linear-gradient(90deg, transparent, rgba(235, 226, 184, 0.6), transparent)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s ease-in-out infinite',
                }}></div>
              </div>
            </div>
            
            <img 
              src="https://i.postimg.cc/pVkQkBc8/Banner-Domus.png"
              alt="DomusCare Banner" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('servicios')}
              className="group bg-[#972d05] text-white px-10 py-4 rounded-xl inline-flex items-center justify-center gap-3 hover:bg-[#972d05]/90 transition-all duration-300 shadow-xl shadow-[#972d05]/25 hover:shadow-2xl hover:shadow-[#972d05]/40 hover:-translate-y-1 font-semibold"
            >
              <span>Ver Servicios</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-10 py-4 rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 font-semibold"
            >
              Contáctanos
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fff9de] to-transparent"></div>
      
      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#972d05]/30 to-transparent"></div>
    </section>
  );
}