import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const QuizData = useLoaderData()
    return (
        <div className='mt-4'>
            <h2 className='text-2xl font-semibold text-center'>Test Of {QuizData.data.name}</h2>
            <div className='px-4 mt-3 mb-16 grid lg:grid-cols-2 grid-cols-1 gap-5'>
                {
                    QuizData.data.questions.map(question => <Question key={question.id} question={question}></Question>)
                }
            </div>
        </div>
    );
};

export default Quiz;