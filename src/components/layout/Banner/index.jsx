import React from 'react';

export const Banner = () => {
    return (
        <div className='banner w-full'>
            <div
                className='container mx-auto flex justify-between items-start xl:max-w-[1440px] xl:px-[127px] gap-[30px] '
            >
                <div className="flex flex-col justify-start md:items-start items-center w-full xl:w-[50%] h-full">
                    <h2 className="title text-center md:text-start">
                        base-layer blockchain <br /><span>Scalable, secure, efficient</span>
                    </h2>
                    <p className='text-white text-center md:text-start sm:max-w-none max-w-[400px]'>
                        Uaxnetwork is a base-layer blockchain built with
                        scalability, security, and efficiency at its core.</p>
                    <div className='md:flex hidden mb-[12px]'>
                        <a href="#" className='btn btn-large'>
                            <span className='text-[16px] line-height-[20px]  '>
                                Uaxnetwork Docs
                            </span>
                        </a>
                    </div>
                    <div className='md:hidden flex flex-col w-full md:flex-row gap-[12px] mb-[12px]'>
                        <a href="#" className='btn btn-large btn-mobile'>
                            <span className='text-[16px] line-height-[20px]  '>
                                Wallet
                            </span>
                        </a>
                        <a href="#" className='btn btn-large btn-mobile btn-ghost'>
                            <span className='text-[16px] line-height-[20px]  '>
                                START Building
                            </span>
                        </a>
                    </div>
                    <div className='md:flex hidden justify-between items-center gap-[10px] mt-[80px] content'>
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
                <div className='w-[50%] md:flex hidden pl-[104px] pt-[40px] justify-end items-end h-full'>
                    <img src="media/uax favicon.png" alt="banner" width={"80%"} />
                </div>
            </div>
        </div>
    );
}