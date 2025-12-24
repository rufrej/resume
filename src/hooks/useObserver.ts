import { useEffect } from "react";

interface IObserverRef {
  current: HTMLElement | null;
}

export function useObserver(ref: IObserverRef, setState: Function) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setState(true);
          }
        });
      },
      { threshold: 0.9 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
}
