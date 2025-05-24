import React from 'react';

import './style.css';

export const SomeContent = () => {
    return (
        <div className='w-full'>
            <div className='container mx-auto xl:px-[80px] xl:py-[45px] lg:px-[40px] lg:py-[24px] px-[16px] py-[12px]'>
                <div className='px-[16px] flex flex-wrap justify-between'>
                    <div className='w-full some-content'>
                        <h1 className='md:text-[40px] text-[26px] font-bold text-white'>Some Content Here..</h1>
                        <p className='md:text-[16px] text-[12px] font-light text-white'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            <br />
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}