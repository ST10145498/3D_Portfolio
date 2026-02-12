import { motion, useReducedMotion } from "framer-motion";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      };

  const grid = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.1 },
        variants: {
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.11,
            },
          },
        },
      };

  const card = shouldReduceMotion
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, y: 18 },
          show: { opacity: 1, y: 0 },
        },
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <div className='max-container'>
      <motion.h1 className='head-text' {...reveal}>
        My <span className='accent-gradient_text drop-shadow font-semibold'>Projects</span>
      </motion.h1>

      <motion.p className='text-text-muted mt-4 max-w-3xl leading-relaxed' {...reveal}>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </motion.p>

      <motion.div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 my-16 gap-8' {...grid}>
        {projects.map((project) => (
          <motion.article className='surface-card group' key={project.name} {...card}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-panel flex justify-center items-center border group-hover:border-accent/55'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-6 flex flex-col'>
              <h4 className='text-2xl font-heading font-semibold text-text'>
                {project.name}
              </h4>
              <p className='mt-3 text-text-muted leading-relaxed'>{project.description}</p>
              <div className='mt-6 flex items-center gap-2 font-mono text-xs tracking-wide uppercase'>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-text transition-colors duration-300 ease-premium hover:text-accent'
                >
                  Live Link
                </a>
                <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <hr className='border-border/80' />

      <CTA />
    </div>
  );
};

export default Projects;
