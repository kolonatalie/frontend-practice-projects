import React, { useRef,  useLayoutEffect } from 'react';
// import { AiOutlinePlus } from 'react-icons/ai';
import { BiPlus } from 'react-icons/bi';
import { gsap } from 'gsap';

interface QuestionProps {
  id: number;
  title: string;
  info: string;
  isOpen: boolean;
  toggleQuestion: (id: number) => void;
}

const Question: React.FC<QuestionProps> = ({id, title, info, isOpen, toggleQuestion }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() =>{
    if(isOpen) {
      gsap.to(contentRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.5,
        ease: 'back.out',
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power1.in',
      });
    }
  }, [isOpen]);

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => toggleQuestion(id)}>
          <BiPlus className={isOpen ? 'icon-rotate' : 'icon-default'} />
        </button>
      </header>
      <div ref={contentRef} className='question-content'>
        <p className='question-text'>{info}</p>
      </div>
    </article>
  );
};

export default Question;
