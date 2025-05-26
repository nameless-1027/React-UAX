import React from 'react';

import { datas } from '../../data';
import './style.css';

export const StakingBox = () => {
    return (
        <div className='w-full'>
            <div className='container mx-auto xl:px-[80px] lg:px-[40px] px-[16px]'>
                <div className='flex flex-wrap justify-between'>
                    <div className='w-full px-4 flex flex-col staking-box'>
                        <div className="box">
                            {
                                datas.stakingBox.map((_itm, _idx) => (
                                    <div className='sm:mb-14 mb-8 w-full flex flex-col' key={_idx}>
                                        <div className='flex items-center'>
                                            <div className='flex justify-center items-center image'>
                                                <img src="media/uax favicon.png" alt="favicon" />
                                            </div>
                                            <h6 className='text-[22px] text-[#CE1FEA] font-normal'>
                                                {_itm.title}
                                            </h6>
                                        </div>
                                        <p className='font-light leading-tight my-5'>
                                            {_itm.content}
                                        </p>

                                        {
                                            _itm.action ?
                                                <a href="#" className='mt-2 btn w-max questions'>
                                                    <span className='flex items-center font-light'>
                                                        {_itm.action}
                                                        <i className='fas fa-arrow-right icons'></i>
                                                    </span>
                                                </a> : <></>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}