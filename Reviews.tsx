import { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { ReviewModal } from './ReviewModal';

interface Review {
  id: number;
  name: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
}

export function Reviews() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const reviews: Review[] = [
    {
      id: 1,
      name: 'María González',
      service: 'Aseo del Hogar',
      rating: 5,
      comment: 'Excelente servicio, muy profesionales y puntuales. Mi casa quedó impecable. Definitivamente los recomiendo y seguiré contratando sus servicios.',
      date: '15 Mar 2026',
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      service: 'Cuidado de Adulto Mayor',
      rating: 5,
      comment: 'El personal es muy capacitado y cariñoso con mi padre. Nos sentimos muy tranquilos sabiendo que está en buenas manos. Gracias DomusCare.',
      date: '10 Mar 2026',
    },
    {
      id: 3,
      name: 'Ana Martínez',
      service: 'Niñera',
      rating: 5,
      comment: 'La niñera que nos asignaron es increíble con mis hijos. Muy responsable, cariñosa y siempre puntual. Estamos muy contentos con el servicio.',
      date: '5 Mar 2026',
    },
    {
      id: 4,
      name: 'Jorge Fernández',
      service: 'Chef Doméstico',
      rating: 5,
      comment: 'Las comidas son deliciosas y muy balanceadas. El chef se adapta perfectamente a nuestras preferencias y restricciones alimenticias.',
      date: '28 Feb 2026',
    },
    {
      id: 5,
      name: 'Laura Sánchez',
      service: 'Cuidado de Mascotas',
      rating: 5,
      comment: 'Mi perro está feliz con el cuidador. Siempre regresa de sus paseos cansado y contento. Muy recomendado para quienes trabajan todo el día.',
      date: '20 Feb 2026',
    },
    {
      id: 6,
      name: 'Pedro Vargas',
      service: 'Chofer',
      rating: 5,
      comment: 'Conductor muy profesional, conoce muy bien la ciudad y siempre llega a tiempo. Nos ha facilitado mucho el día a día.',
      date: '12 Feb 2026',
    },
  ];

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(reviews.length / 3)) % Math.ceil(reviews.length / 3));
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={`${
              index < rating
                ? 'fill-[#972d05] text-[#972d05]'
                : 'fill-[#2e0016]/10 text-[#2e0016]/10'
            } transition-all duration-300`}
            strokeWidth={2}
          />
        ))}
      </div>
    );
  };

  const getVisibleReviews = () => {
    const start = currentIndex * 3;
    return reviews.slice(start, start + 3);
  };

  const averageRating = (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1);

  return (
    <section
      ref={sectionRef}
      id="reseñas"
      className="py-20 lg:py-28 bg-gradient-to-b from-white via-[#fff9de]/30 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#972d05]/20 to-transparent"></div>
      
      {/* Animated background shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#972d05]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#2e0016]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Title Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block mb-4">
            <div className="h-1 w-20 bg-gradient-to-r from-[#972d05] to-[#972d05]/60 mx-auto mb-6 rounded-full"></div>
          </div>
          <h2 className="text-5xl lg:text-6xl text-[#2e0016] mb-6 font-bold">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-[#2e0016]/70 max-w-3xl mx-auto leading-relaxed">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>

          {/* Average Rating */}
          <div className="mt-8 inline-flex items-center gap-4 bg-white px-8 py-4 rounded-2xl border border-[#2e0016]/10 shadow-lg">
            <div className="text-4xl font-bold text-[#2e0016]">{averageRating}</div>
            <div>
              <div className="flex gap-1 mb-1">
                {renderStars(5)}
              </div>
              <p className="text-sm text-[#2e0016]/60">Basado en {reviews.length} reseñas</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div
          className={`relative mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {getVisibleReviews().map((review, index) => (
              <div
                key={review.id}
                className="group bg-white p-8 rounded-2xl border border-[#2e0016]/10 hover:border-[#972d05]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#972d05]/10 hover:-translate-y-2 relative overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Quote icon */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-[#972d05]/5 to-transparent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Quote className="text-[#972d05]/20" size={32} strokeWidth={2} />
                </div>

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="mb-4">{renderStars(review.rating)}</div>

                  {/* Comment */}
                  <p className="text-[#2e0016]/80 leading-relaxed mb-6 line-clamp-4">
                    "{review.comment}"
                  </p>

                  {/* Author */}
                  <div className="pt-6 border-t border-[#2e0016]/10">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#2e0016] to-[#3d0020] rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-[#2e0016]/20">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-[#2e0016] font-bold">{review.name}</h4>
                        <p className="text-sm text-[#2e0016]/60">{review.service}</p>
                      </div>
                    </div>
                    <p className="text-xs text-[#2e0016]/40 mt-2">{review.date}</p>
                  </div>
                </div>

                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#972d05]/0 to-[#972d05]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {reviews.length > 3 && (
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevReview}
                className="w-12 h-12 bg-white border-2 border-[#2e0016] text-[#2e0016] rounded-full hover:bg-[#2e0016] hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} strokeWidth={2} />
              </button>
              <button
                onClick={nextReview}
                className="w-12 h-12 bg-white border-2 border-[#2e0016] text-[#2e0016] rounded-full hover:bg-[#2e0016] hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                aria-label="Siguiente"
              >
                <ChevronRight size={20} strokeWidth={2} />
              </button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gradient-to-br from-[#2e0016] to-[#3d0020] rounded-2xl p-8 lg:p-10 shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#972d05]/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Text on the left */}
              <div className="text-left flex-1">
                <h3 className="text-2xl lg:text-3xl text-white mb-3 font-bold">
                  ¿Has Usado Nuestros Servicios?
                </h3>
                <p className="text-[#ebe2b8]/80 leading-relaxed">
                  Tu opinión es muy importante para nosotros. Comparte tu experiencia y ayuda a otros a conocer la calidad de nuestro servicio.
                </p>
              </div>

              {/* Button on the right */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[#2e0016] px-8 py-4 rounded-xl hover:bg-[#ebe2b8] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-bold inline-flex items-center gap-2 group whitespace-nowrap flex-shrink-0"
              >
                <Star
                  size={20}
                  className="group-hover:fill-[#972d05] group-hover:text-[#972d05] transition-all duration-300"
                  strokeWidth={2}
                />
                Dejar Tu Reseña
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#972d05]/20 to-transparent"></div>

      {/* Review Modal */}
      <ReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}