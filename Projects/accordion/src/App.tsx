import React, { useState } from 'react';
import data, { QuestionData } from './data';
import SingleQuestion from './Question';

function App() {
  const [questions] = useState<QuestionData[]>(data);
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <main>
      <div className='container'>
        <h3>questions & answers about login</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion 
              key={question.id} 
              {...question} 
              isOpen={activeId === question.id}
              toggleQuestion={toggleQuestion}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;