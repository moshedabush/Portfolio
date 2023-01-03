import React from 'react';

const AppHeader = () => {

    return (
        <header className='app-header flex justify-space-between align-center'>
            <div className="logo-container">
                <span>Moshe Dabush</span>
            </div>
            <div className='flex'>
                <ul className="clean-list flex">
                    <li>
                        <a href="#./">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default AppHeader;
