import React from 'react';

import { SectionTitle1 } from '../../common/sectionTitle1';

export const Glance = () => {
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
                <div className='flex flex-col justify-center items-center mb-[80px]'>
                    <h6 className='text-[14px] m-0 text-center text-white font-bold'>Total Supply</h6>
                    <h1 className='text-[14px] text-center text-white font-bold'>1,000,000</h1>
                </div>
                <img src="media/glance/tokenomics-desktop.png" className='sm:block hidden' alt="tokenomics" />
                <img src="media/glance/tokenomics-mobile.png" className='sm:hidden block' alt="tokenomics" />
                <div className="chat-label marketing">
                    <h1 className="fs-16 mb-0 text-center">15%</h1>
                    <p className="fs-14 text-white m-0 text-center">Marketing</p>
                </div>
                <div className="chat-label presale">
                    <h1 className="fs-16 mb-0 text-center">35%</h1>
                    <p className="fs-14 text-white m-0 text-center">Presale</p>
                </div>
                <div className="chat-label airdrops">
                    <h1 className="fs-16 mb-0 text-center">25%</h1>
                    <p className="fs-14 text-white m-0 text-center">Airdrops</p>
                </div>
                <div className="chat-label rewards">
                    <h1 className="fs-16 mb-0 text-center">20%</h1>
                    <p className="fs-14 text-white m-0 text-center">Rewards</p>
                </div>
                <div className="chat-label dev-team">
                    <h1 className="fs-16 mb-0 text-center">5%</h1>
                    <p className="fs-14 text-white m-0 text-center">Dev Team</p>
                </div>
                <div className="chat-label legal">
                    <h1 className="fs-16 mb-0 text-center">5%</h1>
                    <p className="fs-14 text-white m-0 text-center">Legal</p>
                </div>
            </div>
        </div>
    )
}