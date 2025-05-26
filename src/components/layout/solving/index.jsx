import React from 'react';

import { SectionTitle2 } from '../../common/sectionTitle2';
import { Box } from '../../common/box';

import './style.css';

export const Solving = () => {
    return (
        <div className='w-full'>
            <div className='container mx-auto xl:px-[80px] xl:py-[45px] lg:px-[40px] lg:py-[24px] px-[16px] py-[12px]'>
                <div className='flex flex-wrap justify-between explore'>
                    <div className='w-full'>
                        <SectionTitle2 type={7} image={'line'} />
                    </div>
                    <div className='w-full flex flex-wrap'>
                        <Box state={'solving'} size={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}