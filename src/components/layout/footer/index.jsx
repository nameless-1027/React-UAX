import React from 'react';


export const Footer = () => {
    return (
        <div className='flex flex-col container mx-auto lg:px-[46px] px-[16px] sm:pt-[40px] pt-[20px] footer'>
            <div className='flex md:flex-row flex-col md:justify-between justify-center md:items-end items-center pb-[20px]'>
                <div className='flex flex-col md:items-start items-center px-[16px] md:w-auto w-full md:max-w-auto max-w-[540px]'>
                    <h6>Don't miss out, Stay updated</h6>
                    <input type="text" placeholder='Enter your email' />
                    <a href="#" className='btn btn-large join-btn'>
                        <span className='effect'>Subscribe</span>
                    </a>
                </div>
                <div className='flex justify-between items-end px-[16px] md:mt-0 mt-[28px]'>
                    <ul className="flex list-social">
                        <li className='md:flex hidden'>
                            <a href="https://x.com/uaxnetwork" target="_blank">
                                <span className="fab fa-x-twitter"></span>
                            </a>
                        </li>
                        <li className='md:flex hidden'>
                            <a href="https://www.instagram.com/uaxnetwork/" target="_blank">
                                <span className="fab fa-instagram">
                                </span>
                            </a>
                        </li>
                        <li className='flex'>
                            <a href="" target="_blank">
                                <span className="fab fa-facebook-f">
                                </span>
                            </a>
                        </li>
                        <li className='flex'>
                            <a href=" https://t.me/uaxnetwork" target="_blank">
                                <span className="fab fa-telegram-plane">
                                </span>
                            </a>
                        </li>
                        <li className='flex'>
                            <a href="https://x.com/uaxnetwork" target="_blank">
                                <span className="fab fa-youtube"></span>
                            </a>
                        </li>
                        <li className='flex'>
                            <a href=" https://discord.com/invite/64QcHvsuuW" target="_blank">
                                <span className="fab fa-discord">
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex md:justify-start justify-center items-center py-[11px] px-[16px]'>
                <p className='text-[14px] font-light m-0'>© 2025 UAX. All rights reserved</p>
            </div>
        </div >
    )
}