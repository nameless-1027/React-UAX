import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { datas } from '../../data';
import { ThemeContext } from '../../../context/themeContext';

export const Footer = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleContent = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
        console.log(activeIndex);
    };

    const { theme } = useContext(ThemeContext);

    return (
        <div className='flex flex-col container mx-auto xl:px-[38px] px-[16px] pt-[46px] pb-[15px]'>
            <div className='px-0'>
                <div className='flex lg:flex-row flex-col lg:gap-[16px] gap-8 lg:justify-between justify-center sm:p-[68px] p-[36px] footer'>
                    <div className='flex flex-col footer-left'>
                        <img src={`media/logo/${theme}.png`} alt="logo" className='h-[32px] w-[117px] mb-[26px]' />
                        <p className='text-[15px] mx-0 font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                        <p className='text-[14px] font-light m-0'>Copyright © UAX</p>
                        <div className='flex justify-between items-end mt-[35px]'>
                            <ul className="flex gap-[16px] list-social">
                                <li className='flex'>
                                    <a href="" target="_blank">
                                        <span className="fab fa-facebook-f">
                                        </span>
                                    </a>
                                </li>
                                <li className='flex'>
                                    <a href="https://www.instagram.com/uaxnetwork/" target="_blank">
                                        <span className="fab fa-instagram">
                                        </span>
                                    </a>
                                </li>
                                <li className='flex'>
                                    <a href="https://x.com/uaxnetwork" target="_blank">
                                        <span className="fab fa-x-twitter"></span>
                                    </a>
                                </li>
                                <li className='flex'>
                                    <a href=" https://discord.com/invite/64QcHvsuuW" target="_blank">
                                        <span className="fab fa-discord">
                                        </span>
                                    </a>
                                </li>
                                <li className='flex'>
                                    <a href=" https://t.me/uaxnetwork" target="_blank">
                                        <span className="fab fa-telegram">
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='md:gap-[41px] gap-0 lg:justify-between justify-center md:flex-nowrap flex-wrap lg:flex hidden footer-right'>
                        <div className='flex flex-col miniMoblie:px-0 px-[28px]'>
                            <div className="title">SITEMAP</div>
                            <div className="flex content-list">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">About Us</Link></li>
                                    <li><Link to="/innovative">Technology</Link></li>
                                    <li><Link to="/runnode">Run-a-node</Link></li>
                                    <li><Link to="/metrices">Metrices</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className=' miniMoblie:px-0 px-[28px]'>
                            <ul className='pt-[20px]'>
                                <li><Link to="/presskit">Presskit</Link></li>
                                <li><Link to="/roadmap">Roadmap</Link></li>
                                <li><Link to="#">Tokenomics</Link></li>
                                <li><Link to="#">Whitepaper</Link></li>
                                <li><Link to="/podcasts">Podcast</Link></li>
                            </ul>
                        </div>
                        <div className=' miniMoblie:px-0 px-[28px]'>
                            <ul className='pt-[20px]'>
                                <li><Link to="/governance">Governance</Link></li>
                                <li><Link to="/DAO">DAO’s</Link></li>
                                <li><Link to="/staking">Staking</Link></li>
                                <li><Link to="#">Whitepaper</Link></li>
                                <li><Link to="/future">Future</Link></li>
                            </ul>
                        </div>
                        <div className='flex flex-col miniMoblie:px-0 px-[28px]'>
                            <div className="title">LEGALS</div>
                            <div className="flex content-list">
                                <ul>
                                    <li><Link to="/terms">Terms of Use</Link></li>
                                    <li><Link to="/cookie">Cookie Policy</Link></li>
                                    <li><Link to="/privacy">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {
                        datas.footer.map((_itm, _idx) => (
                            <div
                                className="flat-toggle lg:hidden block"
                                id={activeIndex === _idx ? 'active' : ''}
                                onClick={() => toggleContent(_idx)}
                                key={_idx}
                            >
                                <h5 className="toggle-title">{_itm.title}</h5>
                                <AnimatePresence>
                                    {activeIndex === _idx && <motion.p
                                        className='toggle-content'
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className='toggle-list'>
                                            {
                                                _itm.content.map((_contentItm, _contentId) => <Link to={_contentItm.path} key={_contentId}>{_contentItm.content}</Link>)
                                            }
                                        </div>
                                    </motion.p>}
                                </AnimatePresence>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}