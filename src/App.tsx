import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';

export default function App() {
  return (
    <main className="bg-black">
      <Hero />
      <About />
      <Features />
      <footer className="bg-black px-6 pb-10 text-center text-xs text-gray-500">
        <p>
          SUNNY · WEB STUDIO — Chicago · English / Español ·{' '}
          <a href="mailto:webstudiosunny@gmail.com" className="text-primary/70 hover:text-primary">
            webstudiosunny@gmail.com
          </a>{' '}
          ·{' '}
          <a href="tel:+16309211191" className="text-primary/70 hover:text-primary">
            (630) 921-1191
          </a>
        </p>
      </footer>
    </main>
  );
}
