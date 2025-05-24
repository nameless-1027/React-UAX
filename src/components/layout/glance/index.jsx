import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/themeContext';

import { SectionTitle1 } from '../../common/sectionTitle1';
import { datas } from '../../data';

import './style.css';

export const Glance = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className='flex flex-col justify-between items-center container mx-auto lg:px-[130px] px-[32px] sm:py-[40px] py-[20px]'>
            <div className='w-full justify-between items-center md:flex hidden'>
                <SectionTitle1 type={3} />
            </div>
            <div className='md:hidden block w-full'>
                <div className='flex justify-center items-center'>
                    <img src="media/lines/core1.png" className='w-[12px] h-[90px] mr-[20px]' alt="core1" />
                    <h1>
                        <span style={{ color: "#CE1FEA" }}>Tokenomics </span>
                        at a<br /><span><b style={{ color: "#7D4689" }}> Glance</b></span>
                    </h1>
                </div>
            </div>
            <div className='w-full flex flex-col justify-between items-center sm:py-[24px] py-[38px]'>
                <div className='sm:hidden flex flex-col justify-center items-center mb-[80px]'>
                    <h6 className='text-[14px] m-0 text-center font-bold'>Total Supply</h6>
                    <h1 className='text-[14px] text-center font-bold'>1,000,000</h1>
                </div>
                <img src={`/media/glance/tokenomics-desktop-${theme}.png`} className='sm:block hidden' alt="tokenomics" />
                <img src={`/media/glance/tokenomics-mobile-${theme}.png`} className='sm:hidden block' alt="tokenomics" />
                {
                    datas.glance.map((label, index) => (
                        <div className={`chat-label ${label.label.toLocaleLowerCase()}`} key={index}>
                            <h1 className="fs-16 mb-0 text-center">{label.value}</h1>
                            <p className="fs-14 m-0 text-center">{label.label}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}