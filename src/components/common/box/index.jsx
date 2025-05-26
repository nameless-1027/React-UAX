import React from 'react';

import { datas } from '../../data';

import './style.css';

export const Box = ({ state, size }) => {
    return datas[state].map((_itm, _idx) => (
        <div key={_idx} className={`p-[13px] ${size ? 'xl:w-1/4' : 'xl:w-1/3'} md:w-1/2 w-full box`}>
            <div className='w-full flex flex-col items-start'>
                <h6 className={`flex mb-${size ? '0' : '[24px]'} text-[#CE1FEA]`}>
                    <span className='mr-[2px]'>
                        <img src={`media/icons/${_itm.image}.png`} alt="hybrid" />
                    </span>
                    {_itm.title}
                </h6>
                <p className='my-0 font-light'>{_itm.content}</p>
            </div>
        </div>
    ))
}