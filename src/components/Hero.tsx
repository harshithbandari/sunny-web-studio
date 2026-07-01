import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import WordsPullUp from './WordsPullUp';

const NAV_ITEMS = [
  { label: 'Our story', href: '#about' },
  { label: 'Our work', href: '#work' },
  { label: 'Clients', href: '#work' },
  { label: 'Process', href: '#about' },
  { label: 'Inquiries', href: 'mailto:webstudiosunny@gmail.com' },
];

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section className="h-screen p-4 md:p-6">
      <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-[2rem]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.7] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Navbar pill */}
        <nav className="absolute left-1/2 top-0 -translate-x-1/2">
          <div className="flex items-center gap-3 rounded-b-2xl bg-black px-4 py-2 sm:gap-6 md:gap-12 md:rounded-b-3xl md:px-8 lg:gap-14">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-[10px] transition-colors sm:text-xs md:text-sm"
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Bottom-aligned hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-6 sm:px-8 md:px-10 md:pb-8">
          <div className="grid grid-cols-12 items-end gap-4">
            <div className="col-span-12 md:col-span-8">
              <WordsPullUp
                text="Sunny"
                showAsterisk
                className="text-[26vw] font-medium leading-[0.85] tracking-[-0.07em] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
                style={{ color: '#E1E0CC' }}
              />
            </div>
            <div className="col-span-12 flex flex-col items-start gap-4 pb-2 md:col-span-4 md:pb-6">
              <motion.p
                className="text-xs text-primary/70 sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8, ease: EASE }}
              >
                Sunny Web Studio builds fast, bilingual websites for Chicago's
                neighborhood businesses — restaurants, bakeries, barbershops and
                salons — bound not by templates but by craft, and one promise:
                you see your website live before you pay a single dollar.
              </motion.p>
              <motion.a
                href="mailto:webstudiosunny@gmail.com?subject=Free%20demo%20website"
                className="group flex items-center gap-2 rounded-full bg-primary py-1.5 pl-5 pr-1.5 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8, ease: EASE }}
              >
                Get a free demo
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                  <ArrowRight className="h-4 w-4" style={{ color: '#E1E0CC' }} />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
