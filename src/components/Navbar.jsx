import { useEffect, useRef, useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const activeSectionRef = useRef("about");

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const visibleSections = new Set();

    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight / 2;
      const candidates = visibleSections.size ? Array.from(visibleSections) : sections;

      const closestSection = candidates.reduce((closest, section) => {
        const distance = Math.abs(section.getBoundingClientRect().top - viewportCenter);

        if (!closest || distance < closest.distance) {
          return { id: section.id, distance };
        }

        return closest;
      }, null);

      if (closestSection && closestSection.id !== activeSectionRef.current) {
        activeSectionRef.current = closestSection.id;
        setActiveSection(closestSection.id);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target);
          } else {
            visibleSections.delete(entry.target);
          }
        });

        updateActiveSection();
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    updateActiveSection();

    return () => {
      observer.disconnect();
      visibleSections.clear();
    };
  }, []);

  return (
    <header className='header'>
      <a
        href='#home'
        className='w-11 h-11 rounded-panel border border-border/35 bg-bg/70 items-center justify-center flex font-heading font-bold text-sm tracking-wider shadow-panel transition-all duration-300 ease-premium hover:border-accent/70 hover:shadow-glow-accent'
        aria-label='Back to top'
      >
        <p className='accent-gradient_text'>KJ</p>
      </a>

      <nav className='flex items-center sm:gap-3 gap-2 text-sm sm:text-base font-medium'>
        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-3 py-1.5 rounded-chip border transition-all duration-300 ease-premium ${
                isActive
                  ? "border-accent/70 text-text shadow-glow-accent bg-accent/10"
                  : "border-transparent text-text-muted hover:text-text hover:border-border/35 hover:bg-surface/70"
              }`}
              aria-current={isActive ? "true" : undefined}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
