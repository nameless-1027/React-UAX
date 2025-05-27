import React, { useContext } from 'react';

import { ThemeContext } from '../../../context/themeContext';

import { SectionTitle2 } from '../../common/sectionTitle2';
import { datas } from '../../data';

import './style.css';

export const FilesForKit = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className='w-full'>
            <div className='container mx-auto xl:px-[80px] xl:py-[45px] lg:px-[40px] lg:py-[24px] px-[16px] py-[12px]'>
                <div className='xl:px-[40px] px-[16px] flex flex-wrap justify-between'>
                    <div className='w-full kit'>
                        <div className="head">
                            <SectionTitle2 type={6} image={'line'} />
                        </div>
                        <div className="flex flex-wrap w-full boxs">
                            {
                                datas.kit.map((_itm, _idx, _arr) => (
                                    <div className={`p-[21px] lg:w-1/3 sm:w-1/2 w-full box ${_arr.length - 1 === _idx ? 'lg:block sm:hidden block' : ''}`} key={_idx}>
                                        <div className='w-full flex flex-col items-start'>
                                            <div className='w-full font-400 text-[22px] head'>
                                                {`.${_itm.formater}`}
                                            </div>
                                            <div className='flex flex-col items-start main'>
                                                <div className="w-full flex justify-center items-end h-[55px] mb-[5px]">
                                                    <img src={`media/${theme === 'dark' ? _itm.imgDark : _itm.imgLight}`} className={`${_idx === 1 ? 'w-[66px]' : 'w-[130px]'}`} alt="logo" />
                                                </div>
                                                <h6 className='my-[17px] text-[18px]'>{`The ${_itm.type}`}</h6>
                                                <div className="size">{`${_itm.size} KB`}</div>
                                                <p className='text-[15px] font-extralight'>{_itm.description}</p>
                                                <a href="#" className="download">
                                                    DOWNLOAD
                                                </a>
                                            </div>
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