import { useState, useEffect } from "react";

export function useOnScreen(options) {
  const [ref, setRef] = useState(null);
  const [arrayCount, setArrayCount] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setArrayCount(arrayCount + 1);
      }
    }, options);
    if (ref) {
      observer.observe(ref);
    }
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [options]);
  return [arrayCount, setRef];
}
