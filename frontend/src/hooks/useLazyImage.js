import { useState, useEffect, useRef } from 'react';

export const useLazyImage = (src, placeholder = '') => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    let observer;
    
    if (imageRef.current && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = new Image();
              
              img.onload = () => {
                setImageSrc(src);
                setIsLoaded(true);
                setIsError(false);
              };
              
              img.onerror = () => {
                setIsError(true);
                setIsLoaded(false);
              };
              
              img.src = src;
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      );
      
      observer.observe(imageRef.current);
    } else {
      // Fallback for browsers without IntersectionObserver
      const img = new Image();
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      img.onerror = () => setIsError(true);
      img.src = src;
    }

    return () => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    };
  }, [src]);

  return { imageSrc, isLoaded, isError, imageRef };
};
