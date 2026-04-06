import { Briefcase, Heart, Users2, Trophy, Rocket, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { ApplicationModal } from './ApplicationModal';

export function Careers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');

  const handleApplyClick = (positionTitle: string) => {
    setSelectedPosition(positionTitle);
    setIsModalOpen(true);
  };

  const benefits = [
    {
      icon: Heart,
      title: 'Ambiente de Trabajo Positivo',
      description: 'Cultura organizacional basada en el respeto, la colaboración y el bienestar de nuestro equipo.',
    },
    {
      icon: Trophy,
      title: 'Crecimiento Profesional',
      description: 'Oportunidades de desarrollo y promoción interna basadas en el mérito y el desempeño.',
    },
    {
      icon: GraduationCap,
      title: 'Capacitación Continua',
      description: 'Programas de formación y actualización para mantener a nuestro equipo siempre preparado.',
    },
    {
      icon: Users2,
      title: 'Trabajo en Equipo',
      description: 'Colaboración efectiva entre profesionales comprometidos con la excelencia.',
    },
  ];

  const positions = [
    {
      title: 'Aseo General y Profundo',
      department: 'Servicios del Hogar',
      type: 'Por horas / días',
    },
    {
      title: 'Niñeras',
      department: 'Cuidado Infantil',
      type: 'Tiempo completo / Medio tiempo',
    },
    {
      title: 'Cocineras / Chefs Domésticos',
      department: 'Servicios de Alimentación',
      type: 'Por horas / días',
    },
    {
      title: 'Cuidado de Adulto Mayor',
      department: 'Servicios de Cuidado',
      type: 'Tiempo completo / Por turnos',
    },
    {
      title: 'Enfermería Domiciliaria',
      department: 'Servicios de Salud',
      type: 'Por horas / Medio tiempo',
    },
    {
      title: 'Profesores Particulares',
      department: 'Servicios Educativos',
      type: 'Por horas',
    },
    {
      title: 'Cuidado y Paseo de Mascotas',
      department: 'Servicios para Mascotas',
      type: 'Por horas / días',
    },
    {
      title: 'Choferes (con o sin vehículo)',
      department: 'Servicios de Transporte',
      type: 'Tiempo completo / Por horas',
    },
  ];

  return (
    <section id="trabajo" className="py-20 lg:py-28 bg-gradient-to-b from-[#fff9de] via-white to-[#fff9de] relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#972d05]/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-gradient-to-r from-[#972d05] to-[#972d05]/60 mx-auto mb-6 rounded-full"></div>
          </div>
          <h2 className="text-5xl lg:text-6xl text-[#2e0016] mb-6 font-bold">
            Trabaja con Nosotros
          </h2>
          <p className="text-lg text-[#2e0016]/70 max-w-3xl mx-auto leading-relaxed">
            Únete a nuestro equipo de profesionales en DomusCare. Te ofrecemos oportunidades 
            de crecimiento, capacitación continua y un ambiente de trabajo positivo.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-20 rounded-2xl overflow-hidden shadow-2xl group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#972d05]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          <ImageWithFallback
            src="https://i.postimg.cc/CKpQ5z6K/freepik-teniendo-en-cuenta-el-estilo-de-img1-crea-una-fotografia-parecida-donde-todos-los-personaj.png"
            alt="Equipo de DomusCare trabajando juntos"
            className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 border border-[#972d05]/0 group-hover:border-[#972d05]/20 transition-all duration-500 rounded-2xl"></div>
        </div>

        {/* Why Join Us */}
        <div className="mb-20">
          <h3 className="text-4xl text-[#2e0016] text-center mb-12 font-bold">
            ¿Por Qué Trabajar con Nosotros?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white p-8 rounded-2xl border border-[#2e0016]/5 hover:border-[#972d05]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#972d05]/5 hover:-translate-y-1 text-center"
                >
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#2e0016] to-[#3d0020] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#2e0016]/10">
                      <Icon className="text-[#ebe2b8]" size={24} strokeWidth={2} />
                    </div>
                    <h4 className="text-lg text-[#2e0016] mb-4 font-bold leading-tight">
                      {benefit.title}
                    </h4>
                    <p className="text-[#2e0016]/70 leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-10 lg:p-12 border border-[#2e0016]/10 shadow-xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-14 h-14 bg-gradient-to-br from-[#2e0016] to-[#3d0020] rounded-xl flex items-center justify-center shadow-lg shadow-[#2e0016]/10">
              <Briefcase className="text-[#ebe2b8]" size={24} strokeWidth={2} />
            </div>
            <h3 className="text-4xl text-[#2e0016] font-bold">
              Convocatorias
            </h3>
          </div>

          <div className="space-y-5">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white border border-[#2e0016]/10 rounded-xl p-8 hover:border-[#972d05]/30 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div>
                    <h4 className="text-xl text-[#2e0016] mb-3 font-bold leading-tight">
                      {position.title}
                    </h4>
                    <div className="flex flex-wrap gap-3 text-[#2e0016]/70 text-sm">
                      <span className="flex items-center gap-2">
                        <Rocket size={16} strokeWidth={2} />
                        {position.department}
                      </span>
                      <span className="text-[#2e0016]/30">•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <button
                    className="bg-[#2e0016] text-white px-8 py-3 rounded-xl hover:bg-[#2e0016]/90 transition-all duration-300 whitespace-nowrap shadow-lg shadow-[#2e0016]/10 group-hover:shadow-xl group-hover:-translate-y-0.5 font-semibold"
                    onClick={() => handleApplyClick(position.title)}
                  >
                    Aplicar Ahora
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-10 border-t border-[#2e0016]/10 text-center">
            <p className="text-[#2e0016]/70 mb-6 leading-relaxed">
              ¿No encuentras la posición que buscas? Envíanos tu hoja de vida de todas formas.
            </p>
            <button className="bg-white border-2 border-[#2e0016] text-[#2e0016] px-10 py-4 rounded-xl hover:bg-[#2e0016] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-semibold">
              Enviar Hoja de Vida
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#972d05]/20 to-transparent"></div>

      {/* Application Modal */}
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        positionTitle={selectedPosition}
      />
    </section>
  );
}