import React from 'react';

import './style.css';

export const EnterEmail = () => {
    return (
        <div className='lg:mb-24 mb-12 enter-email'>
            <div className='md:w-auto md:max-w-auto max-w-[540px]'>
                <input type="text" placeholder='Enter your email' />
                <a href="#" className='btn btn-large join-btn'>
                    <span className='effect'>Subscribe</span>
                </a>
            </div>
        </div>
    )
}