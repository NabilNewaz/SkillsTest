import { Navbar } from 'flowbite-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navmenu = () => {
    return (
        <div className='lg:mt-3'>
            <Navbar fluid={true} rounded={true}>
                <Navbar.Brand>
                    <NavLink to="/"><span className="text-2xl font-bold text-blue-700 uppercase">
                        Skill_Test
                    </span></NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <NavLink className={({ isActive }) => isActive ? 'text-blue-700' : undefined} to="/home">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-blue-700' : undefined} to="/statistics">Statistics</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-blue-700' : undefined} to="/blog">Blog</NavLink>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Navmenu;