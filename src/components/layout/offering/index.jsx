import React, { useContext } from 'react';
import { SectionTitle1 } from '../../common/sectionTitle1';
import { ThemeContext } from '../../../context/themeContext';

import { datas } from '../../data';

import './style.css';

export const Offering = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className='flex flex-col justify-between items-center container mx-auto xl:px-[130px] px-[16px] py-[40px]'>
            <div className='w-full flex flex-wrap justify-between items-center'>
                <SectionTitle1 type={2} />
            </div>
            <div className='w-full flex justify-between items-center sm:pt-[40px] pt-[20px] offering flex-wrap'>
                {datas.offering.map((data, idx) => <div key={idx} className='flex lg:w-[50%] w-full px-[10px]'>
                    <div className="document-box">
                        <a href="#" className="title">
                            <img
                                src={`https://images.uaxdlts.com/uax-landing/assets/images/icon/uax${data.type}.png`}
                                style={{ width: "20px", marginRight: "10px" }}
                            />
                            {data.title}
                        </a>
                        <div className="pt-[10px] content">
                            <div className="flex flex-col justify-start content-detail">
                                <div>
                                    <p className="text-start">
                                        {data.content}
                                    </p>
                                </div>
                                {/* <div className="group-button">
                                    <a href="#" className="btn">
                                        Explore
                                        <i className="fa fa-long-arrow-right ml-[4px]" aria-hidden="true">
                                        </i>
                                    </a>
                                </div> */}
                                <a href="#" className="text-[#b31bd8] font-[500] text-[18px]">Read more <i className="fa fa-long-arrow-right text-[#b31bd8]"></i></a>
                            </div>
                            <div className="content-image">
                                <img
                                    src={`/media/offering/uax-${data.type}-${theme}.png`}
                                    alt={`No ${data.title}`}
                                    width={"100%"}
                                    height={"130px"}
                                />
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}