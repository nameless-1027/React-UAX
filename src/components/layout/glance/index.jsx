import React from 'react';

import { SectionTitle1 } from '../../common/sectionTitle1';

export const Glance = () => {
    return (
        <div className='flex flex-col justify-between items-center container mx-auto px-[130px] py-[40px]'>
            <div className='w-full flex justify-between items-center'>
                <SectionTitle1 type={3} />
            </div>
            <div className='w-full flex justify-between items-center'>
                <img src="media/glance/tokenomics-desktop.png" alt="tokenomics" />
            </div>
        </div>
    )
}