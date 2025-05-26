import React from 'react';

import { SectionTitle1 } from '../../common/sectionTitle1';
import { Box } from '../../common/box';

import './style.css';

export const WhyRun = () => {
    return (
        <div className='w-full'>
            <div className='container mx-auto xl:px-[80px] xl:py-[45px] lg:px-[40px] lg:py-[24px] px-[16px] py-[12px]'>
                <div className='xl:px-[40px] px-[16px] flex flex-wrap justify-between'>
                    <div className='w-full explore'>
                        <div className="xl:mb-30 md:mb-12 mb-6 head">
                            <SectionTitle1 type={4} />
                        </div>
                        <div className="flex flex-wrap w-full boxs">
                            {
                                <Box state={'whyRun'} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
