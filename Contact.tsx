import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: '',
      });
    }, 3000);
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-[#fff9de] relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#972d05]/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-gradient-to-r from-[#972d05] to-[#972d05]/60 mx-auto mb-6 rounded-full"></div>
          </div>
          <h2 className="text-5xl lg:text-6xl text-[#2e0016] mb-6 font-bold">
            Contáctanos
          </h2>
          <p className="text-lg text-[#2e0016]/70 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para responder tus preguntas y ayudarte a encontrar el personal 
            ideal para tu hogar. No dudes en ponerte en contacto con nosotros.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl text-[#2e0016] mb-10 font-bold">
              Información de Contacto
            </h3>
            
            <div className="space-y-8 mb-10">
              <div className="group flex items-start gap-5">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2e0016] to-[#3d0020] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#2e0016]/10 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-[#ebe2b8]" size={18} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-[#2e0016] mb-2 font-semibold">
                    Email
                  </h4>
                  
                  <p className="text-[#2e0016]/70 text-sm">domuscareteam@gmail.com</p>
                </div>
              </div>

              <div className="group flex items-start gap-5">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2e0016] to-[#3d0020] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#2e0016]/10 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-[#ebe2b8]" size={18} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-[#2e0016] mb-2 font-semibold">
                    Teléfono
                  </h4>
                  
                  <p className="text-[#2e0016]/70 text-sm">+57 321 9229064</p>
                </div>
              </div>

              <div className="group flex items-start gap-5">
                
                <div>
                  
                  
                  
                </div>
              </div>
            </div>

            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-[#2e0016]/10 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-[#972d05]" size={20} strokeWidth={2} />
                <h4 className="text-[#2e0016] font-semibold">
                  Horario de Atención
                </h4>
              </div>
              <p className="text-[#2e0016]/70 mb-2 leading-relaxed text-sm">
                Lunes a Viernes: 8:00 AM - 6:00 PM
              </p>
              <p className="text-[#2e0016]/70 leading-relaxed text-sm">
                Sábados: 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="relative bg-white/80 backdrop-blur-sm p-10 lg:p-12 rounded-2xl border border-[#2e0016]/10 shadow-xl">
              <h3 className="text-3xl text-[#2e0016] mb-8 font-bold">
                Envíanos un Mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-[#2e0016] mb-2 font-semibold">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 border border-[#2e0016]/20 rounded-xl focus:outline-none focus:border-[#972d05] focus:ring-2 focus:ring-[#972d05]/20 transition-all duration-300 bg-white"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#2e0016] mb-2 font-semibold">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 border border-[#2e0016]/20 rounded-xl focus:outline-none focus:border-[#972d05] focus:ring-2 focus:ring-[#972d05]/20 transition-all duration-300 bg-white"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-[#2e0016] mb-2 font-semibold">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 border border-[#2e0016]/20 rounded-xl focus:outline-none focus:border-[#972d05] focus:ring-2 focus:ring-[#972d05]/20 transition-all duration-300 bg-white"
                    placeholder="300 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="asunto" className="block text-[#2e0016] mb-2 font-semibold">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 border border-[#2e0016]/20 rounded-xl focus:outline-none focus:border-[#972d05] focus:ring-2 focus:ring-[#972d05]/20 transition-all duration-300 bg-white"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-[#2e0016] mb-2 font-semibold">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-3.5 border border-[#2e0016]/20 rounded-xl focus:outline-none focus:border-[#972d05] focus:ring-2 focus:ring-[#972d05]/20 transition-all duration-300 resize-none bg-white"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#972d05] text-white px-8 py-4 rounded-xl hover:bg-[#972d05]/90 transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-[#972d05]/25 hover:shadow-2xl hover:shadow-[#972d05]/40 hover:-translate-y-1 font-semibold"
                >
                  {submitted ? (
                    'Mensaje Enviado ✓'
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send size={20} strokeWidth={2} />
                    </>
                  )}
                </button>

                {submitted && (
                  <p className="text-green-600 text-center font-medium">
                    ¡Gracias por contactarnos! Te responderemos pronto.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#972d05]/20 to-transparent"></div>
    </section>
  );
}
