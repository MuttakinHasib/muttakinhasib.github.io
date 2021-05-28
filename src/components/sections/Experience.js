import React, { useState } from 'react';
import SectionTitle from '../SectionTitle';
import { jobs } from '../../static';

const Experience = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const job = jobs[tabIndex];
  return (
    <section id='jobs' className='min-h-[95vh] py-[100px]'>
      <SectionTitle index='02.' title="Where I've Worked" />
      <div className='flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 pt-5'>
        <div>
          <div className='flex md:flex-col relative w-max'>
            <div
              className={`tab-indicator absolute md:top-0 bottom-0 left-0 md:w-[2px] h-[2px] md:h-[42px] bg-green transition-transform duration-200 ease-transition`}
              // style={{ transform: `translateY(calc(${tabIndex} * 42px))` }}
            />
            <style jsx>{`
              @media (max-width: 767px) {
                .tab-indicator {
                  min-width: 150px;
                  transform: translateX(calc(${tabIndex}*150px));
                }
              }
              @media (min-width: 768px) {
                .tab-indicator {
                  transform: translateY(calc(${tabIndex}*42px));
                }
              }
            `}</style>
            {jobs.map((job, index) => (
              <button
                key={index}
                className={`focus:outline-none text-lg tracking-[1px] h-[42px] min-w-[150px] w-full pl-8 pr-8 md:pr-14 hover:bg-greenTint border-b-2 md:border-b-0 md:border-l-2 border-darkSlate flex items-center justify-center md:justify-start transition-colors duration-300${
                  tabIndex === index ? 'text-green bg-navy' : ''
                }`}
                onClick={() => setTabIndex(index)}
              >
                <span>{job.company}</span>
              </button>
            ))}
          </div>
        </div>
        <div>
          <h3 className='text-2xl mb-2 font-semibold flex flex-wrap items-center'>
            <span className='text-lightestSlate whitespace-nowrap'>
              {job.position}
            </span>
            &nbsp;
            <a
              href={job.website}
              target='_blank'
              className='text-green whitespace-nowrap'
            >
              @ {job.name}
            </a>
          </h3>
          <p className='prose'>{job.range}</p>
          {job?.description && (
            <ul className='ml-3 mt-5 list-outside tracking-[1px] list-[square]'>
              {job?.description.map((list, index) => (
                <li className='py-2 pl-3' key={index}>
                  <span>{list.item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
