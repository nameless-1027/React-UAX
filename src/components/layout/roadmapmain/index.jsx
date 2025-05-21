import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

export const RoadmapMail = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            once: false      // only animate once
        });
    }, []);

    return (
        <div className='w-full road-map'>
            <div className="container mx-auto px-[12px] max-w-[1440px]">
                <div className='w-full flex flex-col'>
                    <div className="block text-center">
                        <h3 className="heading text-[#CE1FEA]">Road map</h3>
                        <p className="my-[16px] px-[350px] text-[17px]">The use of crypto-currencies has become more widespread, and they are
                            now increasingly accepted as a legitimate for transactions.</p>
                    </div>
                </div>

                <div className="road-map-main">
                    <div className="box-roadmap left active aos-init aos-animate" data-aos="fade-right">
                        <p className="time">April 15, 2019</p>
                        <h5 className="title">Concept</h5>
                        <ul className="list">
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">Concept Generation</p>
                            </li>
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">Team Assemble</p>
                            </li>
                        </ul>
                    </div>
                    <div className="box-roadmap right active aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                        <p className="time">April 20, 2019</p>
                        <h5 className="title">Research</h5>
                        <ul className="list">
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">Proving the concept can work</p>
                            </li>
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">White paper conpletion</p>
                            </li>
                        </ul>
                    </div>
                    <div className="box-roadmap left aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                        <p className="time">April 15, 2019</p>
                        <h5 className="title">Concept</h5>
                        <ul className="list">
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">Concept Generation</p>
                            </li>
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">Team Assemble</p>
                            </li>
                        </ul>
                    </div>
                    <div className="box-roadmap right aos-init" data-aos="fade-left" data-aos-duration="1000">
                        <p className="time">April 20, 2019</p>
                        <h5 className="title">Research</h5>
                        <ul className="list">
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">Proving the concept can work</p>
                            </li>
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">White paper conpletion</p>
                            </li>
                        </ul>
                    </div>
                    <div className="box-roadmap left aos-init" data-aos="fade-right" data-aos-duration="1000">
                        <p className="time">April 15, 2019</p>
                        <h5 className="title">Concept</h5>
                        <ul className="list">
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">Concept Generation</p>
                            </li>
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">Team Assemble</p>
                            </li>
                        </ul>
                    </div>
                    <div className="box-roadmap right aos-init" data-aos="fade-left" data-aos-duration="1000">
                        <p className="time">April 20, 2019</p>
                        <h5 className="title">Research</h5>
                        <ul className="list">
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">Proving the concept can work</p>
                            </li>
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">White paper conpletion</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}