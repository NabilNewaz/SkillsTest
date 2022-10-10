import { Alert, Card } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ question }) => {
    const [isActive, setIsActive] = useState(true);
    const handleAnsView = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };
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
                <div className='flex justify-between'>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white max-h-screen ">
                        {question.question.slice(3, -4)}
                    </h5>
                    <FontAwesomeIcon onClick={handleAnsView} className={isActive ? '' : 'hidden'} icon={faEye} />
                    <FontAwesomeIcon onClick={handleAnsView} className={isActive ? 'hidden' : ''} icon={faEyeSlash} />
                </div>
                {
                    question.options.map(option =>
                        <div onClick={option === question.correctAnswer ? right : wrong} className='cursor-pointer border-solid border-2 border-blue-600 hover:bg-blue-600 hover:text-white p-3 rounded'>
                            {option}
                        </div>
                    )
                }
            </Card>
            <div className={isActive ? 'hidden' : ''}>
                <Alert
                    color="success"
                    onDismiss={function onDismiss() { handleAnsView() }}>
                    <span>
                        <span className="font-medium">
                            Correct Answer :
                        </span>
                        {' '}{question.correctAnswer}
                    </span>
                </Alert>
            </div>
        </div>
    );
};

export default Question;