import React from 'react';

import { SectionTitle2 } from '../../common/sectionTitle2';

export const WhatIs = () => {
    return (
        <div className='flex flex-col container mx-auto px-[38px] py-[15px] what-is'>
            <SectionTitle2 type={1} />
            <div className='flex justify-between boxes px-[80px]'>
                <div className='w-[33.33%] box'>
                    <div>
                        <div className='box-title'>
                            <h3 className='text-center'>
                                Tokenizing NFTs with Real
                                World Applications
                            </h3>
                        </div>
                        <div className='box-content'>
                            <p className='text-[14px] text-center'>
                                Physical Asset Tokenization.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-[33.33%] box'>
                    <div>
                        <div className='box-title'>
                            <h3 className='text-center'>
                                Tokenizing NFTs with Real
                                World Applications
                            </h3>
                        </div>
                        <div className='box-content'>
                            <p className='text-[14px] text-center'>
                                Physical Asset Tokenization.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-[33.33%] box'>
                    <div>
                        <div className='box-title'>
                            <h3 className='text-center'>
                                Tokenizing NFTs with Real
                                World Applications
                            </h3>
                        </div>
                        <div className='box-content'>
                            <p className='text-[14px] text-center'>
                                Physical Asset Tokenization.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}