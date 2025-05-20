import React from 'react';


export const Footer = () => {
    return (
        <div className='flex flex-col container mx-auto px-[46px] pt-[40px] footer'>
            <div className='flex justify-between items-end pb-[20px]'>
                <div className='flex flex-col items-start px-[15px]'>
                    <h6>Don't miss out, Stay updated</h6>
                    <input type="text" placeholder='Enter your email' />
                    <a href="#" className='btn btn-large' id='join-btn'>
                        <span className='effect'>Subscribe</span>
                    </a>
                </div>
                <div className='flex justify-between items-end px-[15px]'>
                    <ul className="flex list-social">
                        <li>
                            <a href="https://x.com/uaxnetwork" target="_blank">
                                <span className="fab fa-x-twitter"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/uaxnetwork/" target="_blank">
                                <span className="fab fa-instagram">
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="" target="_blank">
                                <span className="fab fa-facebook-f">
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href=" https://t.me/uaxnetwork" target="_blank">
                                <span className="fab fa-telegram-plane">
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/uaxnetwork" target="_blank">
                                <span className="fab fa-youtube"></span>
                            </a>
                        </li>
                        <li>
                            <a href=" https://discord.com/invite/64QcHvsuuW" target="_blank">
                                <span className="fab fa-discord">
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-start items-center py-[11px] px-[15px]'>
                <p className='text-[#FFFFFF80] text-[14px] font-light m-0'>© 2025 UAX. All rights reserved</p>
            </div>
        </div >
    )
}