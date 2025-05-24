import React from 'react';

import { datas } from '../../data';

import './style.css';

export const Episode = () => {
    return (
        <div className='w-full'>
            <div className='container mx-auto xl:px-[80px] xl:py-[45px] lg:px-[40px] lg:py-[24px] px-[16px] py-[12px]'>
                <div className='xl:px-[10px] px-0 flex flex-wrap justify-between episode'>
                    <div className="w-full text-center mb-[50px] head">
                        <h1 className="text-center text-[32px] font-semibold">
                            <span className="text-[#9B07B3]">Latest </span>
                            Episodes
                        </h1>
                    </div>
                    <div className="flex main">
                        {
                            datas.episodes.map((_itm, _idx, _arr) =>
                                <div
                                    className={`mx-[16px] box 
                                        ${_idx + 1 === _arr.length ?
                                            'md:block hidden' :
                                            (_idx + 2 === _arr.length ? 'moblie:block hidden' : '')}`}
                                >
                                    <div className='mb-[25px] video'>
                                        <video poster={`media/podcates/${_itm.Nr}.png`} >
                                            {/* <source /> */}
                                        </video>
                                    </div>
                                    <p className="text-[16px] m-0 my-[6px] title sm-title">EPISODE {_itm.Nr}</p>
                                    <p className="text-[26px] font-semibold m-0 mb-7 title main-title">
                                        {_itm.title}</p>
                                    <p className="m-0 date">{_itm.date}</p>
                                </div>
                            )
                        }
                    </div>
                    <div className="w-full flex justify-center mt-[75px] item-center more">
                        <a href="#" className='btn btn-ghost'>
                            <span className='text-[16px] line-height-[20px]  '>
                                Read More
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}