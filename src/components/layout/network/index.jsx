import React from 'react';

import { datas } from '../../data';

export const Network = () => {
    return (
        <div className='container mx-auto w-full pt-[60px] pb-[40px] network sm:block hidden'>
            <h1 className='md:text-[45px] text-[32px] font-bold text-center leading-[46px] mt-[36px] mb-[16px]'>
                What's
                <span className='text-[#7D4689]'> New On </span><span className='text-[#CE1FEA]'>
                    Uaxnetwork</span>
            </h1>
            <div id="network">
                {
                    datas.network.map((data, idx) => <div className={`box box-${data.location}`} key={idx}>
                        <div className="box-inner">
                            <div className="detail">
                                <div className="title">
                                    <h6 className='text-[18px]'>{data.title}</h6>
                                </div>
                                <div className="content">
                                    <p className='text-[14px] font-light mb-0'>{data.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
