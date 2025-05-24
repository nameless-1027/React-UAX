import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/themeContext';

import { SectionTitle1 } from '../../common/sectionTitle1';
import { SectionTitle2 } from '../../common/sectionTitle2';

import { datas } from '../../data';

import './style.css';

export const Globe = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className='flex flex-col justify-between items-center container mx-auto lg:px-[130px] px-[32px] py-[40px]'>
            <div className='w-full md:flex hidden justify-between items-center'>
                <SectionTitle1 type={1} />
            </div>
            <div className='md:hidden flex flex-col w-full'>
                <SectionTitle2 type={4} image={'line'} />
            </div>
            <div className='w-full flex justify-between items-center pt-[80px] globe'>
                <div className='md:flex hidden items-center px-[16px] w-[30%]'>
                    <img src={`/media/globe/globe-${theme}.png`} alt="globe" width={"260px"} />
                </div>
                <div className='flex items-end md:w-[70%] w-full boxes'>
                    {
                        datas.global.map((data, idx) =>
                            <div className='w-[49%] box' key={idx}>
                                <div className="box-title">
                                    <a href="#" className='flex items-center'>
                                        <img
                                            src={data.src}
                                            alt={data.alt}
                                            width={"20px"}
                                            height={"20px"}
                                            className='mr-[10px]'
                                        />
                                        {data.title}
                                    </a>
                                </div>
                                <div className="box-content">
                                    <span>{data.value}</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div >
    )
}