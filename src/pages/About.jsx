import { motion, useReducedMotion } from "framer-motion";

import { CTA } from "../components";
import { experiences } from "../constants";

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
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
              staggerChildren: 0.1,
            },
          },
        },
      };

  const listItem = shouldReduceMotion
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, y: 18 },
          show: { opacity: 1, y: 0 },
        },
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <div className='max-container'>
      <motion.h1 className='head-text' {...reveal}>
        Hello, I'm{" "}
        <span className='accent-gradient_text font-semibold drop-shadow'>
          Kyle Jeremiah Govender
        </span>
      </motion.h1>

      <motion.div className='mt-6 max-w-3xl flex flex-col gap-4 text-text-muted leading-relaxed' {...reveal}>
        <p>
          I am a highly motivated and determined individual who thrives in
          challenging environments and performs well under pressure. I am
          passionate about continuous learning and self-improvement, actively
          seeking opportunities to contribute meaningfully to projects and
          initiatives that foster growth for myself and those around me. As a
          confident and collaborative team player, I am eager to add value
          wherever I can.
        </p>
      </motion.div>

      <div className='py-16'>
        <motion.h3 className='subhead-text' {...reveal}>
          Work Experience.
        </motion.h3>

        <motion.div className='mt-4 flex flex-col gap-3 text-text-muted leading-relaxed' {...reveal}>
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </motion.div>

        <motion.div className='mt-12 flex flex-col gap-12' {...listContainer}>
          {experiences.map((experience) => (
            <motion.div
              key={experience.company_name}
              className='surface-card flex flex-col md:flex-row gap-6'
              {...listItem}
            >
              <div className='flex-shrink-0'>
                <div
                  className='w-16 h-16 rounded-full flex items-center justify-center border border-border'
                  style={{ backgroundColor: experience.iconBg }}
                >
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-10 h-10 object-contain'
                  />
                </div>
              </div>
              <div className='flex-1'>
                <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                  <div>
                    <h3 className='font-heading text-text text-2xl font-semibold'>
                      {experience.title}
                    </h3>
                    <p className='text-text-muted font-medium text-base'>
                      {experience.company_name}
                    </p>
                  </div>
                  <span className='label-chip mt-2 md:mt-0'>
                    {experience.date}
                  </span>
                </div>
                <ul className='list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-text-muted font-normal text-sm leading-relaxed'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <hr className='border-border/80' />

      <CTA />
    </div>
  );
};

export default About;
