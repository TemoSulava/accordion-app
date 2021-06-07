import React, { useState } from 'react'
import data from '../data';
import Question from './Question';

const Info = () => {
  const [questions, setQuestions] = useState(data);
 

  return (
    <section className='info'>
    {questions.map(question => {
      return <Question key={question.id}  {...question} />;
    })}
    </section>
  )
}

export default Info;
