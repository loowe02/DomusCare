import { useState } from 'react';
import { X, User, Mail, Phone, FileText, Briefcase, Upload } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  positionTitle: string;
}

export function ApplicationModal({ isOpen, onClose, positionTitle }: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    motivation: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Resetear después de 2 segundos
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        experience: '',
        motivation: '',
      });
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#2e0016]/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#fff9de] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fadeIn">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-br from-[#2e0016] to-[#3d0020] text-white p-6 rounded-t-2xl flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-[#972d05]/20 rounded-lg flex items-center justify-center">
                <Briefcase className="text-[#ebe2b8]" size={20} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold">Aplicar a Convocatoria</h3>
            </div>
            <p className="text-[#ebe2b8] text-sm">{positionTitle}</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0 ml-4"
            aria-label="Cerrar"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Form */}
        <div className="p-6 lg:p-8">
          {isSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-br from-[#2e0016] to-[#3d0020] rounded-full flex items-center justify-center mx-auto mb-6 animate-scaleIn">
                <svg
                  className="w-10 h-10 text-[#ebe2b8]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h4 className="text-2xl text-[#2e0016] mb-3 font-bold">
                ¡Aplicación Enviada!
              </h4>
              <p className="text-[#2e0016]/70">
                Gracias por tu interés. Nos pondremos en contacto pronto.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre Completo */}
              <div>
                <label className="block text-[#2e0016] mb-2 font-semibold text-sm flex items-center gap-2">
                  <User size={16} strokeWidth={2} />
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#2e0016]/10 rounded-xl focus:border-[#972d05] focus:outline-none focus:ring-2 focus:ring-[#972d05]/20 transition-all duration-300 text-[#2e0016]"
                  placeholder="Ingresa tu nombre completo"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[#2e0016] mb-2 font-semibold text-sm flex items-center gap-2">
                  <Mail size={16} strokeWidth={2} />
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#2e0016]/10 rounded-xl focus:border-[#972d05] focus:outline-none focus:ring-2 focus:ring-[#972d05]/20 transition-all duration-300 text-[#2e0016]"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-[#2e0016] mb-2 font-semibold text-sm flex items-center gap-2">
                  <Phone size={16} strokeWidth={2} />
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#2e0016]/10 rounded-xl focus:border-[#972d05] focus:outline-none focus:ring-2 focus:ring-[#972d05]/20 transition-all duration-300 text-[#2e0016]"
                  placeholder="+57 300 123-4567"
                />
              </div>

              {/* Experiencia */}
              <div>
                <label className="block text-[#2e0016] mb-2 font-semibold text-sm flex items-center gap-2">
                  <FileText size={16} strokeWidth={2} />
                  Experiencia Relevante *
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-[#2e0016]/10 rounded-xl focus:border-[#972d05] focus:outline-none focus:ring-2 focus:ring-[#972d05]/20 transition-all duration-300 text-[#2e0016] resize-none"
                  placeholder="Cuéntanos sobre tu experiencia en este campo..."
                />
              </div>

              {/* Motivación */}
              <div>
                <label className="block text-[#2e0016] mb-2 font-semibold text-sm flex items-center gap-2">
                  <FileText size={16} strokeWidth={2} />
                  ¿Por qué quieres trabajar con nosotros? *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 bg-white border border-[#2e0016]/10 rounded-xl focus:border-[#972d05] focus:outline-none focus:ring-2 focus:ring-[#972d05]/20 transition-all duration-300 text-[#2e0016] resize-none"
                  placeholder="Comparte tu motivación para unirte a DomusCare..."
                />
              </div>

              {/* Adjuntar Hoja de Vida */}
              <div>
                <label className="block text-[#2e0016] mb-2 font-semibold text-sm flex items-center gap-2">
                  <Upload size={16} strokeWidth={2} />
                  Hoja de Vida (PDF)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf"
                    className="w-full px-4 py-3 bg-white border border-[#2e0016]/10 rounded-xl focus:border-[#972d05] focus:outline-none focus:ring-2 focus:ring-[#972d05]/20 transition-all duration-300 text-[#2e0016] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#2e0016] file:text-white hover:file:bg-[#2e0016]/90 file:cursor-pointer"
                  />
                </div>
                <p className="text-xs text-[#2e0016]/60 mt-2">
                  Formato PDF, tamaño máximo 5MB
                </p>
              </div>

              {/* Botones */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 bg-white border-2 border-[#2e0016] text-[#2e0016] rounded-xl hover:bg-[#2e0016]/5 transition-all duration-300 font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-[#2e0016] to-[#3d0020] text-white rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Aplicación'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
