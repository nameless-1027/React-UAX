import React from 'react';

import { datas } from '../../data';

export const SectionTitle1 = ({ type }) => {
    return (
        <div className='flex flex-wrap justify-between w-full'>
            <div className='md:w-[50%] w-full flex items-center px-[16px]'>
                <img
                    src={datas.sectionTitle1[type - 1].image}
                    alt="core1"
                    className={`${datas.sectionTitle1[type - 1].size} md:mr-[40px] mr-[20px] `}
                />
                {
                    datas.sectionTitle1[type - 1].title
                }
            </div>
            <div className='md:w-[50%] w-full flex flex-col items-end justify-center px-[16px]'>
                <div>
                    {
                        datas.sectionTitle1[type - 1].semiTitle ?
                            datas.sectionTitle1[type - 1].semiTitle :
                            <></>
                    }
                    {
                        datas.sectionTitle1[type - 1].content
                    }
                </div>
            </div>
        </div>
    )
}