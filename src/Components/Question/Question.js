import { Card } from 'flowbite-react';
import React from 'react';

const Question = ({ question }) => {
    const AnswareCheck = (option) => {
        if (option === question.correctAnswer) {
            console.log("sothik")
        }
    }
    return (
        <div className='mt-5'>
            <Card>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {question.question.slice(3, -4)}
                </h5>
                {
                    question.options.map(option =>
                        <div onClick={() => AnswareCheck(option)} className={`cursor-pointer border-solid border-2 border-blue-600 hover:bg-blue-600 hover:text-white p-3 rounded`}>
                            {option}
                        </div>
                    )
                }
            </Card>
        </div >
    );
};

export default Question;