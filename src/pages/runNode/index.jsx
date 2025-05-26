import React from 'react';

import { Heading } from '../../components/layout/heading';
import { Questions } from '../../components/layout/questions';
import { WhyRun } from '../../components/layout/whyRun';

export const RunNode = () => {
    return (
        <>
            <Heading type={5} />
            <Questions state={'conceptNode'} />
            <Questions state={'runNode'} />
            <Questions state={'clickNode'} />
            <WhyRun />
            <Questions state={'typeNode'} />
            <Questions state={'helpNode'} />
            <div className='container mx-auto xl:px-[80px] xl:py-[32px] lg:px-[40px] lg:py-[24px] px-[16px] py-[12px]'>
                <div className='xl:px-[56px] px-[16px] flex flex-wrap justify-between'>
                    <p className='leading-tight font-extralight text-[15px]'>
                        <i>DISCLAIMER: The information provided herein is for informational purposes only and does not constitute financial advice.
                            We do not recommend that any crypto assets be bought, sold, swapped, staked, or held by you. We make no warranties or representations about the third parties linked in this page, the information contained on their websites, the assets available through them, or the suitability, privacy or security of their products or services.
                            You acknowledge sole responsibility for and assume all risk arising from your use of third-party services, including risk of loss for assets.
                        </i>
                    </p>
                </div>
            </div>
        </>
    )
}