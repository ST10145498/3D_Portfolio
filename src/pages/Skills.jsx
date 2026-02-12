import { motion, useReducedMotion } from "framer-motion";

import { coreConcepts, skills, softSkills, spokenLanguages } from "../constants";

const categories = [
  "Programming Languages",
  "Frameworks & Technologies",
  "Databases",
  "Tools & Platforms",
  "Design & Modelling",
];

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
      };

  const listContainer = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.2 },
        variants: {
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.06,
            },
          },
        },
      };

  const listItem = shouldReduceMotion
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, y: 14 },
          show: { opacity: 1, y: 0 },
        },
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <div className='max-container'>
      <motion.h1 className='head-text' {...reveal}>
        My <span className='accent-gradient_text drop-shadow font-semibold'>Skills</span>
      </motion.h1>

      <div className='py-10 flex flex-col'>
        {categories.map((category) => (
          <motion.div key={category} className='mt-10' {...reveal}>
            <h4 className='text-lg font-heading font-semibold text-text'>{category}</h4>

            <motion.div className='mt-6 flex flex-wrap gap-6' {...listContainer}>
              {skills
                .filter((skill) => skill.type === category)
                .map((skill) => (
                  <motion.div className='block-container w-24 h-24' key={skill.name} {...listItem}>
                    <div className='btn-back rounded-xl' />
                    <div className='btn-front rounded-panel flex flex-col justify-center items-center gap-1.5 border hover:border-accent/50'>
                      <img
                        src={skill.imageUrl}
                        alt={skill.name}
                        className='w-3/5 h-3/5 object-contain'
                      />
                      <span className='text-[10px] font-mono uppercase tracking-wide text-text-muted text-center leading-tight'>
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className='py-10'>
        <motion.h3 className='subhead-text' {...reveal}>
          Core Computer Science Concepts
        </motion.h3>

        <motion.div className='mt-6 flex flex-wrap gap-3' {...listContainer}>
          {coreConcepts.map((concept) => (
            <motion.span
              key={concept}
              className='label-chip'
              {...listItem}
            >
              {concept}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <div className='py-10'>
        <motion.h3 className='subhead-text' {...reveal}>
          Soft Skills
        </motion.h3>

        <motion.div className='mt-6 flex flex-wrap gap-3' {...listContainer}>
          {softSkills.map((skill) => (
            <motion.span
              key={skill}
              className='label-chip'
              {...listItem}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <div className='py-10'>
        <motion.h3 className='subhead-text' {...reveal}>
          Languages
        </motion.h3>

        <motion.div className='mt-6 flex flex-wrap gap-3' {...listContainer}>
          {spokenLanguages.map((language) => (
            <motion.span
              key={language}
              className='label-chip'
              {...listItem}
            >
              {language}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
