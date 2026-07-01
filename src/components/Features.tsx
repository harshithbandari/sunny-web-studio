import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { useRef } from 'react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface CardShellProps {
  index: number;
  children: React.ReactNode;
  className?: string;
}

function CardShell({ index, children, className = '' }: CardShellProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

interface ProjectCardProps {
  index: number;
  number: string;
  title: string;
  icon: string;
  items: string[];
  href: string;
}

function ProjectCard({ index, number, title, icon, items, href }: ProjectCardProps) {
  return (
    <CardShell
      index={index}
      className="flex flex-col rounded-2xl bg-[#212121] p-5 sm:p-6"
    >
      <img
        src={icon}
        alt=""
        className="h-10 w-10 rounded object-cover sm:h-12 sm:w-12"
        loading="lazy"
      />
      <h3 className="mt-5 text-base font-bold text-primary sm:text-lg">
        {title} <span className="ml-1 text-xs font-normal text-gray-500">({number})</span>
      </h3>
      <ul className="mt-4 flex-1 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-gray-400 sm:text-sm">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
            {item}
          </li>
        ))}
      </ul>
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className="group mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-primary sm:text-sm"
      >
        Learn more
        <ArrowRight className="h-3.5 w-3.5 -rotate-45 transition-transform group-hover:rotate-0" />
      </a>
    </CardShell>
  );
}

export default function Features() {
  return (
    <section id="work" className="relative min-h-screen bg-black px-4 py-16 sm:px-6 md:py-24">
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center text-xl font-normal sm:text-2xl md:mb-16 md:text-3xl lg:text-4xl">
          <WordsPullUpMultiStyle
            segments={[
              {
                text: 'Studio-grade websites for neighborhood businesses.',
                className: 'text-primary',
              },
            ]}
            className="gap-x-[0.25em]"
          />
          <WordsPullUpMultiStyle
            segments={[
              { text: 'Built to load fast. Powered by craft.', className: 'text-gray-500' },
            ]}
            className="gap-x-[0.25em]"
          />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:gap-2 md:grid-cols-2 md:gap-1 lg:h-[480px] lg:grid-cols-4">
          <CardShell
            index={0}
            className="relative min-h-[320px] overflow-hidden rounded-2xl lg:min-h-0"
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <p
              className="absolute bottom-5 left-5 text-base font-medium sm:text-lg"
              style={{ color: '#E1E0CC' }}
            >
              Your business, beautiful.
            </p>
          </CardShell>

          <ProjectCard
            index={1}
            number="01"
            title="La Cocina de Irma."
            icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
            items={[
              'Spanish-first, fully bilingual design',
              'Story-driven layout built from real reviews',
              'Tap-to-call and one-tap directions',
              '4.9-star Google rating front and center',
            ]}
            href="irma/"
          />
          <ProjectCard
            index={2}
            number="02"
            title="Rosy's Bakery."
            icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
            items={[
              'Custom cake orders arrive as texts',
              'Occasion gallery — quince, boda, birthday',
              'Fresh pan dulce daily menu',
            ]}
            href="rosys/"
          />
          <ProjectCard
            index={3}
            number="03"
            title="Lalo's Barbershop."
            icon="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
            items={[
              'One-tap booking by call or text',
              'Clear service and price list',
              'Dark-and-gold, 20-years-of-craft brand',
            ]}
            href="lalos/"
          />
        </div>
      </div>
    </section>
  );
}
