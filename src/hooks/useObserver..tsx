import { useEffect, useMemo, useRef } from "react";

interface IProps {
  onObserveOnce: () => void;
}

export const useObserver = ({ onObserveOnce }: IProps) => {
  const onceRef = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  const observer = useMemo(() => {
    return new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !onceRef.current) {
          onceRef.current = true;
          onObserveOnce();
        }
      });
    });
  }, [onObserveOnce]);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref.current, observer]);

  return {
    observer: ref,
  };
};
