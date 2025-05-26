import React from 'react';

import { SectionTitle1 } from '../../common/sectionTitle1';

import { datas } from '../../data';
import { Questions } from '../questions'

import './style.css';

export const Involve = ({ state }) => {
    return (
        datas[state ? state : 'involve'].map((_itm, _idx) => (
            <div className='w-full'>
                <div className='w-full'>
                    <div className='container mx-auto xl:px-[80px] xl:pt-[45px] lg:px-[40px] px-[16px] pt-[24px]'>
                        <div className='flex flex-wrap justify-between'>
                            <div className='w-full'>
                                <div className="head">
                                    <SectionTitle1 type={state ? 9 : 6 + _idx} />
                                </div>
                                {
                                    _itm.content ?
                                        <p className='px-4 lg:mt-12 mt-7'>
                                            {_itm.content}
                                        </p> :
                                        <></>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {
                    _itm.list.map((_itm, _idx) => (
                        <Questions state={_itm} key={_idx} />
                    ))
                }
            </div>
        ))
    )
}