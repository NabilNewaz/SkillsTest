import { Navbar } from 'flowbite-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navmenu = () => {
    return (
        <div className='lg:mt-3'>
            <Navbar fluid={true} rounded={true}>
                <Navbar.Brand>
                    <NavLink to="/">
                        <span className="text-2xl font-bold text-blue-700 uppercase">
                            Skill_Test
                        </span>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <NavLink className={({ isActive }) => isActive ? 'lg:text-blue-700 lg:bg-inherit lg:p-0 bg-blue-700 text-white py-2 rounded' : undefined} to="/home"><span className='ml-2'>Home</span></NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'lg:text-blue-700 lg:bg-inherit lg:p-0 bg-blue-700 text-white py-2 rounded' : undefined} to="/statistics"><span className='ml-2'>Statistics</span></NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'lg:text-blue-700 lg:bg-inherit lg:p-0 bg-blue-700 text-white py-2 rounded' : undefined} to="/blog"><span className='ml-2'>Blog</span></NavLink>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Navmenu;