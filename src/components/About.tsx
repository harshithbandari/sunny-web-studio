import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

const BODY_TEXT =
  'Over the last months, I have built live websites for some of the most loved businesses in Chicago — a 4.9-star family kitchen, a legacy panaderia, a barber with twenty years of craft. Every site is bilingual, loads in under three seconds, and is shown to the owner live, on their own phone, before a single dollar changes hands.';

function AnimatedLetter({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

export default function About() {
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: bodyRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = BODY_TEXT.split('');

  return (
    <section id="about" className="bg-black px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl rounded-2xl bg-[#101010] px-6 py-16 text-center sm:px-10 md:rounded-[2rem] md:py-24">
        <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-primary sm:text-xs">
          Web studio
        </p>

        <div className="mx-auto max-w-3xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'I am Sunny,', className: 'font-normal text-primary' },
              { text: 'a Chicago web developer.', className: 'italic font-serif text-primary' },
              {
                text: 'I build bilingual websites that make local phones ring.',
                className: 'font-normal text-primary',
              },
            ]}
            className="gap-x-[0.25em] gap-y-2"
          />
        </div>

        <p
          ref={bodyRef}
          className="mx-auto mt-12 max-w-2xl text-xs leading-relaxed sm:text-sm md:mt-16 md:text-base"
          style={{ color: '#DEDBC8' }}
        >
          {chars.map((char, i) => {
            const charProgress = i / chars.length;
            const start = Math.max(0, charProgress - 0.1);
            const end = Math.min(1, charProgress + 0.05);
            return (
              <AnimatedLetter
                key={i}
                char={char}
                progress={scrollYProgress}
                range={[start, end]}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}
