import { Card } from 'flowbite-react';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ question }) => {
    const right = () => toast.success("Your answer is correct 😊", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
    const wrong = () => toast.error("Your answer is wrong 😞", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
    return (
        <div className='mt-5'>
            <ToastContainer />
            <Card>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {question.question.slice(3, -4)}
                </h5>
                {
                    question.options.map(option =>
                        <div onClick={option === question.correctAnswer ? right : wrong} className='cursor-pointer border-solid border-2 border-blue-600 hover:bg-blue-600 hover:text-white p-3 rounded'>
                            {option}
                        </div>
                    )
                }
            </Card>
        </div >
    );
};

export default Question;