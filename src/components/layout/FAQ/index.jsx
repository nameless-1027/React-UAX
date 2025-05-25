import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { SectionTitle2 } from '../../common/sectionTitle2';

import { datas } from '../../data';

import './style.css';

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleContent = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
        console.log(activeIndex);
    };

    return (
        <div className='flex flex-col container mx-auto lg:px-[130px] px-[32px] py-[40px]'>
            <SectionTitle2 type={2} image={'dot'} />
            <div className="max-w-[926px] mt-[40px] w-full mx-auto content-inner flat-accordion">
                {
                    datas.faq.map((_itm, _idx) => (
                        <div
                            className="flat-toggle"
                            id={activeIndex === _idx ? 'active' : ''}
                            onClick={() => toggleContent(_idx)}
                            key={_idx}
                        >
                            <h5 className="toggle-title">{_itm.title}</h5>
                            <AnimatePresence>
                                {activeIndex === _idx && <motion.p
                                    className='toggle-content'
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {_itm.content}
                                </motion.p>}
                            </AnimatePresence>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}