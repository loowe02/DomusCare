import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutUs() {
  return (
    <section id="sobre-nosotros" className="py-20 lg:py-28 bg-[#fff9de] relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#972d05]/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-gradient-to-r from-[#972d05] to-[#972d05]/60 mx-auto mb-6 rounded-full"></div>
          </div>
          <h2 className="text-5xl lg:text-6xl text-[#2e0016] mb-6 font-bold">
            Sobre Nosotros
          </h2>
          <p className="text-lg text-[#2e0016]/70 max-w-3xl mx-auto leading-relaxed">
            Somos una empresa de servicios integrales para el hogar que conecta familias 
            con personal confiable, verificado y acompañado, ofreciendo soluciones flexibles por 
            horas, días o planes mensuales.
          </p>
        </div>

        {/* Two Column Content */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="w-12 h-1 bg-[#972d05] mb-6 rounded-full"></div>
            </div>
            <h3 className="text-3xl lg:text-4xl text-[#2e0016] font-bold">
              Nuestra Misión
            </h3>
            <p className="text-[#2e0016]/70 leading-relaxed text-base">
              Brindar soluciones confiables y profesionales para el hogar, conectando talento 
              humano responsable con familias que buscan tranquilidad, respaldo y atención 
              personalizada.
            </p>
            <p className="text-[#2e0016]/70 leading-relaxed text-base">
              Nos comprometemos a ofrecer personal verificado y capacitado que brinde servicios 
              de calidad, generando confianza y bienestar en cada hogar que servimos.
            </p>
          </div>
          <div className="group relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#972d05]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <ImageWithFallback
              src="https://i.postimg.cc/zf9XVS11/freepik-teniendo-en-cuenta-el-estilo-de-esta-imagen-img1-crea-una-nueva-imagen-donde-expreses-con.png"
              alt="Equipo profesional de DomusCare"
              className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 border border-[#972d05]/0 group-hover:border-[#972d05]/20 transition-all duration-500 rounded-2xl"></div>
          </div>
        </div>

        {/* Second Row - Reversed */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="order-2 md:order-1 group relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#972d05]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <ImageWithFallback
              src="https://i.postimg.cc/bY0NwtCQ/freepik-teniendo-en-cuenta-el-estilo-de-esta-imagen-img1-crea-una-nueva-imagen-donde-expreses-con.png"
              alt="Servicios de hogar profesionales"
              className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 border border-[#972d05]/0 group-hover:border-[#972d05]/20 transition-all duration-500 rounded-2xl"></div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-block">
              <div className="w-12 h-1 bg-[#972d05] mb-6 rounded-full"></div>
            </div>
            <h3 className="text-3xl lg:text-4xl text-[#2e0016] font-bold">
              Nuestra Visión
            </h3>
            <p className="text-[#2e0016]/70 leading-relaxed text-base">
              Convertirse en una de las empresas de servicios del hogar más confiables y 
              reconocidas de Colombia, siendo la primera opción para familias que buscan 
              personal profesional y verificado.
            </p>
            <p className="text-[#2e0016]/70 leading-relaxed text-base">
              Aspiramos a transformar la industria de servicios del hogar mediante la tecnología, 
              la confianza y el acompañamiento continuo, generando tranquilidad y valor para 
              nuestros clientes y colaboradores.
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#972d05]/20 to-transparent"></div>
    </section>
  );
}