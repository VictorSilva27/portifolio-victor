import React from 'react';
import { Quote } from 'lucide-react';
import { mockData } from '../mock';

const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-page">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-2 mb-16 text-center">
            What People Say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {mockData.testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-card border border-border-light rounded-lg p-8 hover:border-border-medium transition-colors"
              >
                <div className="space-y-6">
                  {/* Quote Icon */}
                  <Quote className="text-brand-primary" size={32} />
                  
                  {/* Testimonial Text */}
                  <p className="body-small text-secondary leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-border-medium"
                    />
                    <div>
                      <h4 className="heading-6 text-primary">
                        {testimonial.name}
                      </h4>
                      <p className="caption text-secondary">
                        {testimonial.position} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;