import React from 'react';

import { SectionTitle2 } from '../../common/sectionTitle2';
import { datas } from '../../data';

import './style.css';

export const Explore = () => {
    return (
        <div className='w-full'>
            <div className='container mx-auto xl:px-[80px] xl:py-[45px] lg:px-[40px] lg:py-[24px] px-[16px] py-[12px]'>
                <div className='xl:px-[40px] px-[16px] flex flex-wrap justify-between'>
                    <div className='w-full explore'>
                        <div className="head">
                            <SectionTitle2 type={5} image={'line'} />
                        </div>
                        <div className="flex flex-wrap w-full boxs">
                            {
                                datas.explore.map((_itm, _idx) => (
                                    <div className="p-[13px] xl:w-1/3 md:w-1/2 w-full box">
                                        <div className='w-full flex flex-col items-start'>
                                            <h6 className='flex mb-[24px] text-[#CE1FEA]'>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}