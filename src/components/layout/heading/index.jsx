import React, { Fragment } from 'react';

import { datas } from '../../data';

export const Heading = ({ type }) => {
    return (
        <div className="w-full heading">
            <div className='flex flex-col pt-[222px] pb-[120px] px-6 w-fit mx-auto'>
                {datas.heading[type - 1].title}
                <p className='text-wrap'>{datas.heading[type - 1].content}</p>
            </div>
        </div>
    )
}