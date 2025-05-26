import React from 'react';

import { SectionTitle1 } from '../../common/sectionTitle1';
import './style.css';

export const Meet = () => {
    return (
        <div className='w-full'>
            <div className='container mx-auto xl:px-[80px] xl:py-[45px] lg:px-[40px] lg:py-[24px] px-[16px] py-[12px]'>
                <div className='flex flex-wrap justify-between explore meet'>
                    <div className='w-full mb-11'>
                        <SectionTitle1 type={5} />
                    </div>
                    <div className='flex justify-between items-center flex-wrap'>
                        <div className="lg:w-1/2 w-full p-4 left">
                            <div className='w-full flex justify-center items-center'>
                                <img src="media/layout/meet.png" alt="meet" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full p-4 right">
                            <div className="w-full">
                                <h6 className='text-white text-[20px] leading-6 mb-6'>Our Machine (Machine Name)</h6>
                                <p className='text-white text-[15px] mb-0 leading-5 font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco aboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}