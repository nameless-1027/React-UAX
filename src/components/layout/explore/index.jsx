import React from 'react';

import { SectionTitle2 } from '../../common/sectionTitle2';

export const Explore = () => {
    return (
        <div className='w-full'>
            <div className='container mx-auto xl:px-[80px] xl:py-[45px] lg:px-[40px] lg:py-[24px] px-[16px] py-[12px]'>
                <div className='xl:px-[76px] px-[16px] flex flex-wrap justify-between'>
                    <div className='w-full explore'>
                        <div className="head">
                            <SectionTitle2 type={5} image={'line'} />
                        </div>
                        <div className="flex flex-wrap w-full boxs">
                            <div className="p-4 w-1/3 box">
                                <div className='w-full flex flex-col items-start'>
                                    <h6 className='flex mb-[24px] text-[#CE1FEA]'>
                                        <span className='mr-[2px]'>
                                            <img src="media/icons/hybrid.png" alt="hybrid" />
                                        </span>
                                        Hybrid Architecture
                                    </h6>
                                    <p className='my-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}