import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiztopic from '../Quiztopic/Quiztopic';

const Quiztopics = () => {
    const QuizTopic = useLoaderData()
    return (
        <div className='px-2'>
            <div className='lg:mx-2 grid grid-cols-4 gap-4'>
                {QuizTopic.data.map(topic => <Quiztopic key={topic.id} topic={topic}></Quiztopic>)}
            </div>
        </div>
    );
};

export default Quiztopics;