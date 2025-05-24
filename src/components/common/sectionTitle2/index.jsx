import React from 'react';
import { datas } from '../../data';

export const SectionTitle2 = ({ type, image }) => {
    return (
        <div className='section-title2 flex flex-col items-center'>
            {
                image ? <img
                    src={`media/lines/${image}.${image === 'build' ? 'svg' : 'png'}`}
                    alt={image}
                    className={
                        image === 'line' ?
                            'px-[15px] h-[8px] mb-[20px]' :
                            (
                                image === 'dot' ?
                                    'w-[169px] h-[8px]' :
                                    ''
                            )
                    }
                /> : <></>
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
