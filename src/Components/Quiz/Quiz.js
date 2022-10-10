import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const QuizData = useLoaderData()
    return (
        <div className='px-4 mb-16 grid grid-cols-2 gap-5'>
            {
                QuizData.data.questions.map(question => <Question key={question.id} question={question}></Question>)
            }
        </div>
    );
};

export default Quiz;