import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const url = '/react-tabs-project';

interface Job {
  id: string;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const newJobs: Job[] = await response.json();
        setJobs(newJobs);
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  useGSAP(() => {
    if (loading) return;

    gsap.from('.job-info', 
      { opacity: 0,
        y: 50,
        duration: 0.7,
        ease: 'back.out(1.5)' 
      });
  }, [value, loading]);

  if (loading) {
    return (
      <section className='section loading'>
        <h1>loading...</h1>
      </section>
    );
  }
  
  if (jobs.length === 0) {
    return (
      <section className="section">
        <h2>No jobs found</h2>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className='section'>
      <div className='title'>
        <h2>expierence</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {
            jobs.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && 'active-btn'}`}
                >
                  {item.company}
                </button>);
            })
          }
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App