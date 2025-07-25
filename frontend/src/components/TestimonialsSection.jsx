import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { getTestimonials } from '../data/testimonials';

const TestimonialsSection = () => {
  const t = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  
  useEffect(() => {
    // Carrega as recomendações (preparado para integração futura com API)
    const loadedTestimonials = getTestimonials();
    setTestimonials(loadedTestimonials);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (testimonials.length <= 1) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000); // Troca a cada 8 segundos

    return () => clearInterval(interval);
  }, [testimonials.length, currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  if (testimonials.length === 0) {
    return null;
  }
  
  return (
    <section className="py-32 bg-page">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-16 text-center">
            {t.testimonialsTitle}
          </h2>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-card border border-border-light rounded-full p-3 hover:border-border-medium hover:bg-bg-light transition-all duration-300 shadow-lg"
              aria-label="Recomendação anterior"
            >
              <ChevronLeft className="text-brand-primary" size={20} />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-card border border-border-light rounded-full p-3 hover:border-border-medium hover:bg-bg-light transition-all duration-300 shadow-lg"
              aria-label="Próxima recomendação"
            >
              <ChevronRight className="text-brand-primary" size={20} />
            </button>

            {/* Testimonial Card */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-card border border-border-light rounded-xl p-8 hover:border-border-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                      <div className="space-y-6">
                        {/* Quote Icon */}
                        <div className="flex items-center justify-between">
                          <Quote className="text-brand-primary" size={32} />
                          {testimonial.isLinkedInRecommendation && (
                            <div className="flex items-center gap-2 text-secondary text-sm">
                              <ExternalLink size={16} />
                              <span>Recomendação LinkedIn</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Testimonial Text */}
                        <p className="body-base text-primary leading-relaxed text-center italic">
                          "{testimonial.text}"
                        </p>
                        
                        {/* Author */}
                        <div className="flex flex-col items-center gap-4 pt-4 border-t border-border-light">
                          <img 
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover border-3 border-brand-primary shadow-lg"
                          />
                          <div className="text-center">
                            <h4 className="heading-6 text-primary mb-1">
                              {testimonial.name}
                            </h4>
                            <p className="caption text-secondary">
                              {testimonial.position} • {testimonial.company}
                            </p>
                            {testimonial.date && (
                              <p className="text-xs text-muted mt-1">
                                {new Date(testimonial.date).toLocaleDateString('pt-BR', {
                                  year: 'numeric',
                                  month: 'long'
                                })}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-brand-primary scale-125' 
                      : 'bg-border-medium hover:bg-border-strong'
                  }`}
                  aria-label={`Ir para recomendação ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-advance indicator */}
            <div className="text-center mt-4">
              <p className="text-xs text-muted">
                {currentIndex + 1} de {testimonials.length} recomendações
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;