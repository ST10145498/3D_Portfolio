import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import { CTA, Loader } from "../components";
import { Boat } from "../models";
import { experiences, skills } from "../constants";

const About = () => {
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Kyle Jeremiah Govender
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I am a highly motivated and determined individual who thrives in
          challenging environments and performs well under pressure. I am
          passionate about continuous learning and self-improvement, actively
          seeking opportunities to contribute meaningfully to projects and
          initiatives that foster growth for myself and those around me. As a
          confident and collaborative team player, I am eager to add value
          wherever I can.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex flex-col gap-12'>
          {experiences.map((experience, index) => (
            <div key={experience.company_name} className='flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-md'>
              <div className='flex-shrink-0'>
                <div
                  className='w-16 h-16 rounded-full flex items-center justify-center'
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
                    <h3 className='text-black text-xl font-semibold' style={{fontFamily: 'Poppins, sans-serif'}}>
                      {experience.title}
                    </h3>
                    <p className='text-gray-600 font-medium text-base'>
                      {experience.company_name}
                    </p>
                  </div>
                  <span className='text-sm text-gray-500 mt-2 md:mt-0'>
                    {experience.date}
                  </span>
                </div>
                <ul className='list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-gray-600 font-normal text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
