import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../context/themeContext';

import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
    const [isHovered, setIsHovered] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileEcosystemOpen, setIsMobileEcosystemOpen] = useState(false);

    const { theme } = useContext(ThemeContext);

    return (
        <header className='fixed top-0 left-0 flex justify-between items-center h-[80px] w-full z-10'>
            <div className='container mx-auto px-[12px] flex justify-between items-center xl:max-w-[1440px]' >
                <div className="flex items-center justify-between xl:px-[80px] w-full">
                    <img
                        src={`/media/logo/${theme}.png`}
                        alt="UAX Logo"
                        width={130}
                    />
                    <nav>
                        <ul className='flex items-center'>
                            <li className='mr-[40px] lg:block hidden'><Link to="/">Home</Link></li>
                            <li
                                className='mr-[40px]  py-[30px] lg:block hidden'
                                onMouseEnter={() => setIsOpen(true)}
                                onMouseLeave={() => setIsOpen(false)}
                            >
                                Ecosystem
                                <i className='fa-solid fa-chevron-down size-[14px] absolute right-[-24px] top-[34px]' />
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.ul className='absolute top-full left-0 sub-menu fade-up'
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 20 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <li
                                                onMouseOver={() => setIsHovered(1)}
                                                onMouseLeave={() => setIsHovered(0)}
                                            ><Link
                                                to="/roadmap"
                                            >Uax Wallet</Link></li>
                                            <li
                                                onMouseOver={() => setIsHovered(2)}
                                                onMouseLeave={() => setIsHovered(0)}
                                            ><Link
                                                to="/roadmap"
                                            >Uax DFS</Link></li>
                                            <li
                                                onMouseOver={() => setIsHovered(3)}
                                                onMouseLeave={() => setIsHovered(0)}
                                            ><Link
                                                to="/roadmap"
                                            >Uax Scan</Link></li>
                                            <li
                                                onMouseOver={() => setIsHovered(4)}
                                                onMouseLeave={() => setIsHovered(0)}
                                            ><Link
                                                to="/roadmap"
                                            >Github</Link></li>
                                            <AnimatePresence>
                                                {isHovered !== 0 && (
                                                    <motion.div
                                                        className="line"
                                                        style={isHovered ? { top: 44 * isHovered } : { display: "none" }}
                                                        initial={{ width: 0 }}
                                                        animate={{ width: "100%" }}
                                                        transition={{ duration: 0.4 }}
                                                    />
                                                )}
                                            </AnimatePresence>
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </li>
                            <li className='mr-[40px] lg:block hidden'>
                                <Link to="/roadmap">
                                    Usecases
                                </Link>
                            </li>
                            <li className='mr-[40px] lg:block hidden'>
                                <Link to="/roadmap">
                                    Roadmap
                                </Link>
                            </li>
                            <li className='mr-[40px] lg:block hidden'>
                                <Link to="/roadmap">
                                    FAQ
                                </Link>
                            </li>
                            <li className='lg:block hidden'>
                                <Link to="/roadmap">
                                    Whitepaper
                                </Link>
                            </li>
                            <li className='ml-[100px] sm:block hidden'>
                                <a href="#" className='btn'>
                                    Uax Docs
                                </a>
                            </li>
                            <li className='lg:hidden block'>
                                <div
                                    className="mobile-button"
                                    id={isMobileMenuOpen ? 'active' : ''}
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                >
                                    <span />
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        id="main-nav-mobi"
                        className="main-nav overflow-hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <ul id="menu-primary-menu" className="menu overflow-hidden">
                            <li className="menu-item">
                                <a href="/" className="header-link" >Home</a>
                            </li>

                            <li
                                className="menu-item menu-item-has-children"
                                onClick={() => setIsMobileEcosystemOpen(!isMobileEcosystemOpen)}
                            >
                                <a href="#" className="header-link">Ecosystem</a>
                                <span className="icon-arrow" id={isMobileEcosystemOpen ? "active" : ""} />
                            </li>
                            <AnimatePresence>
                                {isMobileEcosystemOpen && (
                                    <motion.ul
                                        className='top-full w-full left-0 sub-menu fade-up'
                                        id="children-menu"
                                        initial={{ height: 0, visibility: "hidden" }}
                                        animate={{ height: "auto", visibility: "visible" }}
                                        exit={{ height: 0, visibility: "hidden" }}
                                        transition={{ duration: 0.4 }}
                                        style={{ display: "block", boxShadow: "none" }}
                                    >
                                        <li className="menu-item">
                                            <a
                                                target="_blank"
                                                href="https://uaxwallet.com"
                                                className="header-link"
                                            >Uax Wallet</a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                target="_blank"
                                                href="https://dfs.uax.network/"
                                                className="header-link"
                                            >Uax DFS</a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                target="_blank"
                                                href="https://uaxscan.com/"
                                                className="header-link"
                                            >Uax scan</a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="https://github.com/uaxnetwork"
                                                className="header-link"
                                            >Github</a>
                                        </li>
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                            <li className="menu-item">
                                <a href="#usecase" className="header-link">Usecases</a>
                            </li>

                            <li className="menu-item">
                                <a href="roadmap.html" className="header-link">Roadmap</a>
                            </li>

                            <li className="menu-item">
                                <a href="#faq_one" className="header-link">FAQ</a>
                            </li>
                            <li className="menu-item">
                                <a target="_blank" href="" className="header-link">Whitepaper</a>
                            </li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header >
    );
};
