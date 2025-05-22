import React from 'react';

import { SectionTitle2 } from '../../common/sectionTitle2';

export const WhatIs = () => {
    return (
        <div className='flex flex-col container mx-auto sm:px-[38px] px-[16px] py-[15px] what-is'>
            <SectionTitle2 type={1} />
            <div className='flex flex-wrap justify-between boxes lg:sm:px-[80px] px-0'>
                <div className='md:w-1/3 w-full box'>
                    <div>
                        <div className='box-title'>
                            <h3 className='text-center md:text-[18px] '>
                                Tokenizing NFTs with Real
                                World Applications
                            </h3>
                        </div>
                        <div className='box-content'>
                            <p className='text-[14px] text-center md:block hidden'>
                                Physical Asset Tokenization.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 w-full box'>
                    <div>
                        <div className='box-title'>
                            <h3 className='text-center md:text-[18px] '>
                                Tokenizing NFTs with Real
                                World Applications
                            </h3>
                        </div>
                        <div className='box-content'>
                            <p className='text-[14px] text-center md:block hidden'>
                                Physical Asset Tokenization.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 w-full box'>
                    <div>
                        <div className='box-title'>
                            <h3 className='text-center md:text-[18px] text-[20px]'>
                                Tokenizing NFTs with Real
                                World Applications
                            </h3>
                        </div>
                        <div className='box-content'>
                            <p className='text-[14px] text-center md:block hidden'>
                                Physical Asset Tokenization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}