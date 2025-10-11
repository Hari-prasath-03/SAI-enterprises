import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface CountUpProps extends React.HTMLProps<HTMLSpanElement> {
  targetNumber: number;
  duration?: number;
  startFrom?: number;
  showPlusOnAnimationEnd?: boolean;
}

export default function CountUp({
  targetNumber,
  duration = 2000,
  startFrom = 1,
  showPlusOnAnimationEnd = false,
  ...props
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(startFrom);
  const [hasFinished, setHasFinished] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let start: number | null = null;
    const end = targetNumber;
    const range = end - startFrom;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);

      const easedProgress = progress * (2 - progress);
      const current = Math.floor(startFrom + easedProgress * range);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
        setHasFinished(true);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, targetNumber, duration, startFrom]);

  return (
    <span ref={ref} className={`tabular-nums ${props.className}`} {...props}>
      {count}
      {hasFinished && showPlusOnAnimationEnd && <span className="plus">+</span>}
    </span>
  );
}
