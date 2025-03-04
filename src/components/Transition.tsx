import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

type TransitionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animationType?: 
    'fade-in' | 
    'slide-up' | 
    'slide-down' | 
    'slide-in-right' | 
    'scale-in' | 
    'bounce' | 
    'rotate-in' | 
    'zoom-in' | 
    'flip-in' | 
    'pulse' | 
    'swing';
  threshold?: number;
};

const Transition: React.FC<TransitionProps> = ({
  children,
  className,
  delay = 0,
  duration = 500,
  animationType = 'fade-in',
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold]);

  const animationClasses = {
    'fade-in': 'animate-fade-in',
    'slide-up': 'animate-slide-up',
    'slide-down': 'animate-slide-down',
    'slide-in-right': 'animate-slide-in-right',
    'scale-in': 'animate-scale-in',
    'bounce': 'animate-bounce',
    'rotate-in': 'animate-rotate-in',
    'zoom-in': 'animate-zoom-in',
    'flip-in': 'animate-flip-in',
    'pulse': 'animate-pulse',
    'swing': 'animate-swing',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0',
        isVisible && animationClasses[animationType as keyof typeof animationClasses],
        className
      )}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default Transition;
