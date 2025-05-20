import React from 'react';
import { SectionTitle1 } from '../../common/sectionTitle1';


export const Globe = () => {
    return (
        <div className='flex flex-col justify-between items-center container mx-auto px-[130px] py-[40px]'>
            <div className='w-full flex justify-between items-center'>
                <SectionTitle1 type={1} />
            </div>
            <div className='w-full flex justify-between items-center pt-[80px] globe'>
                <div className='flex items-center px-[15px] w-[30%]'>
                    <img src="media/globe/globe.png" alt="globe" width={"260px"} />
                </div>
                <div className='items-end px-[15px] gap-[24px] w-[70%] boxes'>
                    <div className='w-[48.5%] box'>
                        <div className="box-title">
                            <a href="#" className='flex items-center'>
                                <img
                                    src="https://images.uaxdlts.com/uax-landing/assets/images/icon/latest%20blocks.svg"
                                    alt="latest blocks"
                                    width={"20px"}
                                    height={"20px"}
                                    className='mr-[10px]'
                                />
                                Latest Blocks
                            </a>
                        </div>
                        <div className="box-content">
                            <span>3357</span>
                        </div>
                    </div>
                    <div className='w-[48.5%] box'>
                        <div className="box-title">
                            <a href="#" className='flex items-center'>
                                <img
                                    src="https://images.uaxdlts.com/uax-landing/assets/images/icon/total%20nodes.svg"
                                    alt="Total Nodes"
                                    width={"20px"}
                                    height={"20px"}
                                    className='mr-[10px]'
                                />
                                Total Nodes
                            </a>
                        </div>
                        <div className="box-content">
                            <span>3</span>
                        </div>
                    </div>
                    <div className='w-[48.5%] box'>
                        <div className="box-title">
                            <a href="#" className='flex items-center'>
                                <img
                                    src="https://images.uaxdlts.com/uax-landing/assets/images/icon/avg%20fees.svg"
                                    alt="Avg Fees"
                                    width={"20px"}
                                    height={"20px"}
                                    className='mr-[10px]'
                                />
                                Avg Fees
                            </a>
                        </div>
                        <div className="box-content">
                            <span>212 Bandwidth</span>
                        </div>
                    </div>
                    <div className='w-[48.5%] box'>
                        <div className="box-title">
                            <a href="#" className='flex items-center'>
                                <img
                                    src="https://images.uaxdlts.com/uax-landing/assets/images/icon/tps.svg"
                                    alt="Txn/Second"
                                    width={"20px"}
                                    height={"20px"}
                                    className='mr-[10px]'
                                />
                                Txn/Second
                            </a>
                        </div>
                        <div className="box-content">
                            <span>2000+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}