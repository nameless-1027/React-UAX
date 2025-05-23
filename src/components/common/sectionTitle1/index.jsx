import React from 'react';

import { datas } from '../../data';

export const SectionTitle1 = ({ type }) => {
    return (
        <>
            <div className='md:w-[50%] w-full flex items-center px-[16px]'>
                <img
                    src={datas.sectionTitle1[type - 1].image}
                    alt="core1"
                    className='md:mr-[40px] mr-[20px] md:w-[14px] w-[10px] md:h-[180px] h-[100px]'
                />
                {
                    datas.sectionTitle1[type - 1].title
                }
            </div>
            <div className='md:w-[50%] w-full flex flex-col items-end justify-center px-[16px]'>
                <div>
                    {
                        type === 3 ?
                            <h6 className='text-[20px] font-bold'>Deflationary Mechanisms:</h6>
                            : <img src="media/lines/build.svg" className='md:block hidden' alt="build" />
                    }
                    {
                        datas.sectionTitle1[type - 1].content
                    }
                </div>
            </div>
        </>
    )
}