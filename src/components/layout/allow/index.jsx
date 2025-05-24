import React from "react";

import './style.css';

export const Allow = () => {
    return (
        <div className="w-full pt-[150px] pb-[80px]">
            <div className="container mx-auto sm:px-[12px] px-[18px] ">
                <div className="sm:px-[80px] px-0 mx-[-12px] flex xl:flex-row flex-col allow">
                    <div className="xl:w-[50%] w-full flex flex-col px-[15px]">
                        <h1 className="title">Allow Us To Introduce Ourselves</h1>
                        <p className="text-[20px] content my-0">ICOLand is a collection of 10,000 Bored
                            Ape NFTs unique digital collectibles living on the Ethereum blockchain.</p>
                        <div className="flex md:items-center items-start mt-[57px] items md:flex-row flex-col gap-[30px] md:gap-0">
                            <img src="media/allow/item-01.jpg" alt="item-01" />
                            <img src="media/allow/item-02.jpg" alt="item-02" />
                        </div>
                    </div>
                    <div className="xl:w-[50%] w-full px-[15px]">
                        <div className="w-full flex flex-col numbers">
                            <div className="flex justify-start items-center number">
                                <div className="number-item">
                                    <span>01</span>
                                </div>
                                <h4>High-quality rendered and equally affordable artwork</h4>
                            </div>
                            <div className="flex justify-start items-center number">
                                <div className="number-item">
                                    <span>02</span>
                                </div>
                                <h4>Learning, researching, and studying the crypto market daily</h4>
                            </div>
                            <div className="flex justify-start items-center number">
                                <div className="number-item">
                                    <span>03</span>
                                </div>
                                <h4>The immersive world of NFTs with all its collectors & projects</h4>
                            </div>
                            <div className="flex justify-start items-center number">
                                <div className="number-item">
                                    <span>04</span>
                                </div>
                                <h4>Slow, steady, and natural community growth within the Lazy Lounge Club</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}