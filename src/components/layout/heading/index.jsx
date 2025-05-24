import React from 'react';

import { datas } from '../../data';

import './style.css';

export const Heading = ({ type }) => {
    return (
        <div className="w-full heading">
            <div className='flex flex-col sm:pt-[222px] pt-[180px] sm:pb-[120px] pb-[80px] px-6 w-fit mx-auto'>
                {datas.heading[type - 1].title}
                <p className='text-wrap'>{datas.heading[type - 1].content}</p>
            </div>
        </div>
    )
}