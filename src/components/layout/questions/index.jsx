import React from 'react';

import { questions } from '../../questions';

import './style.css';

export const Questions = ({ state }) => {

    return (
        <div className='container mx-auto xl:px-[80px] xl:py-[32px] lg:px-[40px] lg:py-[24px] px-[16px] py-[12px]'>
            <div className='flex flex-wrap justify-between'>
                <div className='w-full px-4 questions'>
                    {
                        state === 'helpNode' ?
                            <a href="#" className='text-[#CE1FEA] mb-5'><i className='font-extralight'>Ask the Algorand community</i></a> :
                            <></>
                    }
                    {
                        !!questions[state].ques ? <h1 className='lg:text-[28x] text-[22px] font-normal'>
                            {questions[state]['ques']}
                        </h1> :
                            <></>
                    }
                    {
                        !!questions[state].ans ?
                            questions[state].ans :
                            <></>}
                    {
                        !!questions[state].action ?
                            <a href="#" className='mt-8 btn w-max'>
                                <span className='flex items-center font-light'>{questions[state].action.content}
                                    <i className='fas fa-arrow-right icons'></i>
                                </span>
                            </a> :
                            <></>
                    }
                </div>
            </div>
        </div >
    )
}