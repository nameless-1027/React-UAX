import React from 'react';

import { datas } from '../../components/data';
import { AboutStaking } from '../../components/layout/aboutStaking';
import { StakingBox } from '../../components/layout/stakingBox';
import { Questions } from '../../components/layout/questions';

import './style.css';

export const Staking = () => {
    return (
        <>
            <div className="w-full heading explore staking">
                <div className='flex flex-col sm:pt-[222px] pt-[180px] sm:pb-[120px] pb-[80px] px-6 w-fit mx-auto'>
                    <h1 className="text-center text-[50px] font-semibold mb-4">
                        <span className="text-[#9B07B3]">How </span>
                        to
                        <span className="text-[#CE1FEA]"> Stake </span>
                        Your UAX
                    </h1>
                    <div className="flex flex-wrap justify-between sm:mt-6 mt-4 boxes">
                        {
                            datas.staking.map((_itm, _idx) => (
                                <div className="lg:w-1/3 md:w-1/2 w-full box" key={_idx}>
                                    <div>
                                        <p className='m-0 mb-2 text-[15px] font-light'>{_itm.title}</p>
                                        <h6 className='text-[24px] text-[#CE1FEA]'>{_itm.content}</h6></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <AboutStaking />
            <StakingBox />
            <Questions state={'further'} />
        </>
    )
}