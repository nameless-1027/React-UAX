import React from 'react';

import './style.css';

export const SomeContent = ({ type }) => {
    return (
        <div className='w-full'>
            <div className='container mx-auto xl:px-[80px] xl:py-[45px] lg:px-[40px] lg:py-[24px] px-[16px] py-[12px]'>
                <div className='px-[16px] flex flex-wrap justify-between'>
                    <div className='w-full some-content'>
                        {!type ?
                            <>
                                <h1 className='md:text-[40px] text-[26px] font-bold text-white'>Some Content Here..</h1>
                                <p className='md:text-[16px] text-[12px] font-light text-white'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    <br />
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                            </> :
                            <>
                                <a href="#" className='text-[15px] text-[#CE1FEA] font-light'>ABOUT</a>
                                <h1 className='md:text-[32px] text-[22px] font-bold text-white '>What is UAX?</h1>
                                <p className='md:text-[16px] text-[12px] font-light text-white'>
                                    UAX.
                                    The network is a cutting-edge layer 1 blockchain ecosystem designed to connect digital assets and real-world applications. It tokenizes tangible items via Artificial Intelligence Smart Integration (AISI).
                                </p>
                                <p className='md:text-[16px] text-[12px] font-light text-white'>
                                    Don’t miss this chance on the UAX crypto presale 2025! Get involved in the biggest crypto ICO sale and stay ahead of the innovative blockchain game.
                                </p>
                            </>}
                    </div>
                </div>
            </div>
        </div>
    )
}