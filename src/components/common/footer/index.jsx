import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/themeContext';

export const Footer = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className='flex flex-col container mx-auto xl:px-[38px] px-[16px] pt-[46px] pb-[15px]'>
            <div className='lg:xl:px-[80px] px-0'>
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
                    <div className='flex md:gap-[41px] gap-0 lg:justify-between justify-center md:flex-nowrap flex-wrap footer-right'>
                        <div className='flex flex-col miniMoblie:px-0 px-[28px]'>
                            <div className="title">SITEMAP</div>
                            <div className="flex content-list">
                                <ul>
                                    <li><a href="/home">Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Technology</a></li>
                                    <li><a href="#">Run-a-node</a></li>
                                    <li><a href="/metrices">Metrices</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className=' miniMoblie:px-0 px-[28px]'>
                            <ul className='pt-[20px]'>
                                <li><a href="#">Presskit</a></li>
                                <li><a href="/roadmap">Roadmap</a></li>
                                <li><a href="#">Tokenomics</a></li>
                                <li><a href="#">Whitepaper</a></li>
                                <li><a href="/podcasts">Podcast</a></li>
                            </ul>
                        </div>
                        <div className=' miniMoblie:px-0 px-[28px]'>
                            <ul className='pt-[20px]'>
                                <li><a href="#">Governance</a></li>
                                <li><a href="#">DAO’s</a></li>
                                <li><a href="#">Staking</a></li>
                                <li><a href="#">Whitepaper</a></li>
                            </ul>
                        </div>
                        <div className='flex flex-col miniMoblie:px-0 px-[28px]'>
                            <div className="title">LEGALS</div>
                            <div className="flex content-list">
                                <ul>
                                    <li><a href="#">Terms of Use</a></li>
                                    <li><a href="#">Cookie Policy</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}