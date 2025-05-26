import React from 'react';

import { SectionTitle2 } from '../../common/sectionTitle2';
import { datas } from '../../data';

import './style.css';

export const Updates = () => {
    return (
        <div className='w-full'>
            <div className='container mx-auto xl:px-[80px] xl:py-[45px] lg:px-[40px] lg:py-[24px] px-[16px] py-[12px]'>
                <div className='flex flex-wrap justify-between explore updates'>
                    <div className='w-full mb-11'>
                        <SectionTitle2 type={8} image={'dot'} />
                    </div>
                    <div className='flex justify-between items-center flex-wrap boxes'>
                        {
                            datas.updates.map((_itm, _idx) => (
                                <div className="lg:w-1/2 w-full p-4 flex flex-col box">
                                    <div className="w-full">
                                        <h6 className='sm:text-[24px] text-[18px] leading-6 sm:mb-6 mb-4'>{_itm.title}</h6>
                                        <p className='sm:text-[15px] text-[14px] mx-0 sm:mb-[35px] mb-6 leading-5 font-extralight'>
                                            {_itm.content}
                                        </p>
                                        <a href="#" className='download'>{_itm.action}</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}