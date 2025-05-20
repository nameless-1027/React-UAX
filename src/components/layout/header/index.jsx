import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className='fixed top-0 left-0 flex justify-between items-center p-4 h-[80px] w-full z-10'>
            <div className='container mx-auto flex justify-between items-center xl:max-w-[1440px]'>
                <div className="flex items-center justify-between xl:px-[95px] w-full">
                    <img
                        src={"https://images.uaxdlts.com/uax-landing/assets/images/logo/uax_white_logo.png?quality=lossless"}
                        alt="UAX Logo"
                        width={130}
                    />
                    <nav>
                        <ul className='flex items-center'>
                            <li className='lg:mr-[40px] mr-[20px]'><Link to="/">Home</Link></li>
                            <li className='lg:mr-[40px] mr-[20px] text-white'>
                                Ecosystem
                                <i className='fa-solid fa-chevron-down text-white size-[14px] ml-[10px] mr-[-10px]' />
                                <ul className='absolute top-full left-0 sub-menu fade-up'>
                                    <li><Link to="/roadmap">Uax Wallet</Link></li>
                                    <li><Link to="/roadmap">Uax DFS</Link></li>
                                    <li><Link to="/roadmap">Uax Scan</Link></li>
                                    <li><Link to="/roadmap">Github</Link></li>
                                </ul>
                            </li>
                            <li className='lg:mr-[40px] mr-[20px]'><Link to="/roadmap">Usecases</Link></li>
                            <li className='lg:mr-[40px] mr-[20px]'><Link to="/roadmap">Roadmap</Link></li>
                            <li className='lg:mr-[40px] mr-[20px]'><Link to="/roadmap">FAQ</Link></li>
                            <li ><Link to="/roadmap">Whitepaper</Link></li>
                            <li className='lg:ml-32 ml-16'><a href="#" className='btn'>Uax Docs</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};
