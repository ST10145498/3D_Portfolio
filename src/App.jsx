import { Suspense, lazy } from "react";

import { Footer, Navbar } from "./components";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

const SectionFallback = () => (
  <div className='max-container py-20'>
    <div className='h-8 w-40 rounded-panel bg-surface/80 border border-border animate-pulse' />
  </div>
);

const App = () => {
  return (
    <main>
      <Navbar />

      <section id='home' aria-label='Hero'>
        <Home />
      </section>

      <section id='about' className='scroll-section' aria-label='About'>
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
      </section>

      <section id='skills' className='scroll-section' aria-label='Skills'>
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
      </section>

      <section id='projects' className='scroll-section' aria-label='Projects'>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
      </section>

      <section id='contact' className='scroll-section' aria-label='Contact'>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </section>

      <Footer />
    </main>
  );
};

export default App;
