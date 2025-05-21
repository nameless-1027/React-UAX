import React, { useState } from 'react';

import { datas } from '../../data';

export const Usecase = () => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='flex flex-col container mx-auto sm:px-[130px] px-[48px] sm:pt-[40px] pt-[20px] md:pb-[160px] pb-[60px] usecase'>
            <h1 className='text-center sm:text-[45px] text-[32px] font-bold sm:mt-[40px] mt-[20px] sm:mb-[16px] mb-[10px]'>
                <span className='text-[#CE1FEA]'>Uaxnetwork </span>
                Usecases
            </h1>
            <ul className="flex flex-wrap menu-tab">
                <li className={`${activeTab === 0 ? 'active' : ''}`} onClick={() => setActiveTab(0)}>
                    <div className="button">
                        <p className="fs-14 m-0 text-center fw-400">
                            NFTs on UAX
                        </p>
                    </div>
                </li>
                <li className={`${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)}>
                    <div className="button">
                        <p className="fs-14 m-0 text-center fw-400">UAX-WEB3.0</p>
                    </div>
                </li>
                <li className={`${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)}>
                    <div className="button">
                        <p className="fs-14 m-0 text-center fw-400">Gaming On UAX</p>
                    </div>
                </li>
                <li className={`${activeTab === 3 ? 'active' : ''}`} onClick={() => setActiveTab(3)}>
                    <div className="button">
                        <p className="fs-14 m-0 text-center fw-400">UAX dapps</p>
                    </div>
                </li>
                <li className={`${activeTab === 4 ? 'active' : ''}`} onClick={() => setActiveTab(4)}>
                    <div className="button">
                        <p className="fs-14 m-0 text-center fw-400">UAX stake</p>
                    </div>
                </li>
            </ul>
            <div className="content-inner" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="content">
                    <div className="block-text">
                        <h3 className="heading">{datas.usecase[activeTab].title}</h3>
                        <p>{datas.usecase[activeTab].heading}</p>
                    </div>
                    <div className="info">
                        <span className="icon-union-01"></span>
                        <span className="icon-union-02"></span>
                        <span className="icon-union-03"></span>
                        <span className="icon-union-04"></span>
                        <h4 className="name">{datas.usecase[activeTab].name}</h4>
                        <p className="text">{datas.usecase[activeTab].description}.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}