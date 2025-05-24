import React from 'react';

import { SectionTitle2 } from '../../common/sectionTitle2';

export const Join = ({ type }) => {
    return (
        <div className='flex flex-col justify-between items-center container mx-auto px-[32px] md:px-[130px] py-[40px]'>
            <SectionTitle2 type={3} image={'dot'} />
            {type ? <a href="#" className='btn btn-large' id='join-btn'>
                <span>Join Community</span>
            </a> : <></>}
        </div>
    )
}