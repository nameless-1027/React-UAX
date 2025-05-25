import React from 'react';

import { datas } from '../../data';

import './style.css';

export const Time = () => {
    return (
        <div className='w-full'>
            <div className='container mx-auto xl:px-[80px] lg:px-[40px] px-[16px] portal'>
                <div className='xl:px-[60px] px-0 flex flex-wrap justify-between boxes'>
                    {
                        datas.times.map((_time, _idx) =>
                            <div className='sm:w-1/2 w-full px-[10px]' key={_idx}>
                                <div className='box'>
                                    <div className='head' key={_idx} >
                                        <h5>{_time.head}</h5>
                                    </div>
                                    <div className="flex items-end main">
                                        {
                                            _time.Nr.split('').map((_itm, _id) =>
                                                <span className='Nr' key={_id}>{_itm}</span>
                                            )
                                        }
                                        {" "}
                                        <p className='ml-[4px] my-0'>{_time.unit}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}