import { Sparkles, Home, Baby, ChefHat, Heart, Stethoscope, GraduationCap, PawPrint, Car } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Sparkles,
      title: 'Aseo General y Profundo',
      description: 'Personal capacitado para mantener tu hogar impecable con servicios de limpieza general y profunda.',
    },
    {
      icon: Baby,
      title: 'Niñeras',
      description: 'Cuidado profesional y cariñoso para tus hijos con personal verificado y con experiencia.',
    },
    {
      icon: ChefHat,
      title: 'Cocineras / Chefs Domésticos',
      description: 'Preparación de alimentos deliciosos y nutritivos para ti y tu familia.',
    },
    {
      icon: Heart,
      title: 'Cuidado de Adulto Mayor',
      description: 'Atención especializada y compañía para adultos mayores con amor y profesionalismo.',
    },
    {
      icon: Stethoscope,
      title: 'Enfermería Domiciliaria',
      description: 'Servicios de enfermería profesional en la comodidad de tu hogar.',
    },
    {
      icon: GraduationCap,
      title: 'Profesores Particulares',
      description: 'Educación personalizada y apoyo académico en diversas materias.',
    },
    {
      icon: PawPrint,
      title: 'Cuidado y Paseo de Mascotas',
      description: 'Atención amorosa para tus mascotas, incluyendo paseos y cuidados diarios.',
    },
    {
      icon: Car,
      title: 'Choferes',
      description: 'Servicio de conducción con personal responsable, con o sin vehículo propio.',
    },
  ];

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-gradient-to-b from-[#fff9de] via-white to-[#fff9de] relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#972d05]/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-gradient-to-r from-[#972d05] to-[#972d05]/60 mx-auto mb-6 rounded-full"></div>
          </div>
          <h2 className="text-5xl lg:text-6xl text-[#2e0016] mb-6 font-bold">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-[#2e0016]/70 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos una amplia gama de servicios profesionales para el hogar, 
            con personal verificado y capacitado para satisfacer tus necesidades.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white border border-[#2e0016]/5 hover:border-[#972d05]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#972d05]/5 hover:-translate-y-1"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#972d05]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2e0016] to-[#3d0020] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#2e0016]/10">
                    <Icon className="text-[#ebe2b8]" size={24} strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-xl text-[#2e0016] mb-4 font-bold leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#2e0016]/70 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="w-0 h-0.5 bg-[#972d05] mt-6 group-hover:w-12 transition-all duration-300 rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#972d05]/20 to-transparent"></div>
    </section>
  );
}
