import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
}

export default function WordsPullUpMultiStyle({
  segments,
  className = '',
}: WordsPullUpMultiStyleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const words = segments.flatMap((seg) =>
    seg.text.split(' ').map((word) => ({ word, className: seg.className ?? '' }))
  );

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className={`inline-block ${w.className}`}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {w.word}
          {i < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </div>
  );
}
