import { useState } from 'react';
import { X, Star, User, Mail, MessageSquare } from 'lucide-react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReviewModal({ isOpen, onClose }: ReviewModalProps) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    comment: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    'Aseo General y Profundo',
    'Niñeras',
    'Cocineras / Chefs Domésticos',
    'Cuidado de Adulto Mayor',
    'Enfermería Domiciliaria',
    'Profesores Particulares',
    'Cuidado y Paseo de Mascotas',
    'Choferes',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Por favor selecciona una calificación');
      return;
    }

    setIsSubmitting(true);

    // Simular envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Resetear después de 2 segundos
    setTimeout(() => {
      setIsSuccess(false);
      setRating(0);
      setFormData({
        name: '',
        email: '',
        service: '',
        comment: '',
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
                <Star className="text-[#ebe2b8] fill-[#ebe2b8]" size={20} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold">Deja Tu Reseña</h3>
            </div>
            <p className="text-[#ebe2b8] text-sm">Comparte tu experiencia con DomusCare</p>
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
                ¡Gracias por Tu Reseña!
              </h4>
              <p className="text-[#2e0016]/70">
                Tu opinión nos ayuda a mejorar cada día.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Rating */}
              <div className="text-center py-6 bg-white rounded-xl border border-[#2e0016]/10">
                <label className="block text-[#2e0016] mb-4 font-bold text-lg">
                  ¿Cómo Calificarías Nuestro Servicio? *
                </label>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition-transform duration-200 hover:scale-125 focus:outline-none"
                    >
                      <Star
                        size={40}
                        className={`transition-all duration-200 ${
                          star <= (hoveredRating || rating)
                            ? 'fill-[#972d05] text-[#972d05]'
                            : 'fill-[#2e0016]/10 text-[#2e0016]/20'
                        }`}
                        strokeWidth={2}
                      />
                    </button>
                  ))}
                </div>
                {rating > 0 && (
                  <p className="text-[#972d05] mt-4 font-semibold animate-fadeIn">
                    {rating === 5 && '¡Excelente! 🎉'}
                    {rating === 4 && 'Muy bueno 👍'}
                    {rating === 3 && 'Bueno 😊'}
                    {rating === 2 && 'Regular 😐'}
                    {rating === 1 && 'Necesitamos mejorar 😔'}
                  </p>
                )}
              </div>

              {/* Nombre */}
              <div>
                <label className="block text-[#2e0016] mb-2 font-semibold text-sm flex items-center gap-2">
                  <User size={16} strokeWidth={2} />
                  Tu Nombre *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#2e0016]/10 rounded-xl focus:border-[#972d05] focus:outline-none focus:ring-2 focus:ring-[#972d05]/20 transition-all duration-300 text-[#2e0016]"
                  placeholder="Ingresa tu nombre"
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

              {/* Servicio */}
              <div>
                <label className="block text-[#2e0016] mb-2 font-semibold text-sm flex items-center gap-2">
                  <MessageSquare size={16} strokeWidth={2} />
                  Servicio Utilizado *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#2e0016]/10 rounded-xl focus:border-[#972d05] focus:outline-none focus:ring-2 focus:ring-[#972d05]/20 transition-all duration-300 text-[#2e0016]"
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Comentario */}
              <div>
                <label className="block text-[#2e0016] mb-2 font-semibold text-sm flex items-center gap-2">
                  <MessageSquare size={16} strokeWidth={2} />
                  Tu Experiencia *
                </label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-[#2e0016]/10 rounded-xl focus:border-[#972d05] focus:outline-none focus:ring-2 focus:ring-[#972d05]/20 transition-all duration-300 text-[#2e0016] resize-none"
                  placeholder="Cuéntanos sobre tu experiencia con nuestro servicio..."
                />
                <p className="text-xs text-[#2e0016]/60 mt-2">
                  Mínimo 20 caracteres
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
                  disabled={isSubmitting || rating === 0}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-[#2e0016] to-[#3d0020] text-white rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Publicar Reseña'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
