import React from 'react';

export const Banner = () => {
    return (
        <div className='banner w-full'>
            <div
                className='container mx-auto flex justify-between items-end xl:max-w-[1440px]  xl:px-[95px] gap-[30px] '
            >
                <div className="flex flex-col justify-top items-start w-full xl:w-[50%] h-full">
                    <h2 className="title">
                        base-layer blockchain <br /><span>Scalable, secure, efficient</span>
                    </h2>
                    <p className='text-white'>
                        Uaxnetwork is a base-layer blockchain built with
                        scalability, security, and efficiency at its core.</p>
                    <div className='flex mb-[12px]'>
                        <a href="#" className='btn btn-large'>
                            <span className='text-[16px] line-height-[20px]  '>
                                Uaxnetwork Docs
                            </span>
                        </a>
                    </div>
                    <div className='flex justify-between items-center gap-[10px] mt-[80px] content'>
                        <ul className='flex justify-between items-center gap-[70px]'>
                            <li className='flex flex-col items-center '>
                                <img src="https://images.uaxdlts.com/uax-landing/assets/images/icon/stake.png" alt="no stake" width={34} />
                                <h5 className='text-white'>Stake</h5>
                            </li>
                            <li className='flex flex-col items-center'>
                                <img src="https://images.uaxdlts.com/uax-landing/assets/images/icon/build.png" alt="no build" width={34} />
                                <h5 className='text-white'>Build</h5>
                            </ li>
                            <li className='flex flex-col items-center'>
                                <img src="https://images.uaxdlts.com/uax-landing/assets/images/icon/utilize.png" alt="no utilize" width={34} />
                                <h5 className='text-white'>Utilize</h5>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='xl:w-[50%] pl-[104px] flex justify-end items-end h-full'>
                    <img src="media/uax favicon.png" alt="banner" width={"80%"} />
                </div>
            </div>
        </div>
    );
}