import React from 'react';
import { datas } from '../../data';

export const SectionTitle2 = ({ type }) => {
    return (
        <div className='section-title2 flex flex-col items-center'>
            {
                type !== 1 &&
                (type === 4 ?
                    <img
                        src="media/lines/line.png"
                        alt="Line"
                        className='px-[15px] h-[6px] mb-[20px]'
                    /> :
                    (type === 2 || type === 3) ?
                        <img
                            src="media/lines/dot.png"
                            alt="dot"
                            className='w-[169px] h-[8px]'
                        /> :
                        <img
                            src="media/lines/build.svg"
                            alt="build"
                        />)
            }
            {
                datas.sectionTitle2[type - 1].title
            }
            {
                datas.sectionTitle2[type - 1].content
            }
        </div>
    )
}
