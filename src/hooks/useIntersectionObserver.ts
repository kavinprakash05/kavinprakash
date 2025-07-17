import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  onIntersect?: (entry: IntersectionObserverEntry) => void;
}

export const useIntersectionObserver = ({
  threshold = 0.5,
  root = null,
  rootMargin = '0px',
  onIntersect
}: UseIntersectionObserverProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    
    if (!element || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isIntersecting = entry.isIntersecting;
          setIsVisible(isIntersecting);
          
          // Track if element has ever been visible (for one-time events)
          if (isIntersecting && !hasBeenVisible) {
            setHasBeenVisible(true);
          }
          
          // Call custom intersection handler
          if (onIntersect) {
            onIntersect(entry);
          }
        });
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, root, rootMargin, onIntersect, hasBeenVisible]);

  return {
    elementRef,
    isVisible,
    hasBeenVisible,
  };
};